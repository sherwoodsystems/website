import { redirect } from '@sveltejs/kit';
import { API_KEY } from '$env/static/private';
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';

// Initialize MailerSend
const mailerSend = new MailerSend({
	apiKey: API_KEY // Make sure to set your API key in your environment variables
});

const sentFrom = new Sender('cameronslipp@sherwoodsystems.com', 'Cam Slipp');
const recipients = [new Recipient('cameronslipp@sherwoodsystems.com', 'Cameron Slipp')];

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData);
		const formEntries = Object.fromEntries(formData);

		// Construct the email content
		const emailContent = Object.entries(formEntries)
			.map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
			.join('');

		const emailParams = new EmailParams()
			.setFrom(sentFrom)
			.setTo(recipients)
			.setReplyTo(sentFrom)
			.setSubject('New Event Production Request')
			.setHtml(emailContent);

		// Send the email
		try {
			await mailerSend.email.send(emailParams);
			// Redirect to a success page or display a success message
			return redirect(303, '/success');
		} catch (error) {
			console.error('Email sending error:', error);
			// Handle the error appropriately
			// For example, redirect to an error page or display an error message
			return redirect(303, '/error');
		}
	}
};
