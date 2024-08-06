<script lang="ts">
  import Typography from "../font/typography.svelte";

  export let title = "";
  export let className = "";
  export let withSpacing = true;
  export let variant: "huge" | "small" | "medium" | "large" | "xl" | "xxl" =
    "xxl";
</script>

<div
  class={`flex flex-col items-start  ${withSpacing && "mb-8 md:mb-16"} gap-4 ${className}`}
>
  <Typography {variant} bold>{title}</Typography>
  <slot name="subtitle" />
</div>
