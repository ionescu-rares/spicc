<script lang="ts">
  import type { ActionType } from "./types.ts";
  import Card from "$lib/components/cards/card.svelte";
  import PageLayout from "$lib/components/pageLayout.svelte";
  import SectionTitle from "$lib/components/typography/sectionTitle.svelte";
  import { goto } from "$app/navigation";

  export let data: {
    actions: ActionType[];
  };
</script>

<PageLayout withSpacing>
  <SectionTitle variant="huge" title="Acțiuni" />
  <div class="w-full gap-8 grid-container place-items-center">
    {#each data.actions as action}
      <Card
        onClick={() => goto(`/actiuni/${action._id}`)}
        title={action.title}
        thumbnail={action.slides[0]}
        >{action.description}
      </Card>
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
