<script>
  import logo from "$lib/images/logo-transparent.png";
  import { page } from "$app/stores";
  import MenuIcon from "../icons/menuIcon.svelte";
  import HeaderItem from "./headerItem.svelte";
  let checked = false;

  const paths = [
    { url: "/", label: "Acasă" },
    { url: "/cine-suntem", label: "Cine suntem" },
    { url: "/ce-facem", label: "Ce facem" },
    { url: "/proiecte", label: "Proiecte" },
    { url: "/actiuni", label: "Acțiuni" },
    { url: "/contact", label: "Contact" },
  ];
</script>

<div class="z-30 drawer drawer-end">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" bind:checked />
  <div class="relative flex flex-col drawer-content">
    <!-- Navbar -->
    <div
      class={`flex absolute top-0 items-center  justify-between w-full px-4 md:px-8 py-0 transparent-navbar navbar`}
    >
      <a href="/" class="py-2">
        <img
          src={logo}
          alt="logo"
          class="object-cover p-2 border-none btn-circle btn-md btn-ghost"
        />
      </a>
      <div class="hidden lg:block">
        <ul class="rounded-full menu menu-horizontal backdrop-filter">
          <!-- Navbar content here -->
          {#each paths as path}
            <li class="text-lg">
              <a
                href={path.url}
                class={`${$page.url.pathname === path.url && "font-extrabold"}`}
                >{path.label}</a
              >
            </li>
          {/each}
        </ul>
      </div>
      <div class="flex-none lg:hidden">
        <label
          for="my-drawer-3"
          aria-label="open sidebar"
          id="drawer-opener"
          class="btn btn-square btn-ghost"
        >
          <MenuIcon />
        </label>
      </div>
    </div>
  </div>
  <div class="drawer-side">
    <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"
    ></label>
    <ul class="min-h-full menu w-80 backdrop-filter">
      <!-- Sidebar content here -->
      <button
        class="items-center self-end mx-4 btn btn-ghost btn-circle text-md"
        on:click={() => (checked = false)}>X</button
      >
      {#each paths as path}
        <HeaderItem
          href={path.url}
          bind:checked
          isActive={path.url === $page.url.pathname}>{path.label}</HeaderItem
        >
      {/each}
    </ul>
  </div>
</div>

<style>
  .transparent-navbar {
    background: transparent !important;
  }
  .backdrop-filter {
    backdrop-filter: blur(100px);
  }
</style>
