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
    const file = formData.get("file"); // The file is associated with the 'file' key
    let email = formData.get("email");

    if (!email || !file) {
      console.error("Missing fields (email or file) in the form submission.");
      throw redirect(303, "/error");
    }

    // Check if honeypot fields are filled in
    if (
      formData.get("honeypot-checkbox") === "on" ||
      formData.get("honeypot-text")
    ) {
      console.error("Honeypot fields were filled in. Possible bot submission.");
      throw redirect(303, "/error"); // Redirect to an error page
    }

    // Prepare the email content with provided field names
    const emailContent = `
      <p><strong>Name:</strong> ${formData.get("name")}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${formData.get("subject")}</p>
      <p><strong>Message:</strong> ${formData.get("event-description")}</p>
    `;

    try {
      const buffer = Buffer.from(await file.arrayBuffer());
      // Send the email
      await transporter.sendMail({
        from: EMAIL_FROM,
        to: emailRecipients.join(","),
        replyTo: email,
        subject: "New Installation Request",
        html: emailContent,
        attachments: [
          // Add attachments array
          {
            filename: file.name, // Set a filename for the attachment
            contentType: "application/pdf",
            content: buffer, // Use buffer content.
            encoding: "base64", // Set encoding
          },
        ],
      });

      // Redirect to a success page
      return {
        success: true,
      };
    } catch (error) {
      console.error("Error:", error);
      throw redirect(303, "/error");
    }
  },
};
