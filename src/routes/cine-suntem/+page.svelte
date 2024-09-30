<script>
  import Typography from "$lib/components/font/typography.svelte";
  import PageLayout from "$lib/components/pageLayout.svelte";
  import SectionTitle from "$lib/components/typography/sectionTitle.svelte";
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
    class="z-10 flex flex-col max-w-full gap-16 sm:grid sm:grid-cols-2 place-items-center"
  >
    <div
      class="max-w-full shadow-xl xs:max-w-3/4 lg:max-w-[500px] h-80 card glass"
    >
      <div class="z-10 card-body text-start">
        <Typography variant="xl" className="card-title">Misiune</Typography>
        <Typography variant="medium" className="z-10">
          Dorim să construim un spațiu deschis participării și propunerilor
          tuturor feminismelor, încurajând gândirea critică și promovând
          cetățenia activă și dialogul intercultural.
        </Typography>
      </div>
      <div class="absolute flex items-center justify-center centered -z-10">
        <Target className="w-3/4 h-3/4" />
      </div>
    </div>

    <div
      class="max-w-full shadow-xl xs:max-w-3/4 lg:max-w-[500px] h-80 card glass"
    >
      <div class="card-body text-start">
        <Typography variant="xl" className="card-title">Viziune</Typography>
        <Typography variant="medium" className="z-10">
          Viziunea noastră este o lume fără violență împotriva femeilor, unde
          vocile lor se aud puternic, iar acestea, eliberate de opresiune, se
          bucură de autonomie completă și își valorifică potențialul maxim.
        </Typography>
      </div>
      <div class="absolute centered">
        <Preview className="w-full h-full -z-10" />
      </div>
    </div>
  </div>
</PageLayout>

<style>
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
