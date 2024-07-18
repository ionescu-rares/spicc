<script lang="ts">
  export let title = "";
  export let className = "";
  export let withSpacing = true;
</script>

<div
  class={`flex flex-col items-start  ${withSpacing && "mb-8 md:mb-16"} gap-4 ${className}`}
>
  <h2 class="text-4xl md:text-6xl font-bold">{title}</h2>
  <slot name="subtitle" />
</div>
