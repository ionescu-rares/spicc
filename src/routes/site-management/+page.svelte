<script lang="ts">
  import PageLayout from "$lib/components/pageLayout.svelte";
  import SectionTitle from "$lib/components/typography/sectionTitle.svelte";
  import Typography from "$lib/components/font/typography.svelte";
  import BlogIcon from "$lib/components/icons/blogIcon.svelte";
  import Megaphone from "$lib/icons/home/megaphone.svelte";
  import { goto } from "$app/navigation";
</script>

<PageLayout>
  <SectionTitle title="Administrare Site SPICC" />

  <div class="grid w-full max-w-screen-xl grid-cols-2 place-items-center">
    <button
      class="items-center p-4 card glass w-96 h-80"
      on:click={() => goto("/blog/blog-posts-management")}
    >
      <Typography variant="large">Bloguri</Typography>

      <div class="flex items-center justify-center w-full h-full">
        <BlogIcon className="w-1/2 h-1/2" />
      </div>
    </button>
    <button
      class="items-center p-4 card glass w-96 h-80"
      on:click={() => goto("/actiuni/actions-management")}
    >
      <Typography variant="large">Actiuni</Typography>
      <div class="flex items-center justify-center w-full h-full">
        <Megaphone className="w-1/2 h-1/2" />
      </div>
    </button>
  </div>
</PageLayout>
