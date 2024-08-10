<script lang="ts">
  import Chevron from "$lib/components/chevron.svelte";
  import { onDestroy, onMount } from "svelte";
  import EmblaCarousel from "./EmblaCarousel.svelte";

  export let slides: string[] = [];
  export let className: string = "";

  let chevronsVisible = false;
  let current = 0;
  let embla;

  let options = {
    loop: true,
    speed: 10,
    align: "center",
    containScroll: "trimSnaps",
    dragFree: false, // Ensure snapping behavior
  };

  function updateCurrentSlide() {
    const selectedSnap = embla.selectedScrollSnap();
    if (current !== selectedSnap) {
      current = selectedSnap; // Update the current slide index if it has changed
    }
  }

  onMount(() => {
    embla.on("select", () => {
      if (embla) {
        updateCurrentSlide();
      }
    });
  });

  console.log("CURRENT", current);
</script>

<div
  class={`${className} relative flex justify-center w-full`}
  role="contentinfo"
  on:mouseenter={() => (chevronsVisible = true)}
  on:mouseleave={() => (chevronsVisible = false)}
>
  <EmblaCarousel {options} bind:current bind:embla>
    {#each slides as slide}
      <div class="embla__slide">
        <img
          src={slide}
          id={`${slide}-cover`}
          class="object-cover w-full h-full rounded-lg"
          alt="photoshoot"
          draggable={false}
        />
      </div>
    {/each}
  </EmblaCarousel>
  <div class="absolute flex justify-center w-full gap-3 pb-2 bottom-4">
    {#each slides as _, index}
      <button
        on:click={() => embla?.scrollTo(index)}
        on:keydown={() => embla?.scrollTo(index)}
        class={`rounded-full w-2 h-2 md:w-3 md:h-3 cursor-pointer ${current === index ? "bg-brand" : "bg-white"}`}
      />
    {/each}
  </div>
  <div
    class={`pointer-events-none absolute top-0 flex items-center justify-between hidden w-full h-full px-8 md:flex ${chevronsVisible ? "visible" : "invisible"}`}
  >
    <Chevron
      onClick={() => embla?.scrollPrev()}
      className="embla__button embla__button--prev pointer-events-auto"
    >
      {`<`}
    </Chevron>
    <Chevron
      onClick={() => embla?.scrollNext()}
      className="embla__button embla__button--next pointer-events-auto"
    >
      {`>`}
    </Chevron>
  </div>
</div>

<style>
  .embla__slide {
    flex: 0 0 100%; /* Ensure each slide takes full width */
    min-width: 100%;
    height: 100%;
  }
</style>
