<script lang="ts">
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
  class={`flex flex-col article-grid max-h-auto text-start ${fullSize ? "no-max-height" : "with-max-height"} overflow-auto relative`}
>
  <div
    class={`image-area h-full flex ${reversed ? "col-start-4 col-end-7" : "col-start-1 col-end-4"} sticky top-0`}
  >
    {#if src}
      <img
        {src}
        alt="news"
        class="sticky object-cover w-full h-auto rounded-lg"
      />
    {:else if slides.length > 1}
      <Carousel {slides} className="rounded-lg" />
    {/if}

    {#if videoSrc}
      <video
        src={videoSrc}
        {poster}
        controls
        class="flex justify-center w-full bg-black rounded-xl"
        ><track kind="captions" /></video
      >
    {/if}
  </div>
  <article
    class={`content-area grid ${reversed ? "col-start-1 col-end-4" : "col-start-4 col-end-7"}`}
  >
    <h2 class="my-8 text-4xl font-bold title-area md:mt-0">{title}</h2>
    <div class="slot-area">
      <slot />
    </div>
  </article>
</div>

<style>
  @media (min-width: 768px) {
    .article-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(3, 1fr);
      column-gap: 64px;
    }
    .image-area {
      grid-row: 1 / span 3;
    }
    .content-area {
      grid-row: 1 / span 3;
    }
    .title-area {
      grid-row: 1 / 2;
    }
    .slot-area {
      grid-row: 2 / 4;
    }
    .with-max-height {
      max-height: 400px;
    }
    .no-max-height {
      max-height: auto;
    }
  }
</style>
