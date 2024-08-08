<script>
  import capacitamSrc from "$lib/images/ce-facem/capacitam.jpg";
  import educamSrc from "$lib/images/ce-facem/educam.jpg";
  import News from "$lib/components/news/News.svelte";
  import lauralaurentiu from "$lib/images/sponsors/lauralaurentiu.jpg";
  import informamSrc from "$lib/images/actiuni/siguranta-2022/3.jpg";
  import toluna from "$lib/images/sponsors/toluna.png";
  import reteaua from "$lib/images/sponsors/reteaua.png";
  import timisoaraExpress from "$lib/images/sponsors/timisoaraexpress.png";
  import labcom from "$lib/images/sponsors/labcom.png";
  import initiativa from "$lib/images/sponsors/initiativa.png";
  import SectionTitle from "$lib/components/typography/sectionTitle.svelte";
  import Hero from "$lib/components/hero.svelte";
  import FullImageCard from "$lib/components/cards/fullImageCard.svelte";
  import { goto } from "$app/navigation";
  import Hat from "$lib/icons/home/hat.svelte";
  import Info from "$lib/icons/home/info.svelte";
  import Book from "$lib/icons/home/book.svelte";
  const sponsors = [
    { logo: lauralaurentiu, href: "https://lauralaurentiu.ro/" },
    { logo: toluna, href: "https://tolunacorporate.com/" },
  ];
  const partners = [
    { logo: reteaua, href: "https://violentaimpotrivafemeilor.ro/" },
    { logo: timisoaraExpress, href: "https://timisoaraexpress.ro/" },
    { logo: labcom, href: "https://laboratoruldecomunicare.org/" },
    { logo: initiativa, href: "https://initiativatimisoara.ro/" },
  ];
</script>

<main class="flex flex-col items-center bg-brand">
  <Hero />
  <section class="pt-8 overflow-hidden">
    <div class="flex flex-col items-center w-full text-white custom-font">
      <h2 class="text-6xl md:text-8xl">spicc</h2>
      <p class="text-xl md:text-3xl text-[#82ac90]">voice of together</p>
    </div>
    <div
      class="grid w-full grid-cols-8 grid-rows-2 gap-4 px-8 my-16 md:grid-rows-1 md:grid-cols-9"
    >
      <FullImageCard
        className="col-start-1 col-end-5 md:col-start-1 md:col-end-4"
        imageSrc={educamSrc}
        onClick={() => goto("/ce-facem/educam")}
      >
        <div class="flex flex-col items-center">
          <Hat className="w-8 md:w-14" /> Educăm
        </div></FullImageCard
      >
      <FullImageCard
        className="col-start-5 col-end-9 md:col-start-4 md:col-end-7"
        imageSrc={informamSrc}
        onClick={() => goto("/ce-facem/informam")}
      >
        <div class="flex flex-col items-center">
          <Info className="w-8 md:w-12" />

          Informăm
        </div></FullImageCard
      >
      <FullImageCard
        className="col-start-3 col-end-7 pl-[25%] row-start-2 md:row-start-1 md:col-start-7 md:col-end-10"
        imageSrc={capacitamSrc}
        onClick={() => goto("/ce-facem/capacitam")}
      >
        <div class="flex flex-col items-center">
          <Book className="w-8 md:w-12" />Capacităm
        </div></FullImageCard
      >
    </div>
  </section>
  <News />
  <section
    class="flex flex-col items-center justify-center w-full gap-16 p-4 bg-white md:p-8 text-slate-700"
  >
    <SectionTitle variant="huge" title="Sponsori" withSpacing={false} />
    <div class="grid grid-cols-2 gap-16">
      {#each sponsors as sponsor}
        <a href={sponsor.href} target="_blank">
          <img alt="sponsor" src={sponsor.logo} class="max-h-24" />
        </a>
      {/each}
    </div>
    <SectionTitle variant="huge" title="Parteneri" withSpacing={false} />

    <div class="grid grid-cols-2 gap-16 md:grid-cols-4 place-items-center">
      {#each partners as partner}
        <a href={partner.href} target="_blank">
          <img alt="partner" src={partner.logo} class="max-h-24" />
        </a>
      {/each}
    </div>
  </section>
</main>

<style>
  .custom-font {
    font-family: var(--font-exo-2);
  }
</style>
