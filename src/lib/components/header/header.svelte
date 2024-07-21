<script>
  import logo from "$lib/images/spicclogo.jpg";
  import { page } from "$app/stores";
  import MenuIcon from "../icons/menuIcon.svelte";
  import HeaderItem from "./headerItem.svelte";
  let checked = false;

  const paths = [
    { url: "/", label: "Acasă" },
    { url: "/ce-facem", label: "Ce facem" },
    { url: "/cine-suntem", label: "Cine suntem" },
    { url: "/proiecte", label: "Proiecte" },
    { url: "/actiuni", label: "Acțiuni" },
    { url: "/contact", label: "Contact" },
  ];
</script>

<div class="z-30 drawer drawer-end">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" bind:checked />
  <div class="flex flex-col drawer-content">
    <!-- Navbar -->
    <div class="flex items-center justify-between w-full py-0 navbar bg-brand">
      <a href="/" class="text-xl">
        <img src={logo} alt="logo" class="border-none rounded-full btn-ghost" />
      </a>
      <div class="hidden lg:block">
        <ul class="text-md menu menu-horizontal">
          <!-- Navbar content here -->
          {#each paths as path}
            <li>
              <a
                href={path.url}
                class={`${$page.url.pathname === path.url && "font-bold"}`}
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
    <ul class="min-h-full p-4 menu bg-brand w-80">
      <!-- Sidebar content here -->
      <button
        class="items-center self-end btn btn-ghost btn-circle text-md"
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
