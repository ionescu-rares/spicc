<script>
  import EmblaCarousel from "$lib/components/EmblaCarousel.svelte";
  import Chevron from "$lib/components/chevron.svelte";
  let embla;
  export let chevronsAlwaysVisible = false;
</script>

<div>
  <EmblaCarousel bind:embla autoplay={false} isRounded={false}>
    <slot />
  </EmblaCarousel>
  <div
    class={`hidden mx-8 md:mx-16 gap-2 self-start mt-2 md:flex xl:${chevronsAlwaysVisible === false && "hidden"} `}
  >
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
</div>
