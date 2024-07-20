<script>
  import Typography from "$lib/components/font/typography.svelte";
  import BlogPost from "$lib/components/layout/blogPost.svelte";
  import PageLayout from "$lib/components/pageLayout.svelte";
  import first from "$lib/images/actiuni/securitate.jpg";
</script>

<PageLayout
  ><BlogPost
    title="Gen și (In)Securitate Urbană"
    date="24/11/2018"
    location="AMBASADA"
    slides={[first]}
  >
    <Typography slot="info"
      >În data de 24 noiembrie 2018 am organizat workshop-ul „Gen și
      (In)Securitate Urbană” , organizat în contextul Zilei Internaționale
      pentru Eliminarea Violenței asupra Femeilor și destinat discutării
      oportunității adaptării la agenda europeană (EFUS) și internațională
      (UN-HABITAT) de securitate urbană în materia violenței de gen și violenței
      domestice.</Typography
    ></BlogPost
  ></PageLayout
>
