<script lang="ts">
  import type { ActionType } from "./actiuni/types.ts";
  import News from "$lib/components/news/News.svelte";
  import lauralaurentiu from "$lib/images/sponsors/lauralaurentiu.jpg";
  import toluna from "$lib/images/sponsors/toluna.png";
  import reteaua from "$lib/images/sponsors/reteaua.png";
  import timisoaraExpress from "$lib/images/sponsors/timisoaraexpress.png";
  import labcom from "$lib/images/sponsors/labcom.png";
  import initiativa from "$lib/images/sponsors/initiativa.png";
  import SectionTitle from "$lib/components/typography/sectionTitle.svelte";
  import Hero from "$lib/components/hero.svelte";

  import capacitamSrc from "$lib/images/ce-facem/capacitam.jpg";
  import educamSrc from "$lib/images/ce-facem/educam.jpg";

  import informamSrc from "$lib/images/actiuni/siguranta-2022/3.jpg";
  import Logo from "./logo.svelte";
  import Slides from "./slides.svelte";
  import FullImageCard from "$lib/components/cards/fullImageCard.svelte";
  import { goto } from "$app/navigation";

  export let data: {
    actions: ActionType[];
  };

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
  <section class="pt-8">
    <Logo />

    <Slides>
      <div class="embla__slide">
        <FullImageCard
          imageSrc={educamSrc}
          onClick={() => goto("/ce-facem/educam")}
        >
          Educăm</FullImageCard
        >
      </div>
      <div class="embla__slide">
        <FullImageCard
          imageSrc={informamSrc}
          onClick={() => goto("/ce-facem/informam")}
        >
          Informăm</FullImageCard
        >
      </div>
      <div class="embla__slide">
        <FullImageCard
          imageSrc={capacitamSrc}
          onClick={() => goto("/ce-facem/capacitam")}
        >
          Capacităm</FullImageCard
        >
      </div></Slides
    >
  </section>
  <News actions={data.actions.slice(0, 4)} />
  <section
    class="flex flex-col items-center justify-center w-full gap-16 p-4 bg-white md:px-8 md:py-16 text-slate-700"
  >
    <SectionTitle variant="huge" title="Sponsori" withSpacing={false} />
    <div class="grid grid-cols-2 gap-16">
      {#each sponsors as sponsor}
        <a href={sponsor.href} target="_blank">
          <img
            loading="lazy"
            alt="sponsor"
            src={sponsor.logo}
            class="max-h-16"
          />
        </a>
      {/each}
    </div>
    <SectionTitle variant="huge" title="Parteneri" withSpacing={false} />

    <div class="grid grid-cols-2 gap-16 md:grid-cols-4 place-items-center">
      {#each partners as partner}
        <a href={partner.href} target="_blank">
          <img
            loading="lazy"
            alt="partner"
            src={partner.logo}
            class="max-h-24"
          />
        </a>
      {/each}
    </div>
  </section>
</main>

<style>
  .embla__slide {
    position: relative;
    flex: 0 0 70%; /* Each slide takes 80% of the viewport width */
    min-width: 70%; /* Ensures the slides do not shrink */
    padding: 0 8px;
  }
  @media (min-width: 640px) {
    .embla__slide {
      flex: 0 0 44%;
      min-width: 44%;
      padding: 0 16px;
    }
  }
  @media (min-width: 1280px) {
    .embla__slide {
      flex: 0 0 33%;
      min-width: 33%;
    }
  }
</style>
