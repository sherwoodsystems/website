<script>
    export let page;
    export let error;
  
    if (error) {
      console.error(error);
    }
  </script>
  
  {#if page}
    <main>
      <h1>{page.title}</h1>
      {@html page.content}
    </main>
  {:else}
    <p>Page content could not be loaded.</p>
  {/if}
  