<script>
  import Typography from "$lib/components/font/typography.svelte";
  import PageLayout from "$lib/components/pageLayout.svelte";
  import first from "$lib/images/actiuni/copacul-drepturilor/1.jpg";
  import second from "$lib/images/actiuni/copacul-drepturilor/2.jpg";
  import third from "$lib/images/actiuni/copacul-drepturilor/3.jpg";
  import fourth from "$lib/images/actiuni/copacul-drepturilor/4.jpg";
</script>

<PageLayout>
  <section
    class="flex flex-col w-full h-full grid-rows-2 gap-0 md:flex-none md:grid xl:grid-cols-12 md:grid-rows-4 md:grid-cols-2"
  >
    <div
      class="items-center p-8 text-center md:grid xl:row-start-1 xl:row-end-2 xl:col-end-5 xl:col-start-1 xl:text-start md:bg-gradient-to-tr from-base-100 to-gray-700"
    >
      <Typography variant="xl" bold
        >Ziua Internațională a Drepturilor Omului</Typography
      >
    </div>
    <img
      alt="tree"
      class="object-cover w-full h-full xl:row-start-1 xl:row-end-2 xl:col-end-8 xl:col-start-5"
      src={first}
    />
    <img
      alt="tree"
      class="object-cover w-full h-full xl:row-start-1 xl:row-end-2 xl:col-end-13 xl:col-start-8"
      src={second}
    />
    <div
      class="py-8 md:px-8 xl:row-start-2 xl:row-end-3 xl:col-end-5 xl:col-start-1 text-start md:bg-gradient-to-tr from-base-100 to-gray-700"
    >
      <Typography>
        10 decembrie marchează aniversarea adoptării Declarației Universale a
        Drepturilor Omului de către Adunarea Generală a Organizației Națiunilor
        Unite în 1948, prima proclamare internațională care a stabilit
        drepturile fundamentale ale tuturor persoanelor, indiferent de
        naționalitate, statut social sau orice alt criteriu. <br /> <br /> Este o
        zi de reflecție asupra progreselor înregistrate în domeniul drepturilor omului,
        dar și pentru a aduce în atenție provocările și încălcările care continuă
        să existe în diferite părți ale lumii. Am celebrat această zi prin decorarea
        unui copac cu cele mai importante drepturi umane, ca simbol al angajamentului
        nostru activ în combaterea injustiției și în promovarea unei lumi mai drepte,
        fundamentată pe respectarea demnității umane.
      </Typography>
    </div>
    <img
      alt="tree"
      class="object-cover w-full h-full xl:row-start-2 xl:row-end-3 xl:col-end-10 xl:col-start-5"
      src={third}
    />
    <img
      alt="tree"
      class="object-cover w-full h-full xl:row-start-2 xl:row-end-3 xl:col-end-13 xl:col-start-10"
      src={fourth}
    />
  </section>
</PageLayout>

<style>
  .grid {
    gap: 0;
  }
</style>
