<script>
  export let title = "";
  export let content = "";
  export let imageSrc = "";
  export let onClick = () => {};
</script>

<div class="w-auto shadow-xl card bg-base-100 image-full">
  <figure>
    <img src={imageSrc} alt="Educam" />
  </figure>
  <div class="card-body">
    <h2 class="text-4xl card-title">{title}</h2>
    <p class="text-md md:text-xl text-start max-w-[70ch]">{content}</p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary" on:click={onClick}>Mai multe</button>
    </div>
  </div>
</div>
