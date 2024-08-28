<script lang="ts">
  import Editor from "$lib/components/MarkdownEditor/Editor.svelte";
  import { goto } from "$app/navigation";
  import PageLayout from "$lib/components/pageLayout.svelte";
  import { onMount } from "svelte";
  import Dropzone from "svelte-file-dropzone";
  import type { BlogPostType } from "../types";

  let title = "";
  let date = "";
  let content = ""; // Markdown content from the editor
  let creatorName = "";
  let avatarUrl: string | null = null;
  let slides: string[] = []; // This will store the URLs of the uploaded cover photos (slides)
  let uploadAvatarMessage = "";
  let uploadCoverMessage = "";

  // Upload a file to S3 and get the URL
  async function uploadFile(file: File): Promise<string | null> {
    try {
      const response = await fetch("/api/upload-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fileName: file.name,
          fileType: file.type,
        }),
      });

      if (!response.ok) {
        console.error("Failed to get presigned URL", response.statusText);
        return null;
      }

      const { uploadUrl } = await response.json();

      const uploadResponse = await fetch(uploadUrl, {
        method: "PUT",
        headers: {
          "Content-Type": file.type,
        },
        body: file,
      });

      if (uploadResponse.ok) {
        console.log("File uploaded successfully:", file.name);
        return uploadUrl.split("?")[0]; // Return the file URL (without the query parameters)
      } else {
        console.error("File upload failed:", file.name);
        return null;
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      return null;
    }
  }

  // Handle avatar upload
  async function handleAvatarUpload(e: any) {
    const { acceptedFiles } = e.detail;
    if (acceptedFiles.length > 0) {
      uploadAvatarMessage = "Avatarul a fost incarcat cu succes!";
      avatarUrl = await uploadFile(acceptedFiles[0]);
    } else
      uploadAvatarMessage =
        "Avatarul nu a fost incarcat. Incearca un refresh la pagina...";
  }

  // Handle cover photos (slides) upload
  async function handleSlidesUpload(e: any) {
    const { acceptedFiles } = e.detail;
    for (const file of acceptedFiles) {
      const slideUrl = await uploadFile(file);

      if (slideUrl) {
        uploadCoverMessage = "Coverul a fost incarcat cu succes!";
        slides.push(slideUrl);
      } else
        uploadCoverMessage =
          "Coverul nu a fost incarcat. Incearca un refresh la pagina...";
    }
  }

  // Handle form submission
  async function handleSubmit(e: Event) {
    e.preventDefault();

    if (
      !avatarUrl ||
      !slides.length ||
      !title ||
      !date ||
      !content ||
      !creatorName
    ) {
      console.error("Please fill all fields and upload the images.");
      return;
    }

    const blogPost = {
      title,
      content,
      date,
      slides,
      likes: 0,
      views: 0,
      creator: {
        avatar: avatarUrl!,
        name: creatorName,
      },
    };

    const response = await fetch("/api/save-blog-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogPost),
    });

    if (response.ok) {
      console.log("Blog post saved successfully!");
      goto("/blog");
    } else {
      console.error("Failed to save blog post:", await response.json());
    }
  }
  onMount(() => {
    fetchProtectedData();
  });

  async function fetchProtectedData() {
    const token = localStorage.getItem("jwt");
    if (!token) {
      goto("/blog/blog-creator-authentication");
      return;
    }

    const response = await fetch("/api/protected", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const { error: responseError } = await response.json();
      console.error(responseError);
      goto("/blog/blog-creator-authentication");
    }
  }

  function handleEditorUpdate(event: { detail: { content: string } }) {
    content = event.detail.content;
  }
</script>

<PageLayout>
  <form class="w-full max-w-screen-md gap-8" on:submit={handleSubmit}>
    <p>Despre creator</p>
    <label class="flex flex-col items-start">
      Nume creator
      <input
        name="creatorName"
        bind:value={creatorName}
        class="w-full text-black bg-white input"
      />
    </label>
    <p class="mt-4 text-start">Poza de profil</p>
    <Dropzone on:drop={handleAvatarUpload} />
    {uploadAvatarMessage}

    <p class="mt-8">Despre continut</p>
    <label class="flex flex-col items-start">
      Titlu
      <input
        name="title"
        bind:value={title}
        class="w-full text-black bg-white input"
      />
    </label>
    <div class="grid items-center w-full grid-cols-2 gap-16 my-4">
      <label class="flex flex-col items-start">
        Data (ex: Jan 16)
        <input
          name="date"
          bind:value={date}
          class="w-full text-black bg-white input"
        />
      </label>
    </div>
    <div class="flex flex-col mt-4 mb-8">
      <p class="mt-4 text-start">Poza de cover a postarii</p>
      <Dropzone on:drop={handleSlidesUpload} />
      {uploadCoverMessage}
      <!-- Multiple cover photos (slides) -->
    </div>

    <Editor bind:content on:update={handleEditorUpdate} />
    <button type="submit" class="mt-4 btn btn-primary">Salveaza postarea</button
    >
  </form>
</PageLayout>
