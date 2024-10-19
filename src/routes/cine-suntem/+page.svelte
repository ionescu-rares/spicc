<script>
  import Typography from "$lib/components/font/typography.svelte";
  import PageLayout from "$lib/components/pageLayout.svelte";
  import SectionTitle from "$lib/components/typography/sectionTitle.svelte";
  import EyeRounded from "$lib/icons/eyeRounded.svelte";
  import Preview from "$lib/components/icons/preview.svelte";
  import Target from "$lib/components/icons/target.svelte";
</script>

<PageLayout withSpacing>
  <SectionTitle variant="huge" title="Cine suntem?" />
  <p class="text-lg leading-relaxed sm:text-2xl">
    Suntem o asociație feministă, care militează împotriva discriminării de gen
    prin activism și advocacy și sprijină prin acțiunile sale egalitatea de
    șanse, emanciparea femeilor, educația și politicile publice sensibile la gen
    și incluziunea socială.
  </p>
  <div
    class="z-10 flex flex-col w-full gap-16 p-2 md:gap-0 xl:w-3/4 sm:grid sm:grid-cols-2 place-items-center"
  >
    <div class="max-w-full shadow-xl xs:max-w-3/4 lg:max-w-[450px] card glass">
      <div class="z-10 gap-4 card-body text-start">
        <Typography variant="xl" className="card-title">Misiune</Typography>
        <Typography variant="medium" className="z-10">
          Dorim să construim un spațiu deschis participării și propunerilor
          tuturor feminismelor, încurajând gândirea critică și promovând
          cetățenia activă și dialogul intercultural.
        </Typography>
      </div>
      <div class="absolute -top-8 -right-4">
        <Target className="w-24 h-24 md:w-28 md:h-28" />
      </div>
    </div>

    <div class="max-w-full shadow-xl xs:max-w-3/4 lg:max-w-[450px] card glass">
      <div class="gap-4 card-body text-start">
        <Typography variant="xl" className="card-title">Viziune</Typography>
        <Typography variant="medium" className="z-10">
          Viziunea noastră este o lume fără violență împotriva femeilor, unde
          vocile lor se aud puternic, iar acestea, eliberate de opresiune, se
          bucură de autonomie completă și își valorifică potențialul maxim.
        </Typography>
      </div>
      <div class="absolute -top-8 -right-4">
        <EyeRounded className="w-20 h-20 md:w-24 md:h-24 " />
      </div>
    </div>
  </div>
</PageLayout>
