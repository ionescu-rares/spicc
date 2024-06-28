<script lang="ts">
  import Carousel from "./carousel.svelte";
  import first from "$lib/images/1.jpg";
  import second from "$lib/images/2.jpg";
  import third from "$lib/images/3.jpg";
  import fourth from "$lib/images/4.jpg";
  import fifth from "$lib/images/5.jpg";
  import sixth from "$lib/images/6.jpg";
  import seventh from "$lib/images/7.jpg";
  import { onDestroy, onMount } from "svelte";
  const slides = [first, second, third, fourth, fifth, sixth, seventh];
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  let scrollDownButton: HTMLButtonElement;
  const toggleBounce = setInterval(() => {
    scrollDownButton.classList.add("bounce-animation");
    setTimeout(() => {
      scrollDownButton.classList.remove("bounce-animation");
    }, 1000); // Duration of the bounce animation
  }, 6000);

  onDestroy(() => clearInterval(toggleBounce));
</script>

<section class="relative w-full h-[calc(100svh-89px)] flex">
  <Carousel {slides} />
  <button
    bind:this={scrollDownButton}
    id="scroll-down-button"
    on:click={handleClick}
    class="absolute text-xl font-bold text-white border-none md:text-3xl btn-accent bg-brand btn-circle bottom-8 right-12 md:right-24 btn-md md:btn-lg bounce-animation"
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
