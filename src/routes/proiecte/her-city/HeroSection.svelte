<script>
  import { fly } from "svelte/transition";
  export let bannerSrc = "";
  export let logoSrc = "";
</script>

<section class="relative w-full overflow-hidden">
  <img
    alt="her city banner"
    src={bannerSrc}
    class="object-cover w-full h-full"
  />
  <img
    alt="logo"
    src={logoSrc}
    class="absolute top-0 left-0 right-0 w-40 mx-auto top-12 md:top-24 md:w-96"
  />
  <slot />
</section>
