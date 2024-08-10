<script>
  import { onMount } from "svelte";
  import EmblaCarousel from "embla-carousel";
  import Chevron from "./chevron.svelte";

  export let embla;
  let viewport;
  export let current;
  // Embla options for partial visibility
  export let options = {
    loop: false,
    speed: 10,
    align: "center",
    containScroll: "trimSnaps",
    dragFree: true, // Allows dragging without snapping to each slide
  };

  onMount(() => {
    embla = EmblaCarousel(viewport, options);

    return () => {
      embla.destroy();
    };
  });
</script>

<div class="embla">
  <div class="embla__viewport" bind:this={viewport}>
    <div class=" embla__container">
      <slot />
    </div>
  </div>
</div>

<style>
  .embla {
    position: relative;
    overflow: hidden;
  }

  .embla__viewport {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .embla__container {
    display: flex;
    width: "100%";
    border-radius: 10px;
    height: 100%;
  }
</style>
