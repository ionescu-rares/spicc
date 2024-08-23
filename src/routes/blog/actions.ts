import type { BlogPostType } from "./types";

export async function likePost(postId: string, blogPosts: BlogPostType[]) {
  let liked = localStorage.getItem(`${postId}_liked`) === "true";
  let res = await fetch("/api/like-post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ postId, liked }),
  });

  const response = await res.json();
  if (response.success) {
    if (liked) {
      localStorage.setItem(`${postId}_liked`, "false");
      blogPosts = blogPosts.map((post) =>
        post._id === postId ? { ...post, likes: post.likes - 1 } : post
      );
    } else {
      localStorage.setItem(`${postId}_liked`, "true");
      blogPosts = blogPosts.map((post) =>
        post._id === postId ? { ...post, likes: post.likes + 1 } : post
      );
    }
  } else {
    alert("Failed to like/unlike the post");
  }
}
