<script lang="ts">
  import PageLayout from "$lib/components/pageLayout.svelte";
  import type { BlogPostType } from "./types";
  import Typography from "$lib/components/font/typography.svelte";
  import { goto } from "$app/navigation";
  import ProfilePicture from "$lib/components/icons/profilePicture.svelte";
  import SectionTitle from "$lib/components/typography/sectionTitle.svelte";
  export let data: {
    blogPosts: BlogPostType[];
  };
</script>

<PageLayout>
  <SectionTitle title="Blog" />
  <div class="w-full grid-container">
    {#each data.blogPosts as blogPost}
      <div
        class="flex flex-col gap-2 my-4 text-start md:m-4"
        on:keydown={() => goto(`/blog/${blogPost._id}`)}
        on:click={() => goto(`/blog/${blogPost._id}`)}
        role="button"
        tabindex={0}
      >
        <img src={blogPost.slides[0]} alt="cover" class="rounded-md" />
        <div class="flex items-center w-full gap-2">
          <ProfilePicture src={blogPost.creator.avatar} />
          <div class="flex flex-col">
            <p class="text-sm">{blogPost.creator.name}</p>
            <p class="text-sm">{blogPost.date}</p>
          </div>
        </div>
        <p class="text-mg lg:text-xl">{blogPost.title}</p>
        <div class="m-0 divider" />
        <div class="flex justify-between">
          <p class="text-sm">❤️ {blogPost.likes}</p>
          <p class="text-sm">{blogPost.views} views</p>
        </div>
      </div>
    {/each}
  </div>
</PageLayout>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  }
  @media (min-width: 640px) {
    .grid-container {
      grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    }
  }
</style>
