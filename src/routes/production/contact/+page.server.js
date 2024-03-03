import { redirect } from "@sveltejs/kit";
import nodemailer from "nodemailer";
import {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  EMAIL_FROM,
  TURNSTILE_SECRET_KEY,
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
    const token = formData.get("cf-turnstile-response"); //

    // Mapping for more semantic field names
    const fieldNames = {
      name: "Name",
      email: "Email",
      "event-name": "Event Name",
      venue: "Venue",
      "event-date": "Event Start Date",
      "event-time": "Start Time",
      "event-description": "Description of Event",
      terms: "Terms Agreed",
    };

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
      ${Object.entries(otherEntries)
        .filter(([key]) => !serviceFields.includes(key)) // Exclude service fields for separate handling
        .map(
          ([key, value]) =>
            `<p><strong>${fieldNames[key] || key}:</strong> ${value}</p>`,
        )
        .join("")}
      <p><strong>Services Required:</strong> ${servicesRequired}</p>
    `;

    try {
      //Cloudflare Verification
      const formBody = new URLSearchParams();
      formBody.append("secret", TURNSTILE_SECRET_KEY);
      formBody.append("response", token);
      // optionally add 'remoteip' and 'idempotency_key' if needed

      const verifyResponse = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          body: formBody,
        },
      );

      const verificationResult = await verifyResponse.json();

      if (!verificationResult.success) {
        // Handle the error, the challenge response is not valid
        console.error(
          "Turnstile verification failed:",
          verificationResult["error-codes"],
        );
        // Redirect to an error page or respond with an error
        return;
      }

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
