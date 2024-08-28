<script>
  import { fly } from "svelte/transition";
  export let withSpacing = false;
  export let withPadding = true;
  export let bgColor = "";
</script>

<section
  in:fly={{ y: -50, duration: 250, delay: 300 }}
  out:fly={{ y: -50, duration: 250 }}
  class={`${bgColor ?? "bg-brand"} flex flex-col items-center min-h-[100svh]  pt-[87px]  h-auto  ${withSpacing && " gap-8 md:gap-16"} ${withPadding && "md:px-8 py-8 px-4 lg:px-16"} lg:text-center `}
>
  <slot />
</section>
