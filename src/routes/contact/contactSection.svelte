<script>
  import SectionTitle from "$lib/components/typography/sectionTitle.svelte";
</script>

<section class="flex flex-col items-center w-full h-full p-16 bg-white">
  <SectionTitle title="Contacteaza-ne" className="text-slate-700" />
  <div class="flex flex-col w-full max-w-screen-lg">
    <form class="grid w-full grid-cols-2 gap-4">
      <label>
        <div class="label">
          <span class="text-gray-600 label-text">Numele complet</span>
        </div>
        <input
          type="text"
          placeholder="Nume"
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
          placeholder="Email"
          type="email"
          class="w-full bg-white input focus:outline-slate-700 focus:border-none input-bordered border-slate-400 text-slate-700"
        />
      </label>
      <label class="grid col-span-2">
        <div class="label">
          <span class="text-gray-600 label-text">Mesajul tau</span>
        </div>
        <textarea
          placeholder="Mesaj..."
          class="bg-white border-slate-400 focus:border-none focus:outline-slate-700 text-slate-700 textarea min-h-60 input-bordered"
        />
      </label>
      <button type="submit" class="w-full col-span-2 btn btn-tertiary"
        >Trimite</button
      >
    </form>
  </div>
</section>
