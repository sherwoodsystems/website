<script>
  import TabLinks from "$lib/buttons/TabLinks.svelte";
  let selectedTab = "production";

  let { form } = $props();
</script>

<div class="container">
  <TabLinks />
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

  .tabs {
    display: flex;
  }

  .tabs button {
    padding: 10px 20px;
    border: none;
    outline: none;
    cursor: pointer;
    background: none;
    border-bottom: 3px solid transparent;
  }

  .tabs button.selected {
    border-color: blue;
  }

  .tabs button:not(.selected):hover {
    background-color: #e5e5e5;
  }
</style>
