<script>
  import Typography from "../font/typography.svelte";

  const paths = [
    { url: "/", label: "Acasă" },
    { url: "/cine-suntem", label: "Cine suntem" },
    { url: "/ce-facem", label: "Ce facem" },
    { url: "/proiecte", label: "Proiecte" },
    { url: "/actiuni", label: "Acțiuni" },
    { url: "/blog", label: "Blog" },
    { url: "/proiecte/her-city-our-europe", label: "Her City" },
    { url: "/contact", label: "Contact" },
  ];

  const socials = [
    { url: "https://www.facebook.com/AsociatiaSpicc", label: "Facebook" },
    { url: "https://www.instagram.com/spicc.eu/", label: "Instagram" },
    { url: "https://www.tiktok.com/@suntem.spicc", label: "Tik Tok" },
  ];
</script>

<div
  class="flex flex-col w-full gap-8 p-8 bg-gradient-to-tr from-base-100 to-gray-700 lg:gap-0 lg:grid lg:grid-cols-2"
>
  <div class="w-full">
    <Typography variant="large">Linkuri utile</Typography>
    <div class="grid w-full grid-cols-2 mt-4 lg:w-1/2 lg:grid-cols-4 gap-y-2">
      {#each paths as path}
        <a href={path.url} class="link">{path.label}</a>
      {/each}
    </div>
  </div>
  <div>
    <Typography variant="large">Urmărește-ne pe</Typography>
    <ul class="flex gap-4 mt-4">
      {#each socials as social}
        <li><a href={social.url} class="link">{social.label}</a></li>
      {/each}
    </ul>
  </div>
</div>
