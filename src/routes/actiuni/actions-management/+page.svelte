<script lang="ts">
  import PageLayout from "$lib/components/pageLayout.svelte";
  import type { ActionType } from "../types";
  import Card from "$lib/components/cards/card.svelte";
  import { goto } from "$app/navigation";
  import Typography from "$lib/components/font/typography.svelte";
  import SectionTitle from "$lib/components/typography/sectionTitle.svelte";

  export let data: {
    actions: ActionType[];
  };

  let { actions } = data;

  const deleteAction = async (actionId: string) => {
    try {
      const response = await fetch(`/api/save-action?id=${actionId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        actions = actions.filter((action) => action._id !== actionId);
      } else {
        console.error("Failed to delete action");
      }
    } catch (e) {
      console.error(e);
    }
  };
</script>

<PageLayout withPadding>
  <SectionTitle title="Administrare Actiuni" />
  <button
    class="mb-16 btn btn-primary"
    on:click={() => goto("/actiuni/actions-management/creator")}
    >Creaza o actiune noua</button
  >
  <div class="w-full gap-8 grid-container place-items-center">
    {#each actions as action}
      <Card title={action.title} thumbnail={action.slides[0]}
        >{action.description}
        <div></div>
        <div slot="actions">
          <button
            class="p-1 mx-2 btn-ghost"
            on:click={() => deleteAction(action._id)}
            ><Typography variant="small">🗑️ Sterge</Typography></button
          >
          <button
            class="p-1 mx-2 btn-ghost"
            on:click={() => goto(`/actiuni/actions-management/${action._id}`)}
            ><Typography variant="small">✏️ Editeaza</Typography></button
          >
          <button
            class="btn btn-primary"
            on:click={() => goto(`/actiuni/${action._id}`)}>Mai multe</button
          >
        </div></Card
      >
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
