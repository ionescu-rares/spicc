<script>
  import MaiMulteButton from "../buttons/MaiMulteButton.svelte";
  export let title = "";
  export let thumbnail = "";
</script>

<div class="card card-compact bg-base-100 w-96 shadow-xl">
  <figure class="h-64 flex justify-center relative">
    <img
      src={thumbnail}
      class="absolute w-full top-0 w-full blur-lg object-cover h-full"
      alt="thumbnail"
    />
    <img
      src={thumbnail}
      class="z-10 w-full object-contain h-full"
      alt="thumbnail"
    />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p class="text-lg lg:text-xl leading-relaxed text-start"><slot /></p>
    <div class="card-actions justify-end">
      <MaiMulteButton smallSize />
    </div>
  </div>
</div>
