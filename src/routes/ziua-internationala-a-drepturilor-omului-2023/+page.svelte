<script>
  import Typography from "$lib/components/font/typography.svelte";
  import PageLayout from "$lib/components/pageLayout.svelte";
  import first from "$lib/images/actiuni/copacul-drepturilor/1.jpg";
  import second from "$lib/images/actiuni/copacul-drepturilor/2.jpg";
  import third from "$lib/images/actiuni/copacul-drepturilor/3.jpg";
  import fourth from "$lib/images/actiuni/copacul-drepturilor/4.jpg";
</script>

<PageLayout>
  <section class="grid w-full h-full grid-cols-12 grid-rows-2 gap-0">
    <div
      class="grid items-center col-start-1 col-end-5 row-start-1 row-end-2 p-8 text-start bg-gradient-to-tr from-base-100 to-gray-700"
    >
      <Typography variant="xl" bold
        >Ziua Internațională a Drepturilor Omului</Typography
      >
    </div>
    <img
      alt="tree"
      class="object-cover w-full h-full col-start-5 col-end-8 row-start-1 row-end-2"
      src={first}
    />
    <img
      alt="tree"
      class="object-cover w-full h-full col-start-8 col-end-13 row-start-1 row-end-2"
      src={second}
    />
    <div
      class="col-start-1 col-end-5 row-start-2 row-end-3 p-8 text-start bg-gradient-to-tr from-base-100 to-gray-700"
    >
      <Typography>
        10 decembrie marchează aniversarea adoptării Declarației Universale a
        Drepturilor Omului de către Adunarea Generală a Organizației Națiunilor
        Unite în 1948, prima proclamare internațională care a stabilit
        drepturile fundamentale ale tuturor persoanelor, indiferent de
        naționalitate, statut social sau orice alt criteriu. Este o zi de
        reflecție asupra progreselor înregistrate în domeniul drepturilor
        omului, dar și pentru a aduce în atenție provocările și încălcările care
        continuă să existe în diferite părți ale lumii. Am celebrat această zi
        prin decorarea unui copac cu cele mai importante drepturi umane, ca
        simbol al angajamentului nostru activ în combaterea injustiției și în
        promovarea unei lumi mai drepte, fundamentată pe respectarea demnității
        umane.
      </Typography>
    </div>
    <img
      alt="tree"
      class="object-cover w-full h-full col-start-5 col-end-10 row-start-2 row-end-3"
      src={third}
    />
    <img
      alt="tree"
      class="object-cover w-full h-full col-start-10 col-end-13 row-start-2 row-end-3"
      src={fourth}
    />
  </section>
</PageLayout>

<style>
  .grid {
    gap: 0;
  }
  .object-cover {
    object-fit: cover;
  }
  img {
    display: block;
  }
</style>
