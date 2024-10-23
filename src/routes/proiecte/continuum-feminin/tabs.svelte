<script>
  import { fade } from "svelte/transition";
  import Typography from "$lib/components/font/typography.svelte";
  import SinguraTab from "./singuraTab.svelte";
  import ThreeXtab from "./threeXTab.svelte";
  import EgaleTab from "./egaleTab.svelte";
  import BulaTab from "./bulaTab.svelte";
  import DrumulTab from "./drumulTab.svelte";
  import CorpulTab from "./corpulTab.svelte";

  let activeTab = 0;
  const tabs = [
    "De 3 x femeie?",
    "Corpul meu, alegerea mea!",
    "NU ești singură!",
    "Toate diferite, toate egale",
    "Sparge bula!",
    "Drumul spre 50",
  ];
</script>

<div
  class="sticky top-0 z-20 flex justify-center w-full overflow-x-hidden bg-white"
>
  <div
    class="flex w-full max-w-full px-4 my-2 space-x-4 overflow-x-auto text-nowrap no-scrollbar"
    style="scroll-behavior: smooth;"
  >
    {#each tabs as tab, index}
      <button
        class="px-4 py-2 transition-all duration-300 border-b-4 w-fit"
        class:border-continuum={index === activeTab}
        class:text-slate-800={index === activeTab}
        class:text-gray-500={index !== activeTab}
        on:click={() => (activeTab = index)}
      >
        <Typography variant="small" className="nowrap">{tab}</Typography>
      </button>
    {/each}
  </div>
</div>

<!-- Full-width content area for the tabs -->
<div class="w-full mt-4">
  <div class="w-full p-4 md:p-8 bg-gray-100 min-h-[100vh] text-slate-700">
    {#if activeTab === 0}
      <div in:fade={{ delay: 400 }}><ThreeXtab /></div>
    {/if}
    {#if activeTab === 1}
      <div in:fade={{ delay: 400 }}><CorpulTab /></div>
    {/if}
    {#if activeTab === 2}
      <div in:fade={{ delay: 400 }}><SinguraTab /></div>
    {/if}
    {#if activeTab === 3}
      <div in:fade={{ delay: 400 }}><EgaleTab /></div>
    {/if}
    {#if activeTab === 4}
      <div in:fade={{ delay: 400 }}><BulaTab /></div>
    {/if}
    {#if activeTab === 5}
      <div in:fade={{ delay: 400 }}><DrumulTab /></div>
    {/if}
  </div>
</div>

<style>
  /* Hide the scrollbar for cleaner mobile experience */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  /* Prevent horizontal scrolling on the entire page */
</style>
