

<div class="container">
  <article>
    <h1>Work With Us</h1>
    <p>
      If you'd like to work with us, reach out to us at 
      <a 
        href="mailto:logistics@sherwoodsystems.com?subject=Potential%20Contractor%20-%20Sherwood%20Website"
      >
        logistics@sherwoodsystems.com
      </a> 
      with your resume and tell us a bit about yourself and your experience.
    </p>
  </article>
</div>

<div class="photo-grid">
    {#each Array(10) as _, i}
      <div class="photo-item">
        <img src={`/logistics/Picture${i + 1}.jpg`} alt={`Logistics photo ${i + 1}`} />
      </div>
    {/each}
  </div>

<style>
  .photo-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  .photo-item {
    flex: 0 0 calc(25% - 1rem);
    min-width: 250px;
    max-width: calc(25% - 1rem);
    aspect-ratio: 1;
  }

  .photo-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  @media (max-width: 1024px) {
    .photo-item {
      flex: 0 0 calc(33.333% - 1rem);
      max-width: calc(33.333% - 1rem);
    }
  }

  @media (max-width: 768px) {
    .photo-grid {
      gap: 0.5rem;
      padding: 0.5rem;
    }
    
    .photo-item {
      flex: 0 0 calc(50% - 0.5rem);
      max-width: calc(50% - 0.5rem);
      min-width: 150px;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding: 1rem;
  }

  h1 {
    padding-top: 1rem;
  }

  a {
    color: #f2682a;
    text-decoration: underline;
  }

  a:hover {
    color: #d3531a;
  }
</style>