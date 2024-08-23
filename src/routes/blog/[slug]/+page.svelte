<script lang="ts">
  import BlogPost from "$lib/components/layout/blogPost.svelte";
  import PageLayout from "$lib/components/pageLayout.svelte";
  import { onMount } from "svelte";
  import type { BlogPostType } from "../types";
  export let data: {
    blogPost: BlogPostType;
  };
  async function likePost(postId: string) {
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
        data.blogPost = { ...data.blogPost, likes: data.blogPost.likes - 1 };
      } else {
        localStorage.setItem(`${postId}_liked`, "true");
        data.blogPost = { ...data.blogPost, likes: data.blogPost.likes + 1 };
      }
    } else {
      alert("Failed to like/unlike the post");
    }
  }
  async function updateViewCount(postId: string) {
    let viewed = localStorage.getItem(`${postId}_viewed`) === "true";
    if (!viewed) {
      fetch("/api/count-view", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId }),
      }).then(() => {
        localStorage.setItem(`${postId}_viewed`, "true");
        data.blogPost = { ...data.blogPost, views: data.blogPost.views + 1 };
      });
    }
  }
  onMount(() => {
    updateViewCount(data.blogPost._id);
  });
</script>

<PageLayout>
  <BlogPost onLike={likePost} {...data.blogPost}
    ><div slot="info">{@html data.blogPost.content}</div></BlogPost
  >
</PageLayout>
