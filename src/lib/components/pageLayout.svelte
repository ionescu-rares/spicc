<script>
  export let withSpacing = false;
  export let withPadding = true;
</script>

<section
  class={`flex flex-col items-center min-h-[calc(100svh-87px)] h-auto  ${withSpacing && "gap-16"} ${withPadding && "md:px-8 py-8 px-4 lg:px-16"} lg:text-center bg-brand`}
>
  <slot />
</section>
