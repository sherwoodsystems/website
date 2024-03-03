<script>
  import toast, { Toaster } from "svelte-french-toast";
  import { enhance } from "$app/forms";

  import TabLinks from "$lib/buttons/TabLinks.svelte";

  let { form } = $props();
  let formSuccess = $state(false);

  function submitAgain() {
    formSuccess = false;
  }

  $effect(() => {
    if (form) {
      if (form.success) {
        console.log("Form received");
        formSuccess = true;
        toast.success("Form submitted successfully");
      }
    }
  });
</script>

<div class="container">
  <Toaster />
  <TabLinks activeTab="production" />
  {#if formSuccess}
    <h1>Thanks!</h1>
    <p>Your request has been received, we will be in touch shortly!</p>
    <button on:click={submitAgain}>Submit another request</button>
  {:else}
    <article>
      <h1>Request Event Production</h1>

      <form method="POST" use:enhance>
        <fieldset>
          <label for="name"
            >Name
            <input
              type="text"
              id="name"
              name="name"
              required
              aria-required="true"
            />
          </label>
          <label for="email"
            >Email
            <input
              type="email"
              id="email"
              name="email"
              required
              aria-required="true"
            />
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
            <input
              type="date"
              id="event-start-date"
              name="event-date"
              required
              aria-required="true"
            />
          </label>
          <label for="start-time"
            >Start Time
            <input
              type="time"
              id="start-time"
              name="event-time"
              required
              aria-required="true"
            />
          </label>
        </fieldset>

        <h3>What services do you require?</h3>
        <label>
          <input name="staging" type="checkbox" />
          Stage and Drape
        </label>
        <label>
          <input name="lighting" type="checkbox" />
          Lighting
        </label>
        <label>
          <input name="sound" type="checkbox" />
          Audio
        </label>
        <label>
          <input name="video" type="checkbox" />
          Projection and/or Live Video
        </label>
        <label>
          <input name="help" type="checkbox" />
          I'm not sure
        </label>

        <label for="description"
          ><h3>Description of Event</h3>
          <textarea
            id="description"
            name="event-description"
            class="description"
          ></textarea>
        </label>

        <div class="agree-box">
          <label>
            <div id="finalAgree">
              <span></span>
              <input id="terms" type="checkbox" required aria-required="true" />
              <div>
                I recognize that Sherwood no longer offers equipment rentals. I
                am seeking event production with delivery and setup.
              </div>
            </div>
          </label>
        </div>
        <div class="cf-turnstile" data-sitekey="0x4AAAAAAAS8_r-Zqy8h2Exa"></div>

        <button type="submit">Submit Request</button>
      </form>
    </article>
  {/if}
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

  .agree-box label input[type="checkbox"] {
    min-width: 1rem; /* Give checkbox a min-width */
  }

  .agree-box label span {
    flex: 1; /* Text takes the remaining space */
  }

  button[type="submit"] {
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
