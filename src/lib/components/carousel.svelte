<script lang="ts">
  import Chevron from "$lib/components/chevron.svelte";
  import { onDestroy } from "svelte";

  export let slides: string[] = [];
  export let className: string = "";

  let direction;
  let target;
  let current = 0;
  let autoPlay = true;
  let chevronsVisible = false;
  let dragging = false;
  let startX = 0;
  let currentX = 0;
  let translateX = 0;

  function updateCurrentSlide(delta: number, jump = false) {
    if (jump) {
      current = delta;
    } else {
      current = (current + delta + slides.length) % slides.length;
    }
    translateX = -current * 100;
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

  function handleStart(event) {
    dragging = true;
    startX =
      event.type === "mousedown" ? event.clientX : event.touches[0].clientX;
  }

  function handleMove(event) {
    if (dragging) {
      currentX =
        event.type === "mousemove" ? event.clientX : event.touches[0].clientX;
      const deltaX = currentX - startX;
      const percentage = (deltaX / window.innerWidth) * 100;
      target.style.transform = `translateX(calc(${translateX}% + ${percentage}vw))`;
    }
  }

  function handleEnd() {
    dragging = false;
    const deltaX = currentX - startX;
    if (deltaX > 50) {
      prev();
    } else if (deltaX < -50) {
      next();
    } else {
      target.style.transform = `translateX(${translateX}%)`;
    }
    currentX = 0;
    startX = 0;
  }

  function handleTouchStart(event) {
    handleStart(event);
  }

  function handleTouchMove(event) {
    handleMove(event);
  }

  function handleTouchEnd() {
    handleEnd();
  }

  function handleMouseDown(event) {
    handleStart(event);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  }

  function handleMouseMove(event) {
    handleMove(event);
  }

  function handleMouseUp(event) {
    handleEnd();
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  }
</script>

<div class="flex justify-center w-full">
  <div
    class={`relative ${className} inline-flex w-full overflow-hidden`}
    role="contentinfo"
    draggable={false}
    on:mouseenter={() => (chevronsVisible = true)}
    on:mouseleave={() => (chevronsVisible = false)}
  >
    <div
      bind:this={target}
      class={`inline-flex w-full transition-transform ease-in-out duration-500 h-full`}
      style={`transform: translateX(${translateX}%)`}
      on:touchstart={handleTouchStart}
      on:touchmove={handleTouchMove}
      on:touchend={handleTouchEnd}
      on:mousedown={handleMouseDown}
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
