<script lang="ts">
  import SectionTitle from "$lib/components/typography/sectionTitle.svelte";
  import first from "$lib/icons/1.png";
  import second from "$lib/icons/5.png";
  import emailjs from "@emailjs/browser";

  emailjs.init("n4piW66SEkQqnH9gX");

  let isSuccess = false;
  let isError = false;

  const sendEmail = (event: Event) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    console.log("FORM", form);

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
</script>

<section
  class="relative flex flex-col items-center w-full h-full p-4 overflow-hidden bg-white lg:p-16"
>
  <img
    src={first}
    alt="woman"
    class="absolute w-64 -right-4 top-24 xl:top-[auto] lg:invisible xl:visible lg:-bottom-8 lg:-left-16 2xl:left-0 lg:w-96"
  />
  <img
    src={second}
    alt="man"
    class="absolute right-0 invisible w-64 xl:visible lg:-bottom-8 2xl:right-0 -right-16 lg:w-96"
  />
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
          class="w-1/2 bg-white md:w-2/3 lg:w-full input focus:outline-slate-700 focus:border-none input-bordered border-slate-400 text-slate-700"
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
          class="w-1/2 bg-white md:w-2/3 lg:w-full input focus:outline-slate-700 focus:border-none input-bordered border-slate-400 text-slate-700"
        />
      </label>
      <label class="grid col-span-2">
        <div class="label">
          <span class="text-gray-600 label-text">Mesajul tau</span>
        </div>
        <textarea
          placeholder="Mesaj..."
          name="message"
          class="bg-white border-slate-400 focus:border-none focus:outline-slate-700 text-slate-700 textarea min-h-60 input-bordered"
        />
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
