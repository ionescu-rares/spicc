<script>
  import Typography from "$lib/components/font/typography.svelte";
  import Article from "$lib/components/news/article.svelte";
  import PageLayout from "$lib/components/pageLayout.svelte";
  import shineSrc from "$lib/images/proiecte/fem/shine.jpg";
  import classSrc from "$lib/images/proiecte/fem/class.jpg";
  import chairSrc from "$lib/images/proiecte/fem/chair.jpg";
  import groupSrc from "$lib/images/proiecte/fem/group.jpg";
  import SectionTitle from "$lib/components/typography/sectionTitle.svelte";
  import Card from "$lib/components/cards/card.svelte";
  import anonymousSrc from "$lib/images/proiecte/fem/anonymous.jpeg";
  import indraznesteSrc from "$lib/images/proiecte/fem/indrazneste.jpeg";
  import shineSmallSrc from "$lib/images/proiecte/fem/shineSmall.jpg";

  import thinkSrc from "$lib/images/proiecte/fem/think.jpeg";

  import sufragetteSrc from "$lib/images/proiecte/fem/sufragette.jpeg";
  import girlUpSrc from "$lib/images/proiecte/fem/girlUp.jpeg";
</script>

<PageLayout withSpacing>
  <Article fullSize src={shineSrc}>
    <Typography>
      <strong>FEM</strong> este un proiect de formare și educație non-formală a tinerilor,
      care vizează un aport de cunoaștere adus acestora în domeniul egalității de
      șanse și de gen, deconstruirea stereotipurilor și rolurilor tradiționale de
      gen prin gândire critică și stimularea cetățeniei active prin implicarea lor
      în construirea unei comunități online, capabile să adreseze informat problematica
      de gen.
    </Typography></Article
  >
  <Article fullSize reversed src={classSrc}>
    <Typography
      >Proiectul FEM acționează în completarea curriculei școlare, deficitară în
      ceea ce privește atenția acordată problematicii egalității de gen, prin
      activități extracurriculare ce-și propun recuperarea dimensiunii feminine
      a istoriei, vizibilizarea realizărilor culturale ale femeilor, combaterea
      stereotipurilor de gen în general și deconstruirea rolurilor tradiționale
      de gen în particular.</Typography
    >
  </Article>
  <Article fullSize src={chairSrc}>
    <Typography
      >Deconstruind stereotipurile de gen, prin stimularea gândirii critice în
      cadrul atelierelor tematice, proiectul încurajează combaterea
      marginalizării și valorizarea incluziunii. Promovând modele feminine
      viabile, trecute, dar și prezente, în cadrul întâlnirilor cu femei
      neînfricate, care au sfidat limitele societale, FEM stimulează practica
      democratică și îndrăzneala de-a aborda domenii profesionale considerate
      tradițional masculine. <br /> <br /> Pe termen scurt, FEM își propune crearea
      unei comunități online a tinerelor, capabilă să abordeze informat diversele
      probleme specifice acestora, neadresate altfel nici în mediul educațional formal,
      nici în cadrul familial. Pe termen lung, FEM vizează schimbarea mentalităților
      stereotipice, care stau la baza inegalităților de gen.</Typography
    >
  </Article>
  <Article reversed fullSize src={groupSrc}>
    <Typography>
      Rezultatul final al proiectului, comunitatea online GirlUp va asigura
      durabilitatea proiectului menținându-se activă și implicată social,
      cultural și poate chiar politic. Cu sprijinul asociației SPICC,
      comunitatea se va dezvolta, își va găsi direcții de acțiune și domeniile
      de interes și va atrage noi membri. Reprezentantele ei pot fi liderii
      feminiști de mâine, ce pot deveni liderii politici ai viitorului, cu un
      impact major asupra comunităților de pretutindeni. <br /> <br />Căutând în
      trecut lentilele adecvate pentru a citi prezentul, FEM va găsi stimulii
      necesari pentru a configura un viitor care să permită femeilor să-și
      valorifice întregul potențial, să-l recunoască și să-l respecte.
    </Typography>
  </Article>
  <SectionTitle
    title="FEM - educație de gen, pentru toate genurile:
  Ateliere și întâlniri tematice"
  />
  <div class="w-full gap-8 grid-container place-items-center">
    <Card thumbnail={shineSmallSrc} title="Întâlnire Finală FEM" date="05/11/22"
      >La ultima întâlnire FEM am diseminat rezultatele proiectului FEM. Am
      vorbit despre HerStory, agenda noastră culturală de gen, ce prezintă 366
      de microbiografii ale unor personalități feminine naționale și
      internaționale, care și-au adus aportul la dezvoltarea umanității prin
      știință, afaceri, literatură, sport, politică și civism sau artă și care
      se pot constitui în modele de urmat pentru tânăra generație.</Card
    >
    <Card thumbnail={girlUpSrc} title="GirlUp" date="29/10/22"
      >Al cincilea și ultimul atelier din cadrul proiectului FEM a realizat, cu
      ajutorul specialiștilor multimedia Szalt, comunitatea online a tinerelor,
      de-acum informate asupra egalității de șanse și de gen, care le va permite
      adresarea problemelor lor specifice, dar și inițierea unor
      acțiuni/evenimente/proiecte prin care acestea să devină vizibile pentru
      întreaga comunitate.
    </Card>
    <Card thumbnail={indraznesteSrc} title="Îndrăznește" date="15/10/22"
      >A patra întâlnire FEM a fost una specială, cu invitate care și-au ales
      cariere în domenii dominate în mod tradițional de către bărbați. Am vorbit
      despre motivația și parcursul lor, despre determinarea necesară
      înlăturării barierelor de gen, despre glass ceiling și înfruntarea
      stereotipurilor.</Card
    >
    <Card thumbnail={thinkSrc} title="Think outside the box" date="08/10/22"
      >În cea de-a treia întâlnire FEM am dezvoltat competențele de gândire
      critică.</Card
    >
    <Card thumbnail={anonymousSrc} title="Anonymus was a woman" date="01/10/22"
      >Atelierul Anonymous was a woman, a dat chip și nume unor femei
      extraordinare, prea puțin sau deloc cunoscute.</Card
    >
    <Card thumbnail={sufragetteSrc} title="Suffragette" date="24/09/22"
      >Suffragette a deschis seria de întâlniri organizate în cadrul proiectului
      de educație de gen, FEM.</Card
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
