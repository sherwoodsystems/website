<script>
  export let logoSrc = "/logo.png"; // Default logo path, can be overridden by passing a prop

  function goToForm() {
    window.location.href = "/production/contact";
  }
</script>

<nav class="menu-container">
  <ul class="menu">
    <a href="/"><img src={logoSrc} class="logo" alt="Logo" /></a>
  </ul>
  <ul class="menu">
    <li><a href="/production">Event Production</a></li>
    <li><a href="/installations">Installations</a></li>
    <button id="quote-button" on:click={goToForm}>Get A Quote</button>
    <!-- <li><a href="/contact">Contact Us</a></li> -->
  </ul>
</nav>

<style>
  .menu-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .menu {
    display: flex;
    list-style: none;
  }

  .logo {
    width: 100px;
    height: auto;
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
    margin-left: 25px;
    background: #f2682a;
    border: none;
    cursor: pointer;
  }

  #quote-button:hover {
    background: #f2682a;
    cursor: pointer;
  }
</style>
