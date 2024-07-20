<script lang="ts">
  export let bold = false;
  const variants = {
    small: "text-sm lg:text-lg",
    medium: "text-md lg:text-xl",
    large: "text-lg lg:text-2xl",
    xl: "text-xl lg:text-3xl",
  };
  export let variant: "small" | "medium" | "large" | "xl" = "medium";
</script>

<p class={`${variants[variant]} ${bold && "font-bold"} `}>
  <slot />
</p>
