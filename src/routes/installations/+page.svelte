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

  <h2>Featured Projects</h2>
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

  <button>Get a quote</button>
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

  .card {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    padding: 1rem;
    margin-top: 2rem;
  }

  .card-content {
    padding-left: 1rem;
  }

  .card img {
    max-width: 100px; /* Adjust according to image and design preference */
  }

  .button {
    background-color: #007bff;
    color: white;
    padding: 0.5rem 1rem;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 1rem;
    display: inline-block;
  }

  .button:hover {
    background-color: #0056b3;
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
  }

  .featured {
    display: flex;
    flex-direction: row;
  }

  .article-img {
    object-fit: cover;
    flex: 0 0 auto;
    width: 150px;
    margin-right: 1rem;
  }
</style>
