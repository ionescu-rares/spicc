<script>
  import corpulSrc from "$lib/images/proiecte/continuum_feminin/corpul/corpul.jpg";
  import Typography from "$lib/components/font/typography.svelte";
  import Article from "$lib/components/news/article.svelte";
  import first from "$lib/images/proiecte/continuum_feminin/corpul/1.jpg";
  import second from "$lib/images/proiecte/continuum_feminin/corpul/2.jpg";
  import third from "$lib/images/proiecte/continuum_feminin/corpul/3.jpg";
  import fourth from "$lib/images/proiecte/continuum_feminin/corpul/4.jpg";
  import fifth from "$lib/images/proiecte/continuum_feminin/corpul/5.jpg";
  import SectionTitle from "$lib/components/typography/sectionTitle.svelte";
  import Slides from "../../slides.svelte";

  const slides = [first, second, third, fourth, fifth];
</script>

<Article src={corpulSrc}
  ><Typography
    >Am fost inspirate de momentele de sinceritate și vulnerabilitate, dar și de
    forța și determinarea care ne-au unit. Moderate de Otilia Drăgoi, discuțiile
    au abordat teme precum: nevoia de informare, accesul la servicii de sănătate
    de calitate, educație sexuală comprehensivă și despre importanța
    solidarității într-o societate care încă se confruntă cu prejudecăți și
    restricții.</Typography
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
