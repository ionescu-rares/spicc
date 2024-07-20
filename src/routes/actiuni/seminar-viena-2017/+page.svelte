<script>
  import Typography from "$lib/components/font/typography.svelte";
  import BlogPost from "$lib/components/layout/blogPost.svelte";
  import PageLayout from "$lib/components/pageLayout.svelte";
  import first from "$lib/images/actiuni/seminarul-european-2017/1.jpg";
  import second from "$lib/images/actiuni/seminarul-european-2017/2.jpg";
  import third from "$lib/images/actiuni/seminarul-european-2017/3.jpg";
</script>

<PageLayout>
  <BlogPost
    title="Seminar european  privind prevenirea și combaterea discriminării la nivel local"
    date="02/03/2017"
    location="Viena"
    slides={[first, second, third]}
  >
    <Typography slot="info">
      Programul seminarului european a inclus participarea la discutiile din
      cadrul workshop-ului tematic privind violenta de gen moderat de Birgitt
      Haller de la Institutul de Cercetare a Conflictului (Viena), intalnirea cu
      Dna Shams Asadi – directorul Biroului pentru Drepturile Omului din cadrul
      Primariei Viena -, precum si vizite de studiu la Centrul de Interventie
      impotriva Violentei Domestice din Viena. <br /> <br /> Evenimentul a atras
      participanti din peste 15 tari, reprezentand atat institutii publice, structuri
      politienesti, Comisia Europeana, cat si ONGuri si organizatii internationale
      precum OSCE, FRA, ECRI.
    </Typography>
  </BlogPost>
</PageLayout>
