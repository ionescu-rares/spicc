<script>
  import logo from "$lib/images/spicclogo.jpg";
</script>

<div class="relative py-0 navbar text-slate-200 bg-brand">
  <div class="flex-1">
    <a href="/" class="text-xl"
      ><img src={logo} alt="logo" class="rounded-full btn-ghost" /></a
    >
  </div>
  <div class="flex-none">
    <ul class="px-1 menu menu-horizontal">
      <li><a class="active:bg-brand" href="/cine-suntem">Cine suntem</a></li>
      <li>
        <details>
          <summary><a href="/ce-facem">Ce facem</a></summary>
          <ul class="z-10 p-2 rounded-t-none bg-brand">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
