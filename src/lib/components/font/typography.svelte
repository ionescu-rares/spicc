<script lang="ts">
  export let bold = false;
  export let className = "";
  const variants = {
    small: "text-sm lg:text-lg",
    medium: "text-md lg:text-xl",
    large: "text-lg lg:text-2xl",
    xl: "text-xl lg:text-3xl",
    xxl: "text-2xl lg:text-4xl",
    huge: "text-3xl lg:text-5xl",
  };
  export let variant: "small" | "medium" | "large" | "xl" | "xxl" | "huge" =
    "medium" as const;
</script>

<p class={`${variants[variant]} ${bold && "font-bold"} ${className} `}>
  <slot />
</p>
