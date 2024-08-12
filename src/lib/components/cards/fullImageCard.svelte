<script>
  export let imageSrc = "";
  export let className = "";
  export let onClick = () => {};
  let isHovered = false;
</script>

<div
  class={`cursor-pointer relative h-full rounded-lg image-full ${className} overflow-hidden`}
  on:keydown={onClick}
  on:click={onClick}
  on:mouseenter={() => (isHovered = true)}
  on:mouseleave={() => (isHovered = false)}
  role="button"
  tabindex="0"
>
  <figure>
    <img
      src={imageSrc}
      alt="card background"
      class="object-cover w-full h-full overflow-hidden transition-all scale-100 rounded-lg"
      class:scale={isHovered}
    />
  </figure>
  <div
    class="absolute rounded-lg bottom-0 flex justify-end w-full h-[40%] p-0 bg-gradient-to-t from-black to-transparent card-body"
  >
    <h2
      class="self-center mb-2 md:mb-4 text-md md:text-xl lg:text-4xl text-[#F1F1F1] card-title"
    >
      <slot />
    </h2>
  </div>
</div>

<style>
  .no-padding {
    padding: 0px !important;
  }
  .scale {
    transform: scale(1.1);
  }
</style>
