<script>
  import SectionTitle from "$lib/components/typography/sectionTitle.svelte";
  import misiuneSrc from "$lib/images/cine-suntem/misiune.jpeg";
  import viziuneSrc from "$lib/images/cine-suntem/viziune.jpg";
</script>

<section
  class="flex flex-col items-center h-auto px-8 py-24 lg:px-32 lg:text-center bg-brand"
>
  <SectionTitle title="Cine suntem?" />
  <p class="mt-16 text-2xl leading-relaxed">
    Suntem o asociație feministă, care militează împotriva discriminării de gen
    prin activism și advocacy și sprijină prin acțiunile sale egalitatea de
    șanse, emanciparea femeilor, educația și politicile publice sensibile la gen
    și incluziunea socială.
  </p>
  <div
    class="flex flex-col mt-24 gap-y-8 lg:gap-y-0 lg:grid lg:grid-rows-6 lg:grid-cols-2 lg:gap-x-8 place-items-center text-start"
  >
    <img src={misiuneSrc} alt="misiune" class="-start-1 lg:row-span-6" />
    <h3 class="col-start-2 row-end-2 text-4xl font-bold">Misiune</h3>
    <p class="col-start-2 row-start-2 row-end-4 text-2xl">
      Dorim să construim un spațiu deschis participării și propunerilor tuturor
      feminismelor, încurajând gândirea critică și promovând cetățenia activă și
      dialogul intercultural.
    </p>
  </div>
  <div
    class="flex flex-col mt-24 gap-y-8 lg:gap-y-0 lg:grid lg:grid-rows-6 lg:grid-cols-2 lg:gap-x-8 place-items-center text-start"
  >
    <img src={viziuneSrc} alt="viziune" class="row-span-6" />
    <h3 class="col-start-1 row-end-2 text-4xl font-bold">Viziune</h3>
    <p class="col-start-1 row-start-2 row-end-5 text-2xl">
      Viziunea noastră este a unei lumi în care toate formele de violență
      împotriva femeilor au fost eliminate, în care vocile femeilor se aud clar
      și puternic, în care femeile, eliberate de toate formele de opresiune se
      bucură de autonomie deplină și au posibilitatea de a-și valorifica la
      maxim potențialul.
    </p>
  </div>
</section>
