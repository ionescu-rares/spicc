<script>
  export let imageSrc = "";
  export let className = "";
  export let onClick = () => {};
</script>

<div
  class={`transition cursor-pointer relative no-padding image-full hover:scale-105 ${className}`}
  on:keydown={onClick}
  on:click={onClick}
  role="button"
  tabindex="0"
>
  <figure>
    <img src={imageSrc} alt="card background" class="rounded-md" />
  </figure>
  <div
    class="absolute rounded-lg bottom-0 flex justify-end w-full h-[30%] p-0 bg-gradient-to-t from-black to-transparent card-body"
  >
    <h2
      class="self-center mb-0 md:mb-2 text-sm md:text-lg lg:text-3xl text-[#F1F1F1] card-title"
    >
      <slot />
    </h2>
  </div>
</div>

<style>
  .no-padding {
    padding: 0px !important;
  }
</style>
