<script lang="ts">
  import MaiMulteButton from "$lib/components/buttons/MaiMulteButton.svelte";
  import Card from "$lib/components/cards/card.svelte";
  import PageLayout from "$lib/components/pageLayout.svelte";
  import SectionTitle from "$lib/components/typography/sectionTitle.svelte";
  import billionSrc from "$lib/images/actiuni/billion.jpg";
  import commitementSrc from "$lib/images/actiuni/commitement.jpg";
  import copaculSrc from "$lib/images/actiuni/copacul.jpg";
  import descoperaPoliticaSrc from "$lib/images/actiuni/descoperaPolitica.jpg";
  import eliminareaViolenteiSrc from "$lib/images/actiuni/eliminareaViolentei.jpg";
  import securitateSrc from "$lib/images/actiuni/securitate.jpg";
  import seminarSrc from "$lib/images/actiuni/seminar.jpg";
  import sigurantaBucurestiSrc from "$lib/images/actiuni/siguranta.jpg";
  import sigurantaSrc from "$lib/images/cine-suntem/viziune.jpg";

  const handleMaiMulteClick = (href: string) => {
    window.open(href, "_self");
  };
</script>

<PageLayout withSpacing>
  <SectionTitle title="Acțiuni" />
  <div class="w-full gap-8 grid-container place-items-center">
    <Card thumbnail={copaculSrc}>
      Copacul drepturilor fundamentale ale Omului, realizat cu ocazia zilei de
      10 Decembrie 2023 - Ziua Internațională a Drepturilor Umane
      <MaiMulteButton
        smallSize
        slot="actions"
        onClick={() =>
          handleMaiMulteClick("/ziua-internationala-a-drepturilor-omului-2023")}
      />
    </Card>
    <Card thumbnail={eliminareaViolenteiSrc}
      >Sâmbătă, 25 noiembrie 2023, cu ocazia Zilei Internaționale pentru
      Eliminarea Violenței asupra Femeilor, am invitat timișorenii să se alăture
      flashmobului pe care l-am organizat în Piața Operei, la ora 13.30.
      <MaiMulteButton
        smallSize
        slot="actions"
        onClick={() => handleMaiMulteClick("/firul-solidaritatii")}
      /></Card
    >
    <Card thumbnail={sigurantaSrc}
      >Împreună pentru siguranța femeilor! Timișorenii au fost chemați să
      participe la un marș pentru siguranța femeilor, în data de 22 octombrie
      2023, între orele 15 și 17, în Piața Sf. Gheorghe.
      <MaiMulteButton smallSize slot="actions" /></Card
    >
    <Card thumbnail={sigurantaBucurestiSrc}
      >23 octombrie 2022 - „Împreună pentru siguranța femeilor” - acțiune de
      solidarizare cu marșul organizat de către rețeaua VIF (rețeaua pentru
      prevenirea și combaterea violenței împotriva femeilor) în București.
      <MaiMulteButton smallSize slot="actions" />
    </Card>
    <Card thumbnail={commitementSrc}>
      În perioada 6-7 mai 2019 am participat la Conferința la nivel înalt
      “Commitment – data – action! Well-being and safety of women” pe tema
      combaterii violenței împotriva femeilor și fetelor
      <MaiMulteButton smallSize slot="actions" />
    </Card>
    <Card thumbnail={securitateSrc}
      >Workshop „Gen și (In)Securitate Urbană” , organizat în contextul Zilei
      Internaționale pentru Eliminarea Violenței asupra Femeilor. ​ ​
      <MaiMulteButton smallSize slot="actions" />
    </Card>
    <Card thumbnail={seminarSrc}
      >2-3 martie 2017 - Participare SPICC la Seminarul european privind
      prevenirea si combaterea discriminarii la nivel local organizat de Forumul
      European de Securitate Urbana/EFUS, organizat la Viena.
      <MaiMulteButton smallSize slot="actions" /></Card
    >
    <Card thumbnail={descoperaPoliticaSrc}
      >7 aprilie 2014 - workshop DESCOPERĂ POLITICA: ALTFEL. „VERSUS” - Ipostaze
      ale Puterii.
      <MaiMulteButton smallSize slot="actions" /></Card
    >
    <Card thumbnail={billionSrc}
      >Flashmob One Billion Rising, organizat în colabrare cu Feminis(T)m și
      Casa de Cultură a Studenților, într-un demers comun cu mișcarea globală de
      protest împotriva oricăror forme de violență asupra femeilor.
      <MaiMulteButton smallSize slot="actions" /></Card
    >
  </div>
</PageLayout>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  }
  @media (min-width: 640px) {
    .grid-container {
      grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    }
  }
</style>
