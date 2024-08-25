<script>
  import "../app.css";
  import Header from "$lib/components/header/header.svelte";
  import { fly } from "svelte/transition";
  import Footer from "$lib/components/footer/footer.svelte";
</script>

<div
  in:fly={{ y: -50, duration: 250, delay: 300 }}
  out:fly={{ y: -50, duration: 250 }}
  class="bg-brand"
>
  <Header />
  <slot />
  <Footer />
</div>
