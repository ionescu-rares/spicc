<script lang="ts">
  import { handleMaiMulteClick } from "$lib/utils/handleMaiMulteClick.svelte";
  import MaiMulteButton from "$lib/components/buttons/MaiMulteButton.svelte";
  import Card from "$lib/components/cards/card.svelte";
  import PageLayout from "$lib/components/pageLayout.svelte";
  import SectionTitle from "$lib/components/typography/sectionTitle.svelte";
  import billionSrc from "$lib/images/actiuni/one-billion-rising/1.jpg";
  import commitementSrc from "$lib/images/actiuni/commitement.jpg";
  import copaculSrc from "$lib/images/actiuni/copacul.jpg";
  import descoperaPoliticaSrc from "$lib/images/actiuni/descoperaPolitica.jpg";
  import eliminareaViolenteiSrc from "$lib/images/actiuni/eliminareaViolentei.jpg";
  import securitateSrc from "$lib/images/actiuni/securitate.jpg";
  import seminarSrc from "$lib/images/actiuni/seminar.jpg";
  import sigurantaBucurestiSrc from "$lib/images/actiuni/siguranta.jpg";
  import sigurantaSrc from "$lib/images/cine-suntem/viziune.jpg";
</script>

<PageLayout withSpacing>
  <SectionTitle title="Acțiuni" />
  <div class="w-full gap-8 grid-container place-items-center">
    <Card
      thumbnail={copaculSrc}
      title="Copacul drepturilor fundamentale ale Omului"
    >
      Realizat cu ocazia zilei de 10 Decembrie 2023 - Ziua Internațională a
      Drepturilor Umane.
      <MaiMulteButton
        withSpacing={false}
        smallSize
        slot="actions"
        onClick={() =>
          handleMaiMulteClick(
            "/actiuni/ziua-internationala-a-drepturilor-omului-2023"
          )}
      />
    </Card>
    <Card
      thumbnail={eliminareaViolenteiSrc}
      title="Flashmob - Firul solidarității"
      >Sâmbătă, 25 noiembrie 2023, cu ocazia Zilei Internaționale pentru
      Eliminarea Violenței asupra Femeilor, am invitat timișorenii să se alăture
      flashmobului pe care l-am organizat în Piața Operei, la ora 13.30.
      <MaiMulteButton
        withSpacing={false}
        smallSize
        slot="actions"
        onClick={() => handleMaiMulteClick("/actiuni/firul-solidaritatii")}
      /></Card
    >
    <Card
      thumbnail={sigurantaSrc}
      title="Împreună pentru siguranța femeilor - 2023"
      >Timișorenii au fost chemați să participe la un marș pentru siguranța
      femeilor, în data de 22 octombrie 2023, între orele 15 și 17, în Piața Sf.
      Gheorghe.
      <MaiMulteButton
        withSpacing={false}
        smallSize
        slot="actions"
        onClick={() =>
          handleMaiMulteClick(
            "/actiuni/impreuna-pentru-siguranta-femeilor-2023"
          )}
      /></Card
    >
    <Card
      thumbnail={sigurantaBucurestiSrc}
      title="Împreună pentru siguranța femeilor - 2022"
      >Acțiune de solidarizare cu marșul organizat de către rețeaua VIF (rețeaua
      pentru prevenirea și combaterea violenței împotriva femeilor) în
      București.
      <MaiMulteButton
        withSpacing={false}
        smallSize
        slot="actions"
        onClick={() =>
          handleMaiMulteClick(
            "/actiuni/impreuna-pentru-siguranta-femeilor-2022"
          )}
      />
    </Card>
    <Card thumbnail={commitementSrc} title="Commitment – data – action">
      În perioada 6-7 mai 2019 am participat la Conferința la nivel înalt
      “Commitment – data – action! Well-being and safety of women” pe tema
      combaterii violenței împotriva femeilor și fetelor.
      <MaiMulteButton
        withSpacing={false}
        smallSize
        slot="actions"
        onClick={() => handleMaiMulteClick("/actiuni/commitement-data-action")}
      />
    </Card>
    <Card thumbnail={securitateSrc} title="Gen și (In)Securitate Urbană"
      >Workshop organizat în contextul Zilei Internaționale pentru Eliminarea
      Violenței asupra Femeilor. ​ ​
      <MaiMulteButton
        withSpacing={false}
        smallSize
        slot="actions"
        onClick={() => handleMaiMulteClick("/actiuni/gen-si-securitate-urbana")}
      />
    </Card>
    <Card thumbnail={seminarSrc} title="Seminarul european"
      >2-3 martie 2017 - Participare SPICC la Seminarul european privind
      prevenirea si combaterea discriminarii la nivel local organizat de Forumul
      European de Securitate Urbana/EFUS, organizat la Viena.
      <MaiMulteButton
        withSpacing={false}
        smallSize
        slot="actions"
        onClick={() => handleMaiMulteClick("/actiuni/seminar-viena-2017")}
      /></Card
    >
    <Card thumbnail={descoperaPoliticaSrc} title="Descoperă politica: altfel">
      În data de 7 aprilie 2014, am luat parte la workshopul DESCOPERĂ POLITICA:
      ALTFEL, intitulat „VERSUS” - Ipostaze ale Puterii.
      <MaiMulteButton
        withSpacing={false}
        smallSize
        slot="actions"
        onClick={() =>
          handleMaiMulteClick("/actiuni/descopera-politica-altfel")}
      /></Card
    >
    <Card thumbnail={billionSrc} title="Flashmob - One Billion Rising"
      >Flashmob organizat în colabrare cu Feminis(T)m și Casa de Cultură a
      Studenților, într-un demers comun cu mișcarea globală de protest împotriva
      oricăror forme de violență asupra femeilor.
      <MaiMulteButton
        withSpacing={false}
        smallSize
        slot="actions"
        onClick={() => handleMaiMulteClick("/actiuni/one-billion-rising")}
      /></Card
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
