<script>
  import hero from "$lib/images/proiecte/her_city/home.png";
  import logo from "$lib/images/proiecte/her_city/her-city-logo.png";
  import lego1 from "$lib/images/proiecte/her_city/lego1.png";
  import legoStraight from "$lib/images/proiecte/her_city/legostraight.png";
  import Typography from "$lib/components/font/typography.svelte";
  import poza1 from "$lib/images/proiecte/her_city/poza1.jpg";
  import herEuropeSrc from "$lib/icons/her_europe.png";
  import logoBlack from "$lib/images/proiecte/her_city/logoBlack.png";
  import herCityFlag from "$lib/images/proiecte/her_city/her_city_flag.jpg";
  import legoBig from "$lib/images/proiecte/her_city/compozitie_her-europe.png";
  import djSrc from "$lib/images/proiecte/her_city/dj.jpg";
  import dnbSrc from "$lib/images/proiecte/her_city/dnb.png";
  import squareSrc from "$lib/icons/square.png";
  import herPartySrc from "$lib/images/proiecte/her_city/Her-Party.png";
  import centrulSrc from "$lib/images/proiecte/her_city/Centrul-de-proiecte.png";
  import footerSrc from "$lib/images/proiecte/her_city/compozitie_footer.png";
  import HeroSection from "./HeroSection.svelte";
  import { fly } from "svelte/transition";
</script>

<div
  class="bg-white"
  in:fly={{ y: -50, duration: 250, delay: 300 }}
  out:fly={{ y: -50, duration: 250 }}
