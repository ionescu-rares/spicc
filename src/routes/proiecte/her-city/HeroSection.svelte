<script>
  export let bannerSrc = "";
  export let logoSrc = "";
  import { page } from "$app/stores";

  let paths = [
    {
      url: "/proiecte/her-city",
      label: "Pagina principala",
    },
    { url: "/proiecte/her-city/her-europe", label: "Her Europe" },
    { url: "/proiecte/her-city/her-party", label: "Her Party" },
  ];
  $: currentPath = $page.url.pathname;
  $: filteredPaths = paths.filter((path) => currentPath !== path.url);
</script>

<section class="relative w-full overflow-hidden text-[#F1F1F1]">
  <img
    alt="her city banner"
    src={bannerSrc}
    class="h-[60vh] lg:h-full object-cover w-full h-full"
  />

  <div
    class="absolute top-0 left-0 right-0 flex flex-col w-full top-12 lg:top-24"
  >
    <div class="h-full p-8 mx-auto rounded-md">
      <img alt="logo" src={logoSrc} class="z-20 w-40 mx-auto lg:w-96" />
      <nav class="flex gap-4 mx-auto lg:gap-8">
        {#each filteredPaths as path}
          <li class="z-20 list-none">
            <a class="text-lg underline lg:text-2xl bold" href={path.url}
              >{path.label}</a
            >
          </li>
        {/each}
      </nav>
    </div>
  </div>
  <slot />
</section>
