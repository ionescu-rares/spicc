<script>
  import "../app.css";
  import Header from "$lib/components/header/header.svelte";
  import { fly } from "svelte/transition";
</script>

<div class="bg-brand">
  <Header />
  <slot />
</div>
