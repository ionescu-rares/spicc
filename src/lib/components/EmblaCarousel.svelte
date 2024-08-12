<script>
  import { onMount } from "svelte";
  import EmblaCarousel from "embla-carousel";
  import Autoplay from "embla-carousel-autoplay";

  export let embla;
  let viewport;
  let autoplayInstance;
  export let isRounded = true;
  export let autoplay = true;
  // Embla options for partial visibility
  export let options = {
    loop: false,
    speed: 10,
    align: "center",
    containScroll: "trimSnaps",
    dragFree: true, // Allows dragging without snapping to each slide
  };

  const autoplayOptions = {
    delay: 4000,
    stopOnInteraction: true,
  };

  onMount(() => {
    autoplayInstance = Autoplay(autoplayOptions);
    embla = EmblaCarousel(viewport, options, autoplay && [autoplayInstance]);

    return () => {
      embla.destroy();
    };
  });

  export function stopAutoplay() {
    autoplayInstance?.stop();
  }
</script>

<div class="embla" class:rounded-border={isRounded}>
  <div class="embla__viewport" bind:this={viewport}>
    <div class="embla__container">
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

  .rounded-border {
    border-radius: 6px;
  }

  .embla__container {
    display: flex;
    width: "100%";
    height: 100%;
  }
</style>
