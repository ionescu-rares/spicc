<script>
  import Carousel from "$lib/components/carousel.svelte";
  import Typography from "$lib/components/font/typography.svelte";
  import PageLayout from "$lib/components/pageLayout.svelte";
  import SectionTitle from "$lib/components/typography/sectionTitle.svelte";
  import first from "$lib/images/news/flashmob/firul_solidaritatii_1.jpg";
  import second from "$lib/images/news/flashmob/firul_solidaritatii_2.jpg";
  import third from "$lib/images/news/flashmob/flashmob.jpg";
</script>

<PageLayout>
  <div class="flex max-w-screen-xl flex-col w-full text-start">
    <SectionTitle title="Firul solidarității" withSpacing={false}>
      <div class="flex gap-4" slot="subtitle">
        <Typography>📅 23.11.2023</Typography>
        <Typography>📍 Piața Operei</Typography>
      </div></SectionTitle
    >
    <Carousel
      className="h-[300px] md:h-[600px] rounded-xl mt-4"
      slides={[first, second, third]}
    />

    <div class="mt-8">
      <Typography>
        Sâmbătă, 25 noiembrie, cu ocazia Zilei Internaționale pentru Eliminarea
        Violenței asupra Femeilor, am invitat timișorenii să se alăture
        flashmobului pe care l-am organizat în Piața Operei, la ora 13.30.
        Membrele asociației au întins un fir roșu, simbol al conexiunii între
        persoane, acțiuni, mișcări și inițiative care au ca scop combaterea
        violenței de gen și sprijinirea victimelor și au invitat publicul să-l
        prindă și să-l dea mai departe tuturor celor solidari cu această cauză.
        Timp de câteva minute am afișat mesaje împotriva violenței asupra
        femeilor și am citit date relevante, referitoare la situația violenței
        de gen în lume, dar mai ales în România. <br /><br />Prin acest
        flashmob, Asociația SPICC a invitat publicul timișorean să facă parte
        dintr-un dialog colectiv despre un viitor fără violență de gen și să
        scandeze împreună,
        <strong>STOP VIOLENȚEI ÎMPOTRIVA FEMEILOR!</strong>”</Typography
      >
    </div>
  </div>
</PageLayout>
