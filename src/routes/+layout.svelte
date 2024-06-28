<script>
  import "../app.css";
  import Header from "$lib/components/header.svelte";
</script>

<div class="w-full h-full">
  <Header />
  <slot />
</div>
