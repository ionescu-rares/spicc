<script lang="ts">
  const variants = {
    medium: "text-md lg:text-xl",
    large: "text-lg lg:text-2xl",
  };
  export let variant: "medium" | "large" = "medium";
</script>

<p class={variants[variant]}><slot /></p>
