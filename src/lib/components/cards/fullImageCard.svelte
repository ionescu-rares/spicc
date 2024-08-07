<script>
  export let title = "";
  export let imageSrc = "";
  export let onClick = () => {};
</script>

<div
  class="transition cursor-pointer no-padding card image-full hover:scale-105"
  on:keydown={onClick}
  on:click={onClick}
  role="button"
  tabindex="0"
>
  <figure>
    <img src={imageSrc} alt="card background" class="rounded-md" />
  </figure>
  <div class="flex justify-center p-0 card-body">
    <h2
      class="self-center text-md md:text-xl lg:text-4xl text-[#F1F1F1] card-title"
    >
      {title}
    </h2>
  </div>
</div>

<style>
  .no-padding {
    padding: 0px !important;
  }
</style>
