<script>
  import BackgroundParticles from "./_inc/lib/BackgroundParticles.svelte";
  import TopMenu from "./_inc/lib/TopMenu.svelte";
</script>

<main>
  <TopMenu />
  <div>
    <slot />
    <BackgroundParticles />
  </div>
</main>

<style lang="scss" global>
 

  :global(h1) {
    font-size: 3rem;
    text-align: left;
    margin: 0;
    margin-top: 2rem;
  }

  :global(h2) {
    font-size: 2rem;
    text-align: left;
    margin: 0;
    margin-top: 2rem;
  }


  :global(.content-block) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    padding: 0 10px;
    margin: 0;
    @media (min-width: 768px) {
      width: 70%;
    }
    @media (min-width: 1024px) {
      width: 50%;
    }
  }


  :global(main) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :global(.scrolled-to) {
    margin-top: 100px;
    margin-bottom: 100px;
    animation: all 1s ease-in-out infinite alternate;
    animation: glow 2s ease-in-out infinite alternate;
    transform: scale(1.03);

    > * {
      animation: all 1s ease-in-out infinite alternate;
    }
  }

  :global(.logo-top-right-in-block) {
    max-height: 128px;
    margin-left: auto;
    margin-right: auto;

    position: absolute;
    right:0;
    top:-50px;
  }
</style>
