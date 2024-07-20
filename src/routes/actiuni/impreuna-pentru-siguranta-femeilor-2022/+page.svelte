<script>
  import Typography from "$lib/components/font/typography.svelte";
  import BlogPost from "$lib/components/layout/blogPost.svelte";
  import PageLayout from "$lib/components/pageLayout.svelte";
  import first from "$lib/images/actiuni/siguranta-2022/1.jpg";
  import second from "$lib/images/actiuni/siguranta-2022/2.jpg";
  import third from "$lib/images/actiuni/siguranta-2022/3.jpg";
  import fourth from "$lib/images/actiuni/siguranta-2022/4.jpg";
</script>

<PageLayout>
  <BlogPost
    title="Împreună pentru siguranța femeilor"
    slides={[first, second, third, fourth]}
    date="23/10/2022"
    location="Piața Unirii"
  >
    <Typography slot="info">
      Acțiune de solidarizare cu marșul organizat de către rețeaua VIF (rețeaua
      pentru prevenirea și combaterea violenței împotriva femeilor) în
      București. Atragem atenția asupra problemei violenței împotriva femeilor
      din România. <br /> <br />Manifestații similare au avut loc în Cluj,
      Brașov, Sibiu, Iași, Giurgiu, Mizil și Valea Seacă (jud. Bacău). <br />
      <br /> Sub sloganul
      <cite>„Ne-am săturat de vorbe goale, vrem servicii sociale!”</cite>,
      asociația SPICC, alătrui de toate ONG-urile din rețeaua VIF am cerut
      autorităților finanțarea serviciilor de asistență socială pentru victimele
      violenței de gen și alocarea de fonduri publice pentru programe de
      educare, formare și conștientizare.</Typography
    ></BlogPost
  >
</PageLayout>
