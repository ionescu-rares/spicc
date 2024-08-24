<script>
  import fallbackProfileSrc from "$lib/images/fallback_profile.png";
  export let src = "";
</script>

<div class="w-8 h-8 rounded-full">
  <img
    src={src || fallbackProfileSrc}
    alt="profile"
    class={`w-full h-full rounded-full ${src ? "p-0 " : "p-1"}  bg-[#F1F1F1]`}
  />
</div>
