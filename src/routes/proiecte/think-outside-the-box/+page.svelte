<script>
  import Typography from "$lib/components/font/typography.svelte";
  import Article from "$lib/components/news/article.svelte";
  import PageLayout from "$lib/components/pageLayout.svelte";
  import SectionTitle from "$lib/components/typography/sectionTitle.svelte";
  import bannerSrc from "$lib/images/proiecte/think_outside_the_box/banner.jpg";
  import Slides from "../../slides.svelte";
  import first from "$lib/images/proiecte/think_outside_the_box/1.jpg";
  import second from "$lib/images/proiecte/think_outside_the_box/2.jpg";
  import third from "$lib/images/proiecte/think_outside_the_box/3.jpg";
  import fourth from "$lib/images/proiecte/think_outside_the_box/4.jpg";
  import fifth from "$lib/images/proiecte/think_outside_the_box/5.jpg";
  import story1 from "$lib/images/proiecte/think_outside_the_box/story_1.jpg";
  import story2 from "$lib/images/proiecte/think_outside_the_box/story_2.jpg";
  import story4 from "$lib/images/proiecte/think_outside_the_box/story_4.jpg";
  import story5 from "$lib/images/proiecte/think_outside_the_box/story_5.jpg";
  import story6 from "$lib/images/proiecte/think_outside_the_box/story_6.jpg";
  import story9 from "$lib/images/proiecte/think_outside_the_box/story_9.jpg";
  const slides = [first, second, third, fourth, fifth];
  const storySlides = [story1, story2, story4, story9, story5, story6];
</script>

