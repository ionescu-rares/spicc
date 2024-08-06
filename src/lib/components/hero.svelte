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
  import { afterUpdate } from "svelte";
  import nineth from "$lib/images/9.jpg";
  import { onDestroy } from "svelte";
  const slides = [
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eighth,
    nineth,
  ];
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
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

  afterUpdate(() => {
    window.addEventListener("scroll", () => {
      animateButton = false;
      clearInterval(toggleBounce);
      clearTimeout(initialDelay);
    });
  });

  onDestroy(() => clearTimeout(initialDelay));
</script>

<section class="relative flex w-full h-auto md:h-[100svh]">
  <Carousel {slides} />
  <button
    id="scroll-down-button"
    on:click={handleClick}
    class={`absolute text-xl font-bold text-white border-none md:text-3xl btn-accent bg-brand btn-circle bottom-8 right-12 md:right-24 btn-md ${animateButton && "bounce-animation"} md:btn-lg`}
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
