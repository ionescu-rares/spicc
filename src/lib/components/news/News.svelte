<script>
  import Article from "./article.svelte";
  import voceaPoster from "$lib/images/vocea_poster.jpg";
  import flashmob from "$lib/images/news/flashmob/flashmob.jpg";
  import flashmob2 from "$lib/images/news/flashmob/firul_solidaritatii_1.jpg";
  import flashmob3 from "$lib/images/news/flashmob/firul_solidaritatii_2.jpg";
  import siguranta from "$lib/images/news/siguranta_femeilor/siguranta.jpg";
  import siguranta2 from "$lib/images/news/siguranta_femeilor/siguranta2.jpg";
  import siguranta3 from "$lib/images/news/siguranta_femeilor/siguranta3.jpg";
  import voceaVideoSrc from "$lib/videos/vocea_video.mp4";
  import SectionTitle from "../typography/sectionTitle.svelte";
  import MaiMulteButton from "../buttons/MaiMulteButton.svelte";
  import { handleMaiMulteClick } from "$lib/utils/handleMaiMulteClick.svelte";
</script>

<section
  class="flex flex-col items-center gap-16 px-4 py-16 md:py-24 md:px-8 bg-brand"
>
  <SectionTitle title={"Noutăți"} variant="huge" withSpacing={false} />
  <Article
    videoSrc={voceaVideoSrc}
    poster={voceaPoster}
    title="Descoperă-ți vocea!"
  >
    <p class="text-lg leading-relaxed md:text-2xl">Dragi vizitatori,</p>
    <p class="mt-8 text-lg leading-relaxed md:text-2xl">
      Sunteți pasionați de feminism, egalitate de gen sau aveți experiențe sau
      perspective de împărtășit?
    </p>
    <p class="mt-8 text-lg leading-relaxed md:text-2xl">
      Trimite-ne articole/poveștile tale pe <a
        href="https://www.spicc.eu/contact"
        rel="noopener noreferrer"
        target="_blank"
        class="link"
      >
        https://www.spicc.eu/contact</a
      > și noi le vom publica.
    </p>
  </Article>
  <Article
    slides={[flashmob, flashmob2, flashmob3]}
    title="Flashmob „Firul Solidarității”"
    reversed
  >
    <p class="text-lg md:text-2xl">
      Eveniment realizat cu ocazia Zilei Internaționale pentru Eliminarea
      Violenței împotriva Femeilor
    </p>
    <MaiMulteButton
      onClick={() => handleMaiMulteClick("/actiuni/firul-solidaritatii")}
    />
  </Article>
  <Article
    title="
    Împreună pentru siguranța femeilor"
    slides={[siguranta, siguranta2, siguranta3]}
    ><p class="text-lg md:text-2xl">
      Timișorenii au fost chemați să participe la un marș pentru siguranța
      femeilor, în data de 22 octombrie, între orele 15 și 17, în Piața Sf.
      Gheorghe.
    </p>
    <MaiMulteButton
      onClick={() =>
        window.open(
          "/actiuni/impreuna-pentru-siguranta-femeilor-2023",
          "_self"
        )}
    /></Article
  >
</section>
