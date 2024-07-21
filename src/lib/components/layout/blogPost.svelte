<script lang="ts">
  import Carousel from "$lib/components/carousel.svelte";
  import Typography from "$lib/components/font/typography.svelte";
  import SectionTitle from "$lib/components/typography/sectionTitle.svelte";
  export let date = "";
  export let location = "";
  export let title = "";
  export let slides: string[] = [];
</script>

<div class="flex flex-col items-start w-full max-w-screen-lg text-start">
  {#if slides.length > 1}
    <Carousel
      className="max-h-[300px] md:max-h-[600px] rounded-md my-4"
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
    <div class="flex gap-4" slot="subtitle">
      {#if date || location}
        <Typography variant="small">📅 {date}</Typography>
        <Typography variant="small">📍 {location}</Typography>
      {/if}
    </div>
  </SectionTitle>
  <div class="divider" />
  <div class="flex flex-col w-full">
    <slot name="info" />
  </div>
</div>
