<script lang="ts">
  import Carousel from "$lib/components/carousel.svelte";
  import Typography from "$lib/components/font/typography.svelte";
  import SectionTitle from "$lib/components/typography/sectionTitle.svelte";
  export let date = "";
  export let location = "";
  export let title = "";
  export let slides: string[] = [];
</script>

<div class="flex flex-col w-full max-w-screen-lg text-start">
  <SectionTitle
    {title}
    withSpacing={false}
    className="self-center md:self-start"
  >
    <div class="flex gap-4" slot="subtitle">
      <Typography>📅 {date}</Typography>
      <Typography>📍 {location}</Typography>
    </div></SectionTitle
  >

  {#if slides.length > 1}
    <Carousel
      className="max-h-[300px] md:max-h-[600px] rounded-md mt-4"
      {slides}
    />
  {:else if slides.length === 1}
    <img src={slides[0]} alt="cover" />
  {/if}
  <div class="flex flex-col w-full mt-4 md:mt-8">
    <slot name="info" />
  </div>
</div>
