const lessons = [
  {
    title: "先学会开口打招呼",
    intro: "今天只记住 6 个高频表达。你会一点英文，所以每张卡会同时给中文、英文近似意思和西语语境。",
    coachTip: "西班牙语的礼貌表达很固定。先不要纠结语法，把整句当成一个声音块来模仿。",
    pronunciationTip: "西语元音很稳定：a 像“啊”，e 像“诶”，i 像“衣”，o 像“哦”，u 像“乌”。",
    phraseIds: ["hola", "buenosDias", "gracias", "porFavor", "perdon", "adios"]
  }
];

const cards = [
  {
    id: "hola",
    category: "greeting",
    es: "Hola",
    zh: "你好",
    en: "Hello",
    hint: "最常用的打招呼，不分正式或非正式。",
    sound: "OH-lah"
  },
  {
    id: "buenosDias",
    category: "greeting",
    es: "Buenos días",
    zh: "早上好",
    en: "Good morning",
    hint: "上午见面用。días 的重音在 dí。",
    sound: "BWEH-nos DEE-as"
  },
  {
    id: "gracias",
    category: "greeting",
    es: "Gracias",
    zh: "谢谢",
    en: "Thank you",
    hint: "c 在 ia 前接近英文 s 的声音。",
    sound: "GRAH-syas"
  },
  {
    id: "porFavor",
    category: "greeting",
    es: "Por favor",
    zh: "请 / 麻烦你",
    en: "Please",
    hint: "放在请求前后都自然。",
    sound: "por fah-VOR"
  },
  {
    id: "perdon",
    category: "greeting",
    es: "Perdón",
    zh: "抱歉 / 借过",
    en: "Sorry / Excuse me",
    hint: "在路上想借过，也可以用这个。",
    sound: "per-DON"
  },
  {
    id: "adios",
    category: "greeting",
    es: "Adiós",
    zh: "再见",
    en: "Goodbye",
    hint: "比较明确的告别，不是马上再见的语气。",
    sound: "ah-DYOS"
  },
  {
    id: "agua",
    category: "food",
    es: "Agua",
    zh: "水",
    en: "Water",
    hint: "在餐厅点水可以说 Quiero agua。",
    sound: "AH-gwah"
  },
  {
    id: "cafe",
    category: "food",
    es: "Café",
    zh: "咖啡",
    en: "Coffee",
    hint: "重音符号告诉你重读最后一拍。",
    sound: "kah-FEH"
  },
  {
    id: "pan",
    category: "food",
    es: "Pan",
    zh: "面包",
    en: "Bread",
    hint: "a 发“啊”，不要读成英文 pan。",
    sound: "pahn"
  },
  {
    id: "cuanto",
    category: "travel",
    es: "¿Cuánto cuesta?",
    zh: "多少钱？",
    en: "How much is it?",
    hint: "购物、打车、市场都能用。",
    sound: "KWAN-toh KWES-tah"
  },
  {
    id: "bano",
    category: "travel",
    es: "¿Dónde está el baño?",
    zh: "洗手间在哪里？",
    en: "Where is the bathroom?",
    hint: "ñ 像中文“尼亚”连起来的鼻音。",
    sound: "DON-deh es-TAH el BAH-nyoh"
  },
  {
    id: "ayuda",
    category: "travel",
    es: "Ayuda",
    zh: "帮助",
    en: "Help",
    hint: "需要帮助时可说 Necesito ayuda。",
    sound: "ah-YOO-dah"
  }
];

const quizItems = [
  { prompt: "“谢谢” 用西班牙语怎么说？", answer: "Gracias", choices: ["Gracias", "Adiós", "Agua", "Pan"], cardId: "gracias" },
  { prompt: "¿Cuánto cuesta? 的意思是？", answer: "多少钱？", choices: ["多少钱？", "早上好", "我需要帮助", "再见"], cardId: "cuanto" },
  { prompt: "“请 / 麻烦你” 对应哪一个？", answer: "Por favor", choices: ["Perdón", "Por favor", "Hola", "Café"], cardId: "porFavor" },
  { prompt: "Buenos días 通常什么时候用？", answer: "上午见面", choices: ["上午见面", "晚上睡前", "点咖啡", "问价格"], cardId: "buenosDias" },
  { prompt: "“洗手间在哪里？” 是哪一句？", answer: "¿Dónde está el baño?", choices: ["¿Dónde está el baño?", "¿Cuánto cuesta?", "Buenos días", "Necesito agua"], cardId: "bano" },
  { prompt: "西语 Pan 的中文意思是？", answer: "面包", choices: ["面包", "水", "咖啡", "帮助"], cardId: "pan" }
];

