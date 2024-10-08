<script lang="ts">
  import Location from "./../icons/location.svelte";
  import Facebook from "$lib/components/icons/facebook.svelte";
  import { goBack } from "$lib/utils/goBack.ts";
  import Carousel from "$lib/components/carousel.svelte";
  import Typography from "$lib/components/font/typography.svelte";
  import SectionTitle from "$lib/components/typography/sectionTitle.svelte";
  import LeftIcon from "$lib/icons/left.svelte";
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  import X from "../icons/x.svelte";
  import ProfilePicture from "../icons/profilePicture.svelte";
  import Date from "../icons/date.svelte";
  import Clock from "../icons/clock.svelte";

  export let date = "";
  export let _id = "";
  export let onLike: (postId: string) => Promise<void>;
  export let location = "";
  export let title = "";
  export let slides: string[] = [];
  export let likes = 0;
  export let views = 0;
  export let creator: { name: string; avatar: string } = {
    name: "",
    avatar: "",
  };
  let liked = false;
  let slotElement: HTMLDivElement | null = null;
  let readTime = 0;

  const isCreatorMode = creator.name;

  const calculateReadingTime = () => {
    const wordsPerMinute = 200; // Average case.
    if (slotElement) {
      let textLength = slotElement.innerText.split(" ").length;
      if (textLength > 0) {
        readTime = Math.ceil(textLength / wordsPerMinute);
        dispatch("readTimeCalculated", { readTime });
      }
    }
  };
  const delayedCalculateReadingTime = () => {
    setTimeout(calculateReadingTime, 0);
  };

  onMount(() => {
    delayedCalculateReadingTime();
    liked = localStorage.getItem(`${_id}_liked`) === "true";
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

  function handleLike() {
    onLike(_id);
    liked = !liked;
  }
</script>

<div class="flex flex-col items-start w-full max-w-screen-lg text-start">
  <div class="flex justify-between w-full">
    <button class="w-6 md:w-8" on:click={goBack}
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
      className="max-h-[300px] md:max-h-[600px] md:max-w-screen-lg rounded-md mt-2 mb-4"
      {slides}
    />
  {:else if slides.length === 1}
    <div
      class="relative flex flex-col w-full my-2 overflow-hidden md:my-4 md:h-full"
    >
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
  <SectionTitle variant="xl" {title} withSpacing={false} fullWidth>
    <div
      class={"w-full flex  flex-wrap gap-4"}
      class:justify-between={creator.name}
      slot="subtitle"
    >
      {#if creator.name}
        <div class="flex items-center gap-2">
          <ProfilePicture src={creator.avatar} />
          <Typography>{creator.name}</Typography>
        </div>
      {/if}
      <div class="flex flex-wrap items-center gap-4">
        {#if date}
          <Typography variant="small" className="flex items-center gap-2"
            ><Date className="w-4 h-4 md:w-5 md:h-5" /> {date}</Typography
          >{/if}
        {#if location}
          <Typography variant="small" className="flex items-center gap-2"
            ><Location className="w-3 h-3 md:w-4 md:h-4" />
            {location}</Typography
          >
        {/if}

        <Typography variant="small" className="flex items-center gap-2"
          ><Clock className="w-3 h-3 md:w-4 md:h-4" />
          {readTime} min.</Typography
        >
      </div>
    </div>
  </SectionTitle>
  <div class=" divider" />
  <div class="flex flex-col w-full raw-html" bind:this={slotElement}>
    <slot name="info" />
  </div>

  {#if isCreatorMode}
    <div class="divider" />
    <div class="flex items-center justify-between w-full gap-2 md:gap-4">
      <button class="btn btn-ghost btn-sm" on:click={handleLike}
        ><Typography variant="small">{liked ? "❤️" : "🤍"} {likes}</Typography
        ></button
      >
      <Typography variant="small">{views} views</Typography>
    </div>
  {/if}
</div>
