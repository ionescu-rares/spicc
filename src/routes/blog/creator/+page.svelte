<script lang="ts">
  import Editor from "$lib/components/MarkdownEditor/Editor.svelte";
  import { goto } from "$app/navigation";
  import PageLayout from "$lib/components/pageLayout.svelte";
  import { onMount } from "svelte";
  import Dropzone from "svelte-file-dropzone";
  import Typography from "$lib/components/font/typography.svelte";

  let title = "";
  let content = "";
  let creatorName = "";
  let avatarUrl: string | null = null;
  let slides: string[] = [];
  let uploadAvatarMessage = "";
  let uploadCoverMessage = "";

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

  async function handleAvatarUpload(e: any) {
    const { acceptedFiles } = e.detail;
    if (acceptedFiles.length > 0) {
      uploadAvatarMessage = "Avatarul a fost incarcat cu succes!";
      avatarUrl = await uploadFile(acceptedFiles[0]);
    } else
      uploadAvatarMessage =
        "Avatarul nu a fost incarcat. Incearca un refresh la pagina...";
  }

  async function handleSlidesUpload(e: any) {
    const { acceptedFiles } = e.detail;
    for (const file of acceptedFiles) {
      const slideUrl = await uploadFile(file);

      if (slideUrl) {
        uploadCoverMessage = "Coverul a fost incarcat cu succes!";
        slides = [...slides, slideUrl];
      } else
        uploadCoverMessage =
          "Coverul nu a fost incarcat. Incearca un refresh la pagina...";
    }
  }

  async function handleSubmit(e: Event) {
    e.preventDefault();

    if (!avatarUrl || !slides.length || !title || !content || !creatorName) {
      window.alert(
        "Completeaza toate campurile si incarca toate imaginile pentru a salva postarea."
      );
      return;
    }

    const blogPost = {
      title,
      content,
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
        Authorization: `Bearer ${sessionStorage.getItem("jwt")}`,
      },
      body: JSON.stringify(blogPost),
    });

    if (response.ok) {
      console.log("Blog post saved successfully!");
      goto("/blog/blog-posts-management");
    } else {
      console.error("Failed to save blog post:", await response.json());
    }
  }

  function handleEditorUpdate(event: { detail: { content: string } }) {
    content = event.detail.content;
  }

  function deleteSlide(slideToDelete: string) {
    const slideToDeleteIndex = slides.findIndex(
      (slide) => slide === slideToDelete
    );
    slides = [
      ...slides.filter((_slide, index) => index !== slideToDeleteIndex),
    ];
    uploadCoverMessage = "Slide-ul a fost sters.";
  }
  function deleteAvatar() {
    avatarUrl = "";
    uploadAvatarMessage = "Avatarul a fost sters.";
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
    <Dropzone on:drop={handleAvatarUpload} multiple={false} />
    {#if avatarUrl}
      <div class="flex items-center gap-4">
        <img src={avatarUrl} alt="Avatar" class="w-1/4 mt-2" />
        <button class="btn btn-primary" type="button" on:click={deleteAvatar}
          ><Typography variant="large">🗑️Sterge</Typography></button
        >
      </div>
    {/if}
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
    <div class="flex flex-col mt-4 mb-8">
      <p class="mt-4 text-start">Poza de cover a postarii</p>
      <Dropzone on:drop={handleSlidesUpload} />
      {#each slides as slide}
        <div class="flex items-center gap-4 card card-side bg-base-100">
          <img src={slide} alt="Cover" class="w-1/3 mt-2" />
          <button
            class="btn btn-primary"
            type="button"
            on:click={() => deleteSlide(slide)}
            ><Typography variant="large">🗑️Sterge</Typography></button
          >
        </div>
      {/each}
      {uploadCoverMessage}
      <!-- Multiple cover photos (slides) -->
    </div>

    <Editor bind:content on:update={handleEditorUpdate} />
    <button type="submit" class="mt-4 btn btn-primary">Salveaza postarea</button
    >
  </form>
</PageLayout>
