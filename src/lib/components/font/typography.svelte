<script lang="ts">
  export let bold = false;
  export let className = "";
  const variants = {
    xs: "text-xs lg:text-sm",
    small: "text-md lg:text-lg",
    medium: "text-lg lg:text-xl",
    large: "text-xl lg:text-2xl",
    xl: "text-2xl lg:text-3xl",
    xxl: "text-3xl lg:text-4xl",
    huge: "text-4xl lg:text-5xl",
  };
  export let variant:
    | "xs"
    | "small"
    | "medium"
    | "large"
    | "xl"
    | "xxl"
    | "huge" = "medium" as const;
</script>

{#if ["large", "xl", "xxl", "huge"].includes(variant)}
  <h3 class={`${variants[variant]} ${bold ? "font-bold" : ""} ${className} `}>
    <slot />
  </h3>
{:else}
  <p class={`${variants[variant]} ${bold ? "font-bold" : ""} ${className} `}>
    <slot />
  </p>
{/if}
