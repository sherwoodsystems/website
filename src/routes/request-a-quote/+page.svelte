<script>
	let eventType = '';
</script>

<div class="container">
	<article>
		<h1>Get a quote</h1>
		<fieldset>
			<label>
				<p>Event production or installations?</p>
				<select
					bind:value={eventType}
					name="form-select"
					aria-label="Do you need production or installations?"
					required
				>
					<option selected disabled value="">
						Would you like a quote for an event or a permanent installation?
					</option>
					<option value="production">Event Production</option>
					<option value="installations">Installations</option>
				</select>
			</label>
		</fieldset>

		{#if eventType == 'production'}
			<form>
				<fieldset>
					<label for="name"
						>Name
						<input type="text" id="name" name="name" />
					</label>
					<label for="email"
						>Email
						<input type="email" id="email" name="email" />
					</label>
				</fieldset>

				<h3>Event Information</h3>
				<label for="event-name"
					>Event Name
					<input type="text" id="event-name" name="event-name" />
				</label>
				<label for="venue"
					>Venue
					<input type="text" id="venue" name="venue" />
				</label>

				<fieldset role="group">
					<label for="event-start-date"
						>Event Start Date
						<input type="date" id="event-start-date" name="event-date" />
					</label>
					<label for="start-time"
						>Start Time
						<input type="time" id="start-time" name="event-time" />
					</label>
				</fieldset>

				<h3>Services Required</h3>
				<label>
					<input name="lighting" type="checkbox" />
					Lighting
				</label>
				<label>
					<input name="sound" type="checkbox" />
					Sound System
				</label>
				<label>
					<input name="video" type="checkbox" />
					Projection or Live Video
				</label>
				<label>
					<input name="help" type="checkbox" />
					I need help designing a plan for the event.
				</label>

				<label for="description"
					><h3>Description of Event</h3>
					<textarea id="description" name="event-description" class="description"></textarea>
				</label>

				<div class="agree-box">
					<label>
						<div id="finalAgree">
							<span></span>
							<input id="terms" type="checkbox" required aria-required="true" />
							<div>
								I recognize that Sherwood no longer offers equipment rentals. I am seeking event
								production with delivery and setup.
							</div>
						</div>
					</label>
				</div>

				<button type="submit">Submit Request</button>
			</form>
		{:else if eventType == 'installations'}
			<form>
				<h2>Request an Installation</h2>
				<formgroup>
					<label
						>Name
						<input type="text" name="name" />
					</label>
					<label
						>Email
						<input type="text" name="email" />
					</label>
					<label
						>Subject
						<input type="text" name="email" />
					</label>
				</formgroup>

				<label for="description"
					>Message
					<textarea id="description" name="event-description" class="description"></textarea>
				</label>
				<input type="submit" />
			</form>
		{:else}{/if}
	</article>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		width: 100%;
		align-items: center;
		padding: 1rem;
	}

	article {
		max-width: 50dvw;
		width: 100%; /* Ensure full width within the constraints of max-width */
	}

	.row,
	.agree-box {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		align-items: center; /* Aligns items vertically centered within their flex container */
	}

	.row {
		gap: 5rem;
	}

	.description {
		min-height: 200px;
		resize: vertical;
		width: 100%; /* Make textarea full width of its parent */
	}

	.agree-box label {
		display: flex;
		flex-direction: row; /* Ensure checkbox and text are in one line */
		gap: 0.5rem;
		flex-wrap: wrap; /* Allow for wrapping text */
	}

	.agree-box label input[type='checkbox'] {
		min-width: 1rem; /* Give checkbox a min-width */
	}

	.agree-box label span {
		flex: 1; /* Text takes the remaining space */
	}

	button[type='submit'] {
		margin-top: 1rem; /* Provide some spacing above the submit button */
	}

	#finalAgree {
		display: grid;
		grid-template-columns: 0.4fr 0.7fr 14fr;
		gap: 0.5rem;
		align-items: center;
	}

	/* Media queries for responsive design */
	@media (max-width: 575px) {
		article {
			max-width: 100%; /* Full width on extra small screens */
		}
		.row,
		.agree-box {
			flex-direction: column; /* Stack elements vertically on narrow screens */
		}
	}
</style>
