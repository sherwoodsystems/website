<script>
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
      }
    }
  });
</script>

<div class="container">
  <TabLinks activeTab="installations" />
  {#if formSuccess}
    <article>
      <h1>Thanks!</h1>
      <p>Your request has been received, we will be in touch shortly!</p>
      <button on:click={submitAgain}>Submit another request</button>
    </article>
  {:else}
    <article>
      <iframe
        width="1000px"
        height="1000px"
        src="https://forms.office.com/Pages/ResponsePage.aspx?id=1hrLd-iLI0uIYc9rJNhg_dQwXW51tc1Cmbw1H1xhRzhUMEo4SVlYNERYUVBFM1ozSTdCMVYwVEk3RC4u&embed=true"
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
    width: 100%;
    max-width: 1000px;
  }

  h3 {
    padding-top: 0.5rem;
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
  @media (max-width: 750px) {
    article {
      max-width: 100%; /* Full width on extra small screens */
    }
    .row,
    .agree-box {
      flex-direction: column; /* Stack elements vertically on narrow screens */
    }
  }
</style>
