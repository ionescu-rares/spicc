<script lang="ts">
  import Chevron from "$lib/components/chevron.svelte";
  import { swipe, type SwipeCustomEvent } from "svelte-gestures";
  import { onDestroy } from "svelte";

  export let slides: string[] = [];
  export let className: string = "";

  let direction;
  let target;

  function handleSwipe(event: SwipeCustomEvent) {
    direction = event.detail.direction;
    if (direction === "left") {
      next();
    }
    if (direction === "right") {
      prev();
    }
  }

  let current = 0;
  let autoPlay = true;
  let chevronsVisible = false;
  function updateCurrentSlide(delta: number, jump = false) {
    if (jump) {
      current = delta;
    } else {
      current = (current + delta + slides.length) % slides.length;
    }
  }
  const stopAutoPlay = () => (autoPlay = false);
  const prev = () => {
    stopAutoPlay();
    updateCurrentSlide(-1);
  };
  const next = () => {
    stopAutoPlay();
    updateCurrentSlide(1);
  };
  const jump = (index: number) => {
    stopAutoPlay();
    updateCurrentSlide(index, true);
  };
  let interval = setInterval(() => {
    if (autoPlay) {
      updateCurrentSlide(1);
    }
  }, 5000);
  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<div class="flex justify-center w-full">
  <div
    class={`relative ${className} inline-flex w-full overflow-hidden`}
    role="contentinfo"
    draggable={false}
    use:swipe={{ timeframe: 100, minSwipeDistance: 20, touchAction: "pan-y" }}
    on:swipe={handleSwipe}
    on:mouseenter={() => (chevronsVisible = true)}
    on:mouseleave={() => (chevronsVisible = false)}
  >
    <div
      class={`inline-flex w-full transition ease-in-out duration-500  h-full`}
      style={`transform: translateX(${-current * 100}%)`}
    >
      {#each slides as slide}
        <div
          class="flex flex-col items-center justify-center w-full mx-auto slide"
        >
          <img
            src={slide}
            id={`${slide}-cover`}
            class="flex object-contain overflow-hidden"
            alt="photoshoot"
          />
          <img
            src={slide}
            id={slide}
            alt="photoshoot"
            class="absolute top-0 object-cover w-full h-full -z-10 blur-xl"
          />
        </div>
      {/each}
    </div>
    <div
      class={`absolute top-0 h-full w-full justify-between items-center hidden px-4 md:px-10 text-3xl ${chevronsVisible && "md:flex"}`}
    >
      <Chevron onClick={prev}>{`<`}</Chevron>
      <Chevron onClick={next}>{`>`}</Chevron>
    </div>

    <div class="absolute bottom-0 flex justify-center w-full gap-3 pb-2">
      {#each slides as _, index}
        <button
          on:click={() => jump(index)}
          on:keydown={() => jump(index)}
          class={`rounded-full w-2 h-2 md:w-3 md:h-3 cursor-pointer ${current === index ? "bg-brand" : "bg-white"}`}
        />
      {/each}
    </div>
  </div>
</div>

<style>
  .slide {
    flex: 0 0 100%; /* Ensure each slide takes full width */
    align-content: center;
  }
</style>
