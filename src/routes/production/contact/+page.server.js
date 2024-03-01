import { redirect } from '@sveltejs/kit';
import { sql } from '@vercel/postgres';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const formEntries = Object.fromEntries(formData);

		// Prepare the data for insertion
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
			// Redirect to a success page or display a success message
			throw redirect(303, '/success');
		} catch (error) {
			console.error('Database error:', error);
			// Handle the error appropriately
			// For example, redirect to an error page or display an error message
			throw redirect(303, '/error');
		}
	}
};
