<script lang="ts">
  import Carousel from "../carousel.svelte";

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
  class={`article-grid w-full h-full text-start rounded-lg  ${fullSize ? "no-max-height" : "with-max-height"} overflow-auto relative`}
>
  <div
    class={`image-area h-full flex ${reversed ? "col-start-4 col-end-7" : "col-start-1 col-end-4"} top-0`}
  >
    {#if src}
      <img
        {src}
        alt="news"
        class="sticky object-cover w-full h-auto rounded-lg"
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
    class={`content-area grid p-4 ${reversed ? "col-start-1 col-end-4" : "col-start-4 col-end-7"}`}
  >
    {#if title}
      <p class="text-sm font-bold md:text-xl">{title}</p>
    {/if}
    <div class="hidden pt-4 leading-relaxed md:block slot-area">
      <slot />
    </div>
    <a class="self-end mt-4 text-xs w-fit sm:text-sm link lg:text-md" {href}
      >Mai multe</a
    >
  </article>
</div>

<style>
  .article-grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
  }
  .image-area {
    grid-column: 1 / span 3;
  }
  .content-area {
    grid-column: 4 / span 5;
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
  @media (min-width: 640px) {
    .image-area {
      grid-row: 1 / span 8;
      grid-column: 1 / span 3;
    }
    .content-area {
      grid-row: 1 / span 8;
    }
    .article-grid {
      grid-template-rows: repeat(8, 1fr);
    }
  }
</style>
