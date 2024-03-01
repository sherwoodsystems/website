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
			<article>
				<iframe
					title="Event Production Form"
					width="1000px"
					height="1000px"
					src="https://forms.office.com/Pages/ResponsePage.aspx?id=1hrLd-iLI0uIYc9rJNhg_UcPwrHrcBlAmxQaKYx0pVFUNTJDODhRQzgxTVJZRVVUWkRJVENTQklNVS4u&embed=true"
					frameborder="0"
					marginwidth="0"
					marginheight="0"
					style="border: none; max-width:100%; max-height:100vh"
					allowfullscreen
					webkitallowfullscreen
					mozallowfullscreen
					msallowfullscreen
				>
				</iframe>
			</article>
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
