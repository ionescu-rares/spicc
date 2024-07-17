<script>
  export let withSpacing = false;
</script>

<section
  class={`flex flex-col items-center min-h-[calc(100svh-87px)] h-auto px-4 ${withSpacing && "gap-16"} md:px-8 py-16 lg:px-16 lg:text-center bg-brand`}
>
  <slot />
</section>
