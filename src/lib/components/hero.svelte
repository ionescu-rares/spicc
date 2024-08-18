<script lang="ts">
  import Carousel from "./carousel.svelte";
  import first from "$lib/images/1.jpg";
  import second from "$lib/images/2.jpg";
  import third from "$lib/images/3.jpg";
  import fourth from "$lib/images/4.jpg";
  import fifth from "$lib/images/5.jpg";
  import sixth from "$lib/images/6.jpg";
  import seventh from "$lib/images/7.jpg";
  import eighth from "$lib/images/8.jpg";
  import { afterUpdate, onMount } from "svelte";
  import nineth from "$lib/images/9.jpg";
  import { onDestroy } from "svelte";

  const slides = [
    second,
    seventh,
    third,
    sixth,
    first,
    fifth,
    eighth,
    nineth,
    fourth,
  ];

  let hero: HTMLElement | null = null;
  let hasScrolled = false; // Flag to track if the scroll has happened

  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
    hasScrolled = true; // Set flag after scroll
  };

  let animateButton = false;

  const triggerAnimation = () => {
    animateButton = true;
    setTimeout(() => {
      animateButton = false;
    }, 1000);
  };

  const toggleBounce = setInterval(() => {
    triggerAnimation();
  }, 7000);

  const initialDelay = setTimeout(() => {
    triggerAnimation();

    onDestroy(() => clearInterval(toggleBounce));
  }, 7000);

  onMount(() => {
    window.scrollTo({ top: 0 });

    setTimeout(() => {
      if (!hasScrolled && window.scrollY <= 10) {
        window.addEventListener("scroll", handleScroll);
      }
    }, 0);
  });

  const handleScroll = () => {
    const heroSize = hero?.getBoundingClientRect();
    if (!hasScrolled && heroSize) {
      window.scrollTo({
        top: heroSize.bottom,
        behavior: "smooth",
      });
      hasScrolled = true; // Set flag after scroll
      window.removeEventListener("scroll", handleScroll); // Remove event listener after the first scroll
    }
  };

  onDestroy(() => {
    clearTimeout(initialDelay);
    hero?.removeEventListener("scroll", handleScroll);
  });
</script>

<section class="relative flex w-full h-[50vh] md:h-[100svh]" bind:this={hero}>
  <Carousel {slides} isRounded={false} />
  <button
    id="scroll-down-button"
    on:click={handleClick}
    class={`hidden md:block absolute text-xl font-bold text-white border-none btn-ghost md:text-3xl btn-accent btn-circle bottom-8 right-12 md:right-24 btn-md ${animateButton && "bounce-animation"} md:btn-lg`}
    >↓</button
  >
</section>

<style>
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }

  .bounce-animation {
    animation: bounce 1s ease-in-out;
  }
</style>
