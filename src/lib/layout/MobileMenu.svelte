<script>
  import Hamburger from "$lib/buttons/Hamburger.svelte";
  import "@picocss/pico/css/pico.min.css";
  export let mobileMenuOpen = false; // A Svelte reactive variable to control menu state

  function goToForm() {
    window.location.href = "/request-a-quote";
  }
</script>

<header class="container">
  <nav>
    <div class="row">
      <div class="logo-container">
        <a href="/"><img src="/logo.png" class="logo" alt="Sherwood Logo" /></a>
      </div>
      <div class="hamburger-container">
        <Hamburger bind:isOpen={mobileMenuOpen} />
      </div>
    </div>
    <div class="menu-items">
      <ul class="mobile-menu {mobileMenuOpen ? 'open' : ''}">
        <li><a href="/production">Event Production</a></li>
        <li><a href="/installations">Installations</a></li>
        <button id="quote-button" on:click={goToForm}>Get A Quote</button>
      </ul>
    </div>
  </nav>
</header>

<style>
  nav {
    display: flex;
    flex-direction: column;
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    width: 100px;
    height: auto;
  }

  .hamburger-container {
    cursor: pointer;
  }

  .menu-items {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .mobile-menu {
    display: none;
    font-size: 1.5rem;
    flex-direction: column;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.5s ease-in-out;
  }

  .mobile-menu.open {
    display: flex;
    max-height: 300px; /* Adjust based on the content height */
  }

  .logo-container {
    float: left;
  }

  .hamburger-container {
    float: right;
  }

  li a {
    color: #f2682a;
    font-weight: 500;
    padding: 0 15px; /* Adjust spacing between menu items */
  }

  li a:hover {
    text-decoration: underline;
  }

  #quote-button {
    margin-top: 15px;
    margin-bottom: 30px;
    background: #f2682a;
    border: none;
    cursor: pointer;
  }

  #quote-button:hover {
    background: #f2682a;
    cursor: pointer;
  }

  #quote-button:active {
    transform: scale(0.9); /* Scale button to 95% when active/pressed */
  }
</style>
