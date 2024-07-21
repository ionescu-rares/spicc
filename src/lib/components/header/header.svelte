<script>
  import logo from "$lib/images/spicclogo.jpg";
  import { page } from "$app/stores";
  import MenuIcon from "../icons/menuIcon.svelte";
  import HeaderItem from "./headerItem.svelte";
  let checked = false;
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
        <ul class="menu menu-horizontal">
          <!-- Navbar content here -->
          {#if $page.url.pathname !== "/"}
            <li><a href="/">Acasă</a></li>
          {/if}
          <li>
            <a class="active:bg-brand" href="/cine-suntem">Cine suntem</a>
          </li>
          <li><a href="/ce-facem">Ce facem</a></li>
          <li><a href="/proiecte">Proiecte</a></li>
          <li><a href="/actiuni">Acțiuni</a></li>
          <li><a href="/contact">Contact</a></li>
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
      {#if $page.url.pathname !== "/"}
        <HeaderItem href="/" bind:checked>Acasă</HeaderItem>
      {/if}
      <HeaderItem href="/cine-suntem" bind:checked>Cine suntem</HeaderItem>
      <HeaderItem href="/ce-facem" bind:checked>Ce facem</HeaderItem>
      <HeaderItem href="/proiecte" bind:checked>Proiecte</HeaderItem>
      <HeaderItem href="/actiuni" bind:checked>Acțiuni</HeaderItem>
      <HeaderItem href="/contact" bind:checked>Contact</HeaderItem>
    </ul>
  </div>
</div>
