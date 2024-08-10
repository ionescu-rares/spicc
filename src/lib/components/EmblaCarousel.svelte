<script>
  import { onMount } from "svelte";
  import EmblaCarousel from "embla-carousel";
  import Chevron from "./chevron.svelte";

  let embla;
  let viewport;

  // Embla options for partial visibility
  let options = {
    loop: false,
    speed: 10,
    align: "center",
    containScroll: "trimSnaps", // Adjust scrolling behavior to keep the last item visible
    dragFree: true, // Allows dragging without snapping to each slide
  };

  onMount(() => {
    embla = EmblaCarousel(viewport, options);

    return () => {
      embla.destroy();
    };
  });

  // Function to navigate to next slide
  const scrollNext = () => embla && embla.scrollNext();

  // Function to navigate to previous slide
  const scrollPrev = () => embla && embla.scrollPrev();
</script>

<div class="embla">
  <div class="embla__viewport" bind:this={viewport}>
    <div class="embla__container">
      <slot />
    </div>
  </div>

  <div class="flex gap-2 mx-4 mt-2">
    <Chevron onClick={scrollPrev} className="embla__button embla__button--prev">
      {`<`}
    </Chevron>
    <Chevron onClick={scrollNext} className="embla__button embla__button--next">
      {`>`}
    </Chevron>
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
  }

  .embla__container {
    display: flex;
    box-sizing: border-box;
  }
</style>
