<script>
  export let smallSize = false;
  export let onClick = () => {};
</script>

<button
  on:click={onClick}
  class={`mt-8 btn btn-primary ${!smallSize && "btn-wide"}`}>Mai multe</button
>
