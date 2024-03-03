<script>
  export let activeTab = "none";
</script>

<div class="tabs">
  <a href="/production/contact" class:selected={activeTab === "production"}
    >Production</a
  >
  <a
    href="/installations/contact"
    class:selected={activeTab === "installations"}>Installations</a
  >
</div>

<style>
  .row {
    gap: 5rem;
  }

  .tabs {
    display: flex;
    flex-direction: row;
  }

  .tabs a {
    padding: 10px 20px;
    border: none;
    outline: none;
    cursor: pointer;
    background: none;
    border-bottom: 3px solid transparent;
  }

  .tabs a.selected {
    border-color: blue;
  }

  .tabs button:not(.selected):hover {
    background-color: #e5e5e5;
  }
  a {
    padding: 10px 20px;
    border: none;
    outline: none;
    cursor: pointer;
    background: none;
    border-bottom: 3px solid transparent;
    text-decoration: none;
    color: inherit;
  }

  a.selected {
    border-color: blue;
  }

  a:not(.selected):hover {
    background-color: #e5e5e5;
  }
</style>
