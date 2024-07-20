<script>
  import Typography from "$lib/components/font/typography.svelte";
  import BlogPost from "$lib/components/layout/blogPost.svelte";
  import PageLayout from "$lib/components/pageLayout.svelte";
  import first from "$lib/images/actiuni/one-billion-rising/1.jpg";
  import second from "$lib/images/actiuni/one-billion-rising/2.jpg";
  import third from "$lib/images/actiuni/one-billion-rising/3.jpg";
  import fourth from "$lib/images/actiuni/one-billion-rising/4.jpg";
</script>

<PageLayout
  ><BlogPost
    location="Iulius Mall"
    date="14/02/2013"
    title="
Flashmob One Billion Rising"
    slides={[first, second, third, fourth]}
    ><Typography slot="info"
      >Flashmob One Billion Rising, organizat în colabrare cu Feminis(T)m și
      Casa de Cultură a Studenților, într-un demers comun cu mișcarea globală de
      protest împotriva oricăror forme de violență asupra femeilor.</Typography
    >
  </BlogPost></PageLayout
>
