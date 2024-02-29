<div class="container">
	<article>
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
	</article>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		width: 100%;
		align-items: center;
	}
	article {
		max-width: 50dvw;
		width: 100%; /* Ensure full width within the constraints of max-width */
	}
	.row {
		display: flex;
		flex-direction: row;
		gap: 5rem;
		width: 100%;
	}
	.description {
		min-height: 200px;
		resize: vertical;
	}
	.agree-box {
		font-size: smaller;
	}
</style>
