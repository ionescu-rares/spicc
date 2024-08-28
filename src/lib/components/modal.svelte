<script lang="ts">
  export let modalId = "";
  export let title = "";
</script>

<dialog id={modalId} class="modal">
  <div
    class="w-11/12 h-auto max-w-4xl max-h-[80%] modal-box bg-white bg-opacity-90 text-slate-700"
  >
    <form method="dialog">
      <button
        class="absolute text-xl md:text-3xl btn btn-md btn-circle btn-ghost right-4 top-4"
        >✕</button
      >
    </form>
    <h3 class="text-4xl font-bold">{title}</h3>
    <div class="flex flex-col justify-center gap-2 md:gap-8 text-start">
      <slot />
    </div>
    <!-- <form method="dialog" class="grid">
      <button class="justify-self-end btn btn-primary">Inchide</button>
    </form> -->
  </div>
</dialog>
