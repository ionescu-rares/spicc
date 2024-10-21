<script lang="ts">
  import { formatISO } from "./../../../lib/utils/formatDate.ts";
  import Typography from "$lib/components/font/typography.svelte";
  import BlogPost from "$lib/components/layout/blogPost.svelte";
  import PageLayout from "$lib/components/pageLayout.svelte";
  import type { ActionType } from "../types";

  export let data: {
    action: ActionType;
  };

  const { action } = data;
</script>

<PageLayout withPadding withSpacing>
  <BlogPost
    title={action.title}
    location={action.location}
    date={formatISO(new Date(action.date))}
    slides={action.slides}
    ><div slot="info">{@html action.content}</div></BlogPost
  >
</PageLayout>