const state = {
  view: "today",
  filter: "all",
  search: "",
  known: new Set(JSON.parse(localStorage.getItem("knownCards") || "[]")),
  mistakes: JSON.parse(localStorage.getItem("mistakes") || "[]"),
  quizIndex: 0,
  quizScore: 0,
  answered: false
};

const lesson = lessons[0];
const byId = Object.fromEntries(cards.map((card) => [card.id, card]));

function save() {
  localStorage.setItem("knownCards", JSON.stringify([...state.known]));
  localStorage.setItem("mistakes", JSON.stringify(state.mistakes));
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "es-ES";
  utterance.rate = 0.78;
  window.speechSynthesis.speak(utterance);
}

function renderStats() {
  document.querySelector("#knownCount").textContent = state.known.size;
  document.querySelector("#streakCount").textContent = state.known.size > 0 ? "1" : "0";
}

function renderLesson() {
  document.querySelector("#lessonTitle").textContent = lesson.title;
  document.querySelector("#lessonIntro").textContent = lesson.intro;
  document.querySelector("#coachTip").textContent = lesson.coachTip;
  document.querySelector("#pronunciationTip").textContent = lesson.pronunciationTip;

  const rows = lesson.phraseIds.map((id) => {
    const card = byId[id];
    return `
      <div class="phrase-row">
        <div>
          <div class="spanish">${card.es}</div>
          <div class="translation">${card.zh} · ${card.en}</div>
        </div>
        <div class="translation">发音：${card.sound}</div>
        <button class="speak-button" type="button" data-speak="${card.es}" aria-label="播放 ${card.es}" title="播放">▶</button>
      </div>
    `;
  });

  document.querySelector("#phraseList").innerHTML = rows.join("");
}

function renderCards() {
  const query = state.search.trim().toLowerCase();
  const filtered = cards.filter((card) => {
    const categoryMatch = state.filter === "all" || card.category === state.filter;
    const text = `${card.es} ${card.zh} ${card.en}`.toLowerCase();
    return categoryMatch && text.includes(query);
  });

  document.querySelector("#cardGrid").innerHTML = filtered.map((card) => {
    const isKnown = state.known.has(card.id);
    return `
      <article class="word-card">
        <small>${labelForCategory(card.category)}</small>
        <strong>${card.es}</strong>
        <p>${card.zh} · ${card.en}</p>
        <p>${card.hint}</p>
        <p>发音：${card.sound}</p>
        <div class="card-actions">
          <button class="mini-button" type="button" data-speak="${card.es}" aria-label="播放 ${card.es}" title="播放">▶</button>
          <button class="mini-button ${isKnown ? "known" : ""}" type="button" data-known="${card.id}" aria-label="标记掌握" title="标记掌握">✓</button>
        </div>
      </article>
    `;
  }).join("") || `<div class="empty-state">没有找到匹配的词卡</div>`;
}

function labelForCategory(category) {
  return {
    greeting: "问候",
    travel: "旅行",
    food: "饮食"
  }[category] || "词汇";
}

function switchView(view) {
  state.view = view;
  document.querySelectorAll(".view").forEach((node) => node.classList.remove("active"));
  document.querySelector(`#${view}View`).classList.add("active");
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view);
  });
  document.querySelector("#viewTitle").textContent = {
    today: "今日学习",
    cards: "词汇卡片",
    quiz: "小测验",
    review: "错题复习"
  }[view];
  if (view === "quiz") renderQuiz();
  if (view === "review") renderReview();
}

