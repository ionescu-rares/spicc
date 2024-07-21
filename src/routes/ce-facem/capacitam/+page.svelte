<script>
  import Typography from "$lib/components/font/typography.svelte";
  import BlogPost from "$lib/components/layout/blogPost.svelte";
  import PageLayout from "$lib/components/pageLayout.svelte";
  import capacitamSrc from "$lib/images/ce-facem/capacitam.jpg";
  import CapacitamDetails from "../capacitamDetails.svelte";
</script>

<PageLayout
  ><BlogPost slides={[capacitamSrc]} title="Capacităm">
    <Typography slot="info">
      <CapacitamDetails />
    </Typography></BlogPost
  ></PageLayout
>
