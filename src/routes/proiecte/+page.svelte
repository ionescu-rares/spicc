<script>
  import Article from "$lib/components/news/article.svelte";
  import PageLayout from "$lib/components/pageLayout.svelte";
  import SectionTitle from "$lib/components/typography/sectionTitle.svelte";
  import herCitySrc from "$lib/images/proiecte/hercity.jpg";
  import femSrc from "$lib/images/proiecte/fem.jpg";
  import MaiMulteButton from "$lib/components/buttons/MaiMulteButton.svelte";
  import thinkOutsideSrc from "$lib/images/proiecte/thinkoutside.jpg";
  import { handleMaiMulteClick } from "$lib/utils/handleMaiMulteClick.svelte";
  import continuumSrc from "$lib/images/proiecte/continuum_feminin/continuum_cover.png";
</script>

<PageLayout withSpacing
  ><SectionTitle variant="huge" title="Proiecte" />
  <!-- <Article title="Continuum Feminin" src={continuumSrc}>
    <p class="text-lg md:text-2xl">
      Situat la intersecția dintre activismul feminist și demersurile culturale
      contemporane, Continuum Feminin facilitează dialogul și colaborarea între
      trei generații de femei - tânără, adultă și vârstnică - prin întâlniri
      tematice și produse culturale, evidențiind diversitatea și complexitatea
      experienței feminine și promovând solidaritatea și incluziunea.
    </p>
    <MaiMulteButton
      onClick={() => handleMaiMulteClick("/proiecte/continuum-feminin")}
    /></Article
  > -->
  <Article title="Her City. Our Europe" src={herCitySrc} reversed>
    <p class="text-lg md:text-2xl">
      HerCity reconfigurează harta culturală a Timișoarei, luminând zone aflate
      acum în penumbră, completând-o cu locurile marcate de feminin și
      împărtășind astfel generației de mâine o istorie urbană inclusivă, din
      care femeile sunt parte integrantă.
    </p>
    <MaiMulteButton
      onClick={() => handleMaiMulteClick("/proiecte/her-city-our-europe")}
    /></Article
  >

  <Article title="FEM" src={femSrc}>
    <p class="text-lg md:text-2xl">
      FEM este un proiect de formare și educație non-formală a tinerilor, care
      vizează un aport de cunoaștere adus acestora în domeniul egalității de
      șanse și de gen, deconstruirea stereotipurilor și rolurilor tradiționale
      de gen prin gândire critică și stimularea cetățeniei active prin
      implicarea lor în construirea unei comunități online, capabile să adreseze
      informat problematica de gen.
    </p>
    <MaiMulteButton onClick={() => handleMaiMulteClick("/fem")} /></Article
  >
  <Article title="Think outside the box" src={thinkOutsideSrc} reversed>
    <p class="text-lg md:text-2xl">
      „Think outside the box!”- Tineri împotriva stereotipurilor de gen, proiect
      finanțat de Primăria Municipiului Timișoara - a promovat egalitatea de gen
      și combaterea stereotipurilor de gen în rândul tinerilor liceeni, prin
      implicarea directă a acestora în activități culturale extracurriculare,
      menite să reducă deficitul de cunoaștere în ceea ce privește contribuția
      femeilor la patrimoniul cultural regional, național și internațional.
    </p>
    <MaiMulteButton
      onClick={() => handleMaiMulteClick("/proiecte/think-outside-the-box")}
    /></Article
  >
</PageLayout>
