<script lang="ts">
  import SectionTitle from "$lib/components/typography/sectionTitle.svelte";
  import Carousel from "../carousel.svelte";
  export let src = "";
  export let reversed = false;
  export let videoSrc = "";
  export let poster = "";
  export let title = "";
  export let slides: string[] = [];
  export let fullSize = false;
</script>

<div
  class={`flex flex-col article-grid text-start ${fullSize ? "no-max-height" : "with-max-height"} overflow-auto relative`}
>
  <div
    class={`image-area h-full flex ${reversed ? "col-start-4 col-end-7" : "col-start-1 col-end-4"} top-0`}
  >
    {#if src}
      <img
        {src}
        alt="news"
        class="sticky object-cover w-full h-auto rounded-md"
      />
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
    class={`content-area grid ${reversed ? "col-start-1 col-end-4" : "col-start-4 col-end-7"}`}
  >
    {#if title}
      <SectionTitle className="mt-4 md:mt-0" withSpacing={false} {title} />
    {/if}
    <div class="pt-4 leading-relaxed slot-area md:mt-0">
      <slot />
    </div>
  </article>
</div>

<style>
  @media (min-width: 768px) {
    .article-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(8, 1fr);
      column-gap: 64px;
    }
    .image-area {
      grid-row: 1 / span 8;
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
  }
</style>
