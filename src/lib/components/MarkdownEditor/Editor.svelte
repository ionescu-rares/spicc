<script lang="ts">
  import { onMount, createEventDispatcher, onDestroy } from "svelte";
  import { marked } from "marked";
  import DomPurify from "dompurify";
  export let content: string;

  let editor: HTMLElement | undefined = undefined;
  let easyMDEInstance: any;

  const dispatch = createEventDispatcher();

  onMount(async () => {
    if (typeof window !== "undefined") {
      const { initializeEasyMDE } = await import("../../EditorClient.js");

      easyMDEInstance = initializeEasyMDE(editor, {
        initialValue: content,
        placeholder: "Mesaj...",
        spellChecker: false,

        toolbar: [
          "bold",
          "italic",
          "heading",
          "|",
          "quote",
          "unordered-list",
          "ordered-list",
          "|",
          "link",
          "image",
          "|",
          "preview",
          // "side-by-side",
          "|",
          "guide",
        ],
      });

      easyMDEInstance.codemirror.on("change", () => {
        content = easyMDEInstance.value();
        dispatch("update", { content });
      });
    }
  });
  onDestroy(() => {
    if (easyMDEInstance) {
      easyMDEInstance.toTextArea();
      easyMDEInstance = null;
    }
  });
</script>

<textarea bind:this={editor} name="message"></textarea>

<style>
  :global(.editor-toolbar) {
    background-color: white;
  }

  :global(.EasyMDEContainer) {
    text-align: start;
  }
  :global(.editor-preview h1),
  :global(.editor-preview h2),
  :global(.editor-preview h3),
  :global(.editor-preview h4),
  :global(.editor-preview h5),
  :global(.editor-preview h6) {
    font-weight: bold;
    margin-top: 1em;
  }

  :global(.editor-preview h1) {
    font-size: 2em;
  }

  :global(.editor-preview h2) {
    font-size: 1.75em;
  }

  :global(.editor-preview h3) {
    font-size: 1.5em;
  }

  :global(.editor-preview h4) {
    font-size: 1.25em;
  }

  :global(.editor-preview h5) {
    font-size: 1em;
  }

  :global(.editor-preview h6) {
    font-size: 0.875em;
  }

  :global(.editor-preview ul),
  :global(.editor-preview ol) {
    margin: 1em 0;
    padding-left: 2em;
  }
  :global(.editor-preview ol) {
    list-style-type: decimal;
  }
  :global(.editor-preview ul) {
    list-style-type: disc;
  }

  :global(.editor-preview li) {
    margin-bottom: 0.5em;
  }

  :global(.editor-preview p) {
    margin: 0.5em 0;
  }

  :global(.editor-preview blockquote) {
    margin: 1em 0;
    padding-left: 1em;
    border-left: 4px solid #ccc;
    color: #666;
  }

  :global(.editor-preview pre) {
    background: #f5f5f5;
    padding: 1em;
    overflow: auto;
  }

  :global(.editor-preview code) {
    background: #f5f5f5;
    padding: 0.2em 0.4em;
  }
</style>
