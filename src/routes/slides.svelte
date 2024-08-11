<script>
  import FullImageCard from "$lib/components/cards/fullImageCard.svelte";

  import { goto } from "$app/navigation";
  import capacitamSrc from "$lib/images/ce-facem/capacitam.jpg";
  import educamSrc from "$lib/images/ce-facem/educam.jpg";

  import informamSrc from "$lib/images/actiuni/siguranta-2022/3.jpg";
  import EmblaCarousel from "$lib/components/EmblaCarousel.svelte";
  import Chevron from "$lib/components/chevron.svelte";
  let embla;
</script>

<EmblaCarousel bind:embla autoplay={false}>
  <div class="embla__slide">
    <FullImageCard
      imageSrc={educamSrc}
      onClick={() => goto("/ce-facem/educam")}
    >
      Educăm</FullImageCard
    >
  </div>
  <div class="embla__slide">
    <FullImageCard
      imageSrc={informamSrc}
      onClick={() => goto("/ce-facem/informam")}
    >
      Informăm</FullImageCard
    >
  </div>
  <div class="embla__slide">
    <FullImageCard
      imageSrc={capacitamSrc}
      onClick={() => goto("/ce-facem/capacitam")}
    >
      Capacităm</FullImageCard
    >
  </div>
</EmblaCarousel>
<div class="hidden gap-2 mx-8 mt-2 md:flex">
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

<style>
  .embla__slide {
    position: relative;
    flex: 0 0 70%; /* Each slide takes 80% of the viewport width */
    min-width: 70%; /* Ensures the slides do not shrink */
    padding: 0 8px;
  }
  @media (min-width: 640px) {
    .embla__slide {
      flex: 0 0 45%;
      min-width: 45%;
      padding: 0 24px;
    }
  }
</style>
