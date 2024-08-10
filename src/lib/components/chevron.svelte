<script lang="ts">
  export let onClick: () => void;
  export let className = "";
</script>

<button
  on:click={onClick}
  class={`${className} flex items-center justify-center w-4 h-4 p-4 overflow-hidden text-lg text-xl text-white transition-all bg-black rounded-full md:h-8 md:w-8 md:p-6 md:md:text-2xl duration-70 bg-opacity-60 hover:bg-opacity-100`}
>
  <slot />
</button>
