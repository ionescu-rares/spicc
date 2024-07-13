<script>
  import Article from "$lib/components/news/article.svelte";
  import PageLayout from "$lib/components/pageLayout.svelte";
  import SectionTitle from "$lib/components/typography/sectionTitle.svelte";
  import herCitySrc from "$lib/images/proiecte/hercity.jpg";
  import femSrc from "$lib/images/proiecte/fem.jpg";
  import MaiMulteButton from "$lib/components/buttons/MaiMulteButton.svelte";
  import thinkOutsideSrc from "$lib/images/proiecte/thinkoutside.jpg";
</script>

<PageLayout withSpacing
  ><SectionTitle title="Proiecte" />
  <Article title="Her City. Our Europe" src={herCitySrc}>
    <p class="text-lg md:text-2xl">
      HerCity reconfigurează harta culturală a Timișoarei, luminând zone aflate
      acum în penumbră, completând-o cu locurile marcate de feminin și
      împărtășind astfel generației de mâine o istorie urbană inclusivă, din
      care femeile sunt parte integrantă.
    </p>
    <MaiMulteButton /></Article
  >

  <Article title="FEM" src={femSrc} reversed>
    <p class="text-lg md:text-2xl">
      FEM este un proiect de formare și educație non-formală a tinerilor, care
      vizează un aport de cunoaștere adus acestora în domeniul egalității de
      șanse și de gen, deconstruirea stereotipurilor și rolurilor tradiționale
      de gen prin gândire critică și stimularea cetățeniei active prin
      implicarea lor în construirea unei comunități online, capabile să adreseze
      informat problematica de gen.
    </p>
    <MaiMulteButton /></Article
  >
  <Article title="Think outside the box" src={thinkOutsideSrc}>
    <p class="text-lg md:text-2xl">
      „Think outside the box!”- Tineri împotriva stereotipurilor de gen, proiect
      finanțat de Primăria Municipiului Timișoara - a promovat egalitatea de gen
      și combaterea stereotipurilor de gen în rândul tinerilor liceeni, prin
      implicarea directă a acestora în activități culturale extracurriculare,
      menite să reducă deficitul de cunoaștere în ceea ce privește contribuția
      femeilor la patrimoniul cultural regional, național și internațional.
    </p>
    <MaiMulteButton /></Article
  >
</PageLayout>
