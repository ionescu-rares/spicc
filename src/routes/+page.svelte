<script>
  import News from "$lib/components/news/News.svelte";
  import lauralaurentiu from "$lib/images/sponsors/lauralaurentiu.jpg";
  import toluna from "$lib/images/sponsors/toluna.png";
  import reteaua from "$lib/images/sponsors/reteaua.png";
  import timisoaraExpress from "$lib/images/sponsors/timisoaraexpress.png";
  import labcom from "$lib/images/sponsors/labcom.png";
  import initiativa from "$lib/images/sponsors/initiativa.png";
  import SectionTitle from "$lib/components/typography/sectionTitle.svelte";
  import Hero from "$lib/components/hero.svelte";
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
