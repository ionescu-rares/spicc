<script>
  import centrulSrc from "$lib/images/proiecte/her_city/Centrul-de-proiecte.png";
  import SectionTitle from "./../../../../lib/components/typography/sectionTitle.svelte";
  import Typography from "./../../../../lib/components/font/typography.svelte";
  import bannerSrc from "$lib/images/proiecte/her_city/her_europe/Banner.jpg";
  import herEuropeReversed from "$lib/icons/her_europe_reversed.png";
  import HeroSection from "../HeroSection.svelte";
  import ziarSrc from "$lib/images/proiecte/her_city/her_europe/ziar.jpg";
  import legoHorizontal from "$lib/images/proiecte/her_city/her_europe/01.png";
  import womanSrc from "$lib/images/proiecte/her_city/her_europe/04.jpg";
  import Divider from "./divider.svelte";
  import footerSrc from "$lib/images/proiecte/her_city/her_europe/05.png";
  import { fly } from "svelte/transition";
</script>

<div
  class="bg-white text-slate-700"
  in:fly={{ y: -50, duration: 250, delay: 300 }}
  out:fly={{ y: -50, duration: 250 }}
>
  <HeroSection {bannerSrc} logoSrc={herEuropeReversed} />
  <section
    class="flex flex-col gap-8 lg:gap-0 lg:grid lg:grid-cols-3 lg:grid-rows-2"
  >
    <Typography className="lg:col-start-1  lg:col-end-2 m-24  row-span-1">
      <strong>HerEurope</strong> vizibilizează aportul femeilor la construcția europeană,
      prezentându-le publicului timișorean în cadrul unei expoziții virtuale, a unei
      reviste și a unui montaj video, menite să le omagieze viziunea și visele despre
      o Europă democratică, solidară și, mai ales, unită de o cultură comună.</Typography
    >
    <img
      src={legoHorizontal}
      alt="lego"
      class="absolute block w-1/3 lg:hidden"
    />
    <Divider className="lg:hidden" />
    <Typography className="lg:col-start-1 lg:col-end-2 m-8 lg:m-24 row-start-2">
      <Typography variant="xl" bold>Ziarul HerManifest</Typography><br />Ziarul
      HerManifest, alcătuit din fragmente din ziarele vremii, urmărește,
      cronologic, contribuția femeilor la transpunerea idealului comunitar
      european în construcția instituțională a Uniunii Europene</Typography
    >
    <div class="relative grid w-full row-span-2 lg:grid-cols-2 lg:col-span-2">
      <Typography className=" place-self-center px-8 lg:p-24"
        ><strong>31 august</strong>
        <br /><br />întâlnire a publicului timișorean cu voluntarele SPICC, în
        cadrul acțiunii de distribuire a ziarului HerManifest.
        <br /><br /><br /><strong>Locații:</strong> <br /><br />Piața Unirii,
        Piața Libertății, Piața Victoriei
      </Typography>
      <img
        src={ziarSrc}
        alt="ziar"
        class="z-20 object-cover w-full h-full mt-16 lg:mt-0 place-self-center"
      />
    </div>
  </section>
  <Divider className="hidden lg:grid" />

  <section>
    <div
      class="flex flex-col items-center max-w-screen-xl gap-32 mx-auto my-24 lg:grid lg:grid-cols-2"
    >
      <div class="w-full col-span-1 max-w-[70ch]">
        <Typography variant="xl" bold className="mx-8 lg:mx-0"
          >Expoziția virtuală HerEurope</Typography
        >
        <br />
        <Typography className="mx-8 lg:mx-0"
          >Expoziția virtuală HerEurope celebrează unitatea europeană,
          prezentând publicului de pretutindeni femeile remarcabile, care au
          jucat un rol important în construirea și dezvoltarea Uniunii Europene.
          Expoziția argumentează pentru rădăcina comună care leagă, în multe și
          surprinzătoare feluri, experiențele feminine, pentru importanța
          recunoașterii reciproce și a identificării cu unu multiplu, pentru
          povestea unui destin comun, european, în care ne regăsim cu toții și
          care ne întregește pe toți.</Typography
        >
      </div>
      <div class="flex w-full">
        <img src={womanSrc} alt="woman" class="w-full h-full" />
      </div>
    </div>
  </section>
  <section
    class="flex flex-col items-center justify-center max-w-screen-lg mx-auto"
  >
    <SectionTitle title="Her Europe - filmul" className="italic" />
    <iframe
      class="w-full h-[30vh] lg:h-[60vh]"
      src="https://www.youtube.com/embed/MMPYmxJ_XrU?si=dcBHn3fn_XNgskUi"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </section>
  <section class="my-8 lg:my-16">
    <img
      src={centrulSrc}
      alt="Centrul de proiecte"
      class="w-full px-4 lg:w-1/3 lg:mx-36"
    />
  </section>
  <img src={footerSrc} alt="compozitie" class="h-1/2" />
</div>
