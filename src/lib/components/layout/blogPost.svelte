<script lang="ts">
  import Facebook from "$lib/components/icons/facebook.svelte";
  import { goBack } from "$lib/utils/goBack.ts";
  import Carousel from "$lib/components/carousel.svelte";
  import Typography from "$lib/components/font/typography.svelte";
  import SectionTitle from "$lib/components/typography/sectionTitle.svelte";
  import LeftIcon from "$lib/icons/left.svelte";
  import { page } from "$app/stores";
  import { afterUpdate, onMount } from "svelte";
  import X from "../icons/x.svelte";

  export let date = "";
  export let location = "";
  export let title = "";
  export let slides: string[] = [];
  let slotElement: HTMLDivElement | null = null;
  let readTime = 0;

  const calculateReadingTime = () => {
    const wordsPerMinute = 200; // Average case.
    if (slotElement) {
      let textLength = slotElement.innerText.split(" ").length;
      if (textLength > 0) {
        readTime = Math.ceil(textLength / wordsPerMinute);
      }
    }
  };
  const delayedCalculateReadingTime = () => {
    setTimeout(calculateReadingTime, 0);
  };

  onMount(() => {
    delayedCalculateReadingTime();
  });

  let urlToShare = `https://spicc.vercel.app${$page.url.pathname}`;
  function shareOnFacebook() {
    const encodedUrl = encodeURIComponent(urlToShare);
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    window.open(shareUrl, "_blank", "width=600,height=400");
  }

  function shareOnX() {
    const encodedUrl = encodeURIComponent(urlToShare);
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}`;
    window.open(shareUrl, "_blank", "width=600,height=400");
  }
</script>

<div class="flex flex-col items-start w-full max-w-screen-lg text-start">
  <div class="flex justify-between w-full">
    <button class="w-8" on:click={goBack}
      ><LeftIcon className="flex w-full" /></button
    >
    <div class="flex">
      <button class="btn btn-ghost btn-sm md:btn-md" on:click={shareOnX}>
        <X />
      </button>
      <button on:click={shareOnFacebook} class="btn btn-ghost btn-sm md:btn-md">
        <Facebook />
      </button>
    </div>
  </div>
  {#if slides.length > 1}
    <Carousel
      className="max-h-[300px] md:max-h-[600px] rounded-md mt-2 mb-4"
      {slides}
    />
  {:else if slides.length === 1}
    <div class="relative flex flex-col w-full my-4 overflow-hidden md:h-full">
      <img
        src={slides[0]}
        alt="cover"
        class="flex object-contain max-h-[600px] z-20"
      />
      <img
        src={slides[0]}
        alt="cover"
        class="absolute top-0 object-cover w-full h-full blur-xl max-h-[600px] rounded-md"
      />
    </div>
  {/if}
  <SectionTitle {title} withSpacing={false}>
    <div class="flex flex-wrap gap-4" slot="subtitle">
      {#if date || location}
        <Typography variant="small">📅 {date}</Typography>
        <Typography variant="small">📍 {location}</Typography>
      {/if}
      <Typography variant="small">🕒 {readTime} min. read</Typography>
    </div>
  </SectionTitle>
  <div class="divider" />
  <div class="flex flex-col w-full" bind:this={slotElement}>
    <slot name="info" />
  </div>
</div>
