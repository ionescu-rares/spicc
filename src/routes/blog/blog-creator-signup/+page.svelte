<script>
  import PageLayout from "$lib/components/pageLayout.svelte";

  let username = "";
  let password = "";
  let message = "";

  async function signup() {
    const response = await fetch("/api/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      message = "User account created successfully";
    } else {
      const { error } = await response.json();
      message = error || "Failed to create user account";
    }
  }
</script>

<PageLayout>
  <form on:submit|preventDefault={signup}>
    <input type="text" placeholder="Username" bind:value={username} required />
    <input
      type="password"
      placeholder="Password"
      bind:value={password}
      required
    />
    <button type="submit">Sign Up</button>
  </form>

  <p>{message}</p>
</PageLayout>
