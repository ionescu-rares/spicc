<script>
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
</script>

<PageLayout>
  <SectionTitle title="Ce facem?" />
  <div class="grid justify-center grid-flow-row gap-8 mt-24 xl:grid-flow-col">
    <FullImageCard
      imageSrc={educamSrc}
      title="Educăm"
      content="Promovăm drepturile femeilor prin educație, combatem inegalitățile și discriminările de gen, dezvoltăm conștiința socială, redefinim masculinitatea și feminitatea, stimulăm gândirea critică."
    >
      <Modal modalId="modal_1" title="Educăm"><EducamDetails /></Modal>
    </FullImageCard>
    <FullImageCard
      imageSrc={informamSrc}
      title="Informăm"
      content="Informarea este necesară pentru a conștientiza și înțelege inegalitățile și discriminarea de gen, pentru a găsi mijloacele adecvate de combatere a acestora, pentru a responsabiliza, implica și inspira membrii societății."
    >
      <Modal modalId="modal_2" title="Informăm"><InformamDetails /></Modal
      ></FullImageCard
    >
    <FullImageCard
      imageSrc={capacitamSrc}
      title="Capacităm"
      content="Dezvoltăm competențe, cunoștințe și abilități necesare pentru a înțelege și promova egalitatea de gen, prin formare și training, conceperea și distribuirea resurselor și materialelor educaționale"
    >
      <Modal modalId="modal_3" title="Capacităm"><CapacitamDetails /></Modal
      ></FullImageCard
    >
  </div>
</PageLayout>
