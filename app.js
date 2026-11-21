(() => {
  const DATA = {
    cles: [
      {
        tag: "Lettre clé · X",
        wolof: "X (ex : Xaj)",
        fr: "Son « kh » de la gorge (doux)",
        phonetic: "[kha] — comme la jota espagnole ou le « ch » allemand de Bach",
        tip: "Ne dites pas « ks » ni « iks » : frottez doucement l'air au fond du palais.",
        slug: "xaj",
        isKey: true
      },
      {
        tag: "Lettre clé · Ñ",
        wolof: "Ñ (ex : Ñoo ko bokk / Ñaar)",
        fr: "Son « gn » comme dans « montagne »",
        phonetic: "[nyo] / [nyaar]",
        tip: "Très doux pour les enfants : collez le milieu de la langue au palais comme dans « agneau ».",
        slug: "noo-ko-bokk",
        isKey: true
      },
      {
        tag: "Voyelle clé · Ë",
        wolof: "Ë (ex : Jërëjëf / Waakër)",
        fr: "Son « eu » bref comme dans « fleur » ou « je »",
        phonetic: "[djeu-reu-djeuf] · [waa-keur]",
        tip: "Beaucoup plus fermé et bref que « é » ou « è ».",
        slug: "jerejef",
        isKey: true
      },
      {
        tag: "Voyelles & consonnes doubles",
        wolof: "aa · ee · oo · uu / pp · nn · tt · kk",
        fr: "On allonge les doubles voyelles, on appuie les doubles consonnes",
        phonetic: "Waaw [waa-ou] · Déedéet [déé-déét] · Fukk [foukk]",
        tip: "Une double voyelle dure deux temps : Waaw, Baay, Yaay, Maam, Ñaar.",
        slug: "waaw",
        isKey: true
      },
      {
        tag: "Devise accueil",
        wolof: "Dalal ak jàmm",
        fr: "Bienvenue ! (litt. Installe-toi en paix)",
        phonetic: "Da-lal ak djamm",
        tip: "L'expression chaleureuse inscrite au début du cahier pour accueillir toute la famille.",
        slug: "dalal-ak-jamm",
        isKey: false
      },
      {
        tag: "Devise Chapitre 2",
        wolof: "Bëgg naa sama waakër",
        fr: "J'aime ma famille !",
        phonetic: "Beugg naa sa-ma waa-keur",
        tip: "À répéter à la fin des pages sur l'arbre généalogique.",
        slug: "begg-naa-sama-waaker",
        isKey: false
      },
      {
        tag: "Devise Chapitre 3",
        wolof: "Waññ ba fukk",
        fr: "Compter jusqu'à 10",
        phonetic: "Wagn ba foukk",
        tip: "Devise du Chapitre 3 pour compter de Benn (1) à Fukk (10).",
        slug: "wann-ba-fukk",
        isKey: false
      },
      {
        tag: "Devise Chapitre 5",
        wolof: "Xam naa sama yaram",
        fr: "Je connais mon corps !",
        phonetic: "Kham naa sa-ma ya-ram",
        tip: "Idéale pour le jeu du miroir et « Jacques a dit » en famille.",
        slug: "xam-naa-sama-yaram",
        isKey: false
      }
    ],
    ch1: [
      { tag: "Ch. 1 · 01", wolof: "Salamalekum", fr: "Bonjour ! (salutation)", phonetic: "Sa-la-ma-lé-koum", tip: "Premier mot du matin pour saluer parents et aînés.", slug: "salamalekum" },
      { tag: "Ch. 1 · 02", wolof: "Malekum salaam", fr: "Bonjour ! (réponse)", phonetic: "Ma-lé-koum sa-laam", tip: "La réponse exacte à « Salamalekum ».", slug: "malekum-salaam" },
      { tag: "Ch. 1 · 03", wolof: "Na nga def ?", fr: "Comment vas-tu ?", phonetic: "Na nga dèf ?", tip: "Le « ng » se prononce ensemble comme dans « parking ».", slug: "na-nga-def" },
      { tag: "Ch. 1 · 04", wolof: "Maa ngi fi", fr: "Je vais bien / Je suis là", phonetic: "Maa ngui fi", tip: "Réponse classique et souriante à « Na nga def ? ».", slug: "maa-ngi-fi" },
      { tag: "Ch. 1 · 05", wolof: "Jërëjëf", fr: "Merci", phonetic: "Djeu-reu-djeuf", tip: "Le « j » se prononce « dj » doux ; les 3 « ë » se disent « eu ».", slug: "jerejef" },
      { tag: "Ch. 1 · 06", wolof: "Ñoo ko bokk", fr: "De rien (nous le partageons)", phonetic: "Nyo ko bokk", tip: "Réponse affectueuse après « Jërëjëf ».", slug: "noo-ko-bokk" },
      { tag: "Ch. 1 · 07", wolof: "Waaw", fr: "Oui", phonetic: "Waa-ou (voyelle longue)", tip: "Allongez bien le « aa ».", slug: "waaw" },
      { tag: "Ch. 1 · 08", wolof: "Déedéet", fr: "Non", phonetic: "Déé-déét", tip: "Articulez bien les deux voyelles longues « ée ».", slug: "deedeet" },
      { tag: "Ch. 1 · 09", wolof: "Ba beneen", fr: "À la prochaine / Au revoir", phonetic: "Ba bé-néén", tip: "Pour se dire au revoir devant la porte de l'école.", slug: "ba-beneen" },
      { tag: "Ch. 1 · 10", wolof: "Naka suba si ?", fr: "Comment va la matinée ?", phonetic: "Na-ka sou-ba si ?", tip: "Le « u » wolof se lit toujours « ou » comme dans « coucou ».", slug: "naka-suba-si" }
    ],
    ch2: [
      { tag: "Ch. 2 · 01", wolof: "Sama", fr: "Mon / Ma", phonetic: "Sa-ma", tip: "Se place devant n'importe quel membre : Sama yaay, Sama baay.", slug: "sama" },
      { tag: "Ch. 2 · 02", wolof: "Baay / Pàppa", fr: "Papa / Père", phonetic: "Baay / Pàp-pa", tip: "Les enfants utilisent souvent « Sama baay » ou affectueusement « Pàppa ».", slug: "baay-pappa" },
      { tag: "Ch. 2 · 03", wolof: "Yaay / Maa", fr: "Maman / Mère", phonetic: "Yaay / Maa", tip: "« Sama yaay » est l'un des mots les plus chantants du wolof.", slug: "yaay-maa" },
      { tag: "Ch. 2 · 04", wolof: "Maam", fr: "Grand-parent", phonetic: "Maam (long)", tip: "Désigne aussi bien papy que mamie.", slug: "maam" },
      { tag: "Ch. 2 · 05", wolof: "Maam bu góor", fr: "Grand-père", phonetic: "Maam bou goor", tip: "« góor » précise masculin (grand-père).", slug: "maam-bu-goor" },
      { tag: "Ch. 2 · 06", wolof: "Maam bu jigéen", fr: "Grand-mère", phonetic: "Maam bou dji-guéén", tip: "« jigéen » se lit avec un « g » dur suivi d'un « éé » long.", slug: "maam-bu-jigeen" },
      { tag: "Ch. 2 · 07", wolof: "Mag", fr: "Grand frère / Grande sœur", phonetic: "Mag", tip: "Désigne l'aîné·e sans distinction de genre.", slug: "mag" },
      { tag: "Ch. 2 · 08", wolof: "Rakk", fr: "Petit frère / Petite sœur", phonetic: "Rakk (avec appui sur kk)", tip: "Désigne le cadet ou la cadette de la famille.", slug: "rakk" }
    ],
    ch3: [
      { tag: "Ch. 3 · 1", wolof: "Benn", fr: "1 — Un", phonetic: "Bènn", tip: "Appuyez légèrement sur le double « nn » final.", slug: "benn" },
      { tag: "Ch. 3 · 2", wolof: "Ñaar", fr: "2 — Deux", phonetic: "Nyaar", tip: "Son « gn » + voyelle longue « aa ».", slug: "naar" },
      { tag: "Ch. 3 · 3", wolof: "Ñett", fr: "3 — Trois", phonetic: "Nyètt", tip: "Bref et rythmé.", slug: "nett" },
      { tag: "Ch. 3 · 4", wolof: "Ñent", fr: "4 — Quatre", phonetic: "Nyènt", tip: "On prononce bien le « t » final.", slug: "nent" },
      { tag: "Ch. 3 · 5", wolof: "Juróom", fr: "5 — Cinq (une main)", phonetic: "Djou-room", tip: "Retenez Juróom : c'est la base de 6, 7, 8 et 9 !", slug: "juroom" },
      { tag: "Ch. 3 · 6", wolof: "Juróom-benn", fr: "6 — Six (5 + 1)", phonetic: "Djou-room-bènn", tip: "Une main (5) plus un doigt (1).", slug: "juroom-benn" },
      { tag: "Ch. 3 · 7", wolof: "Juróom-ñaar", fr: "7 — Sept (5 + 2)", phonetic: "Djou-room-nyaar", tip: "Juróom + Ñaar.", slug: "juroom-naar" },
      { tag: "Ch. 3 · 8", wolof: "Juróom-ñett", fr: "8 — Huit (5 + 3)", phonetic: "Djou-room-nyètt", tip: "Juróom + Ñett.", slug: "juroom-nett" },
      { tag: "Ch. 3 · 9", wolof: "Juróom-ñent", fr: "9 — Neuf (5 + 4)", phonetic: "Djou-room-nyènt", tip: "Juróom + Ñent.", slug: "juroom-nent" },
      { tag: "Ch. 3 · 10", wolof: "Fukk", fr: "10 — Dix (deux mains)", phonetic: "Foukk", tip: "Le « u » se lit « ou » avec un double « kk » net.", slug: "fukk" }
    ],
    ch4: [
      { tag: "Ch. 4 · 01", wolof: "Mala", fr: "Animal", phonetic: "Ma-la", tip: "« Mala yi » signifie « les animaux ».", slug: "mala" },
      { tag: "Ch. 4 · 02", wolof: "Xaj", fr: "Chien", phonetic: "Khadj", tip: "Commence par le « X » doux de la gorge et finit en « dj ».", slug: "xaj" },
      { tag: "Ch. 4 · 03", wolof: "Muus", fr: "Chat", phonetic: "Mouus (voyelle longue)", tip: "Très facile à retenir : cela ressemble au miaulement !", slug: "muus" },
      { tag: "Ch. 4 · 04", wolof: "Picc", fr: "Oiseau", phonetic: "Pitch", tip: "Le double « cc » wolof se prononce comme « tch ».", slug: "picc" },
      { tag: "Ch. 4 · 05", wolof: "Jën", fr: "Poisson", phonetic: "Djeun", tip: "Attention à « j » (« dj ») et « ë » (« eu »).", slug: "jen" },
      { tag: "Ch. 4 · 06", wolof: "Fas", fr: "Cheval", phonetic: "Fass", tip: "Prononcez bien le « s » final.", slug: "fas" },
      { tag: "Ch. 4 · 07", wolof: "Golo", fr: "Singe", phonetic: "Go-lo", tip: "Avec un « g » dur comme dans « garçon ».", slug: "golo" },
      { tag: "Ch. 4 · 08", wolof: "Gaynde", fr: "Lion", phonetic: "Gay-ndé", tip: "Enchaînez doucement « ndé » en fin de mot.", slug: "gaynde" }
    ],
    ch5: [
      { tag: "Ch. 5 · 01", wolof: "Yaram", fr: "Le corps", phonetic: "Ya-ram", tip: "Ex : « Xam naa sama yaram » (Je connais mon corps).", slug: "yaram" },
      { tag: "Ch. 5 · 02", wolof: "Bopp", fr: "La tête", phonetic: "Bopp", tip: "Bien appuyer sur le double « pp » final.", slug: "bopp" },
      { tag: "Ch. 5 · 03", wolof: "Bët", fr: "L'œil", phonetic: "Beut", tip: "Rappelle la voyelle brève « ë » = « eu ».", slug: "bet" },
      { tag: "Ch. 5 · 04", wolof: "Nopp", fr: "L'oreille", phonetic: "Nopp", tip: "Bien fermer les lèvres sur « pp ».", slug: "nopp" },
      { tag: "Ch. 5 · 05", wolof: "Bakkan", fr: "Le nez", phonetic: "Bak-kan", tip: "Deux syllabes nettes.", slug: "bakkan" },
      { tag: "Ch. 5 · 06", wolof: "Gémmiñ", fr: "La bouche", phonetic: "Guém-mign", tip: "« g » dur devant « é », puis fin en « gn ».", slug: "gemmin" },
      { tag: "Ch. 5 · 07", wolof: "Loxo", fr: "La main / Le bras", phonetic: "Lo-kho", tip: "Deuxième syllabe avec le « x » doux de la gorge.", slug: "loxo" },
      { tag: "Ch. 5 · 08", wolof: "Tank", fr: "Le pied / La jambe", phonetic: "Tank", tip: "Pratique pour jouer : « Teg sa tank ci suuf ! »", slug: "tank" }
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
      const res = await fetch("./audio/manifest.json", { cache: "no-store" });
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
        const audio = new Audio(`./audio/${fileName}`);
        currentAudio = audio;
        btnEl.classList.add("playing");
        showBanner("Audio natif Studio Yaatal Pro", item.wolof, `Prononciation : ${item.phonetic} (${item.fr})`);
        audio.addEventListener("ended", () => btnEl.classList.remove("playing"), { once: true });
        audio.play().catch(() => {
          btnEl.classList.remove("playing");
          showBanner(
            "Prononciation guidée",
            item.wolof,
            `Audio natif bientôt ajouté — prononciation : [${item.phonetic}]`
          );
        });
        return;
      } catch {
        // Repli propre ci-dessous
      }
    }

    btnEl.classList.add("playing");
    setTimeout(() => btnEl.classList.remove("playing"), 1600);
    showBanner(
      "Prononciation guidée",
      `${item.wolof} · ${item.fr}`,
      `Audio natif bientôt ajouté — prononciation : [${item.phonetic}]`
    );
  }

  function renderCards() {
    const query = searchEl.value.trim().toLowerCase();
    const list = query
      ? Object.values(DATA).flat().filter((item) =>
          `${item.wolof} ${item.fr} ${item.phonetic} ${item.tag}`.toLowerCase().includes(query)
        )
      : DATA[activeTab] || [];

    explorerEl.innerHTML = "";
    if (!list.length) {
      const empty = document.createElement("div");
      empty.className = "empty-state";
      empty.textContent = "Aucun mot ne correspond à votre recherche. Essayez « Salamalekum », « Baay », « Benn » ou « Xaj ».";
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
        <div class="word-fr">${item.fr}</div>
        <div class="word-phonetic"><strong>Syllabes :</strong> ${item.phonetic}</div>
        <div class="word-tip">${item.tip}</div>
      `;

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "listen-btn";
      btn.innerHTML = '<span aria-hidden="true">🔊</span><span>Écouter la prononciation</span>';
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
