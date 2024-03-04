<script>
  import { goto } from "$app/navigation";

  function getQuote() {
    goto("/installations/contact");
  }
</script>

<div class="container">
  <img class="hero" src="/KnoxToronto.jpg" alt="UW Convocation" />
  <h1>Installations</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum ligula
    erat, sed iaculis est luctus eu. Nullam finibus molestie arcu. Nam at
    fermentum tellus. Cras purus magna, venenatis ut justo vitae, elementum
    auctor sapien.
  </p>

  <h2>Our Services</h2>
  <p>
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat.
  </p>

  <h2>Featured Projects</h2>
  <a
    class="clean"
    href="https://www.christiedigital.com/press-releases/THEMUSEUM-dives-into-new-permanent-immersive-experience/"
    target="_blank"
  >
    <article class="featured">
      <img
        class="article-img"
        src="/installations/themuseum.webp"
        alt="Multiple Christie Digital projectors mounted to a ceiling"
      />
      <div class="card-content">
        <h3>EYEPOOL: Immersive Gallery Experience</h3>
        <p>
          Read about how Sherwood Systems installed 14 Christie DWU960ST-iS
          Inspire Series laser projectors at THEMUSEUM to create an innovative
          permanent digital immersive experience.
        </p>
      </div>
    </article>
  </a>

  <h2>Client Testimonials</h2>
  <article>
    <blockquote>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam."
      </p>
    </blockquote>
    <p>- Lorem Ipsum</p>
  </article>

  <article>
    <blockquote>
      <p>
        "Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
        ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta."
      </p>
    </blockquote>
    <p>- Dolor Sit Amet</p>
  </article>
  <div
    id="button-feature"
    style="display:flex;flex-direction: column;align-items: center;"
  >
    <button on:click={getQuote}>Get a Quote</button>
  </div>
</div>

<style>
  .hero {
    object-fit: cover;
    object-position: bottom;
    width: 100%;
    height: 300px; /* Adjust according to design preference */
  }

  h1,
  h2 {
    padding-top: 1rem;
  }

  button {
    background-color: #f2682a;
    min-width: 300px;
    color: white;
    padding: 0.5rem 1rem;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 1rem;
    display: inline-block;
    border: none;
  }

  button:hover {
    background-color: #d3531a;
  }

  .clean {
    text-decoration: none;
    color: inherit;
  }

  blockquote {
    font-style: italic;
    overflow: hidden;
    position: relative;
    line-height: 1.45em;
    margin: 20px 0;
  }

  article p {
    display: inline;
    color: inherit;
  }

  .featured {
    display: flex;
    flex-direction: row;
    transition: transform 0.3s ease;
  }

  .featured:hover {
    transform: translate(2px, -3px);
  }

  .article-img {
    object-fit: cover;
    flex: 0 0 auto;
    width: 150px;
    margin-right: 1rem;
  }
</style>
