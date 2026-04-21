/* ═══════════════════════════════════════════
   TimeTravel Agency — Script
   Chatbot FAQ, Quiz, Réservation, Animations
   ═══════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initScrollAnimations();
  initDestinationCards();
  initModal();
  initQuiz();
  initChatbot();
  initReservation();
});

/* ═══ NAVBAR ═══ */
function initNavbar() {
  const nav = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 60);
  });
}

/* ═══ SCROLL ANIMATIONS ═══ */
function initScrollAnimations() {
  const els = document.querySelectorAll(".anim-hidden");
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("anim-visible");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  els.forEach((el) => obs.observe(el));
}

/* ═══ DESTINATION CARDS ═══ */
function initDestinationCards() {
  document.querySelectorAll(".dest-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.dataset.dest;
      openModal(id);
    });
  });
}

/* ═══ MODAL ═══ */
const destData = {
  paris: {
    title: "Paris 1889",
    subtitle: "La Belle Époque",
    epoch: "XIXe siècle",
    price: "750 €",
    duration: "3 jours",
    icon: "🗼",
    description:
      "Vivez l'inauguration de la Tour Eiffel lors de l'Exposition Universelle. Flânez sur les Champs-Élysées, admirez les impressionnistes et savourez la gastronomie parisienne à son apogée. Un voyage au cœur de la modernité naissante.",
    highlights: [
      "Exposition Universelle",
      "Tour Eiffel en construction",
      "Moulin Rouge",
      "Cafés littéraires",
      "Impressionnistes",
    ],
    video: "VIDEO_PARIS.mp4", /* ← REMPLACE PAR TON FICHIER */
  },
  cretace: {
    title: "Crétacé",
    subtitle: "−65 Millions d'années",
    epoch: "Mésozoïque",
    price: "950 €",
    duration: "2 jours",
    icon: "🦕",
    description:
      "Explorez un monde primitif peuplé de dinosaures majestueux. Des forêts luxuriantes aux volcans fumants, une aventure au cœur de la nature à l'état brut. Équipement de protection et guide paléontologue inclus.",
    highlights: [
      "Observation T-Rex",
      "Forêts géantes",
      "Volcans actifs",
      "Faune préhistorique",
      "Guide paléontologue",
    ],
    video: "VIDEO_CRETACE.mp4",
  },
  florence: {
    title: "Florence 1504",
    subtitle: "La Renaissance Italienne",
    epoch: "XVIe siècle",
    price: "850 €",
    duration: "4 jours",
    icon: "🎨",
    description:
      "Rencontrez Michel-Ange sculptant le David, visitez l'atelier de Léonard de Vinci et découvrez Florence au sommet de la Renaissance artistique. Gastronomie toscane et architecture somptueuse.",
    highlights: [
      "Atelier de Michel-Ange",
      "Palazzo Vecchio",
      "Ponte Vecchio",
      "Galerie des Offices",
      "Léonard de Vinci",
    ],
    video: "VIDEO_FLORENCE.mp4", /* ← REMPLACE PAR TON FICHIER */
  },
};

function openModal(id) {
  const d = destData[id];
  if (!d) return;
  const overlay = document.getElementById("modal-overlay");
const videoHTML = d.video
    ? `<video id="modal-video" autoplay loop playsinline style="width:100%;height:100%;object-fit:cover"><source src="${d.video}" type="video/mp4"></video>`
    : `<span class="placeholder">${d.icon}</span>`;

  document.getElementById("modal-content").innerHTML = `
    <div class="modal-header" style="background:var(--bg3)">
      ${videoHTML}
      <button class="modal-close" onclick="closeModal()">✕</button>
    </div>
    <div class="modal-body">
      <div class="dest-epoch">${d.epoch}</div>
      <h2 class="dest-title" style="font-size:1.9rem;margin-bottom:6px">${d.title}</h2>
      <p class="dest-subtitle" style="margin-bottom:20px">${d.subtitle}</p>
      <p class="dest-desc" style="margin-bottom:24px">${d.description}</p>
      <h4 style="font-family:var(--font-display);font-size:1rem;color:var(--emerald);margin-bottom:14px">Points forts</h4>
      <div class="modal-highlights">
        ${d.highlights.map((h) => `<span>${h}</span>`).join("")}
      </div>
      <div class="modal-footer">
        <div>
          <div style="font-size:0.75rem;color:var(--grey);margin-bottom:3px">À partir de</div>
          <div class="dest-price">${d.price}</div>
        </div>
        <div style="text-align:right">
          <div style="font-size:0.75rem;color:var(--grey);margin-bottom:3px">Durée</div>
          <div style="font-size:1.05rem;color:var(--white)">${d.duration}</div>
        </div>
      </div>
      <button class="btn-primary" style="width:100%;margin-top:22px" onclick="closeModal();document.getElementById('reservation').scrollIntoView({behavior:'smooth'})">
        Réserver cette destination
      </button>
    </div>
  `;
  overlay.classList.remove("hidden");
setTimeout(() => {
    const vid = document.getElementById("modal-video");
    if (vid) {
      vid.muted = false;
      vid.volume = 0.5;
      vid.play();
    }
  }, 100);
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modal-overlay").classList.add("hidden");
  document.body.style.overflow = "";
}

