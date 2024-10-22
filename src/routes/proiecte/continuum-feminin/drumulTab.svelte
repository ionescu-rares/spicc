<script>
  import drumulSrc from "$lib/images/proiecte/continuum_feminin/drumul/drumul.jpg";
  import Typography from "$lib/components/font/typography.svelte";
  import Article from "$lib/components/news/article.svelte";
  import first from "$lib/images/proiecte/continuum_feminin/drumul/1.jpg";
  import second from "$lib/images/proiecte/continuum_feminin/drumul/2.jpg";
  import third from "$lib/images/proiecte/continuum_feminin/drumul/3.jpg";
  import fourth from "$lib/images/proiecte/continuum_feminin/drumul/4.jpg";
  import fifth from "$lib/images/proiecte/continuum_feminin/drumul/5.jpg";
  import SectionTitle from "$lib/components/typography/sectionTitle.svelte";
  import Slides from "../../slides.svelte";

  const slides = [first, second, third, fourth, fifth];
</script>

<Article src={drumulSrc}
  ><Typography
    >Sub moderarea Simonei Ionescu, discuțiile au subliniat necesitatea
    implicării active a partidelor politice, sprijinul comunității și rolul
    crucial al femeilor în leadership. Împreună, am reflectat asupra pașilor
    necesari pentru a ajunge la o reprezentare politică echitabilă până în 2030.</Typography
  >
</Article>
<SectionTitle title="Galerie foto" className="w-full text-slate-700 mt-16" />
<Slides chevronsAlwaysVisible
  >{#each slides as slide}
    <div class="embla__slide">
      <img src={slide} alt="atelier" class="object-cover w-full" />
    </div>
  {/each}</Slides
>

<style>
  .embla__slide {
    position: relative;
    width: 70%; /* Each slide takes 80% of the viewport width */
    min-width: 70%; /* Ensures the slides do not shrink */
    padding: 0 8px;
    display: flex;
  }
  .embla__slide img {
    object-fit: cover; /* Ensures the image covers the entire area */
    width: 100%; /* Stretch the image to fill the width */
    height: 100%; /* Stretch the image to fill the height */
  }

  @media (min-width: 640px) {
    .embla__slide {
      width: 40%; /* Each slide takes 80% of the viewport width */
      min-width: 40%; /* Ensures the slides do not shrink */
      padding: 0 16px;
    }
  }
</style>