>
  <HeroSection bannerSrc={hero} logoSrc={logo}></HeroSection>
  <section class="flex flex-col w-full bg-white text-slate-700">
    <div class="flex flex-col justify-between w-full md:flex-row">
      <div
        class="max-w-[70ch] md:mt-auto flex items-center mx-8 md:mx-16 md:order-1 order-2"
      >
        <Typography variant="large" className="md:mt-16">
          <strong> Her City, Our Europe</strong> cercetează trecutul feminin,
          luminându-i realizările neștiute, completând și nuanțând astfel o
          istorie comună.
          <br /> <br />Proiectul propune publicului un periplu prin istorii încă
          nedezvăluite, ce vor reconfigura istoria, cultura și geografia
          Timișoarei, recuperându-le dimensiunea feminină și vor vizibiliza
          aportul femeilor la unitatea Europei. Povestea pe care o spune este
          una a rezistenței memoriei culturale feminine, a recunoașterii și
          revalorizării ei contemporane.<br /> <br /><strong>
            HerCity, Our Europe</strong
          > vizibilizează dependența egalității de gen de democrație și argumentează
          pentru practicarea ei.
        </Typography>
      </div>
      <img
        src={lego1}
        alt="compozitie"
        class="w-2/3 md:w-[60%] lg:w-[44%] self-end md:self-auto -mt-2 order-1 md:order-2"
      />
    </div>
    <div class="flex justify-end w-full">
      <div class="items-end flex mx-8 md:mx-12 mt-8 md:mt-24 max-w-[70ch]">
        <Typography variant="large">
          <strong>HerCity, Our Europe</strong> insistă asupra identității
          europene a timișorenilor, integrând cultura orașului în cea europeană
          și îmbogățindu-le pe ambele cu o perspectivă feminină asupra lor.
          Demersul va genera noi forme de exprimare, de lecturare a unei istorii
          și culturi comune. ​ <br /> <br />Prin trei experimente culturale
          inedite, proiectul contribuie la construirea unei identități comune,
          europene si a unui viitor inclusiv, din care femeile sunt parte
          integrantă.
        </Typography>
      </div>
    </div>
  </section>
  <section class="flex flex-col">
    <img alt="compozitie" src={legoStraight} class="z-10 w-1/2 mt-8 md:-mt-8" />
    <div
      class="flex flex-col w-full bg-white md:grid md:grid-rows-1 md:grid-cols-2"
    >
      <img
        alt="poza"
        src={poza1}
        class="w-[90%] md:w-[80%] md:-mt-2 -mt-[1px] align-self-start md:justify-self-end"
      />

      <div class="flex flex-col col-span-1 overflow-x-hidden">
        <div class="flex items-center w-full">
          <img
            src={legoStraight}
            alt="compozitie"
            class="order-1 w-32 h-48 md:w-1/3"
          />
          <img src={logoBlack} alt="logo" class="order-2 h-32 p-4 md:h-48" />
        </div>
        <div
          class="flex flex-col justify-between h-full m-8 md:mt-24 md:ml-24 text-slate-700"
        >
          <Typography variant="large" className="max-w-[50ch]">
            În spatele imaginii convenționale, Timișoara ascunde profiluri
            neexplorate și istorii încă nedezvăluite. HerCity va oferi o imagine
            alternativă a orașului, un itinerariu feminin, care va reconecta
            femeile cu trecutul și prezentul unei istorii și culturi urbane
            comune.
          </Typography>
          <Typography variant="xl" className="mt-8 md:mt-0"
            ><strong>din 20 august</strong> <br /> harta interactiva HerCity accesibila
            aici:</Typography
          >
        </div>
      </div>
    </div>
    <iframe
      src="https://her-city-map.vercel.app"
      class="w-full h-[70vh] md:h-[80vh] xl:px-32 mt-8 md:mt-16"
      title="her city map"
    />
  </section>
  <section
    class="grid grid-cols-1 grid-rows-2 pt-8 overflow-hidden md:grid-rows-1 md:grid-cols-2 md:pt-24 md:pl-16 lg:pl-48"
  >
    <div class="m-8 md:m-0">
      <img src={herEuropeSrc} class="w-2/3" alt="Her europe logo" />
      <Typography
        variant="large"
        className="max-w-[50ch] mt-16 md:mt-24 text-slate-700"
        >HerEurope vizibilizează aportul femeilor la construcția europeană,
        prezentându-le publicului timișorean în cadrul unei expoziții virtuale,
        a unei reviste și a unui montaj video, menite să le omagieze viziunea și
        visele despre o Europă democratică, solidară și, mai ales, unită de o
        cultură comună.</Typography
      >
    </div>
    <div class="relative flex flex-col w-full md:flex-row">
      <img src={herCityFlag} alt="UE Flag" class="object-cover w-full" />
      <img
        src={legoStraight}
        alt="lego"
        class="self-end w-2/3 h-full md:w-48 md:rotate-180 md:self-auto"
      />
    </div>
  </section>
  <section>
    <img
      src={legoBig}
      class="hidden w-full h-full -mt-[1px] md:-mt-[4px] md:block"
      alt="lego"
    />
  </section>
  <section class="grid grid-cols-6 grid-rows-2 md:grid-rows-1 md:grid-cols-12">
    <div
      class="flex flex-col col-start-1 col-end-6 row-start-2 md:row-start-1 md:col-end-7 md:col-start-2"
    >
      <img src={djSrc} alt="dj" class="w-full" />
      <div class="flex justify-between w-full">
        <Typography variant="large" className="text-slate-700 m-2"
          ><p class="text-xl font-bold">28 octombrie</p>
          <br />eveniment muzical HerParty
          <br />
          Mixează: DJ Mantra&artiste locale
          <br />
          Locație: Escape Underground Hub</Typography
        >
        <img src={squareSrc} alt="lego" class="w-24 md:w-24 lg:w-36" />
      </div>
    </div>
    <div
      class="flex flex-col justify-between col-start-6 col-end-7 row-start-2 md:row-start-1 md:col-end-8 md:col-start-7"
    >
      <img src={squareSrc} alt="lego" class="hidden w-full md:block" />
      <img src={dnbSrc} alt="dnb" class="self-end rotate-270" />
    </div>
    <div
      class="flex flex-col justify-center col-span-7 row-start-1 p-8 md:row-start-1 md:col-end-13 md:col-start-9"
    >
      <img
        src={herPartySrc}
        alt="her party logo "
        class="w-2/3 mb-8 md:mb-24"
      />
      <Typography variant="large" className="max-w-[50ch] text-slate-700">
        Celebrăm, recunoaștem și onorăm prin HerParty energia, curajul și
        motivarea tuturor predecesoarelor noastre, ale căror experiențe ne
        întregesc biografia comună.<br /> <br /> Evenimentul muzical artistic este
        susținut de către 4 artiste, care au îndrăznit să abordeze domenii muzicale
        neconvenționale: DNB (Drum and bass).
      </Typography>
    </div>
  </section>
  <section class="my-8 md:my-16">
    <img
      src={centrulSrc}
      alt="Centrul de proiecte"
      class="w-full px-4 md:w-1/3 md:mx-36"
    />
  </section>
  <section class="w-full h-full">
    <img src={footerSrc} alt="footer" class="w-full h-[40vh] md:h-[80vh]" />
  </section>
</div>
