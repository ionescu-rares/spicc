<script>
  import hero from "$lib/images/proiecte/her_city/home.png";
  import logo from "$lib/images/proiecte/her_city/her-city-logo.png";
  import lego1 from "$lib/images/proiecte/her_city/lego1.png";
  import legoStraight from "$lib/images/proiecte/her_city/legostraight.png";
  import Typography from "$lib/components/font/typography.svelte";
  import poza1 from "$lib/images/proiecte/her_city/poza1.jpg";
  import logoBlack from "$lib/images/proiecte/her_city/logoBlack.png";
</script>

<div class="bg-white">
  <section class="relative w-full h-[calc(100svh-87px)]">
    <img alt="her city banner" src={hero} class="object-cover w-full h-full" />
    <img
      alt="logo"
      src={logo}
      class="absolute top-0 left-0 right-0 mx-auto top-24 w-96"
    />
  </section>
  <section class="flex flex-col w-full bg-white text-slate-700">
    <div class="flex flex-col justify-between w-full md:flex-row">
      <div
        class="max-w-[70ch] mt-16 md:mt-auto flex items-center mx-8 md:mx-16 md:order-1 order-2"
      >
        <Typography>
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
      <div class="items-end flex mx-8 md:mx-12 mt-24 max-w-[70ch]">
        <Typography>
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
    <img alt="compozitie" src={legoStraight} class="z-10 w-1/2 -mt-8" />
    <div class="grid w-full grid-cols-2 bg-white">
      <img alt="poza" src={poza1} class="w-[80%] -mt-2 place-self-end" />

      <div class="flex flex-col col-span-1">
        <div class="flex w-full">
          <img src={legoStraight} alt="compozitie" class="w-1/3 h-48" />
          <img src={logoBlack} alt="logo" class="h-48 ml-16" />
        </div>
        <div
          class="flex flex-col justify-between h-full mt-24 ml-24 text-slate-700"
        >
          <Typography className="max-w-[50ch]">
            În spatele imaginii convenționale, Timișoara ascunde profiluri
            neexplorate și istorii încă nedezvăluite. HerCity va oferi o imagine
            alternativă a orașului, un itinerariu feminin, care va reconecta
            femeile cu trecutul și prezentul unei istorii și culturi urbane
            comune.
          </Typography>
          <Typography
            ><strong>din 20 august</strong> <br /> <br /> harta interactiva HerCity
            accesibila aici:</Typography
          >
        </div>
      </div>
    </div>
  </section>
</div>
