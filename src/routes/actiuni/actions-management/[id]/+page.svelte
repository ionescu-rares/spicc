<script lang="ts">
  import TurndownService from "turndown";
  import type { ActionType } from "./../../types.ts";
  import { goto } from "$app/navigation";
  import Editor from "$lib/components/MarkdownEditor/Editor.svelte";
  import PageLayout from "$lib/components/pageLayout.svelte";
  import { onMount } from "svelte";
  import Dropzone from "svelte-file-dropzone";
  import Typography from "$lib/components/font/typography.svelte";
  import { page } from "$app/stores";
  import { DateInput } from "date-picker-svelte";
  export let data: {
    action: ActionType;
  };
  const { action } = data;

  const id = $page.params.id;

  let title = action.title;
  let content = "";
  let date = new Date(action.date);
  let location = action.location;
  let description = action.description;
  let slides = action.slides;

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

    if (
      !description ||
      !location ||
      !slides.length ||
      !title ||
      !content ||
      !date
    ) {
      window.alert(
        "Completeaza toate campurile si incarca toate imaginile pentru a salva postarea."
      );
      return;
    }

    const action = {
      title,
      content,
      slides,
      location,
      description,
      date,
    };

    const response = await fetch(`/api/save-action?id=${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action),
    });

    if (response.ok) {
      console.log("action saved successfully!");
      goto("/actiuni/actions-management");
    } else {
      console.error("Failed to save action:", await response.json());
    }
  }
  onMount(() => {
    transformContentToMarkdown();
  });

  async function transformContentToMarkdown() {
    const turndownService = new TurndownService();
    content = await turndownService.turndown(action.content);
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
  }
</script>

<PageLayout>
  <form class="w-full max-w-screen-md gap-8" on:submit={handleSubmit}>
    <label class="flex flex-col items-start">
      Titlu
      <input
        name="title"
        bind:value={title}
        class="w-full text-black bg-white input"
      />
    </label>
    <label class="flex flex-col items-start mt-4">
      Descriere scurta (cea care va aparea pe card)
      <textarea
        rows="3"
        name="description"
        bind:value={description}
        class="w-full p-2 text-black bg-white"
      />
    </label>
    <div class="flex items-center gap-16 mt-4">
      <label class="flex flex-col items-start mt-4">
        Locatie
        <input
          name="location"
          bind:value={location}
          class="w-full text-black bg-white input"
        />
      </label>
      <label class="flex flex-col items-start mt-4" for="date">
        Data in care a avut loc actiunea
        <DateInput bind:value={date} format="dd MMM yyyy" />
      </label>
    </div>
    <div class="flex flex-col mt-4 mb-8">
      <p class="mt-4 text-start">Poze de la actiune</p>
      <Dropzone on:drop={handleSlidesUpload} />
      {#each slides as slide}
        <div class="flex items-center gap-4">
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
    </div>
    <Typography variant="large" className="mb-4">Continut</Typography>
    <Editor bind:content on:update={handleEditorUpdate} />
    <button type="submit" class="mt-4 btn btn-primary">Salveaza postarea</button
    >
  </form>
</PageLayout>

<style>
  /* Target the select dropdown */

  /* Target the dropdown options */
  :global(.svelte-go79cf option) {
    background-color: white !important; /* Set option background to white */
    color: black !important; /* Set option text color to black */
  }

  /* Target the option hover state */
  :global(.svelte-go79cf option:hover) {
    background-color: lightgray !important; /* Highlight hovered option */
    color: black !important; /* Ensure text remains visible on hover */
  }
</style>
