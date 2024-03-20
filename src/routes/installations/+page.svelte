<script>
  import { goto } from "$app/navigation";
  import HeroSlides from "$lib/layout/HeroSlides.svelte";

  let photos = [
    {
      largeURL: "/installations/eyepool.jpeg",
      thumbnailURL: "",
      width: 0,
      height: 0,
    }, // Add the correct thumbnail URL and dimensions if necessary
  ];

  function getQuote() {
    goto("/installations/contact");
  }
</script>

<!-- <HeroSlides {photos} /> -->
<div class="container">
  <img class="hero" src="/installations/eyepool.jpeg" alt="UW Convocation" />
  <h1>Installations</h1>
  <p>
    Organizations and institutions of all types rely on Sherwood for the
    installation of fully integrated multimedia systems that can be operated by
    anyone. Our audio/visual specialists can design and install custom systems
    for any environment; from corporate conference and meeting rooms, to private
    clubs, restaurants, churches, and city council chambers. With our decades of
    experience in the A/V production and installation realm, you can be sure
    that your custom system will perform every time.
  </p>
  <p>
    Sherwood’s installation technicians are highly proficient at making
    state-of-the-art equipment easy and convenient to use. No matter the size of
    your space or the complexity of your needs, we will guide you through the
    wide range of options to find the one that best suits your room,
    requirements, and budget.
  </p>

  <!-- <h2>Our Services</h2>
	<p>
		Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
		nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
	</p> -->

  <h2>Project Highlights</h2>
  <div id="featured-articles">
    <a
      class="clean"
      href="https://www.himandher.ca/work/station-park-sales-center"
      target="_blank"
    >
      <article class="featured">
        <img
          class="article-img"
          src="/installations/articles/himandher.webp"
          alt="Station Park Sales Center project by Sherwood and Him & Her Incorporated"
        />
        <div class="card-content">
          <h3>
            Station Park Sales Center: Elevating the Condo Sales Experience
          </h3>
          <p>
            Sherwood, in collaboration with Him & Her Incorporated helped to
            create an immersive table top display.
          </p>
        </div>
      </article>
    </a>
    <a
      class="clean"
      href="https://www.christiedigital.com/press-releases/THEMUSEUM-dives-into-new-permanent-immersive-experience/"
      target="_blank"
    >
      <article class="featured">
        <img
          class="article-img"
          src="/installations/articles/themuseum.jpeg"
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

    <a
      class="clean"
      href="https://www.livedesignonline.com/news/danley-sound-labs-moves-knox-presbyterian-church-to-fantastic-intelligibility-and-musicality"
      target="_blank"
    >
      <article class="featured">
        <img
          class="article-img"
          src="/installations/articles/KnoxToronto.jpg"
          alt="A Danley Sound Labs speaker mounted to a wall in a church sanctuary"
        />
        <div class="card-content">
          <h3>Danley Sound Labs Installation at Knox Presbyterian</h3>
          <p>
            Knox Presbyterian Church in Toronto has greatly improved its audio
            clarity with a custom Danley sound reinforcement system installed by
            Sherwood.
          </p>
        </div>
      </article>
    </a>
  </div>

  <h2>Client Testimonials</h2>
  <article>
    <blockquote>
      <p>
        “Sherwood went beyond our expectations when we hired them to design an
        audio system that would help up to 800 people in our church hear with
        perfect volume and clarity. We now have technicians from much larger
        churches visiting our church asking how they can get the same
        outstanding results!”
      </p>
    </blockquote>
    <p>- Father Toby Collins, St Mary's Church, Kitchener ON.</p>
  </article>

  <article>
    <blockquote>
      <p>
        "Sherwood has been excellent to work with. They have successfully
        completed 3 significant AV projects for Knox Church over the course of
        the last year and a half. From overhauling our sanctuary sound system,
        to installing digital displays at our entrances, to equipping our main
        meeting room with AV, we have found Sherwood to be a great team to work
        with. They have consistently been on time and on budget. We hope to have
        a great working relationship with Sherwood for years to come."
      </p>
    </blockquote>
    <p>- Tom Affleck, Knox Presbyterian Church, Toronto ON.</p>
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
    object-position: center;
    width: 100%;
    height: 600px; /* Adjust according to design preference */
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

  #featured-articles {
    display: flex;
    padding: 0.5rem;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    overflow-x: scroll;
  }

  .featured {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;
    width: 600px;
    height: 700px;
  }

  .featured:hover {
    transform: translate(2px, -3px);
  }

  .article-img {
    object-fit: cover;
    flex: 0 0 auto;
    height: 400px;
    margin: 1rem;
  }

  @media (max-width: 768px) {
    #featured-articles {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      overflow-x: scroll;
    }

    .featured {
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: transform 0.3s ease;
      width: 80%;
      margin: 1rem;
      height: auto;
    }
  }
</style>
