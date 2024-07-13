<script>
  export let href = "";
  export let checked = true;
  const handleHeaderItemClick = () => {
    checked = false;
  };
</script>

<li class="text-lg"><a {href} on:click={handleHeaderItemClick}><slot /></a></li>
