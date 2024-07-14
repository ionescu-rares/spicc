<script lang="ts">
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
  import planSigurantaSrc from "$lib/images/ce-facem/plan_siguranta.jpg";

  const openModal = (modalId: string) => {
    if (document) {
      (document.getElementById(modalId) as HTMLFormElement).showModal();
    }
  };
</script>

<PageLayout>
  <SectionTitle title="Ce facem?" />
  <div class="grid justify-center grid-flow-row gap-8 mt-24 xl:grid-flow-col">
    <FullImageCard
      imageSrc={educamSrc}
      title="Educăm"
      content="Promovăm drepturile femeilor prin educație, combatem inegalitățile și discriminările de gen, dezvoltăm conștiința socială, redefinim masculinitatea și feminitatea, stimulăm gândirea critică."
    >
      <button class="btn btn-primary" on:click={() => openModal("educam_modal")}
        >Mai multe</button
      >
      <Modal modalId="educam_modal" title="Educăm"
        ><EducamDetails /><img src={educamSrc} alt="educam" /></Modal
      >
    </FullImageCard>
    <FullImageCard
      imageSrc={informamSrc}
      title="Informăm"
      content="Informarea este necesară pentru a conștientiza și înțelege inegalitățile și discriminarea de gen, pentru a găsi mijloacele adecvate de combatere a acestora, pentru a responsabiliza, implica și inspira membrii societății."
    >
      <button
        class="btn btn-primary"
        on:click={() => openModal("informam_modal")}>Mai multe</button
      >
      <Modal modalId="informam_modal" title="Informăm"
        ><InformamDetails /><img src={planSigurantaSrc} alt="informam" /></Modal
      ></FullImageCard
    >
    <FullImageCard
      imageSrc={capacitamSrc}
      title="Capacităm"
      content="Dezvoltăm competențe, cunoștințe și abilități necesare pentru a înțelege și promova egalitatea de gen, prin formare și training, conceperea și distribuirea resurselor și materialelor educaționale"
    >
      <button
        class="btn btn-primary"
        on:click={() => openModal("capacitam_modal")}>Mai multe</button
      >
      <Modal modalId="capacitam_modal" title="Capacităm"
        ><CapacitamDetails /><img src={capacitamSrc} alt="capacitam" /></Modal
      ></FullImageCard
    >
  </div>
</PageLayout>
