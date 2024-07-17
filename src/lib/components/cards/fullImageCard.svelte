<script>
  export let title = "";
  export let content = "";
  export let imageSrc = "";
</script>

<div class="w-auto shadow-xl card bg-base-100 image-full">
  <figure>
    <img src={imageSrc} alt="card background" />
  </figure>
  <div class="card-body">
    <h2 class="text-4xl card-title text-white">{title}</h2>
    <p class="text-md md:text-xl text-start max-w-[70ch] text-white">
      {content}
    </p>
    <div class="justify-end card-actions">
      <slot />
    </div>
  </div>
</div>
