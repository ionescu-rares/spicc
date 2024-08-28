<script lang="ts">
  import Typography from "$lib/components/font/typography.svelte";
  import Modal from "$lib/components/modal.svelte";
  import PageLayout from "$lib/components/pageLayout.svelte";
  import HeroSection from "../../HeroSection.svelte";
  import expozitieBanner from "$lib/images/proiecte/her_city/expozitie/banner.jpg";

  import { data } from "./utils";
  import ArrowRight from "$lib/icons/home/arrowRight.svelte";
  import { onDestroy, onMount } from "svelte";

  const openModal = (id: string) => {
    const modal = document.getElementById(id) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  onMount(() => {
    let items = document.querySelectorAll("#figure-item");
    let observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        }),
      { threshold: 0.1, root: null }
    );
    if (items) {
      items.forEach((item) => observer.observe(item));
    }
    return () => {
      items.forEach((item) => observer.unobserve(item));
      observer.disconnect();
    };
  });
</script>

<PageLayout withPadding={false}>
  <HeroSection bannerSrc={expozitieBanner} paths={[]} />
  <div
    class="flex flex-col md:grid overflow-hidden w-full grid-cols-2 gap-4 md:gap-8 -mb-1 lg:gap-16 text-slate-700 bg-[#F1F1F1] p-8 md:p-16"
  >
    <Typography variant="large" bold className="text-start xl:mx-16">
      Expoziția virtuală HerEurope celebrează unitatea europeană, prezentând
      publicului de pretutindeni femeile remarcabile, care au jucat un rol
      important în construirea și dezvoltarea Uniunii Europene.</Typography
    >
    <Typography variant="large" className="text-start xl:mx-16">
      Expoziția argumentează pentru rădăcina comună care leagă, în multe și
      surprinzătoare feluri, experiențele feminine, pentru importanța
      recunoașterii reciproce și a identificării cu unu multiplu, pentru
      povestea unui destin comun, european, în care ne regăsim cu toții și care
      ne întregește pe toți.</Typography
    >
  </div>
  <div
    class="grid overflow-hidden w-full grid-cols-2 gap-4 md:gap-8 lg:gap-16 text-slate-700 bg-[#F1F1F1] p-8 md:p-16"
  >
    {#each data as figure, index}
      <Modal modalId={figure.name.replace(" ", "-")}
        ><div class="flex flex-col gap-8">
          <Typography variant="large" bold>{figure.name}</Typography>
          <Typography className="font-thin">{figure.description}</Typography>
          <ul class="px-8 text-sm list-disc md:text-lg">
            {#each figure.details as detail}<li>{detail}</li>{/each}
          </ul>
          <cite class="text-sm md:text-lg">"{figure.motto}"</cite>
        </div></Modal
      >
      <div
        id="figure-item"
        class={`flex flex-col items-start xl:mx-16 gap-2 md:gap-4 opacity-0 text-start ${index % 2 === 0 ? "-translate-x-3/4" : "translate-x-3/4"}`}
      >
        <img src={figure.imageSrc} alt={figure.name} /><Typography
          variant="xl"
          bold>{figure.name}</Typography
        ><Typography variant="small">{figure.description}</Typography><button
          class="flex items-center gap-2 text-sm btn-ghost link md:text-lg"
          on:click={() => openModal(figure.name.replace(" ", "-"))}
          ><ArrowRight /> descoperă</button
        >
      </div>
    {/each}
  </div></PageLayout
>

<style>
  :global(.hide) {
    opacity: 0;
    transform: translateX(-100%);
  }

  :global(.show) {
    opacity: 1;
    transform: translateX(0);
    transition: all 1s;
  }
</style>
