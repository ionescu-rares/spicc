<script>
  import centrulSrc from "$lib/images/proiecte/her_city/Centrul-de-proiecte.png";
  import dnbSrc from "$lib/images/proiecte/her_city/dnb.png";
  import bannerSrc from "$lib/images/proiecte/her_city/her_party/banner.jpg";
  import HeroSection from "../HeroSection.svelte";
  import logoSrc from "$lib/images/proiecte/her_city/her_party/logo.png";
  import Typography from "$lib/components/font/typography.svelte";
  import lego from "$lib/images/proiecte/her_city/her_party/01.png";
  import djSrcFirst from "$lib/images/proiecte/her_city/her_party/02.jpg";
  import djSrcSecond from "$lib/images/proiecte/her_city/her_party/03.jpg";
  import herSrc from "$lib/images/proiecte/her_city/her_party/her.png";
  import partySrc from "$lib/images/proiecte/her_city/her_party/party.png";
  import secondLego from "$lib/images/proiecte/her_city/her_party/04.png";
  import legoHard from "$lib/images/proiecte/her_city/her_party/05.png";
  import footerSrc from "$lib/images/proiecte/her_city/her_party/06.png";
  import { fly } from "svelte/transition";
</script>

<div
  class="bg-white text-slate-700"
  in:fly={{ y: -50, duration: 250, delay: 300 }}
  out:fly={{ y: -50, duration: 250 }}
>
  <HeroSection {bannerSrc} {logoSrc} />
  <section
    class="flex flex-col w-full mx-auto md:grid md:grid-cols-2 max-w-screen-2xl"
  >
    <img src={lego} alt="compozitie" class="flex self-end w-1/2 md:hidden" />
    <Typography
      variant="large"
      className="max-w-[50ch] m-8 md:m-24 self-center"
    >
      <strong> HerParty</strong> celebrează curajul, îndrăzneala și viziunea predecesoarelor
      noastre și rădăcina comună a experiențelor noastre feminine, printr-un eveniment
      artistic muzical susținut de către femei temerare, care au abordat domenii
      muzicale neconvenționale (DNB), pentru femeile care ne sunt sursă de inspirație
      și tărie și veritabile modele. Vedeta HerParty, la care vor performa alte 3
      artiste din România, va fi DJ Mantra, reprezentantă a inițiativei EQ50, grupare
      de artiste din Marea Britanie, care militează pentru o mai bună reprezentare
      de gen în DNB.
    </Typography>
    <div class="grid grid-rows-2 -mt-1">
      <img src={lego} alt="compozitie" class="hidden w-full md:block" />
      <Typography
        variant="large"
        className="mx-8 md:mx-0 mt-8 md:mt-24 max-w-screen-2xl"
      >
        Mixează: <strong>DJ Mantra & artiste locale</strong> <br />
        Locație: <strong>Escape Underground Hub</strong>
      </Typography>
    </div>
  </section>
  <section
    class="relative flex flex-col w-full gap-48 mx-auto md:mt-0 md:gap-0 md:grid md:grid-cols-2 max-w-screen-2xl place-items-center"
  >
    <img src={djSrcFirst} alt="dj" class="w-full md:p-24" />
    <div class="relative w-full">
      <img src={djSrcSecond} alt="dj" class="w-full" />
      <img
        src={herSrc}
        alt="her"
        class="absolute w-32 left-2 -top-12 md:w-96 md:-top-32"
      />
      <img
        src={partySrc}
        alt="party"
        class="absolute right-2 md:w-24 w-8 bottom-[105%]"
      />
    </div>
  </section>
  <div class="flex w-full">
    <img
      src={secondLego}
      alt="compozitie"
      class="w-1/2 h-64 pr-16 -mt-32 md:h-96"
    />
    <img src={dnbSrc} alt="dnb" class="self-center h-32 md:h-64" />
  </div>
  <section class="relative flex flex-col md:grid md:grid-cols-2">
    <Typography className="max-w-[70ch] p-8 md:p-24" variant="large"
      >Sărbătorim femeile care au fost, pe cele care sunt, dar și pe cele care
      vor fi printr-un party deosebit, electrizant, prin muzică underground,
      pentru că este muzică despre toleranță și susținere reciprocă.</Typography
    >
    <img src={legoHard} class="w-full -mt-8 md:-mt-24" alt="compozitie" />
  </section>
  <section class="relative flex flex-col w-full my-24">
    <div class="relative top-0 left-0 w-full md:absolute">
      <img
        src={centrulSrc}
        alt="Centrul de proiecte"
        class="w-full px-4 mb-8 md:mb-0 md:w-1/3 md:mx-36"
      />
    </div>
    <img src={footerSrc} alt="compozitie" class="h-1/2" />
  </section>
</div>
