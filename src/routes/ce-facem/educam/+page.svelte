<script>
  import Typography from "$lib/components/font/typography.svelte";
  import BlogPost from "$lib/components/layout/blogPost.svelte";
  import PageLayout from "$lib/components/pageLayout.svelte";
  import educamSrc from "$lib/images/ce-facem/educam.jpg";
</script>

<PageLayout
  ><BlogPost slides={[educamSrc]} title="Educăm">
    <Typography slot="info">
      Educația de gen este crucială pentru construirea unei societăți echitabile
      și incluzive. Prin educație promovăm înțelegerea și recunoașterea
      egalității între sexe, combatem stereotipurile de gen și încurajăm
      respectul reciproc. <br /> <br />Într-o societate încă tributară normelor
      patriarhale, educația de gen este esențială pentru a schimba mentalitățile
      și pentru a înlătura barierele discriminatorii. Prin educație:
      <ol class="flex flex-col gap-4 p-2 list-decimal list-inside">
        <li>
          <strong>Eliminăm stereotipurile de gen</strong> : identificăm și combatem
          stereotipurilor de gen, care pot limita potențialul și opțiunile individuale,
          contribuind astfel la o viziune mai echitabilă și deschisă asupra rolurilor
          de gen;
        </li>
        <li>
          <strong> Promovăm egalitatea de gen</strong>: promovând egalitatea de
          șanse și drepturile între sexe contribuim la crearea unei societăți în
          care femeile și bărbații au acces la aceleași oportunități și resurse;
        </li>
        <li>
          <strong>Prevenim violența de gen</strong>: învățând despre relații
          sănătoase și consimțământ, tinerii pot contribui la construirea unor
          comunități mai sigure;
        </li>
        <li>
          <strong
            >Accentuăm importanța autonomiei și a libertății de a alege</strong
          > : prin educație, fetele și femeile pot învăța să-și revendice autonomia
          și să-și exercite libertatea de a alege în ceea ce privește educația, cariera,
          și viața personală;
        </li>
        <li>
          <strong>Conștientizăm inegalitățile</strong>: ajutăm la
          conștientizarea inegalităților de gen existente și încurajăm oamenii
          să se implice în schimbare și activism pentru a construi o societate
          mai echitabilă;
        </li>
        <li>
          <strong>Dezvoltăm perspective critice</strong>: prin educație, putem
          dezvolta perspective critice asupra problemelor de gen și contribui
          astfel la schimbarea normelor și a mentalităților care perpetuează
          inegalitățile. Formăm, prin intermediul educației de gen, agenți
          activi ai schimbării sociale și le oferim încrederea și cunoștințele
          necesare transformării lor în liderii zilei de mâine.
        </li>
      </ol>
    </Typography></BlogPost
  ></PageLayout
>
