const STORAGE_KEY = "englishVocabBook";

const form = document.getElementById("lookupForm");
const queryInput = document.getElementById("queryInput");
const resultCard = document.getElementById("lookupResult");
const resultWord = document.getElementById("resultWord");
const resultPhonetic = document.getElementById("resultPhonetic");
const resultSource = document.getElementById("resultSource");
const speakBtn = document.getElementById("speakBtn");
const saveWordBtn = document.getElementById("saveWordBtn");
const statusMsg = document.getElementById("lookupStatus");
const vocabList = document.getElementById("vocabList");
const vocabSearch = document.getElementById("vocabSearch");

let currentResult = null;

function loadVocab() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (err) {
    return [];
  }
}

function saveVocab(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function speak(text) {
  if (!("speechSynthesis" in window) || !text) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

async function translateToEnglish(query) {
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(query)}&langpair=zh-CN|en`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("翻译服务暂时不可用");
  const data = await res.json();
  const translated = data?.responseData?.translatedText;
  if (!translated) throw new Error("没有找到翻译结果");
  return translated.trim();
}

async function fetchPhonetic(word) {
  const cleanWord = word.toLowerCase().match(/[a-z]+/)?.[0];
  if (!cleanWord) return "";
  try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${cleanWord}`);
    if (!res.ok) return "";
    const data = await res.json();
    return data?.[0]?.phonetic || data?.[0]?.phonetics?.find((p) => p.text)?.text || "";
  } catch (err) {
    return "";
  }
}

function setStatus(message, isError) {
  statusMsg.textContent = message;
  statusMsg.classList.toggle("error", Boolean(isError));
}

function showResult({ query, english, phonetic }) {
  currentResult = { query, english, phonetic };
  resultWord.textContent = english;
  resultPhonetic.textContent = phonetic ? phonetic : "";
  resultSource.textContent = `来自查询：“${query}”`;
  resultCard.classList.remove("hidden");
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const query = queryInput.value.trim();
  if (!query) return;

  setStatus("查询中…", false);
  resultCard.classList.add("hidden");

  try {
    const english = await translateToEnglish(query);
    const phonetic = await fetchPhonetic(english);
    showResult({ query, english, phonetic });
    setStatus("", false);
    speak(english);
  } catch (err) {
    setStatus(err.message || "查询失败，请检查网络后重试", true);
  }
});

speakBtn.addEventListener("click", () => {
  if (currentResult) speak(currentResult.english);
});

saveWordBtn.addEventListener("click", () => {
  if (!currentResult) return;
  const list = loadVocab();
  const exists = list.some(
    (item) => item.english.toLowerCase() === currentResult.english.toLowerCase()
  );
  if (!exists) {
    list.unshift({
      ...currentResult,
      addedAt: new Date().toISOString()
    });
    saveVocab(list);
    renderVocab();
  }
  setStatus("已收藏到生词本", false);
});

function renderVocab(filterText = "") {
  const list = loadVocab();
  const filtered = filterText
    ? list.filter(
        (item) =>
          item.english.toLowerCase().includes(filterText.toLowerCase()) ||
          item.query.includes(filterText)
      )
    : list;

  vocabList.innerHTML = "";

  if (filtered.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = list.length === 0 ? "生词本还是空的，去查一个物品试试。" : "没有匹配的生词。";
    vocabList.appendChild(empty);
    return;
  }

  filtered.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "vocab-card";

    const head = document.createElement("div");
    head.className = "vocab-card-head";
    const word = document.createElement("strong");
    word.textContent = item.english;
    head.appendChild(word);
    card.appendChild(head);

    if (item.phonetic) {
      const phonetic = document.createElement("p");
      phonetic.className = "phonetic-small";
      phonetic.textContent = item.phonetic;
      card.appendChild(phonetic);
    }

    const source = document.createElement("p");
    source.className = "source";
    source.textContent = `来自：${item.query}`;
    card.appendChild(source);

    const actions = document.createElement("div");
    actions.className = "vocab-card-actions";

    const speakBtnCard = document.createElement("button");
    speakBtnCard.className = "icon-button";
    speakBtnCard.type = "button";
    speakBtnCard.textContent = "🔊";
    speakBtnCard.addEventListener("click", () => speak(item.english));
    actions.appendChild(speakBtnCard);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "secondary-action";
    deleteBtn.type = "button";
    deleteBtn.textContent = "删除";
    deleteBtn.addEventListener("click", () => {
      const fullList = loadVocab();
      const realIndex = fullList.findIndex(
        (entry) => entry.english === item.english && entry.addedAt === item.addedAt
      );
      if (realIndex !== -1) {
        fullList.splice(realIndex, 1);
        saveVocab(fullList);
        renderVocab(vocabSearch.value.trim());
      }
    });
    actions.appendChild(deleteBtn);

    card.appendChild(actions);
    vocabList.appendChild(card);
  });
}

vocabSearch.addEventListener("input", () => {
  renderVocab(vocabSearch.value.trim());
});

renderVocab();
