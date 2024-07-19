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

  const openModal = (modalId: string) => {
    if (document) {
      (document.getElementById(modalId) as HTMLFormElement).showModal();
    }
  };
</script>

<PageLayout>
  <SectionTitle title="Ce facem?" />
  <div role="tablist" class="w-full bg-transparent tabs tabs-boxed tabs-lg">
    <input
      type="radio"
      name="my_tabs_2"
      role="tab"
      class="tab"
      aria-label="Educăm"
      checked={true}
    />
    <div role="tabpanel" class="py-4 tab-content">
      <div
        class="flex flex-col w-full gap-4 lg:grid lg:grid-cols-2 text-start place-items-center"
      >
        <div class="lg:max-h-[500px] overflow-y-auto order-2 lg:order-1">
          <EducamDetails />
        </div>
        <img
          src={educamSrc}
          class="border-md max-h-[500px] order-1 lg:order-2"
          alt="educam"
        />
      </div>
    </div>
    <input
      type="radio"
      name="my_tabs_2"
      role="tab"
      class="tab"
      aria-label="Informăm"
    />
    <div role="tabpanel" class="py-4 tab-content">
      <div
        class="flex flex-col w-full gap-4 lg:grid lg:grid-cols-2 text-start place-items-center"
      >
        <div class="lg:max-h-[500px] overflow-y-auto order-2 lg:order-1">
          <InformamDetails />
        </div>
        <img
          src={informamSrc}
          class="border-md max-h-[500px] order-1 lg:order-2"
          alt="informam"
        />
      </div>
    </div>
    <input
      type="radio"
      name="my_tabs_2"
      role="tab"
      class="tab"
      aria-label="Capacităm"
    />
    <div role="tabpanel" class="py-4 tab-content">
      <div
        class="flex flex-col w-full gap-4 lg:grid lg:grid-cols-2 text-start place-items-center"
      >
        <div class="lg:max-h-[500px] overflow-y-auto order-2 lg:order-1">
          <CapacitamDetails />
        </div>
        <img
          src={capacitamSrc}
          class="border-md max-h-[500px] order-1 lg:order-2"
          alt="capacitam"
        />
      </div>
    </div>
  </div>
</PageLayout>
