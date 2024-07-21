<script>
  import Typography from "$lib/components/font/typography.svelte";
  import BlogPost from "$lib/components/layout/blogPost.svelte";
  import PageLayout from "$lib/components/pageLayout.svelte";
  import informamSrc from "$lib/images/ce-facem/plan_siguranta.jpg";
  import InformamDetails from "../informamDetails.svelte";
</script>

<PageLayout
  ><BlogPost slides={[informamSrc]} title="Informăm">
    <Typography slot="info">
      <InformamDetails />
    </Typography></BlogPost
  ></PageLayout
>
