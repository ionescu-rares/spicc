<script>
  export let title = "";
  export let content = "";
  export let imageSrc = "";
</script>

<div class="w-auto rounded-none card">
  <figure>
    <img src={imageSrc} alt="card background" class="rounded-md" />
  </figure>
  <div class="px-0 card-body">
    <h2 class="text-4xl card-title">{title}</h2>
    <p class="text-md md:text-xl mt-4 text-start max-w-[70ch]">
      {content}
    </p>
    <div class="card-actions">
      <slot />
    </div>
  </div>
</div>
