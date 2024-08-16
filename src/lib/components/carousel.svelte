<script lang="ts">
  import Chevron from "$lib/components/chevron.svelte";
  import { onDestroy, onMount } from "svelte";
  import EmblaCarousel from "./EmblaCarousel.svelte";
  import Autoplay from "embla-carousel-autoplay";

  export let slides: string[] = [];
  export let className: string = "";

  let stopAutoplay: () => {};

  let chevronsVisible = false;
  let current = 0;
  let embla;
  export let isRounded = true;

  console.log("CURRENT", current);

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

  const handleInteraction = (
    direction: "prev" | "next" | "jump",
    index?: number
  ) => {
    if (stopAutoplay) {
      stopAutoplay(); // Ensure stopAutoplay is defined before calling
    }
    switch (direction) {
      case "prev":
        embla.scrollPrev();
        break;
      case "next":
        embla.scrollNext();
        break;
      case "jump":
        embla.scrollTo(index);
        break;
    }
  };

  onMount(() => {
    embla.on("select", () => {
      if (embla) {
        updateCurrentSlide();
      }
    });
  });
</script>

<div
  class={`${className} relative flex justify-center w-full skeleton ${isRounded ? "rounded-md" : ""}`}
  role="contentinfo"
  on:mouseenter={() => (chevronsVisible = true)}
  on:mouseleave={() => (chevronsVisible = false)}
>
  <EmblaCarousel {options} bind:embla bind:stopAutoplay bind:isRounded>
    {#each slides as slide}
      <div class="embla__slide">
        <img
          src={slide}
          id={`${slide}-cover`}
          class="object-cover w-full h-full"
          alt="photoshoot"
          draggable={false}
        />
      </div>
    {/each}
  </EmblaCarousel>
  <div class="absolute flex items-center justify-center w-full gap-2 bottom-4">
    {#each slides as _, index}
      <button
        on:click={() => handleInteraction("jump", index)}
        on:keydown={() => handleInteraction("jump", index)}
        class={`rounded-full w-2 h-2 md:w-3 md:h-3 transition-all i cursor-pointer ${current === index ? "bg-brand w-3 h-3 md:w-4 md:h-4" : "bg-white"}`}
      />
    {/each}
  </div>
  <div
    class={`pointer-events-none absolute top-0 flex items-center justify-between hidden w-full h-full px-8 md:flex ${chevronsVisible ? "visible" : "invisible"}`}
  >
    <Chevron
      onClick={() => handleInteraction("prev")}
      className="embla__button embla__button--prev pointer-events-auto"
    >
      {`<`}
    </Chevron>
    <Chevron
      onClick={() => handleInteraction("next")}
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
