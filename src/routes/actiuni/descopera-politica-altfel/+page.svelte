<script>
  import Typography from "$lib/components/font/typography.svelte";
  import BlogPost from "$lib/components/layout/blogPost.svelte";
  import PageLayout from "$lib/components/pageLayout.svelte";
  import first from "$lib/images/actiuni/descopera-politica-altfel/1.jpg";
  import second from "$lib/images/actiuni/descopera-politica-altfel/2.jpg";
  import third from "$lib/images/actiuni/descopera-politica-altfel/3.jpg";
</script>

<PageLayout>
  <BlogPost
    title="Workshop DESCOPERĂ POLITICA: ALTFEL"
    date="07/04/2014"
    location="Universitatea de Vest"
    slides={[first, second, third]}
  >
    <Typography slot="info">
      Activitate, tip Edu – Ciné, constând în proiectarea filmului artistic <strong
        >DIE WELLE</strong
      >, ca suport și pretext al dezbaterii pe teme politologice importante și
      de actualitate, respectiv tema: <strong>TOTALITARISM</strong> versus
      <strong>DEMOCRAȚIE</strong>. <br />
      <br />
      Activitatea a avut drept obiective familiarizarea elevilor cu teme politice
      relevante prin intermediul producțiilor cinematografice și stimularea spiritului
      critic și a abilităților de comunicare ale acestora. Activitatea a promovat
      în rândul liceenilor oferta educațională a Departamentului de Științe Politice
      al UVT și s-a derulat în cadrul programului <cite>„Școala Altfel”</cite>.
    </Typography>
  </BlogPost>
</PageLayout>
