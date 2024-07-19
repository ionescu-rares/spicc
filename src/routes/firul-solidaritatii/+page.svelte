<script>
  import PageLayout from "$lib/components/pageLayout.svelte";
  import BlogPost from "$lib/components/layout/blogPost.svelte";
  import first from "$lib/images/news/flashmob/firul_solidaritatii_1.jpg";
  import second from "$lib/images/news/flashmob/firul_solidaritatii_2.jpg";
  import third from "$lib/images/news/flashmob/flashmob.jpg";
  import fourth from "$lib/images/actiuni/firul-solidaritatii/4.jpg";
  import Typography from "$lib/components/font/typography.svelte";
</script>

<PageLayout>
  <BlogPost
    date="23/11/2023"
    location="Piața Operei"
    title="Firul solidarității"
    slides={[first, second, third, fourth]}
  >
    <div slot="info">
      <Typography>
        Sâmbătă, 25 noiembrie, cu ocazia Zilei Internaționale pentru Eliminarea
        Violenței asupra Femeilor, am invitat timișorenii să se alăture
        flashmobului pe care l-am organizat în Piața Operei, la ora 13.30.
        Membrele asociației au întins un fir roșu, simbol al conexiunii între
        persoane, acțiuni, mișcări și inițiative care au ca scop combaterea
        violenței de gen și sprijinirea victimelor și au invitat publicul să-l
        prindă și să-l dea mai departe tuturor celor solidari cu această cauză.
        Timp de câteva minute am afișat mesaje împotriva violenței asupra
        femeilor și am citit date relevante, referitoare la situația violenței
        de gen în lume, dar mai ales în România. <br /><br />Prin acest
        flashmob, Asociația SPICC a invitat publicul timișorean să facă parte
        dintr-un dialog colectiv despre un viitor fără violență de gen și să
        scandeze împreună,
        <strong>STOP VIOLENȚEI ÎMPOTRIVA FEMEILOR!</strong>”
      </Typography>
      <Typography>
        <cite>
          "Prinde firul roșu al solidarității și al schimbării! Alătură-te
          flashmobului nostru, dedicat combaterii violenței de gen, pentru a
          simboliza unitatea, perseverența și dorința noastră comună de a
          transforma societatea într-una mai echitabilă! Haideți să facem ca
          firul roșu să devină o poveste puternică a schimbării, iar
          participarea voastră să fie parte din acest dialog colectiv pentru un
          viitor fără violență de gen! 5 minute de solidaritate cu zecile de mii
          de femei care cad victime violenței anual, în România și cu sutele de
          milioane de femei victime ale violenței de gen din lume!"
        </cite> <br /><br />— îndemnurile noastre adresate publicului.
      </Typography>
    </div>
  </BlogPost>
</PageLayout>
