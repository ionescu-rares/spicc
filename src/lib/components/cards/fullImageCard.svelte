<script>
  export let title = "";
  export let content = "";
  export let imageSrc = "";
</script>

<div
  class="w-auto rounded-md shadow-xl card bg-gradient-to-tr from-base-100 to-gray-700"
>
  <figure>
    <img src={imageSrc} alt="card background" />
  </figure>
  <div class="card-body">
    <h2 class="text-4xl card-title">{title}</h2>
    <p class="text-md md:text-xl text-start max-w-[70ch]">
      {content}
    </p>
    <div class="justify-end card-actions">
      <slot />
    </div>
  </div>
</div>
