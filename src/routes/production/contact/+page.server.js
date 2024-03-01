import { redirect } from '@sveltejs/kit';
import { sql } from '@vercel/postgres';
import nodemailer from 'nodemailer';
import {
	SMTP_HOST,
	SMTP_PORT,
	SMTP_SECURE,
	SMTP_USER,
	SMTP_PASS,
	EMAIL_TO,
	EMAIL_FROM
} from '$env/static/private';

// Set up your SMTP transporter
const transporter = nodemailer.createTransport({
	host: SMTP_HOST,
	port: SMTP_PORT,
	secure: true, // true for 465, false for other ports
	auth: {
		user: SMTP_USER,
		pass: SMTP_PASS
	}
});

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const formEntries = Object.fromEntries(formData);

		// Prepare the data for insertion and email
		const {
			name,
			email,
			'event-name': eventName,
			venue,
			'event-date': eventStartDate,
			'event-time': startTime,
			lighting,
			sound,
			video,
			help,
			'event-description': eventDescription,
			terms
		} = formEntries;

		// Construct the email content
		const emailContent = Object.entries(formEntries)
			.map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
			.join('');

		// Insert the data into the production_requests table
		try {
			await sql`
                INSERT INTO production_requests (
                    name,
                    email,
                    event_name,
                    venue,
                    event_start_date,
                    start_time,
                    lighting,
                    sound,
                    video,
                    help,
                    event_description,
                    terms_agreed
                ) VALUES (
                    ${name},
                    ${email},
                    ${eventName},
                    ${venue},
                    ${eventStartDate},
                    ${startTime},
                    ${lighting === 'on'},
                    ${sound === 'on'},
                    ${video === 'on'},
                    ${help === 'on'},
                    ${eventDescription},
                    ${terms === 'on'}
                )
            `;

			// Send the email
			await transporter.sendMail({
				from: EMAIL_FROM,
				to: EMAIL_TO,
				subject: 'New Event Production Request',
				html: emailContent
			});

			// Redirect to a success page
			throw redirect(303, '/success');
		} catch (error) {
			console.error('Error:', error);
			// Redirect to an error page
			throw redirect(303, '/error');
		}
	}
};
