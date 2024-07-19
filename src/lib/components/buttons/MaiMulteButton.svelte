<script>
  export let smallSize = false;
  export let onClick = () => {};
  export let withSpacing = true;
</script>

<button
  on:click={onClick}
  class={`${withSpacing && "mt-8"} rounded-md btn btn-primary ${!smallSize && "btn-wide"}`}
  >Mai multe</button
>
