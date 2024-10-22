<script>
  import centrulSrc from "$lib/images/proiecte/her_city/Centrul-de-proiecte.png";
  import Typography from "$lib/components/font/typography.svelte";
  import PageLayout from "$lib/components/pageLayout.svelte";
  import continuumSrc from "$lib/images/proiecte/continuum_feminin/continuum_cover.png";
  import HeroSection from "../her-city-our-europe/HeroSection.svelte";
  import generatiiSrc from "$lib/images/proiecte/continuum_feminin/intalnire_generatii.jpg";
  import paintingSrc from "$lib/images/proiecte/continuum_feminin/painting.jpg";
  import expozitieSrc from "$lib/images/proiecte/continuum_feminin/expozitie.jpg";
  import Timeline from "./timeline.svelte";
  import SectionTitle from "$lib/components/typography/sectionTitle.svelte";
  import Tabs from "./tabs.svelte";
</script>

<PageLayout withPadding={false}>
  <div class="flex flex-col items-center bg-white">
    <HeroSection bannerSrc={continuumSrc} paths={[]} fixedHeight={false} />
    <section
      class="flex flex-col w-full gap-8 p-8 bg-white md:grid-rows-2 lg:grid-rows-1 md:grid-cols-6 lg:grid-cols-3 md:grid text-slate-700 text-start"
    >
      <div
        class="flex flex-col gap-4 md:col-start-1 md:col-end-4 lg:col-span-1"
      >
        <img
          class="object-cover w-full h-96"
          src={generatiiSrc}
          alt="generatii"
        />
        <Typography variant="small">
          Situat la intersecția dintre activismul feminist și demersurile
          culturale contemporane, Continuum Feminin facilitează dialogul și
          colaborarea între trei generații de femei - tânără, adultă și
          vârstnică - prin întâlniri tematice și produse culturale, evidențiind
          diversitatea și complexitatea experienței feminine și promovând
          solidaritatea și incluziunea.
        </Typography>
      </div>

      <div
        class="flex flex-col gap-4 md:col-start-4 md:col-end-7 lg:col-span-1"
      >
        <img
          class="object-cover w-full h-96"
          src={paintingSrc}
          alt="activitati"
        />
        <Typography variant="small">
          Configurat ca spațiu sigur și autentic al comunicării și colaborării
          transgeneraționale, Continuum Feminin include în cadrul fiecărei
          întâlniri tematice realizarea colectivă a unor produse culturale:
          fotografii, colaje, tablouri, instalații sau performance-uri, menite
          să faciliteze exprimarea și reflexia asupra temelor abordate și să
          ofere o platformă tangibilă experiențelor împărtășite.
        </Typography>
      </div>
      <div
        class="flex flex-col gap-4 md:row-start-2 md:col-start-2 md:col-end-6 lg:col-span-1 lg:col-start-3 lg:row-start-1"
      >
        <img
          class="object-cover w-full h-96"
          src={expozitieSrc}
          alt="expozitie"
        />
        <Typography variant="small">
          Expoziția finală pune în lumină complexitatea și diversitatea
          experiențelor feminine, prezentând publicului larg lucrările colective
          ale celor trei generații, într-o poveste comună despre solidaritate,
          empatie și acțiune împreună.
        </Typography>
      </div>
    </section>
    <Timeline />
    <SectionTitle title="Ateliere" className="text-slate-700" />
    <Tabs />
    <section class="my-8 md:my-16">
      <img
        src={centrulSrc}
        alt="Centrul de proiecte"
        class="w-full px-16 w-[800px]"
      />
    </section>
  </div>
</PageLayout>
