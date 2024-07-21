<script>
  export let href = "";
  export let checked = true;
  export let isActive = false;
  const handleHeaderItemClick = () => {
    checked = false;
  };
</script>

<li class="text-lg">
  <a
    {href}
    on:click={handleHeaderItemClick}
    class={`${isActive && "font-bold"}`}><slot /></a
  >
</li>
