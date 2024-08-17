<script>
  import EmblaCarousel from "$lib/components/EmblaCarousel.svelte";
  import Chevron from "$lib/components/chevron.svelte";
  let embla;
</script>

<EmblaCarousel bind:embla autoplay={false} isRounded={false}>
  <slot />
</EmblaCarousel>
<div class={`hidden gap-2 mx-8 mt-2 md:flex xl:hidden `}>
  <Chevron
    onClick={() => embla?.scrollPrev()}
    className="embla__button embla__button--prev"
  >
    {`<`}
  </Chevron>
  <Chevron
    onClick={() => embla?.scrollNext()}
    className="embla__button embla__button--next"
  >
    {`>`}
  </Chevron>
</div>
