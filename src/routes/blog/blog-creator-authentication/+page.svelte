<script>
  import Typography from "$lib/components/font/typography.svelte";
  import PageLayout from "$lib/components/pageLayout.svelte";
  import logo from "$lib/images/logo-transparent.png";
  let username = "";
  let password = "";
  let errorMsg = "";

  async function login() {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      window.location.href = "/site-management";
    } else {
      const { error } = await response.json();
      console.error(error);
      errorMsg = error;
    }
  }
</script>

<PageLayout withSpacing={false}>
  <form
    on:submit|preventDefault={login}
    class="flex flex-col justify-center gap-8 p-8 my-auto rounded-lg bg-gradient-to-r from-base-100 to-gray-700 max-w-96"
  >
    <img src={logo} alt="logo" class="w-16 h-16 mx-auto" />
    <Typography bold>SPICC Admin</Typography>
    <input
      type="text"
      placeholder="Username"
      bind:value={username}
      class="max-w-xs mx-auto input input-bordered"
    />
    <input
      type="password"
      placeholder="Password"
      bind:value={password}
      class="max-w-xs mx-auto input input-bordered"
    />
    <button type="submit" class="w-32 mx-auto btn btn-primary">Login</button>
  </form>

  {#if errorMsg}
    <p style="color: red;">{errorMsg}</p>
  {/if}
</PageLayout>
