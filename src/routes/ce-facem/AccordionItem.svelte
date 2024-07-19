<script>
  export let title = "";
  export let index = 0;
</script>

<input
  type="radio"
  role="tab"
  class="tab"
  aria-label={title}
  checked={index === 1}
/>
<div
  role="tabpanel"
  class="grid w-full grid-cols-2 gap-16 tab-content place-items-center text-start"
>
  <div class="mt-8">
    <slot name="details" />
  </div>
  <div class="mt-8">
    <slot name="img" />
  </div>
</div>
