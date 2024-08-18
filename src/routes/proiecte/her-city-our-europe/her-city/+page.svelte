<script>
  import HeroSection from "../HeroSection.svelte";
  import bannerSrc from "$lib/images/proiecte/her_city/her-city/banner.jpg";
  import logoSrc from "$lib/images/proiecte/her_city/her-city/logo.png";
  import Typography from "$lib/components/font/typography.svelte";
  import legoFirst from "$lib/images/proiecte/her_city/her-city/011.png";
  import legoSecond from "$lib/images/proiecte/her_city/her-city/02.png";
  import tourSrc from "$lib/images/proiecte/her_city/her-city/tour.jpg";
  import Preview from "$lib/components/icons/preview.svelte";
  import Hidden from "$lib/icons/hidden.svelte";
  import footerSrc from "$lib/images/proiecte/her_city/her-city/04.png";

  let showOverlay = true;

  const handleOverlayClick = () => {
    showOverlay = !showOverlay;
  };
</script>

<div class="bg-white text-slate-700">
  <HeroSection {bannerSrc} {logoSrc} />
  <section class="flex flex-col w-full lg:grid lg:grid-cols-2 max-w-screen-3xl">
    <Typography
      variant="large"
      className="max-w-[50ch] m-8 lg:m-24 order-2 lg:order-1"
      ><strong>HerCity</strong> reconfigurează harta culturală a Timișoarei, luminând
      zone aflate acum în penumbră, completând-o cu locurile marcate de feminin și
      împărtășind astfel generației de mâine o istorie urbană inclusivă, din care
      femeile sunt parte integrantă.</Typography
    >
    <img
      src={legoFirst}
      alt="compozitie"
      class="self-end order-1 w-1/2 -mt-2 lg:w-full lg:order-2"
    />
  </section>
  <section class="flex flex-col w-full gap-8 lg:mt-16 lg:grid lg:grid-cols-2">
    <div class="relative w-full">
      <img src={legoSecond} alt="compozitie" />
      <img
        src={tourSrc}
        alt="tour"
        class="absolute bottom-0 right-0 object-cover w-4/5 h-4/5"
      />
    </div>
    <div class="flex flex-col">
      <Typography className="font-thin max-w-[70ch] mx-8 lg:m-0"
        >29 Iulie /ora 11,00 <br />

        Tur ghidat organizat în colaborare cu IREA (Institutul Român de Educare
        a Adulților)</Typography
      ><Typography
        variant="large"
        className="mt-8 lg:mt-16 max-w-[70ch] m-8 lg:m-0"
      >
        Turul ghidat HerCity propune publicului un itinerariu insolit,
        oferindu-i ocazia cunoașterii unor părți mai puțin cunoscute din istoria
        și cultura Timișoarei, marcate de prezențe feminine. Traseul își propune
        să surprindă publicul cu poveștile româncelor, maghiarelor, evreicelor
        și nemțoaicelor vremurilor trecute, într-o narațiune în urma căreia
        femeile își vor revendica locul în memoria culturală urbană. <br />
        <br />Ghidaj asigurat de către tinerele feministe,voluntare SPICC.</Typography
      >
    </div>
  </section>
  <section class="m-8 lg:m-24">
    <Typography className="font-thin ">Din 20 August <br /> <br /></Typography>
    <Typography variant="large" className="max-w-[70ch]  ">
      Harta interactivă HerCity completează demersul reparatoriu al istoriei și
      culturii timișorene, indicând locurile care poartă amprente feminine și
      oferind informații biografice despre femeile care le-au marcat prin
      prezența lor.
    </Typography>
  </section>
  <div class="relative w-full mt-8 lg:mt-16 h-[90vh] lg:h-[90vh]">
    <iframe
      src="https://her-city-map.vercel.app"
      class="relative z-0 w-full h-full"
      title="her city map"
      allowtransparency
    />
    <div
      class={`${showOverlay ? "flex" : "hidden"} flex-col items-center  justify-center blur-overlay`}
      role="button"
      tabindex={0}
      on:keydown={handleOverlayClick}
      on:click={handleOverlayClick}
    >
      <Preview className="w-32 h-32 lg:h-64 lg:w-64" />
      <Typography variant="xl" className="text-slate-700"
        >Apasă pentru a vizualiza harta</Typography
      >
    </div>
    <div
      class={`${showOverlay ? "hidden" : "flex"} absolute top-4 lg:top-8 btn-circle right-4 lg:right-8 btn btn-tertiary btn-md lg:btn-lg`}
      role="button"
      tabindex={0}
      on:keydown={handleOverlayClick}
      on:click={handleOverlayClick}
    >
      <Hidden />
    </div>
  </div>
  <img src={footerSrc} alt="compozitie" class="mt-16 h-1/2" />
</div>

<style>
  .blur-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.2); /* Semi-transparent background */
    backdrop-filter: blur(20px); /* Apply blur effect */
    z-index: 10;
  }
</style>