function initModal() {
  document.getElementById("modal-overlay").addEventListener("click", (e) => {
    if (e.target.id === "modal-overlay") closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

/* ═══ QUIZ ═══ */
const quizQuestions = [
  {
    question: "Quel type d'expérience recherchez-vous ?",
    options: [
      { label: "Culturelle et artistique", scores: [2, 0, 3] },
      { label: "Aventure et nature", scores: [0, 3, 0] },
      { label: "Élégance et raffinement", scores: [3, 0, 2] },
    ],
  },
  {
    question: "Votre période préférée ?",
    options: [
      { label: "Histoire moderne (XIXe-XXe siècle)", scores: [3, 0, 1] },
      { label: "Temps anciens et origines", scores: [0, 3, 0] },
      { label: "Renaissance et classicisme", scores: [1, 0, 3] },
    ],
  },
  {
    question: "Vous préférez :",
    options: [
      { label: "L'effervescence urbaine", scores: [3, 0, 2] },
      { label: "La nature sauvage", scores: [0, 3, 0] },
      { label: "L'art et l'architecture", scores: [1, 0, 3] },
    ],
  },
  {
    question: "Votre activité idéale :",
    options: [
      { label: "Visiter des monuments", scores: [3, 0, 2] },
      { label: "Observer la faune", scores: [0, 3, 0] },
      { label: "Explorer des musées", scores: [2, 0, 3] },
    ],
  },
];

// scores order: [paris, cretace, florence]
const quizResults = {
  paris: {
    icon: "🗼",
    title: "Paris 1889",
    subtitle: "La Belle Époque",
    text: "Votre âme vibre au rythme de la modernité et de l'élégance ! Paris 1889 vous attend avec ses boulevards illuminés, l'Exposition Universelle et la Tour Eiffel tout juste achevée. Un voyage où le raffinement rencontre l'innovation — parfait pour vous.",
  },
  cretace: {
    icon: "🦕",
    title: "Crétacé",
    subtitle: "−65 Millions d'années",
    text: "L'aventurier en vous ne demande qu'à s'exprimer ! Le Crétacé vous offre une immersion totale dans la nature primordiale : des forêts géantes, des volcans majestueux et bien sûr, les dinosaures. Une expérience hors du temps, littéralement.",
  },
  florence: {
    icon: "🎨",
    title: "Florence 1504",
    subtitle: "La Renaissance Italienne",
    text: "Votre sensibilité artistique vous guide naturellement vers la Florence de la Renaissance ! Imaginez-vous dans l'atelier de Michel-Ange, flânant sur le Ponte Vecchio, découvrant des chefs-d'œuvre qui traverseront les siècles. La beauté vous attend.",
  },
};

let quizStep = -1;
let quizScores = [0, 0, 0]; // paris, cretace, florence

function initQuiz() {
  document.getElementById("quiz-start-btn").addEventListener("click", () => {
    quizStep = 0;
    quizScores = [0, 0, 0];
    renderQuizStep();
  });
}

function renderQuizStep() {
  const container = document.getElementById("quiz-area");
  if (quizStep < 0) return;

  const q = quizQuestions[quizStep];
  let dotsHTML = quizQuestions
    .map((_, i) => `<div class="quiz-dot ${i <= quizStep ? "active" : ""}"></div>`)
    .join("");

  container.innerHTML = `
    <div class="quiz-progress">${dotsHTML}</div>
    <div class="quiz-step-num">Question ${quizStep + 1} sur ${quizQuestions.length}</div>
    <div class="quiz-question">${q.question}</div>
    ${q.options
      .map(
        (opt, i) =>
          `<button class="quiz-option" onclick="quizAnswer(${i})">${opt.label}</button>`
      )
      .join("")}
  `;
}

function quizAnswer(optIndex) {
  const q = quizQuestions[quizStep];
  const s = q.options[optIndex].scores;
  quizScores[0] += s[0];
  quizScores[1] += s[1];
  quizScores[2] += s[2];

  if (quizStep < quizQuestions.length - 1) {
    quizStep++;
    renderQuizStep();
  } else {
    showQuizResult();
  }
}

function showQuizResult() {
  const maxIdx = quizScores.indexOf(Math.max(...quizScores));
  const keys = ["paris", "cretace", "florence"];
  const r = quizResults[keys[maxIdx]];

  document.getElementById("quiz-area").innerHTML = `
    <div class="quiz-result">
      <div class="icon">${r.icon}</div>
      <h3>${r.title}</h3>
      <div class="sub">${r.subtitle}</div>
      <p>${r.text}</p>
      <div class="quiz-result-btns">
        <button class="btn-primary" onclick="document.getElementById('destinations').scrollIntoView({behavior:'smooth'})">Voir la destination</button>
        <button class="btn-secondary" onclick="resetQuiz()">Refaire le quiz</button>
      </div>
    </div>
  `;
}

function resetQuiz() {
  quizStep = -1;
  quizScores = [0, 0, 0];
  document.getElementById("quiz-area").innerHTML = `
    <div class="quiz-intro">
      <div class="icon">🧭</div>
      <h3 class="quiz-question" style="margin-bottom:14px">Trouvez votre destination idéale</h3>
      <p style="font-size:0.95rem;font-weight:300;color:var(--grey);margin-bottom:32px;line-height:1.7">
        Répondez à 4 questions rapides et découvrez la destination temporelle parfaite pour vous.
      </p>
      <button class="btn-primary" id="quiz-start-btn" onclick="quizStep=0;quizScores=[0,0,0];renderQuizStep()">Commencer le quiz</button>
    </div>
  `;
}

/* ═══ CHATBOT FAQ ═══ */
const faqData = {
  main: [
    { label: "📍 Nos destinations", action: "destinations" },
    { label: "💰 Nos tarifs", action: "tarifs" },
    { label: "📅 Comment réserver ?", action: "reserver" },
    { label: "🛡️ Sécurité des voyages", action: "securite" },
    { label: "⏱️ Durée des voyages", action: "duree" },
    { label: "❓ Questions fréquentes", action: "faq" },
  ],
  destinations: {
    response:
      "Nous proposons 3 destinations temporelles exceptionnelles. Laquelle vous intéresse ?",
    options: [
      { label: "🗼 Paris 1889", action: "paris" },
      { label: "🦕 Crétacé −65M", action: "cretace" },
      { label: "🎨 Florence 1504", action: "florence" },
      { label: "← Retour au menu", action: "main" },
    ],
  },
  paris: {
    response:
      "🗼 Paris 1889 — La Belle Époque !\n\nVivez l'inauguration de la Tour Eiffel lors de l'Exposition Universelle. Au programme : promenade sur les Champs-Élysées, visite du Moulin Rouge, rencontre avec les impressionnistes et gastronomie parisienne d'exception.\n\n📅 Durée : 3 jours\n💰 Tarif : 750 € tout inclus",
    options: [
      { label: "📍 Autres destinations", action: "destinations" },
      { label: "📅 Réserver maintenant", action: "reserver" },
      { label: "← Menu principal", action: "main" },
    ],
  },
  cretace: {
    response:
      "🦕 Crétacé — −65 Millions d'années !\n\nPartez à la rencontre des dinosaures dans leur habitat naturel. Observation de T-Rex, Brachiosaures et Tricératops dans des forêts géantes et près de volcans actifs. Équipement de protection et guide paléontologue inclus.\n\n📅 Durée : 2 jours\n💰 Tarif : 950 € tout inclus",
    options: [
      { label: "📍 Autres destinations", action: "destinations" },
      { label: "📅 Réserver maintenant", action: "reserver" },
      { label: "← Menu principal", action: "main" },
    ],
  },
  florence: {
    response:
      "🎨 Florence 1504 — La Renaissance Italienne !\n\nRencontrez Michel-Ange en pleine sculpture du David, visitez l'atelier de Léonard de Vinci, promenez-vous sur le Ponte Vecchio et explorez la Galerie des Offices. Gastronomie toscane de la Renaissance incluse.\n\n📅 Durée : 4 jours\n💰 Tarif : 850 € tout inclus",
    options: [
      { label: "📍 Autres destinations", action: "destinations" },
      { label: "📅 Réserver maintenant", action: "reserver" },
      { label: "← Menu principal", action: "main" },
    ],
  },
  tarifs: {
    response:
      "💰 Nos tarifs tout inclus :\n\n🗼 Paris 1889 — 750 € (3 jours)\n🦕 Crétacé −65M — 950 € (2 jours)\n🎨 Florence 1504 — 850 € (4 jours)\n\nChaque voyage comprend : transport temporel, hébergement d'époque, guide personnel, costumes d'époque, assurance et briefing de préparation.",
    options: [
      { label: "📅 Réserver maintenant", action: "reserver" },
      { label: "📍 Voir les destinations", action: "destinations" },
      { label: "← Menu principal", action: "main" },
    ],
  },
  reserver: {
    response:
      "📅 Pour réserver, c'est très simple !\n\n1. Choisissez votre destination\n2. Sélectionnez votre date de départ\n3. Indiquez le nombre de voyageurs (6 max)\n4. Confirmez votre réservation\n\nVous pouvez réserver directement depuis notre formulaire ci-dessous 👇",
    options: [
      { label: "📍 Voir les destinations", action: "destinations" },
      { label: "← Menu principal", action: "main" },
    ],
    scrollTo: "reservation",
  },
  securite: {
    response:
      "🛡️ Votre sécurité est notre priorité absolue !\n\n✅ Capsules temporelles certifiées dernière génération\n✅ Guides experts formés pour chaque époque\n✅ Équipement de protection adapté fourni\n✅ Briefing complet 48h avant le départ\n✅ Communication en temps réel avec notre centre de contrôle\n✅ Garantie « retour sain et sauf » ou remboursé intégral",
    options: [
      { label: "💰 Voir les tarifs", action: "tarifs" },
      { label: "📅 Réserver", action: "reserver" },
      { label: "← Menu principal", action: "main" },
    ],
  },
  duree: {
    response:
      "⏱️ Durée de nos voyages :\n\n🗼 Paris 1889 — 3 jours\n🦕 Crétacé −65M — 2 jours\n🎨 Florence 1504 — 4 jours\n\nDéparts chaque semaine depuis Paris, Lyon et Marseille. Groupes de 6 voyageurs maximum pour une expérience intimiste.",
    options: [
      { label: "💰 Voir les tarifs", action: "tarifs" },
      { label: "📅 Réserver", action: "reserver" },
      { label: "← Menu principal", action: "main" },
    ],
  },
  faq: {
    response: "❓ Questions fréquentes — que souhaitez-vous savoir ?",
    options: [
      { label: "🧳 Que faut-il emporter ?", action: "faq_bagages" },
      { label: "👗 Comment s'habiller ?", action: "faq_vetements" },
      { label: "🌍 Points de départ ?", action: "faq_depart" },
      { label: "🔄 Politique d'annulation ?", action: "faq_annulation" },
      { label: "← Menu principal", action: "main" },
    ],
  },
  faq_bagages: {
    response:
      "🧳 Vous n'avez presque rien à emporter !\n\nNous fournissons tout : vêtements d'époque, équipement de protection, trousse de premiers soins temporelle. Apportez uniquement vos effets personnels essentiels et votre sens de l'aventure !",
    options: [
      { label: "❓ Autres questions", action: "faq" },
      { label: "← Menu principal", action: "main" },
    ],
  },
  faq_vetements: {
    response:
      "👗 Pas de stress vestimentaire !\n\nUn costume d'époque authentique vous est fourni lors du briefing de préparation (48h avant le départ). Nos couturiers créent des tenues sur mesure pour que vous vous fondiez parfaitement dans l'époque visitée.",
    options: [
      { label: "❓ Autres questions", action: "faq" },
      { label: "← Menu principal", action: "main" },
    ],
  },
  faq_depart: {
    response:
      "🌍 Nos points de départ :\n\n📍 Paris — Gare Temporelle Saint-Lazare\n📍 Lyon — Centre Temporel Part-Dieu\n📍 Marseille — Port Temporel Vieux-Port\n\nDéparts chaque samedi à 9h00. Arrivée recommandée 1h avant.",
    options: [
      { label: "❓ Autres questions", action: "faq" },
      { label: "📅 Réserver", action: "reserver" },
      { label: "← Menu principal", action: "main" },
    ],
  },
  faq_annulation: {
    response:
      "🔄 Notre politique d'annulation est flexible :\n\n✅ Annulation gratuite jusqu'à 7 jours avant le départ\n✅ Remboursement 50% entre 7 et 3 jours avant\n✅ Report gratuit possible (sous réserve de disponibilité)\n✅ Garantie « retour sain et sauf » ou remboursé intégral",
    options: [
      { label: "❓ Autres questions", action: "faq" },
      { label: "📅 Réserver", action: "reserver" },
      { label: "← Menu principal", action: "main" },
    ],
  },
};

function initChatbot() {
  const toggle = document.getElementById("chat-toggle");
  const window_ = document.getElementById("chat-window");

  toggle.addEventListener("click", () => {
    const isOpen = window_.classList.toggle("open");
    toggle.classList.toggle("open", isOpen);
    toggle.textContent = isOpen ? "✕" : "💬";
  });

  // Show welcome + main options
  renderChatFAQ("main", true);
}

function renderChatFAQ(actionKey, isWelcome = false) {
  const msgs = document.getElementById("chat-messages");
  const faqArea = document.getElementById("chat-faq");
  const data = faqData[actionKey];

  if (!data) return;

  // Bot response
  if (isWelcome) {
    addBotMessage(
      "Bienvenue chez TimeTravel Agency ! ✨\nJe suis votre conseiller en voyages temporels. Comment puis-je vous aider ?"
    );
  } else if (data.response) {
    addBotMessage(data.response);
  }

  // Scroll to reservation if needed
  if (data.scrollTo) {
    setTimeout(() => {
      document.getElementById(data.scrollTo)?.scrollIntoView({ behavior: "smooth" });
    }, 600);
  }

  // Render FAQ buttons
  const options = data.options || data;
  const optionsArray = Array.isArray(options) ? options : [];

  faqArea.innerHTML = `
    <div class="chat-faq-label">Choisissez une question</div>
    ${optionsArray
      .map(
        (opt) =>
          `<button class="chat-faq-btn" onclick="handleFAQ('${opt.action}','${opt.label.replace(/'/g, "\\'")}')">${opt.label}</button>`
      )
      .join("")}
  `;

  // Scroll messages to bottom
  setTimeout(() => {
    msgs.scrollTop = msgs.scrollHeight;
  }, 50);
}

function handleFAQ(action, label) {
  // Add user "message"
  addUserMessage(label);
  // Render bot response + new options
  renderChatFAQ(action);
}

function addBotMessage(text) {
  const msgs = document.getElementById("chat-messages");
  const bubble = document.createElement("div");
  bubble.className = "chat-bubble bot";
  bubble.style.whiteSpace = "pre-wrap";
  bubble.textContent = text;
  bubble.style.animation = "slideUp 0.3s ease";
  msgs.appendChild(bubble);
}

function addUserMessage(text) {
  const msgs = document.getElementById("chat-messages");
  const bubble = document.createElement("div");
  bubble.className = "chat-bubble user";
  bubble.textContent = text;
  bubble.style.animation = "slideUp 0.3s ease";
  msgs.appendChild(bubble);
}

/* ═══ RESERVATION ═══ */
function initReservation() {
  const form = document.getElementById("resa-form");
  const confirm = document.getElementById("resa-confirm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const dest = document.getElementById("resa-dest").value;
    const date = document.getElementById("resa-date").value;
    const travelers = document.getElementById("resa-travelers").value;
    const name = document.getElementById("resa-name").value;
    const email = document.getElementById("resa-email").value;

    if (!dest || !date || !name || !email) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    const destNames = {
      paris: "Paris 1889 — La Belle Époque",
      cretace: "Crétacé — −65 Millions d'années",
      florence: "Florence 1504 — La Renaissance",
    };
    const destPrices = { paris: "750 €", cretace: "950 €", florence: "850 €" };

    const formattedDate = new Date(date).toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    form.style.display = "none";
    confirm.style.display = "block";
    confirm.innerHTML = `
      <div class="icon">✨</div>
      <h3>Voyage confirmé !</h3>
      <p>Merci ${name}, votre aventure temporelle est réservée.<br>Préparez vos bagages temporels !</p>
      <div class="detail">
        <strong>📍 Destination :</strong> ${destNames[dest]}<br>
        <strong>📅 Départ :</strong> ${formattedDate}<br>
        <strong>👥 Voyageurs :</strong> ${travelers}<br>
        <strong>💰 Total :</strong> ${destPrices[dest]}<br>
        <strong>📧 Confirmation envoyée à :</strong> ${email}
      </div>
      <button class="btn-secondary" style="margin-top:24px" onclick="resetResa()">Nouvelle réservation</button>
    `;
  });
}

function resetResa() {
  document.getElementById("resa-form").style.display = "flex";
  document.getElementById("resa-form").reset();
  document.getElementById("resa-confirm").style.display = "none";
}
