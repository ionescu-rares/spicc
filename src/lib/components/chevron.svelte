<script lang="ts">
  export let onClick: () => void;
  export let className = "";
</script>

<button
  on:click={onClick}
  class={`${className} flex items-center justify-center w-8 h-8 overflow-hidden text-white transition-all bg-black rounded-full md:text-xl md:h-12 md:w-12 bg-opacity-60 hover:bg-opacity-100`}
>
  <slot />
</button>
