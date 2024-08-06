<script lang="ts">
  import { handleMaiMulteClick } from "$lib/utils/handleMaiMulteClick.svelte";
  import planSigurantaSrc from "$lib/images/ce-facem/plan_siguranta.jpg";
  import PageLayout from "$lib/components/pageLayout.svelte";
  import educamSrc from "$lib/images/ce-facem/educam.jpg";
  import capacitamSrc from "$lib/images/ce-facem/capacitam.jpg";
  import SectionTitle from "$lib/components/typography/sectionTitle.svelte";
  import Article from "$lib/components/news/article.svelte";
  import Typography from "$lib/components/font/typography.svelte";
  import MaiMulteButton from "$lib/components/buttons/MaiMulteButton.svelte";
</script>

<PageLayout withSpacing>
  <SectionTitle variant="huge" title="Ce facem?" />
  <Article title="Educăm" src={educamSrc}>
    <Typography
      >Promovăm prin educație drepturile femeilor, combatem inegalități,
      stereotipuri și discriminări de gen, dezvoltăm conștiința socială, abordăm
      probleme specifice femeilor, redefinim conceptele de masculinitate și
      feminitate, stimulăm gândirea critică și contribuim astfel la o societate
      mai inclusivă, mai echitabilă.
    </Typography><MaiMulteButton
      onClick={() => handleMaiMulteClick("/ce-facem/educam")}
    /></Article
  >
  <Article title="Informăm" src={planSigurantaSrc} reversed
    ><Typography
      >Informarea este necesară pentru a conștientiza și înțelege inegalitățile
      și discriminarea de gen, pentru a găsi mijloacele adecvate de combatere a
      acestora, pentru a responsabiliza, implica și inspira membrii societății.
    </Typography><MaiMulteButton
      onClick={() => handleMaiMulteClick("/ce-facem/informam")}
    /></Article
  >
  <Article title="Capacităm" src={capacitamSrc}
    ><Typography>
      Dezvoltăm competențe, cunoștințe și abilități necesare pentru a înțelege
      și promova egalitatea de gen, prin formare și training, conceperea și
      distribuirea resurselor și materialelor educaționale. Antamăm parteneriate
      și colaborări cu organizații specializate în egalitatea de gen, instituții
      de învățământ, ONG-uri și alte entități interesate, pentru a spori
      eficiența și impactul inițiativelor de capacitare.
    </Typography><MaiMulteButton
      onClick={() => handleMaiMulteClick("/ce-facem/capacitam")}
    /></Article
  >
</PageLayout>
