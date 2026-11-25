(() => {
  const DATA = {
    cles: [
      {
        tag: "Key Letter · X",
        wolof: "X (e.g., Xaj)",
        en: "Gentle throat 'kh' sound",
        phonetic: "/kh/ — like the 'ch' in Scottish 'loch' or Bach",
        tip: "Never say 'ks' or 'eks': gently breathe air through the back of your throat.",
        slug: "xaj",
        isKey: true
      },
      {
        tag: "Key Letter · Ñ",
        wolof: "Ñ (e.g., Ñoo ko bokk / Ñaar)",
        en: "'Ny' sound as in 'canyon' or 'lasagna'",
        phonetic: "/nyoh/ · /nyahr/",
        tip: "Very natural for kids: press the middle of the tongue lightly against the roof of the mouth.",
        slug: "noo-ko-bokk",
        isKey: true
      },
      {
        tag: "Key Vowel · Ë",
        wolof: "Ë (e.g., Jërëjëf / Waakër)",
        en: "Short 'uh' vowel as in 'but' or 'fur'",
        phonetic: "/juh-ruh-juhf/ · /wah-kuhr/",
        tip: "Keep it crisp and neutral, never stretched like 'eh' or 'ay'.",
        slug: "jerejef",
        isKey: true
      },
      {
        tag: "Double Vowels & Consonants",
        wolof: "aa · ee · oo · uu / pp · nn · tt · kk",
        en: "Hold double vowels longer; emphasize double consonants",
        phonetic: "Waaw /wahw/ · Déedéet /day-dayt/ · Fukk /fook/",
        tip: "A double vowel counts two beats long: Waaw, Baay, Yaay, Maam, Ñaar.",
        slug: "waaw",
        isKey: true
      },
      {
        tag: "Welcome Motto",
        wolof: "Dalal ak jàmm",
        en: "Welcome! (lit. Settle in peace)",
        phonetic: "/DAH-lahl ahk jahm/",
        tip: "The warm expression printed at the opening of the workbook to greet the whole family.",
        slug: "dalal-ak-jamm",
        isKey: false
      },
      {
        tag: "Chapter 2 Motto",
        wolof: "Bëgg naa sama waakër",
        en: "I love my family!",
        phonetic: "/BUHG nah SAH-mah WAH-kuhr/",
        tip: "Say this sentence proudly after completing the family tree activity.",
        slug: "begg-naa-sama-waaker",
        isKey: false
      },
      {
        tag: "Chapter 3 Motto",
        wolof: "Waññ ba fukk",
        en: "Counting up to 10",
        phonetic: "/WAH-nyuh bah FOOK/",
        tip: "Theme phrase for Chapter 3: counting from Benn (1) to Fukk (10).",
        slug: "wann-ba-fukk",
        isKey: false
      },
      {
        tag: "Chapter 5 Motto",
        wolof: "Xam naa sama yaram",
        en: "I know my body!",
        phonetic: "/KHAHM nah SAH-mah YAH-rahm/",
        tip: "Great phrase to chant during mirror games and Wolof Simon Says.",
        slug: "xam-naa-sama-yaram",
        isKey: false
      }
    ],
    ch1: [
      { tag: "Ch. 1 · 01", wolof: "Salamalekum", en: "Hello! (opening greeting)", phonetic: "/sah-lah-mah-leh-koom/", tip: "The classic warm greeting to say first thing in the morning.", slug: "salamalekum" },
      { tag: "Ch. 1 · 02", wolof: "Malekum salaam", en: "Hello! (polite reply)", phonetic: "/mah-leh-koom sah-lahm/", tip: "The exact reply to 'Salamalekum'.", slug: "malekum-salaam" },
      { tag: "Ch. 1 · 03", wolof: "Na nga def?", en: "How are you?", phonetic: "/nah ngah dehf/", tip: "Say 'ng' together smoothly like the end of 'sing'.", slug: "na-nga-def" },
      { tag: "Ch. 1 · 04", wolof: "Maa ngi fi", en: "I'm fine / I'm doing well", phonetic: "/mah ngee fee/", tip: "The cheerful reply to 'Na nga def?'.", slug: "maa-ngi-fi" },
      { tag: "Ch. 1 · 05", wolof: "Jërëjëf", en: "Thank you", phonetic: "/juh-ruh-juhf/", tip: "'j' sounds like 'j' in 'jam', and every 'ë' is a short 'uh'.", slug: "jerejef" },
      { tag: "Ch. 1 · 06", wolof: "Ñoo ko bokk", en: "You're welcome (we share it)", phonetic: "/nyoh koh bohk/", tip: "Warm reply right after someone says 'Jërëjëf'.", slug: "noo-ko-bokk" },
      { tag: "Ch. 1 · 07", wolof: "Waaw", en: "Yes", phonetic: "/wahw/ (long vowel)", tip: "Stretch out the double 'aa' clearly.", slug: "waaw" },
      { tag: "Ch. 1 · 08", wolof: "Déedéet", en: "No", phonetic: "/day-dayt/", tip: "Articulate both long 'ée' syllables cleanly.", slug: "deedeet" },
      { tag: "Ch. 1 · 09", wolof: "Ba beneen", en: "See you soon / Goodbye", phonetic: "/bah beh-nehn/", tip: "Perfect phrase to say when waving goodbye.", slug: "ba-beneen" },
      { tag: "Ch. 1 · 10", wolof: "Naka suba si?", en: "How is the morning going?", phonetic: "/nah-kah soo-bah see/", tip: "Remember Wolof 'u' always sounds like 'oo' in 'moon'.", slug: "naka-suba-si" }
    ],
    ch2: [
      { tag: "Ch. 2 · 01", wolof: "Sama", en: "My", phonetic: "/sah-mah/", tip: "Place before any family word: Sama yaay, Sama baay.", slug: "sama" },
      { tag: "Ch. 2 · 02", wolof: "Baay / Pàppa", en: "Dad / Father", phonetic: "/bahy/ · /pahp-pah/", tip: "Kids often say 'Sama baay' or affectionately 'Pàppa'.", slug: "baay-pappa" },
      { tag: "Ch. 2 · 03", wolof: "Yaay / Maa", en: "Mom / Mother", phonetic: "/yahy/ · /mah/", tip: "'Sama yaay' is one of the warmest Wolof phrases.", slug: "yaay-maa" },
      { tag: "Ch. 2 · 04", wolof: "Maam", en: "Grandparent", phonetic: "/mahm/ (long vowel)", tip: "Refers affectionately to either grandma or grandpa.", slug: "maam" },
      { tag: "Ch. 2 · 05", wolof: "Maam bu góor", en: "Grandpa / Grandfather", phonetic: "/mahm boo gohr/", tip: "'bu góor' specifies grandfather.", slug: "maam-bu-goor" },
      { tag: "Ch. 2 · 06", wolof: "Maam bu jigéen", en: "Grandma / Grandmother", phonetic: "/mahm boo jee-gehn/", tip: "'jigéen' uses a hard 'g' as in 'get' and a long 'éé'.", slug: "maam-bu-jigeen" },
      { tag: "Ch. 2 · 07", wolof: "Mag", en: "Older brother / Older sister", phonetic: "/mahg/", tip: "Means older sibling regardless of gender.", slug: "mag" },
      { tag: "Ch. 2 · 08", wolof: "Rakk", en: "Younger brother / Younger sister", phonetic: "/rahk/ (crisp kk)", tip: "Means younger sibling regardless of gender.", slug: "rakk" }
    ],
    ch3: [
      { tag: "Ch. 3 · 1", wolof: "Benn", en: "1 — One", phonetic: "/behn/", tip: "Linger lightly on the final double 'nn'.", slug: "benn" },
      { tag: "Ch. 3 · 2", wolof: "Ñaar", en: "2 — Two", phonetic: "/nyahr/", tip: "'ny' sound followed by a long 'aa'.", slug: "naar" },
      { tag: "Ch. 3 · 3", wolof: "Ñett", en: "3 — Three", phonetic: "/nyeht/", tip: "Short, crisp, and rhythmic.", slug: "nett" },
      { tag: "Ch. 3 · 4", wolof: "Ñent", en: "4 — Four", phonetic: "/nyehnt/", tip: "Sound out the final 't' lightly.", slug: "nent" },
      { tag: "Ch. 3 · 5", wolof: "Juróom", en: "5 — Five (one hand)", phonetic: "/joo-rohm/", tip: "Remember Juróom: it builds numbers 6, 7, 8, and 9!", slug: "juroom" },
      { tag: "Ch. 3 · 6", wolof: "Juróom-benn", en: "6 — Six (5 + 1)", phonetic: "/joo-rohm-behn/", tip: "One hand (5) plus one finger (1).", slug: "juroom-benn" },
      { tag: "Ch. 3 · 7", wolof: "Juróom-ñaar", en: "7 — Seven (5 + 2)", phonetic: "/joo-rohm-nyahr/", tip: "Juróom + Ñaar.", slug: "juroom-naar" },
      { tag: "Ch. 3 · 8", wolof: "Juróom-ñett", en: "8 — Eight (5 + 3)", phonetic: "/joo-rohm-nyeht/", tip: "Juróom + Ñett.", slug: "juroom-nett" },
      { tag: "Ch. 3 · 9", wolof: "Juróom-ñent", en: "9 — Nine (5 + 4)", phonetic: "/joo-rohm-nyehnt/", tip: "Juróom + Ñent.", slug: "juroom-nent" },
      { tag: "Ch. 3 · 10", wolof: "Fukk", en: "10 — Ten (two hands)", phonetic: "/fook/", tip: "Wolof 'u' sounds like 'oo' in 'book' with a crisp 'kk'.", slug: "fukk" }
    ],
    ch4: [
      { tag: "Ch. 4 · 01", wolof: "Mala", en: "Animal", phonetic: "/mah-lah/", tip: "'Mala yi' means 'the animals'.", slug: "mala" },
      { tag: "Ch. 4 · 02", wolof: "Xaj", en: "Dog", phonetic: "/khaj/", tip: "Starts with throat 'kh' and ends in soft 'j' as in 'jam'.", slug: "xaj" },
      { tag: "Ch. 4 · 03", wolof: "Muus", en: "Cat", phonetic: "/moos/ (long vowel)", tip: "Easy for kids to remember: sounds just like 'moo/meow'!", slug: "muus" },
      { tag: "Ch. 4 · 04", wolof: "Picc", en: "Bird", phonetic: "/peech/", tip: "Double 'cc' in Wolof sounds like 'ch' in 'peach'.", slug: "picc" },
      { tag: "Ch. 4 · 05", wolof: "Jën", en: "Fish", phonetic: "/juhn/", tip: "Watch for soft 'j' and short 'ë' (/uh/).", slug: "jen" },
      { tag: "Ch. 4 · 06", wolof: "Fas", en: "Horse", phonetic: "/fahs/", tip: "Crisp short syllable ending with 's'.", slug: "fas" },
      { tag: "Ch. 4 · 07", wolof: "Golo", en: "Monkey", phonetic: "/goh-loh/", tip: "Always pronounce with a hard 'g' as in 'go'.", slug: "golo" },
      { tag: "Ch. 4 · 08", wolof: "Gaynde", en: "Lion", phonetic: "/guy-ndeh/", tip: "Glide smoothly into 'ndeh' at the end.", slug: "gaynde" }
    ],
    ch5: [
      { tag: "Ch. 5 · 01", wolof: "Yaram", en: "Body", phonetic: "/yah-rahm/", tip: "Ex: 'Xam naa sama yaram' (I know my body).", slug: "yaram" },
      { tag: "Ch. 5 · 02", wolof: "Bopp", en: "Head", phonetic: "/bohp/", tip: "Tap the final double 'pp' cleanly.", slug: "bopp" },
      { tag: "Ch. 5 · 03", wolof: "Bët", en: "Eye", phonetic: "/buht/", tip: "Great practice for the short vowel 'ë' = /uh/.", slug: "bet" },
      { tag: "Ch. 5 · 04", wolof: "Nopp", en: "Ear", phonetic: "/nohp/", tip: "Close your lips gently on the double 'pp'. Notice it rhymes with Bopp!", slug: "nopp" },
      { tag: "Ch. 5 · 05", wolof: "Bakkan", en: "Nose", phonetic: "/bahk-kahn/", tip: "Two crisp syllables.", slug: "bakkan" },
      { tag: "Ch. 5 · 06", wolof: "Gémmiñ", en: "Mouth", phonetic: "/gehm-meen/", tip: "Hard 'g' as in 'get', ending in soft 'ñ' (/ny/).", slug: "gemmin" },
      { tag: "Ch. 5 · 07", wolof: "Loxo", en: "Hand / Arm", phonetic: "/loh-khoh/", tip: "Second syllable uses the soft throat 'kh'.", slug: "loxo" },
      { tag: "Ch. 5 · 08", wolof: "Tank", en: "Leg / Foot", phonetic: "/tahnk/", tip: "Fun for active games: 'Ñaar loxo ak tank!'", slug: "tank" }
    ]
  };

  let activeTab = "cles";
  let availableAudios = new Set();
  let currentAudio = null;

  const explorerEl = document.getElementById("explorer-content");
  const searchEl = document.getElementById("word-search");
  const tabBtns = Array.from(document.querySelectorAll(".tab-btn"));
  const bannerEl = document.getElementById("audio-status-banner");
  const bannerModeEl = document.getElementById("audio-banner-mode");
  const bannerWordEl = document.getElementById("audio-banner-word");
  const bannerTextEl = document.getElementById("audio-banner-text");
  const bannerCloseEl = document.getElementById("audio-banner-close");

  async function loadAudioManifest() {
    try {
      const res = await fetch("/audio/manifest.json", { cache: "no-store" });
      if (res.ok) {
        const json = await res.json();
        if (Array.isArray(json.available)) {
          availableAudios = new Set(json.available);
        }
      }
    } catch {
      availableAudios = new Set();
    }
  }

  function showBanner(modeLabel, title, message) {
    bannerModeEl.textContent = modeLabel;
    bannerWordEl.textContent = title;
    bannerTextEl.textContent = message;
    bannerEl.hidden = false;
  }

  function handleListen(item, btnEl) {
    document.querySelectorAll(".listen-btn.playing").forEach((b) => b.classList.remove("playing"));

    if (currentAudio) {
      currentAudio.pause();
      currentAudio = null;
    }

    const fileName = `${item.slug}.mp3`;
    if (availableAudios.has(fileName)) {
      try {
        const audio = new Audio(`/audio/${fileName}`);
        currentAudio = audio;
        btnEl.classList.add("playing");
        showBanner("Studio Yaatal Pro Native Audio", item.wolof, `Pronunciation: ${item.phonetic} (${item.en})`);
        audio.addEventListener("ended", () => btnEl.classList.remove("playing"), { once: true });
        audio.play().catch(() => {
          btnEl.classList.remove("playing");
          showBanner(
            "Guided Pronunciation",
            item.wolof,
            `Syllable guide: [${item.phonetic}] — ${item.en}`
          );
        });
        return;
      } catch {
        // Clean fallback below
      }
    }

    btnEl.classList.add("playing");
    setTimeout(() => btnEl.classList.remove("playing"), 1600);
    showBanner(
      "Guided Pronunciation",
      `${item.wolof} · ${item.en}`,
      `Syllable guide: [${item.phonetic}]`
    );
  }

  function renderCards() {
    const query = searchEl.value.trim().toLowerCase();
    const list = query
      ? Object.values(DATA).flat().filter((item) =>
          `${item.wolof} ${item.en} ${item.phonetic} ${item.tag}`.toLowerCase().includes(query)
        )
      : DATA[activeTab] || [];

    explorerEl.innerHTML = "";
    if (!list.length) {
      const empty = document.createElement("div");
      empty.className = "empty-state";
      empty.textContent = "No matching words found. Try 'Salamalekum', 'Baay', 'Benn', or 'Xaj'.";
      explorerEl.appendChild(empty);
      return;
    }

    list.forEach((item) => {
      const card = document.createElement("article");
      card.className = `word-card${item.isKey ? " key-card" : ""}`;

      const top = document.createElement("div");
      top.innerHTML = `
        <div class="word-top">
          <span class="word-tag">${item.tag}</span>
        </div>
        <div class="word-wolof">${item.wolof}</div>
        <div class="word-fr">${item.en}</div>
        <div class="word-phonetic"><strong>Syllables:</strong> ${item.phonetic}</div>
        <div class="word-tip">${item.tip}</div>
      `;

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "listen-btn";
      btn.innerHTML = '<span aria-hidden="true">🔊</span><span>Listen to pronunciation</span>';
      btn.addEventListener("click", () => handleListen(item, btn));

      card.appendChild(top);
      card.appendChild(btn);
      explorerEl.appendChild(card);
    });
  }

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      activeTab = btn.dataset.tab;
      searchEl.value = "";
      tabBtns.forEach((b) => {
        const isCurrent = b === btn;
        b.classList.toggle("active", isCurrent);
        b.setAttribute("aria-selected", isCurrent ? "true" : "false");
      });
      renderCards();
    });
  });

  searchEl.addEventListener("input", renderCards);
  bannerCloseEl.addEventListener("click", () => {
    bannerEl.hidden = true;
  });

  loadAudioManifest().finally(renderCards);
})();
