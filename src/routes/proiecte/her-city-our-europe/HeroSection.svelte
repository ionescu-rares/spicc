<script lang="ts">
  import { afterNavigate } from "$app/navigation";

  export let bannerSrc = "";
  export let logoSrc = "";
  export let fixedHeight = true;
  import { page } from "$app/stores";

  let hasScrolled = false;
  let hero: HTMLElement | null = null;
  export let paths = [
    {
      url: "/proiecte/her-city-our-europe",
      label: "Acasă",
    },
    { url: "/proiecte/her-city-our-europe/her-city", label: "Her City" },
    { url: "/proiecte/her-city-our-europe/her-europe", label: "Her Europe" },
    { url: "/proiecte/her-city-our-europe/her-party", label: "Her Party" },
  ];
  $: currentPath = $page.url.pathname;
  $: filteredPaths = paths.filter((path) => currentPath !== path.url);
  const handleScroll = () => {
    if (hero) {
      window.scrollTo({
        top: hero.getBoundingClientRect().bottom,
        behavior: "smooth",
      });
    }
    hasScrolled = true;
    window.removeEventListener("scroll", handleScroll);
  };

  afterNavigate(() => {
    window.scrollTo({ top: 0 });

    setTimeout(() => {
      if (!hasScrolled && window.scrollY <= 10) {
        window.addEventListener("scroll", handleScroll);
      }
    }, 0);
  });
</script>

<section
  class={`relative w-full overflow-hidden text-[#F1F1F1] ${fixedHeight ? "h-[70vh]" : ""} md:h-full`}
  bind:this={hero}
>
  <img
    alt="her city banner"
    src={bannerSrc}
    class="h-[70vh] lg:h-full object-cover w-full h-full"
  />

  <div
    class="absolute top-0 left-0 right-0 flex flex-col w-full top-12 lg:top-24"
  >
    <div class="h-full p-8 mx-auto rounded-md">
      {#if logoSrc}
        <img alt="logo" src={logoSrc} class="z-20 w-40 mx-auto lg:w-96" />
      {/if}
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
