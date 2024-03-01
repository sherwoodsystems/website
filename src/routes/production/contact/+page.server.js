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
	secure: false, // true for 465, false for other ports
	auth: {
		user: SMTP_USER,
		pass: SMTP_PASS
	}
});

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const formEntries = Object.fromEntries(formData);

		// Mapping for more semantic field names
		const fieldNames = {
			name: 'Name',
			email: 'Email',
			'event-name': 'Event Name',
			venue: 'Venue',
			'event-date': 'Event Start Date',
			'event-time': 'Start Time',
			lighting: 'Lighting',
			sound: 'Sound System',
			video: 'Projection or Live Video',
			help: 'Help Designing Event Plan',
			'event-description': 'Description of Event',
			terms: 'Terms Agreed'
		};

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

		// Construct the email content with more semantic field names
		const emailContent = Object.entries(formEntries)
			.map(([key, value]) => `<p><strong>${fieldNames[key] || key}:</strong> ${value}</p>`)
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
				replyTo: email, // Set the Reply-To header to the submitter's email
				subject: 'New Event Production Request',
				html: emailContent
			});

			// Redirect to a success page
			redirect(303, '/success');
		} catch (error) {
			console.error('Error:', error);
			// Redirect to an error page
			redirect(303, '/error');
		}
	}
};
