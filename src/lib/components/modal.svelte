<script lang="ts">
  export let modalId = "";
  export let title = "";
  export let className = "";
</script>

<dialog id={modalId} class="modal modal-backdrop">
  <div
    class={`w-11/12 md:w-full  h-auto max-w-4xl  modal-box bg-white bg-opacity-90 text-slate-700 ${className}`}
  >
    <form method="dialog">
      <button
        class="absolute text-3xl btn btn-md btn-circle btn-ghost right-4 top-4 difference"
        >✕</button
      >
    </form>
    <h3 class="text-4xl font-bold">{title}</h3>
    <div class="flex flex-col justify-center gap-8 text-start">
      <slot />
    </div>
    <!-- <form method="dialog" class="grid">
      <button class="justify-self-end btn btn-primary">Inchide</button>
    </form> -->
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>

<style>
  .difference {
    mix-blend-mode: difference;
    color: white; /* Base color */
  }
</style>
