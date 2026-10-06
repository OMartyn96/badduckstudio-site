(function () {
  const defaultLanguage = "en";
  const storageKey = "badduckstudio.language";

  const translations = {
    en: {
      "global.homeAria": "Back to homepage",
      "global.primaryNav": "Primary navigation",
      "global.languageSelector": "Language selector",
      "global.tagline": "Indie mobile game studio",
      "global.games": "Games",
      "global.about": "About",
      "global.contact": "Contact",
      "global.support": "Support",
      "global.supportHrefHome": "support.html?game=word-wild-west",
      "global.supportHrefGame": "../support.html?game=word-wild-west",
      "global.documents": "Documents",
      "global.legalDocs": "Legal documents",
      "global.contactLabel": "Contact",
      "global.complaintsBook": "Complaints Book",
      "global.consumerDisputes": "Consumer disputes",
      "game.actionsAria": "Word Wild West actions",
      "game.navAria": "Game navigation",
      "game.iconAlt": "Word Wild West game icon",
      "game.status": "In development",
      "game.summaryNav": "Overview",
      "game.heroEyebrow": "Mobile game",
      "game.heroBody": "Spell fast to defeat bandits in this action-packed Wild West word game!",
      "game.googlePlaySoon": "Google Play coming soon",
      "game.screenshotsSoon": "Screenshots coming soon",
      "game.demoStudy": "WebGL demo under review",
      "game.summaryEyebrow": "Executive summary",
      "game.summaryP1": "Saddle up and step into the frontier, welcome to Word Wild West, a fast-paced spelling game and word puzzle adventure where your bullets are your words, and your aim is your spelling. Waves of bandits are closing in, each tied to a word. Spell them right and take them down before they get a shot off.",
      "game.summaryP2": "Can you outsmart every enemy, survive the shootout, and prove you are the fastest gun in the West? Whether you want to train your brain, improve your vocabulary, or just enjoy an action-packed word shooter, this game will test your speed and accuracy.",
      "game.quickInfoAria": "Quick information",
      "game.quickInfoTitle": "Quick information",
      "game.statusLabel": "Status",
      "game.platformLabel": "Initial platform",
      "game.genreLabel": "Genre",
      "game.genreValue": "Word / Puzzle / Action",
      "game.keywordsLabel": "Keywords",
      "game.keywordsValue": "Word, Puzzle, Action, Casual, Western",
      "game.featuresEyebrow": "Gameplay",
      "game.featuresTitle": "Features",
      "game.featureFirstPerson": "First-Person Action: Step right into the boots of a gunslinger with an immersive first-person POV shootout experience.",
      "game.featureSpelling": "Fast-Paced Spelling Action: Type and spell words correctly under pressure to defeat waves of bandits.",
      "game.featureShootouts": "Dynamic Shootouts: Face increasingly difficult waves of enemies that challenge your spelling speed.",
      "game.featureBoss": "Boss Levels: Sharpen your mind while defeating gang bosses in a duel of wits, guessing their words with missing letters.",
      "game.featureItems": "Special Items: Use consumables and special equipment to help you along your journey.",
      "game.featureOffline": "Play Anywhere: Enjoy the full western word game experience offline with no internet required.",
      "game.studioLabel": "Studio",
      "game.mediaEyebrow": "Upcoming content",
      "game.mediaTitle": "Downloads, screenshots and demo",
      "game.mediaGoogle": "When the store listing is published, the official button will live on this page.",
      "game.screenshotsTitle": "Screenshots",
      "game.mediaScreenshots": "The gallery is ready to receive real gameplay images as soon as they exist.",
      "game.mediaDemo": "A WebGL build can live on its own page and be linked from here.",
      "game.galleryAria": "Reserved screenshot space",
      "game.screenshotOne": "Screenshot 1",
      "game.screenshotTwo": "Screenshot 2",
      "game.trailerDemo": "Trailer / demo",
      "game.legalIntro": "Game-specific documents for Word Wild West, separated from the homepage to keep the site organized as more games are added.",
      "game.effectiveDate": "Effective date: 22 May 2026",
      "game.application": "Application: WordWildWest",
      "home.heroTitle": "Mobile games with their own identity, built to grow.",
      "home.heroBody": "The homepage is the studio showcase: it presents our games, shows what is in development and sends each project to its own page.",
      "home.viewGames": "View games",
      "home.aboutStudio": "About the studio",
      "home.gamesEyebrow": "Game list",
      "home.gamesTitle": "Studio games",
      "home.gameCardBody": "Spell fast to defeat bandits in this action-packed Wild West word game!",
      "home.viewGame": "View game",
      "home.upcomingTitle": "Upcoming games",
      "home.upcomingBody": "This space is reserved for future Bad Duck Studio titles, keeping the homepage ready to grow without mixing documents from different games.",
      "home.companyEyebrow": "Company",
      "home.aboutTitle": "About Us",
      "home.aboutP1": "Bad Duck Studio is a small indie team based in Portugal, creating games with heart for players around the world. We are developers, dreamers, and lifelong gamers who believe that great ideas deserve to be brought to life, no matter the size of the team behind them.",
      "home.aboutP2": "We focus on crafting fun, accessible mobile experiences, built from curiosity, creativity, and a genuine love for interactive worlds. Every project is a chance to learn, experiment, and bring a bit of joy to everyone who picks up our games. And while we love exploring new ideas, we are equally committed to polishing them, striving for quality in every detail.",
      "home.aboutP3": "But we are not stopping here. Our long term goal is to grow beyond mobile and bring our ideas to bigger, richer experiences on Steam. We want to build larger worlds, deeper mechanics, and games that stay with players long after the screen goes dark.",
      "home.aboutP4": "We are building, improving, and levelling up one game at a time."
    },
    pt: {
      "global.homeAria": "Voltar à página inicial",
      "global.primaryNav": "Navegação principal",
      "global.languageSelector": "Seletor de idioma",
      "global.tagline": "Estúdio indie de jogos mobile",
      "global.games": "Jogos",
      "global.about": "Sobre",
      "global.contact": "Contacto",
      "global.support": "Suporte",
      "global.supportHrefHome": "suporte.html?game=word-wild-west",
      "global.supportHrefGame": "../suporte.html?game=word-wild-west",
      "global.documents": "Documentos",
      "global.legalDocs": "Documentos legais",
      "global.contactLabel": "Contacto",
      "global.complaintsBook": "Livro de Reclamações",
      "global.consumerDisputes": "Resolução de litígios",
      "game.actionsAria": "Ações do jogo Word Wild West",
      "game.navAria": "Navegação do jogo",
      "game.iconAlt": "Ícone do jogo Word Wild West",
      "game.status": "Em desenvolvimento",
      "game.summaryNav": "Resumo",
      "game.heroEyebrow": "Jogo mobile",
      "game.heroBody": "Soletra rápido para derrotar bandidos neste jogo de palavras do Wild West cheio de ação!",
      "game.googlePlaySoon": "Google Play em breve",
      "game.screenshotsSoon": "Screenshots em breve",
      "game.demoStudy": "Demo WebGL em estudo",
      "game.summaryEyebrow": "Resumo executivo",
      "game.summaryP1": "Prepara-te e entra na fronteira: bem-vindo a Word Wild West, um jogo rápido de soletrar e uma aventura de puzzle de palavras onde as tuas balas são as palavras e a tua pontaria é a ortografia. Vagas de bandidos aproximam-se, cada um ligado a uma palavra. Soletra corretamente e derrota-os antes que disparem.",
      "game.summaryP2": "Consegues superar todos os inimigos, sobreviver ao tiroteio e provar que és o pistoleiro mais rápido do Oeste? Quer queiras treinar o cérebro, melhorar o vocabulário ou apenas desfrutar de um shooter de palavras cheio de ação, este jogo vai testar a tua velocidade e precisão.",
      "game.quickInfoAria": "Informação rápida",
      "game.quickInfoTitle": "Informação rápida",
      "game.statusLabel": "Estado",
      "game.platformLabel": "Plataforma inicial",
      "game.genreLabel": "Género",
      "game.genreValue": "Palavras / Puzzle / Ação",
      "game.keywordsLabel": "Palavras-chave",
      "game.keywordsValue": "Palavras, Puzzle, Ação, Casual, Western",
      "game.featuresEyebrow": "Jogabilidade",
      "game.featuresTitle": "Funcionalidades",
      "game.featureFirstPerson": "Ação na primeira pessoa: entra nas botas de um pistoleiro com uma experiência de tiroteio imersiva em primeira pessoa.",
      "game.featureSpelling": "Soletrar sob pressão: escreve e soletra palavras corretamente para derrotar vagas de bandidos.",
      "game.featureShootouts": "Tiroteios dinâmicos: enfrenta vagas de inimigos cada vez mais difíceis que desafiam a tua velocidade a soletrar.",
      "game.featureBoss": "Níveis de boss: afia a mente enquanto derrotas chefes de gangue num duelo de inteligência, adivinhando palavras com letras em falta.",
      "game.featureItems": "Itens especiais: usa consumíveis e equipamento especial para te ajudar ao longo da jornada.",
      "game.featureOffline": "Joga em qualquer lugar: desfruta da experiência western completa sem precisar de ligação à internet.",
      "game.studioLabel": "Estúdio",
      "game.mediaEyebrow": "Próximos conteúdos",
      "game.mediaTitle": "Downloads, screenshots e demo",
      "game.mediaGoogle": "Quando a ficha da loja estiver publicada, o botão oficial entra nesta página.",
      "game.screenshotsTitle": "Screenshots",
      "game.mediaScreenshots": "A galeria fica pronta para receber imagens reais do jogo assim que existirem.",
      "game.mediaDemo": "Uma build WebGL pode viver numa página própria e ser ligada a partir daqui.",
      "game.galleryAria": "Espaço reservado para screenshots",
      "game.screenshotOne": "Screenshot 1",
      "game.screenshotTwo": "Screenshot 2",
      "game.trailerDemo": "Trailer / demo",
      "game.legalIntro": "Documentos específicos do jogo Word Wild West, separados da página inicial para manter o site organizado quando houver mais jogos.",
      "game.effectiveDate": "Data efetiva: 22 de maio de 2026",
      "game.application": "Aplicação: WordWildWest",
      "home.heroTitle": "Jogos mobile com identidade própria, feitos para crescer.",
      "home.heroBody": "A página inicial é a montra do estúdio: apresenta os jogos, mostra o que está em desenvolvimento e encaminha cada projeto para a sua própria página.",
      "home.viewGames": "Ver jogos",
      "home.aboutStudio": "Sobre o estúdio",
      "home.gamesEyebrow": "Lista de jogos",
      "home.gamesTitle": "Jogos do estúdio",
      "home.gameCardBody": "Soletra rápido para derrotar bandidos neste jogo de palavras do Wild West cheio de ação!",
      "home.viewGame": "Ver jogo",
      "home.upcomingTitle": "Próximos jogos",
      "home.upcomingBody": "Este espaço fica reservado para novos títulos da Bad Duck Studio, mantendo a home preparada para crescer sem misturar documentos de vários jogos.",
      "home.companyEyebrow": "Empresa",
      "home.aboutTitle": "Sobre nós",
      "home.aboutP1": "A Bad Duck Studio é uma pequena equipa indie sediada em Portugal, a criar jogos com coração para jogadores em todo o mundo. Somos developers, sonhadores e gamers de longa data que acreditam que boas ideias merecem ganhar vida, independentemente do tamanho da equipa por trás delas.",
      "home.aboutP2": "Focamo-nos em criar experiências mobile divertidas e acessíveis, construídas a partir da curiosidade, criatividade e de um amor genuíno por mundos interativos. Cada projeto é uma oportunidade para aprender, experimentar e levar um pouco de alegria a quem pega nos nossos jogos. E embora adoremos explorar ideias novas, estamos igualmente comprometidos em poli-las, procurando qualidade em cada detalhe.",
      "home.aboutP3": "Mas não vamos ficar por aqui. O nosso objetivo a longo prazo é crescer para além do mobile e levar as nossas ideias a experiências maiores e mais ricas na Steam. Queremos construir mundos maiores, mecânicas mais profundas e jogos que fiquem com os jogadores muito depois do ecrã escurecer.",
      "home.aboutP4": "Estamos a construir, melhorar e subir de nível, um jogo de cada vez."
    }
  };

  function translate(lang) {
    const dictionary = translations[lang] || translations[defaultLanguage];

    document.documentElement.lang = lang;
    document.body.dataset.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (dictionary[key]) {
        element.textContent = dictionary[key];
      }
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
      element.dataset.i18nAttr.split(";").forEach((entry) => {
        const parts = entry.split(":");
        const attr = parts[0];
        const key = parts[1];
        if (attr && key && dictionary[key]) {
          element.setAttribute(attr, dictionary[key]);
        }
      });
    });

    document.querySelectorAll("[data-lang-button]").forEach((button) => {
      button.setAttribute("aria-pressed", button.dataset.langButton === lang ? "true" : "false");
    });
  }

  function getInitialLanguage() {
    let stored = null;
    try {
      stored = window.localStorage && window.localStorage.getItem(storageKey);
    } catch (error) {
      stored = null;
    }
    return translations[stored] ? stored : defaultLanguage;
  }

  document.querySelectorAll("[data-lang-button]").forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.langButton;
      if (!translations[lang]) {
        return;
      }
      try {
        if (window.localStorage) {
          window.localStorage.setItem(storageKey, lang);
        }
      } catch (error) {
        // The language still changes for the current page when storage is unavailable.
      }
      translate(lang);
    });
  });

  translate(getInitialLanguage());
})();