function renderQuiz() {
  const item = quizItems[state.quizIndex];
  document.querySelector("#quizStep").textContent = `${state.quizIndex + 1} / ${quizItems.length}`;
  document.querySelector("#quizScore").textContent = `${state.quizScore} 分`;
  document.querySelector("#quizQuestion").textContent = item.prompt;
  document.querySelector("#quizFeedback").textContent = "";
  document.querySelector("#nextQuestionBtn").disabled = true;
  state.answered = false;

  document.querySelector("#quizOptions").innerHTML = item.choices.map((choice) => `
    <button class="option-button" type="button" data-choice="${choice}">${choice}</button>
  `).join("");
}

function answerQuiz(choice, button) {
  if (state.answered) return;
  state.answered = true;
  const item = quizItems[state.quizIndex];
  const correct = choice === item.answer;

  if (correct) {
    state.quizScore += 10;
    state.known.add(item.cardId);
    document.querySelector("#quizFeedback").textContent = "答对了。这个表达可以进入你的主动词库。";
  } else {
    addMistake(item);
    document.querySelector("#quizFeedback").textContent = `还差一点。正确答案是：${item.answer}`;
  }

  document.querySelectorAll(".option-button").forEach((option) => {
    const isAnswer = option.dataset.choice === item.answer;
    option.classList.toggle("correct", isAnswer);
    option.classList.toggle("wrong", option === button && !correct);
  });

  document.querySelector("#quizScore").textContent = `${state.quizScore} 分`;
  document.querySelector("#nextQuestionBtn").disabled = false;
  save();
  renderStats();
}

function addMistake(item) {
  const card = byId[item.cardId];
  state.mistakes = [
    { cardId: card.id, prompt: item.prompt, answer: item.answer, time: Date.now() },
    ...state.mistakes.filter((mistake) => mistake.cardId !== card.id)
  ].slice(0, 12);
}

function nextQuestion() {
  if (state.quizIndex === quizItems.length - 1) {
    state.quizIndex = 0;
    state.quizScore = 0;
    switchView("review");
    return;
  }
  state.quizIndex += 1;
  renderQuiz();
}

function renderReview() {
  const list = document.querySelector("#reviewList");
  if (!state.mistakes.length) {
    list.innerHTML = `<div class="empty-state">现在没有错题。完成小测后，答错的题会自动出现在这里。</div>`;
    return;
  }

  list.innerHTML = state.mistakes.map((mistake) => {
    const card = byId[mistake.cardId];
    return `
      <article class="phrase-row">
        <div>
          <div class="spanish">${card.es}</div>
          <div class="translation">${card.zh} · ${card.en}</div>
        </div>
        <div class="translation">${card.hint}</div>
        <button class="speak-button" type="button" data-speak="${card.es}" aria-label="播放 ${card.es}" title="播放">▶</button>
      </article>
    `;
  }).join("");
}

document.addEventListener("click", (event) => {
  const navButton = event.target.closest(".nav-button");
  if (navButton) switchView(navButton.dataset.view);

  const speakButton = event.target.closest("[data-speak]");
  if (speakButton) speak(speakButton.dataset.speak);

  const knownButton = event.target.closest("[data-known]");
  if (knownButton) {
    const id = knownButton.dataset.known;
    state.known.has(id) ? state.known.delete(id) : state.known.add(id);
    save();
    renderStats();
    renderCards();
  }

  const segment = event.target.closest(".segment");
  if (segment) {
    state.filter = segment.dataset.filter;
    document.querySelectorAll(".segment").forEach((node) => node.classList.toggle("active", node === segment));
    renderCards();
  }

  const option = event.target.closest(".option-button");
  if (option) answerQuiz(option.dataset.choice, option);
});

document.querySelector("#cardSearch").addEventListener("input", (event) => {
  state.search = event.target.value;
  renderCards();
});

document.querySelector("#startQuizBtn").addEventListener("click", () => switchView("quiz"));
document.querySelector("#nextQuestionBtn").addEventListener("click", nextQuestion);
document.querySelector("#clearMistakesBtn").addEventListener("click", () => {
  state.mistakes = [];
  save();
  renderReview();
});

document.querySelector("#resetBtn").addEventListener("click", () => {
  state.known.clear();
  state.mistakes = [];
  state.quizIndex = 0;
  state.quizScore = 0;
  save();
  renderStats();
  renderCards();
  renderReview();
});

renderLesson();
renderCards();
renderStats();
