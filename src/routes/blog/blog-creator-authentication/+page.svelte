<!-- <script>
  import PageLayout from "$lib/components/pageLayout.svelte";

  let username = "";
  let password = "";
  let error = "";

  async function login() {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const { token } = await response.json();
      localStorage.setItem("jwt", token); // Store the JWT in localStorage
      window.location.href = "/blog/creator"; // Redirect to a protected page
    } else {
      const { error } = await response.json();
    }
  }
</script>

<PageLayout withSpacing>
  <form on:submit|preventDefault={login} class="flex flex-col gap-8">
    <input type="text" placeholder="Username" bind:value={username} />
    <input type="password" placeholder="Password" bind:value={password} />
    <button type="submit">Login</button>
  </form>

  {#if error}
    <p style="color: red;">{error}</p>
  {/if}
</PageLayout> -->
