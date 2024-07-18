<script lang="ts">
  export let bold = false;
  const variants = {
    medium: "text-md lg:text-xl",
    large: "text-lg lg:text-2xl",
    xl: "text-xl lg:text-3xl",
  };
  export let variant: "medium" | "large" | "xl" = "medium";
</script>

<p class={`${variants[variant]} ${bold && "font-bold"}`}>
  <slot />
</p>
