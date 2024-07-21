<script>
  import SectionTitle from "./../../lib/components/typography/sectionTitle.svelte";
  import Typography from "$lib/components/font/typography.svelte";
  import FeminismIcon from "$lib/icons/feminism-icon.svelte";
</script>

<section
  class="flex flex-col p-8 md:p-16 lg:grid lg:grid-cols-3 place-items-center text-start"
>
  <div class="w-full h-full col-span-2">
    <Typography>
      <SectionTitle title="Susține asociația SPICC!" />
      Dacă dorești să susții drepturile femeilor, educația de gen și lupta pentru
      prevenirea și combaterea violenței asupra femeilor, te poți implica prin voluntariat
      sau poți face o donație sau o sponsorizare pentru a sprijini activitățile asociației.
      <br /> <br />
      Pentru donații sau sponsorizări, care pot fi făcute prin transfer bancar, te
      rugăm să menționezi “donație asociația SPICC” și să completezi datele de mai
      jos:
      <pre>

Asociația SPICC
CIF: 30618640 
IBAN: RO57INGB0000999903599361
   
</pre>
      Sprijinul tău contează! Mulțumim!
    </Typography>
  </div>
  <FeminismIcon className="hidden w-2/3  lg:block" />
</section>
