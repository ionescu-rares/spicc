<script>
  import logo from "$lib/images/spicclogo.jpg";
  import MenuIcon from "../icons/menuIcon.svelte";
  import HeaderItem from "./headerItem.svelte";

  let checked = false;
</script>

<div class="drawer drawer-end z-30">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" bind:checked />
  <div class="drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="navbar bg-brand w-full flex justify-between items-center">
      <a href="/" class="text-xl">
        <img src={logo} alt="logo" class="border-none rounded-full btn-ghost" />
      </a>
      <div class=" hidden lg:block">
        <ul class="menu menu-horizontal">
          <!-- Navbar content here -->
          <li>
            <a class="active:bg-brand" href="/cine-suntem">Cine suntem</a>
          </li>
          <li><a href="/ce-facem">Ce facem</a></li>
          <li><a href="/proiecte">Proiecte</a></li>
          <li><a href="/actiuni">Acțiuni</a></li>
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
    <ul class="menu bg-base-200 min-h-full w-80 p-4">
      <!-- Sidebar content here -->
      <button
        class="btn btn-ghost btn-circle self-end"
        on:click={() => (checked = false)}>X</button
      >
      <HeaderItem href="/cine-suntem" bind:checked>Cine suntem</HeaderItem>
      <HeaderItem href="/ce-facem" bind:checked>Ce facem</HeaderItem>
      <HeaderItem href="/proiecte" bind:checked>Proiecte</HeaderItem>
      <HeaderItem href="/actiuni" bind:checked>Acțiuni</HeaderItem>
    </ul>
  </div>
</div>
