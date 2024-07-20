<script>
  import Typography from "$lib/components/font/typography.svelte";
  import BlogPost from "$lib/components/layout/blogPost.svelte";
  import PageLayout from "$lib/components/pageLayout.svelte";
  import first from "$lib/images/actiuni/copacul-drepturilor/1.jpg";
  import second from "$lib/images/actiuni/copacul-drepturilor/2.jpg";
  import third from "$lib/images/actiuni/copacul-drepturilor/3.jpg";
  import fourth from "$lib/images/actiuni/copacul-drepturilor/4.jpg";
</script>

<PageLayout>
  <BlogPost
    title="Ziua Internațională a Drepturilor Omului"
    date="10/12/2023"
    location="Sediul SPICC"
    slides={[third, second, first, fourth]}
  >
    <Typography slot="info">
      10 decembrie marchează aniversarea adoptării Declarației Universale a
      Drepturilor Omului de către Adunarea Generală a Organizației Națiunilor
      Unite în 1948, prima proclamare internațională care a stabilit drepturile
      fundamentale ale tuturor persoanelor, indiferent de naționalitate, statut
      social sau orice alt criteriu. <br /> <br /> Este o zi de reflecție asupra
      progreselor înregistrate în domeniul drepturilor omului, dar și pentru a aduce
      în atenție provocările și încălcările care continuă să existe în diferite părți
      ale lumii. Am celebrat această zi prin decorarea unui copac cu cele mai importante
      drepturi umane, ca simbol al angajamentului nostru activ în combaterea injustiției
      și în promovarea unei lumi mai drepte, fundamentată pe respectarea demnității
      umane.</Typography
    ></BlogPost
  >
</PageLayout>

<style>
  .grid {
    gap: 0;
  }
</style>
