<script lang="ts">
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
  import Modal from "$lib/components/modal.svelte";

  const slides = [first, second, third, fourth, fifth];

  const openModal = (id: number) => {
    const modal = document.getElementById(`drumul-${id}`) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };
</script>

<Article src={drumulSrc}
  ><Typography
    >Sub moderarea Simonei Ionescu, discuțiile au subliniat necesitatea
    implicării active a partidelor politice, sprijinul comunității și rolul
    crucial al femeilor în viața socială.</Typography
  >
</Article>
<SectionTitle title="Galerie foto" className="w-full text-slate-700 mt-16" />
<Slides chevronsAlwaysVisible
  >{#each slides as slide, index}
    <div
      class="embla__slide"
      role="button"
      tabindex={0}
      on:click={() => openModal(index)}
      on:keydown={(e) => e.code === "Enter" && openModal(index)}
    >
      <img
        loading="lazy"
        src={slide}
        alt="atelier"
        class="object-cover w-full"
      />
    </div>
    <Modal modalId={`drumul-${index}`} className="p-0">
      <img
        id={`drumul-${index}`}
        loading="lazy"
        src={slide}
        alt="atelier"
        class="object-cover w-full"
      />
    </Modal>
  {/each}</Slides
>

<style>
  .embla__slide {
    position: relative;
    width: 70%; /* Each slide takes 70% of the viewport width */
    min-width: 70%; /* Ensures the slides do not shrink */
    margin: 0 8px;
    display: flex;
  }
  .embla__slide img {
    object-fit: cover; /* Ensures the image covers the entire area */
    width: 100%; /* Stretch the image to fill the width */
    height: 100%; /* Stretch the image to fill the height */
  }

  @media (min-width: 640px) {
    .embla__slide {
      width: 40%; /* Each slide takes 40% of the viewport width */
      min-width: 40%; /* Ensures the slides do not shrink */
      margin: 0 16px;
    }
  }
</style>
