<script>
  import Typography from "$lib/components/font/typography.svelte";
  import BlogPost from "$lib/components/layout/blogPost.svelte";
  import PageLayout from "$lib/components/pageLayout.svelte";
  import first from "$lib/images/actiuni/siguranta-2023/1.jpg";

  import second from "$lib/images/actiuni/siguranta-2023/2.jpg";
  import third from "$lib/images/news/siguranta_femeilor/siguranta.jpg";
  import fourth from "$lib/images/news/siguranta_femeilor/siguranta3.jpg";
</script>

<PageLayout>
  <BlogPost
    title="Împreună pentru siguranța femeilor"
    date="23/10/2023"
    location="Piața Sf. Gheorghe"
    slides={[first, second, third, fourth]}
  >
    <div slot="info">
      <Typography>
        Am solicitat autorităților locale să colaboreze cu autoritățile centrale
        și, împreună, să finanțeze servicii pentru victimele violenței domestice
        și violenței sexuale. Cifrele ce reflectă dimensiunile violenței de gen
        în România continuă să crească, sunt depuse tot mai multe sesizări ale
        cazurilor de violență domestică și de violență sexuală, crește numărul
        intervențiilor. Statistica IGPR pentru 2022 arată că au fost 90.174 de
        intervenții în cazuri de violență domestică și s-au emis 12.972 de
        ordine de protecție provizorii. Am ieșit în stradă pentru a cere
        finanțarea programelor de prevenție și a serviciilor adecvate pentru
        supraviețuitoarele violenței de gen, finanțare obligatorie conform Legii
        nr. 217/2003. <br /> <br /> Am tras un semnal de alarmă vis-a-vis de
        subraportarea masivă a cazurilor de hărțuire și violență sexuală, din
        cauza stigmatului misogin, rasismului și multiplelor obstacole și
        retraumatizări cu care se confruntă victimele atunci când vor să ceară
        ajutor sau să facă o plângere. Revendicările scandate la marș au fost
        următoarele:
        <ul class="p-8 list-disc">
          <li>
            Fetele/femeile care devin victimele violenței domestice să fie în
            siguranță.
          </li>

          <li>
            Fetele și femeile de etnie romă și fetele și femeile din toate
            categoriile socio-economice să fie crezute, tratate cu atenție și
            respect.
          </li>
          <li>
            Victimele violenței domestice să își poată construi o viață așa cum
            își doresc.
          </li>
          <li>
            Victimele violenței sexuale să fie respectate, crezute și
            sprijinite, iar agresorii sexuali să fie pedepsiți de lege.
          </li>

          <li>
            Copiii martori la violența domestică să fie protejați cu adevărat.
          </li>

          <li>Să scadă numărul femeilor omorâte de agresorii domestici.</li>

          <li>
            Serviciile sociale să acționeze în colaborare inter- și
            intrainstituțională în intervenția și monitorizarea cazurilor.
            Marșul a avut loc simultan în mai multe locuri din România:
            București, Brașov, Timișoara, Baia Mare, Cluj, Giurgiu, Mizil, Valea
            Seacă, unde a fost organizat de către celelalte asociații membre ale
            rețelei VIF.
          </li>
        </ul>
      </Typography>
    </div>
  </BlogPost>
</PageLayout>
