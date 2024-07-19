<script lang="ts">
  import planSigurantaSrc from "$lib/images/ce-facem/plan_siguranta.jpg";
  import FullImageCard from "$lib/components/cards/fullImageCard.svelte";
  import PageLayout from "$lib/components/pageLayout.svelte";
  import educamSrc from "$lib/images/ce-facem/educam.jpg";
  import informamSrc from "$lib/images/ce-facem/informam.jpg";
  import capacitamSrc from "$lib/images/ce-facem/capacitam.jpg";
  import SectionTitle from "$lib/components/typography/sectionTitle.svelte";
  import Modal from "$lib/components/modal.svelte";
  import EducamDetails from "./educamDetails.svelte";
  import InformamDetails from "./informamDetails.svelte";
  import CapacitamDetails from "./capacitamDetails.svelte";
  import Article from "$lib/components/news/article.svelte";
  import Typography from "$lib/components/font/typography.svelte";
  import MaiMulteButton from "$lib/components/buttons/MaiMulteButton.svelte";

  const openModal = (modalId: string) => {
    if (document) {
      (document.getElementById(modalId) as HTMLFormElement).showModal();
    }
  };
</script>

<PageLayout withSpacing>
  <SectionTitle title="Ce facem?" />
  <Article title="Educam" src={educamSrc}>
    <Typography
      >Promovăm prin educație drepturile femeilor, combatem inegalități,
      stereotipuri și discriminări de gen, dezvoltăm conștiința socială, abordăm
      probleme specifice femeilor, redefinim conceptele de masculinitate și
      feminitate, stimulăm gândirea critică și contribuim astfel la o societate
      mai inclusivă, mai echitabilă.
    </Typography><MaiMulteButton /></Article
  >
  <Article title="Informam" src={planSigurantaSrc} reversed
    ><Typography
      >Informarea este necesară pentru a conștientiza și înțelege inegalitățile
      și discriminarea de gen, pentru a găsi mijloacele adecvate de combatere a
      acestora, pentru a responsabiliza, implica și inspira membrii societății.
    </Typography><MaiMulteButton /></Article
  >
  <Article title="Capacitam" src={capacitamSrc}
    ><Typography
      >Informarea este necesară pentru a conștientiza și înțelege inegalitățile
      și discriminarea de gen, pentru a găsi mijloacele adecvate de combatere a
      acestora, pentru a responsabiliza, implica și inspira membrii societății.
    </Typography><MaiMulteButton /></Article
  >
</PageLayout>
