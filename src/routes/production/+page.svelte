<script>
  import { goto } from "$app/navigation";
  import { register } from 'swiper/element/bundle';
  import { onMount } from 'svelte';
  
  // Register Swiper web components
  register();

  function getQuote() {
    goto("/production/contact");
  }

  onMount(() => {
    // Initialize Swiper elements with configuration
    const swiperEls = document.querySelectorAll('swiper-container');
    swiperEls.forEach(swiperEl => {
      Object.assign(swiperEl, {
        slidesPerView: 2,
        breakpoints: {
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            enabled: false, // Disable swiper on desktop
          }
        },
        injectStylesUrls: ['node_modules/swiper/swiper-bundle.min.css']
      });
      swiperEl.initialize();
    });
  });
</script>

<div class="container">
  <img class="hero" src="/UWConvocation.jpeg" alt="UW Convocation" />
  <h1>Event Production</h1>
  <p>
    At Sherwood, we provide comprehensive event production solutions.
    Specializing in audio, lighting, video, staging, and rigging, our team
    ensures that we bring your vision to life seamlessly.
  </p>

  <h2>Conferences and Corporate AV</h2>
  <p>
    In the realm of event production, Sherwood stands as a beacon of
    versatility, adeptly supporting a spectrum of conferences and corporate
    gatherings. From the intricacies of small-scale boardroom assemblies to the
    grandeur of large-scale industry symposiums, we have the resources to suit
    the unique essence of each event.
  </p>
  
  <swiper-container init="false">
    <swiper-slide>
      <img src="/production/corporate/1.jpg" class="smallImg" />
    </swiper-slide>
    <swiper-slide>
      <img src="/production/corporate/2.jpg" class="smallImg" />
    </swiper-slide>
    <swiper-slide>
      <img src="/production/corporate/3.jpg" class="smallImg" />
    </swiper-slide>
    <div class="swiper-pagination" style="padding-top: 1rem;"></div>
  </swiper-container>
  

  <h4>Virtual Events</h4>
  <p>
    We pride ourselves on seamlessly transitioning into the digital realm to
    support virtual and streaming events. With expertise honed through years of
    live event coordination, we bring the same level of professionalism and
    creativity to the online space. We have the infrastructure to support
    virtual conferences, hybrid meetings, webinars, and more. We offer
    comprehensive solutions tailored to our clients' needs, ensuring smooth
    execution and engaging experiences for attendees worldwide.
  </p>

  <h2>Live Performances</h2>
  <p>
    With extensive experience in live event production, we understand the unique
    dynamics of live performances. We support a diverse array of live
    performances, catering to a wide range of artistic expressions. From
    electrifying music festivals that pulsate with energy to captivating
    theatrical productions that transport audiences to other worlds, we are
    dedicated to bringing visions to life on stage.
  </p>
  
  <swiper-container init="false">
    <swiper-slide>
      <img src="/production/live/1.jpg" class="smallLiveImg" />
    </swiper-slide>
    <swiper-slide>
      <img src="/production/live/2.jpg" class="smallLiveImg" />
    </swiper-slide>
    <swiper-slide>
      <img src="/production/live/3.jpg" class="smallLiveImg" />
    </swiper-slide>
    <swiper-slide>
      <img src="/production/live/4.jpg" class="smallLiveImg" />
    </swiper-slide>
  </swiper-container>

  <div id="button-feature" style="display:flex;flex-direction: column;align-items: center;">
    <button on:click={getQuote}>Get a Quote</button>
  </div>
</div>

<style>
  .hero {
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 600px;
  }

  h1 {
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

  #imageBanner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1rem;
    width: 100%;
    height: auto;
    flex-wrap: wrap;
    gap: 1rem;
  }

  #liveImageBanner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1rem;
    width: 100%;
    height: auto;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .smallImg, .smallLiveImg {
    object-fit: cover;
    width: 100%;
    height: 250px;
  }

  @media (min-width: 768px) {
    swiper-container {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: space-between;
    }

    swiper-slide {
      flex: 0 0 calc(33.333% - 1rem);
    }
  }
</style>
