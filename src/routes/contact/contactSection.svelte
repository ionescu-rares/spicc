<script lang="ts">
  import Editor from "$lib/components/MarkdownEditor/Editor.svelte";
  import SectionTitle from "$lib/components/typography/sectionTitle.svelte";
  import first from "$lib/icons/1.png";
  import second from "$lib/icons/5.png";
  import emailjs from "@emailjs/browser";

  emailjs.init("n4piW66SEkQqnH9gX");

  let isSuccess = false;
  let isError = false;
  let editorContent = "";

  const sendEmail = (event: Event) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    console.log("FORM", form);

    const messageInput = document.createElement("input");
    messageInput.type = "hidden";
    messageInput.name = "message";
    messageInput.value = editorContent;
    form.appendChild(messageInput);

    emailjs
      .sendForm("service_dn2r5pw", "template_m5bilni", form)
      .then(() => {
        form.reset();
        isSuccess = true;
        setTimeout(() => (isSuccess = false), 3000);
      })
      .catch((error) => {
        isError = true;
        setTimeout(() => (isError = false), 3000);
        console.log("FAILED...", error);
      });
  };

  function handleEditorUpdate(event: { detail: { content: string } }) {
    editorContent = event.detail.content;
  }
</script>

<section
  class="relative flex flex-col items-center w-full h-full p-8 overflow-hidden bg-white lg:p-16"
>
  <SectionTitle title="Contactează-ne" className="text-slate-700" />
  <div class="z-10 flex flex-col w-full max-w-screen-lg">
    <form
      class="flex flex-col w-full gap-4 lg:grid lg:grid-cols-2"
      on:submit={sendEmail}
    >
      <label>
        <div class="label">
          <span class="text-gray-600 label-text">Numele complet</span>
        </div>
        <input
          type="text"
          placeholder="Nume Prenume"
          name="name"
          class="w-full bg-white input focus:outline-slate-700 focus:border-none input-bordered border-slate-400 text-slate-700"
          required
        />
      </label>
      <label>
        <div class="label">
          <span class="text-gray-600 label-text">Email</span>
        </div>
        <input
          required
          placeholder="Adresa de email"
          name="email"
          type="email"
          class="w-full bg-white input focus:outline-slate-700 focus:border-none input-bordered border-slate-400 text-slate-700"
        />
      </label>
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label class="grid col-span-2">
        <div class="label">
          <span class="text-gray-600 label-text">Mesajul tau</span>
        </div>
        <Editor bind:content={editorContent} on:update={handleEditorUpdate} />
      </label>
      <input
        type="hidden"
        name="to_email"
        value="rares.ionescu2000@gmail.com"
      />
      <button type="submit" class="w-full col-span-2 btn btn-tertiary"
        >Trimite</button
      >
    </form>
  </div>

  <div
    class={`${isSuccess ? "visible" : "invisible"} toast toast-end toast-top`}
    id="successToast"
  >
    <div class="alert alert-success">
      <span>Mesajul a fost trimis cu succes.</span>
    </div>
  </div>
  <div class={`${isError ? "visible" : "invisible"} toast toast-end toast-top`}>
    <div class="alert alert-error">
      <span>A intervenit o eroare.</span>
    </div>
  </div>
</section>

<style>
  .toast {
    position: fixed;
    top: 1rem;
    right: -100%;
    transition: right 0.5s ease-in-out;
    z-index: 1000;
  }

  .toast.visible {
    right: 1rem;
  }

  .toast.invisible {
    right: -100%;
  }
</style>
