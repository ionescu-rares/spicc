import { redirect, type Cookies } from "@sveltejs/kit";

export async function fetchProtectedData(
  cookies: Cookies,
  fetch: typeof globalThis.fetch
) {
  const token = cookies.get("jwt");

  if (!token) {
    // Redirect if the token is not found
    throw redirect(302, "/blog/blog-creator-authentication");
  }

  // Fetch protected data using the JWT
  const res = await fetch("/api/protected", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    // If the token is invalid or expired, redirect to login
    throw redirect(302, "/blog/blog-creator-authentication");
  }
}
