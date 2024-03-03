import { redirect } from "@sveltejs/kit";
import nodemailer from "nodemailer";
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

    // Prepare the email content with provided field names
    const emailContent = `
      <p><strong>Name:</strong> ${formEntries.name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${formEntries.subject}</p>
      <p><strong>Message:</strong> ${formEntries["event-description"]}</p>
    `;

    try {
      // Send the email
      await transporter.sendMail({
        from: EMAIL_FROM,
        to: emailRecipients.join(","),
        replyTo: email,
        subject: "New Installation Request",
        html: emailContent,
      });

      // Redirect to a success page
      return {
        success: true,
      };
    } catch (error) {
      console.error("Error:", error);
      redirect(303, "/error");
    }
  },
};
