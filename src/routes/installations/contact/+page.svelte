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
			</formgroup>

            <h3>Event Information</h3>
            <label
					>Event Name
					<input type="text" name="name" />
				</label>

			<div class="row">
				<label
					>Date of Event
					<input type="date" name="event-date" />
				</label>
				<label
					>Start Time
					<input type="time" name="event-time" />
				</label>
			</div>
			<h3>Services Required</h3>
				<p>
					<label>
                        <input name="lighting" type="checkbox" />
                                        Lighting
                    </label>
				</p>
                <p>
					<label>
                        <input name="description" type="checkbox" />
                        Sound (microphones, music playback)
                    </label>
				</p>
                <p>
					<label>
                        <input name="description" type="checkbox" />
                        Video (powerpoint, live camera feed, recording)
                    </label>
				</p>
                <p>
					<label>
                        <input name="description" type="checkbox" />
                        I'm not sure what I need yet, just getting the conversation started.
                    </label>
				</p>
            <label
				>Description of Event
				<input name="description" class="description" type="text"/>
			</label>
            <label>
                <p class="agree-box">
                    <input name="description" type="checkbox" required/>
                    I recognize that Sherwood no longer offers equipment rentals. I am seeking event production with delivery and setup.
				</p>
            </label>
            <input type=submit />
		</form>
	</article>
</div>

<style>
    .container{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;

    }
    article{
        max-width: 50dvw;
    }
	.row {
		display: flex;
		flex-direction: row;
		gap: 5rem;
		width: 100%;
	}
    .description{
        min-height: 200px;
        resize: vertical;
    }
    .agree-box{
        font-size: smaller;
    }
</style>
