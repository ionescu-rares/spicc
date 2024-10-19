<script lang="ts">
  import SectionTitle from "../typography/sectionTitle.svelte";
  import type { ActionType } from "../../../routes/actiuni/types";
  import NewsCard from "./newsCard.svelte";
  import Typography from "../font/typography.svelte";
  export let actions: ActionType[] = [];
</script>

<section
  class="flex flex-col items-center gap-16 px-4 py-16 md:py-24 md:px-8 bg-brand"
>
  <SectionTitle title={"Noutăți"} variant="huge" withSpacing={false} />
  <div class="flex flex-col w-full md:gap-12 lg:grid lg:grid-cols-2">
    {#each actions as action}
      <div>
        <NewsCard
          src={action.slides[0]}
          title={action.title}
          href={`/actiuni/${action._id}`}
        >
          <Typography variant="small">
            {action.description}
          </Typography>
        </NewsCard>
        <div class="m-0 sm:hidden divider" />
      </div>
    {/each}
  </div>
</section>