<PageLayout withSpacing withPadding={false}>
  <Slides chevronsAlwaysVisible
    >{#each slides as slide}
      <div class="embla__slide">
        <img src={slide} alt="meeting" />
      </div>
    {/each}</Slides
  >
  <div
    class="flex flex-col gap-8 mx-4 md:mx-16 md:grid md:gap-24 md:grid-cols-2"
  >
    <Typography className="text-start">
      <strong>„Think outside the box!”</strong>- Tineri impotriva
      stereotipurilor de gen s-a dorit a fi un act reparatoriu al unei istorii
      eliptice şi exclusiviste, care, ignorand contribuţiile a mai bine de
      jumatate din omenire la facerea ei, nu poate avea pretenţia la mai mult de
      jumatate de adevar. Femeile au fost, sunt şi vor fi parte a istoriei
      noastre şi o istorie cu adevarat echilibrata şi inclusiva recunoaşte
      importanţa dintotdeauna a femeilor pentru societate. Proiectul a dorit
      totodata sa onoreze, sa recunoasca şi sa celebreze realizarile feminine ca
      sursa de inspiraţie şi tarie pentru noi toţi şi sa ofere tinerei generaţii
      modele viabile. <br />
    </Typography>
    <Typography className="italic text-start">
      ​ Proiect finanțat de Primăria Municipiului Timișoara și realizat în
      parteneriat cu Fundația Județeană pentru Tineret Timiș, publicația online
      Timișoara Express, Institutul pentru Dezvoltarea Tinerilor și
      Inspectoratul Școlar Județean Timiș.
    </Typography>
  </div>
  <div class="mx-4 md:mx-16">
    <Article src={bannerSrc} title="La povești. Despre Banat și bănățence"
      ><Typography
        >D.na.lect.dr. Simona Adam ne-a povestit despre stereotipuri ca forme de
        gândire rigide, simplificatoare și generalizatoare și despre abundența
        stereotipurilor de gen în media și în manualele școlare. D.na conf.dr.
        Smaranda Vultur ne-a povestit despre Banatul de altădată și bănățencele
        lui grozave, așa cum apar ele imortalizate în imaginile vechilor
        ateliere fotografice timișorene, capabile să surprindă dincolo de
        chipuri, statutul cultural al protagonistelor lor. Mădălina, Silviu,
        Victor, Simona și Sali ne-au povestit despre patrimoniul cultural al
        Banatului la care femeile locului și-au adus aportul, despre necesitatea
        reflectării critice asupra istoriei tradiționale care a marginalizat sau
        ignorat contribuția feminină la întreprinderea umană și despre
        importanța cunoașterii și promovării realizărilor acestora.</Typography
      ></Article
    >
  </div>
  <SectionTitle title={`Lansarea agendei "HerStory"`} withSpacing={false} />
  <Slides chevronsAlwaysVisible
    >{#each storySlides as slide}
      <div class="embla__slide">
        <img src={slide} alt="meeting" class="object-cover w-full" />
      </div>
    {/each}</Slides
  >
  <div
    class="flex flex-col gap-8 mx-4 leading-relaxed md:mx-16 md:grid md:grid-cols-2 md:gap-16 text-start"
  >
    <Typography>
      Marți, 24 noiembrie 2015, elevii a cinci licee timișorene (Colegiul
      Tehnic„ I.C.Brătianu”, Colegiul Național „Constantin Diaconovici Loga”,
      Colegiul Național de Artă „Ion Vidu”, Liceul Teoretic „Grigore Moisil”,
      Liceul Teoretic „Nikolaus Lenau”) au fost invitați să participe la
      lansarea agendei culturale de gen HerStory. <br /> <br /> ​Agenda
      reprezintă produsul final al proiectului Asociației SPICC, „Think outside
      the box!”- Tineri împotriva stereotipurilor de gen, care s-a dorit un
      îndemn adresat tinerilor, de a gândi critic, dincolo sau în completarea
      consensului tradiţional, asupra unei istorii eliptice şi exclusiviste,
      care, ignorand contribuţiile femeilor, adică a mai bine de jumatate din
      omenire, la facerea ei, nu poate avea pretenţia la mai mult de jumatate de
      adevăr.
      <br /><br />Agenda culturală HerStory, elaborată de echipa SPICC și la
      care au colaborat 6 eleve,
      <span class="italic"
        >Ștefania Borși, Ana Maria Burdușa, Diana Cărășel, Aura Chelu, Raluca
        Vlad și Raluca Scarlat</span
      >, prezintă 365 de microbiografii ale unor personalități feminine
      naționale și internaționale, care și-au adus aportul la dezvoltarea
      umanității și care se pot constitui în modele de urmat pentru tânăra
      generație. Așa cum se precizează în prefața agendei, „HerStory extinde
      consensul istoric tradițional, ce prezintă istoria ca o întreprindere
      dominată intelectual de către bărbați. Femeile au fost, sunt și vor fi
      parte a istoriei noastre și o istorie cu adevărat echilibrată și inclusivă
      recunoaște importanța dintotdeauna a femeilor pentru societate.
    </Typography><Typography>
      <strong>HerStory</strong> informează asupra rolului femeilor în istoria
      umanității, prezentându-le contribuțiile la dezvoltarea societății prin
      știință, afaceri, literatură, sport, politică și civism sau artă.
      Parafrazând-o pe Myra Pollack Sadker, care spunea că „de fiecare dată când
      o fată deschide un manual și citește despre o istorie din care lipsesc
      femeile, se simte fără de valoare”, ne dorim ca „de fiecare dată când o
      fată deschide o agendă HerStory și citește despre femei minunate și
      plusvaloarea pe care au adus-o acestea societății, să se simtă puternică,
      determinată și pe deplin încrezătoare în sine”. <br /> <br /><strong
        >HerStory</strong
      >
      onorează, recunoaște și celebrează realizările feminine ca sursă de inspirație
      și tărie pentru noi toți. <br /> <br />
      <span class="italic"
        >Prin intermediul agendei, am dorit să re-dăm femeile unei istorii din
        care nu au lipsit niciodată și să provocăm viitorul!
      </span>
    </Typography>
  </div>
</PageLayout>

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
