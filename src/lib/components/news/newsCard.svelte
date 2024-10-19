<script lang="ts">
  import SectionTitle from "$lib/components/typography/sectionTitle.svelte";
  import Carousel from "../carousel.svelte";
  import Typography from "../font/typography.svelte";
  export let src = "";
  export let href = "";
  export let reversed = false;
  export let videoSrc = "";
  export let poster = "";
  export let title = "";
  export let slides: string[] = [];
  export let fullSize = false;
</script>

<div
  class={`article-grid text-start rounded-lg bg-gradient-to-r from-[#1B263B] to-[#163A47] ${fullSize ? "no-max-height" : "with-max-height"} overflow-auto relative`}
>
  <div
    class={`image-area h-full flex ${reversed ? "col-start-4 col-end-7" : "col-start-1 col-end-4"} top-0`}
  >
    {#if src}
      <img {src} alt="news" class="sticky object-cover w-full h-auto" />
    {:else if slides.length > 1}
      <Carousel {slides} className="rounded-md" />
    {/if}

    {#if videoSrc}
      <video
        src={videoSrc}
        {poster}
        controls
        class="flex justify-center w-full bg-black rounded-md"
        ><track kind="captions" /></video
      >
    {/if}
  </div>
  <article
    class={`content-area grid p-4 ${reversed ? "col-start-1 col-end-4" : "col-start-4 col-end-7"}`}
  >
    {#if title}
      <p class="text-xs font-bold sm:text-md md:text-lg">{title}</p>
    {/if}
    <div class="hidden pt-4 leading-relaxed md:block slot-area">
      <slot />
    </div>
    <a class="mt-4 text-xs sm:text-sm link lg:text-md" {href}>Mai multe</a>
  </article>
</div>

<style>
  .image-area {
    grid-column: 1 / span 2;
  }
  .article-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(8, 1fr);
  }
  .image-area {
    grid-row: 1 / span 8;
    grid-column: 1 / span 3;
  }
  .content-area {
    grid-row: 1 / span 8;
  }
  .title-area {
    grid-row: 1 / 2;
  }
  .slot-area {
    grid-row: 2 / 8;
  }
  .with-max-height {
    max-height: 500px;
  }
  .no-max-height {
    max-height: auto;
  }
</style>
