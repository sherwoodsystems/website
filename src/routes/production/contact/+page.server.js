import { redirect } from "@sveltejs/kit";
import nodemailer from "nodemailer";

import { estimatePrepDate } from "$lib/scripts/dates.js";

import {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  EMAIL_FROM,
} from "$env/static/private";

// Hardcoded array of recipient email addresses
const emailRecipients = ["cameronslipp@sherwoodsystems.com", "cdslipp@hey.com"];

// Set up your SMTP transporter
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const formEntries = Object.fromEntries(formData);
    let email = formEntries.email;
    let startDate = formEntries.eventDate;
    const prepDate = estimatePrepDate(startDate);
    console.log(
      "Prep Date (excluding weekends and holidays):",
      prepDate.toISOString().split("T")[0],
    );

    // Check if honeypot fields are filled in
    if (
      formEntries["honeypot-checkbox"] === "on" ||
      formEntries["honeypot-text"]
    ) {
      console.error("Honeypot fields were filled in. Possible bot submission.");
      throw redirect(303, "/error"); // Redirect to an error page
    }

    // Service fields
    const serviceFields = ["staging", "lighting", "sound", "video", "help"];

    // Prepare the data for insertion and email
    const { terms, ...otherEntries } = formEntries; // Destructure out 'terms' because it doesn't need special handling

    // Filter and join service-related entries into a comma-separated list
    const servicesRequired = serviceFields
      .filter((field) => otherEntries[field] === "on")
      .map((field) => fieldNames[field] || field)
      .join(", ");

    // Construct the email content with more semantic field names
    const emailContent = `
      <p><strong>Name:</strong> ${formEntries.name}</p>
      <p><strong>Email:</strong> ${formEntries.email}</p>
      <p><strong>Event Name:</strong> ${formEntries["event-name"]}</p>
      <p><strong>Venue:</strong> ${formEntries.venue}</p>
      <p><strong>Prep Date (excluding weekends and holidays):</strong> ${prepDate.toISOString().split("T")[0]}</p>
      <p><strong>Event Start Date:</strong> ${formEntries["event-date"]}</p>
      <p><strong>Start Time:</strong> ${formEntries["event-time"]}</p>
      <p><strong>Description of Event:</strong> ${formEntries["event-description"]}</p>
      <p><strong>Services Required:</strong> ${formEntries.services}</p>
      <p><strong>Terms Agreed:</strong> ${formEntries.terms ? "Yes" : "No"}</p>
      <p><strong>Services Required:</strong> ${servicesRequired}</p>
    `;

    try {
      // Send the email
      await transporter.sendMail({
        from: EMAIL_FROM,
        to: emailRecipients.join(","),
        replyTo: email, // Set the Reply-To header to the submitter's email
        subject: "New Event Production Request",
        html: emailContent,
      });

      // Redirect to a success page
      return {
        success: true,
      };
    } catch (error) {
      console.error("Error:", error);
      // Redirect to an error page
      redirect(303, "/error");
    }
  },
};
