<script lang="ts">
  import egaleSrc from "$lib/images/proiecte/continuum_feminin/egale/egale.jpg";
  import Typography from "$lib/components/font/typography.svelte";
  import Article from "$lib/components/news/article.svelte";
  import first from "$lib/images/proiecte/continuum_feminin/egale/1.jpg";
  import second from "$lib/images/proiecte/continuum_feminin/egale/2.jpg";
  import third from "$lib/images/proiecte/continuum_feminin/egale/3.jpg";
  import fourth from "$lib/images/proiecte/continuum_feminin/egale/4.jpg";
  import fifth from "$lib/images/proiecte/continuum_feminin/egale/5.jpg";
  import SectionTitle from "$lib/components/typography/sectionTitle.svelte";
  import Slides from "../../slides.svelte";
  import Modal from "$lib/components/modal.svelte";

  const slides = [first, second, third, fourth, fifth];

  const openModal = (id: number) => {
    const modal = document.getElementById(
      `continuum-${id}`
    ) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };
</script>

<Article src={egaleSrc}
  ><Typography
    >Sub moderarea Cristinei Săracu, discuțiile au pus accent pe solidaritate,
    recunoașterea diferențelor și pe modalitățile prin care fiecare dintre noi
    poate contribui la valorizarea diversității. Momentele de sinceritate și
    conexiune ne-au oferit inspirație și putere pentru a continua lupta pentru
    incluziune și șanse egale.</Typography
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
      <Modal modalId={`continuum-${index}`} className="p-0">
        <img
          id={`continuum-${index}`}
          loading="lazy"
          src={slide}
          alt="atelier"
          class="object-cover w-full"
        />
      </Modal>
    </div>
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
