<script lang="ts">
  import Typography from "../font/typography.svelte";

  export let title = "";
  export let className = "";
  export let withSpacing = true;
  export let fullWidth = false;
  export let variant:
    | "xs"
    | "huge"
    | "small"
    | "medium"
    | "large"
    | "xl"
    | "xxl" = "xxl";
</script>

<div
  class={`flex flex-col items-start ${fullWidth && "w-full"} ${withSpacing && "mb-8 md:mb-16"} gap-4 ${className}`}
>
  <Typography {variant} bold>{title}</Typography>
  <slot name="subtitle" />
</div>
