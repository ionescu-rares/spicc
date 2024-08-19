<script>
  import EmblaCarousel from "$lib/components/EmblaCarousel.svelte";
  import Chevron from "$lib/components/chevron.svelte";
  import { afterUpdate, onMount } from "svelte";
  let embla;
  export let chevronsAlwaysVisible = false;
  let currentSlide = -1;
  let totalSlides = -1;
  afterUpdate(() => {
    if (embla) {
      currentSlide = embla.selectedScrollSnap();
      totalSlides = embla.slideNodes().length;
    }
    embla.on("select", () => {
      currentSlide = embla.selectedScrollSnap();
    });
  });
</script>

<div class="relative w-full">
  <EmblaCarousel bind:embla autoplay={false} isRounded={false}>
    <slot />
  </EmblaCarousel>
  <Chevron
    onClick={() => embla?.scrollPrev()}
    className={`${currentSlide === 0 && "md:lg:xl:hidden"} hidden md:flex bottom-1/2 translate-y-1/2 absolute left-4 ${chevronsAlwaysVisible === false && "xl:hidden"}`}
  >
    {`<`}
  </Chevron>

  <Chevron
    onClick={() => embla?.scrollNext()}
    className={`${currentSlide === totalSlides - 1 && "md:lg:xl:hidden"} absolute bottom-1/2 translate-y-1/2 right-4 ${chevronsAlwaysVisible === false && "xl:hidden"}`}
  >
    {`>`}
  </Chevron>
</div>
