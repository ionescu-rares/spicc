<script>
  export let title = "";
  export let thumbnail = "";
  export let date = "";
</script>

<div
  class="w-full h-full rounded-md shadow-xl card card-compact sm:w-96 bg-gradient-to-tr from-base-100 to-gray-700"
>
  <figure class="relative flex justify-center h-64">
    <img
      src={thumbnail}
      class="absolute top-0 object-cover w-full h-full blur-lg"
      alt="thumbnail"
    />
    <img
      src={thumbnail}
      class="z-10 object-contain w-full h-full"
      alt="thumbnail"
    />
  </figure>
  <div class="gap-4 card-body">
    <div class="flex flex-col text-start">
      <h2 class="text-xl card-title lg:text-2xl">{title}</h2>
      {#if date}
        <span class="text-md lg:text-lg">📅 {date}</span>
      {/if}
    </div>
    <p class="leading-relaxed text-md lg:text-lg text-start"><slot /></p>
    <div class="justify-end card-actions">
      <slot name="actions" />
    </div>
  </div>
</div>
