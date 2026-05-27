const lessons = [
  {
    title: "打招呼和礼貌表达",
    intro: "先把最常用的开口句练顺。今天不背语法，只练见面、感谢、道歉和告别。",
    coachTip: "西班牙语礼貌表达很固定。把整句当成一个声音块，像唱短句一样跟读。",
    pronunciationTip: "西语元音很稳定：a 像“啊”，e 像“诶”，i 像“衣”，o 像“哦”，u 像“乌”。",
    phraseIds: ["hola", "buenosDias", "buenasTardes", "gracias", "porFavor", "perdon", "adios", "hastaLuego"]
  },
  {
    title: "介绍自己",
    intro: "今天学会说名字、来源和一点点个人信息，适合第一次见面。",
    coachTip: "Me llamo 不是逐字对应“我叫”，先整体记住。Soy 可以理解为英文 I am。",
    pronunciationTip: "ll 在很多地区接近英文 y 的声音，Me llamo 可先读成 meh YAH-moh。",
    phraseIds: ["meLlamo", "soyDe", "soyChina", "encantado", "muchoGusto", "comoTeLlamas", "habloChino", "unPoco"]
  },
  {
    title: "点咖啡和早餐",
    intro: "今天练咖啡店场景：想要、点单、数量和结账。",
    coachTip: "Quiero 比较直接，礼貌一点可以加 por favor。日常旅行够用了。",
    pronunciationTip: "qu 发 k，不发 kw。Quiero 读 KYEH-roh。",
    phraseIds: ["quiero", "cafe", "agua", "te", "pan", "leche", "azucar", "laCuenta"]
  },
  {
    title: "问路和地点",
    intro: "今天学会问哪里、左边、右边、远近，旅行时很有用。",
    coachTip: "Donde esta 是问地点的万能句型，后面换地点名词就能用。",
    pronunciationTip: "重音符号很重要：donde 和 donde esta 里的 esta 要重读最后一拍。",
    phraseIds: ["dondeEsta", "bano", "estacion", "hotel", "izquierda", "derecha", "cerca", "lejos"]
  },
  {
    title: "购物和价格",
    intro: "今天练买东西：多少钱、贵、便宜、这个那个。",
    coachTip: "Cuanto cuesta 是购物核心句。先会问价格，再学会听数字。",
    pronunciationTip: "cu 发 kw，Cuanto 读 KWAN-toh。",
    phraseIds: ["cuanto", "caro", "barato", "este", "ese", "quieroComprar", "tarjeta", "efectivo"]
  },
  {
    title: "数字 1 到 10",
    intro: "今天把基础数字练熟。后面价格、时间、地址都会用到。",
    coachTip: "数字要开口反复读，不要只看。你可以从 uno 到 diez 连读三遍。",
    pronunciationTip: "cinco 的 c 像 s，ocho 的 ch 像英文 ch。",
    phraseIds: ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez"]
  },
  {
    title: "时间和日期",
    intro: "今天学会问时间、今天、明天、昨天和常见时间词。",
    coachTip: "Que hora es 是问时间的固定句。今天先不展开复杂时间表达。",
    pronunciationTip: "hora 的 h 不发音，读 OR-ah。",
    phraseIds: ["queHora", "hoy", "manana", "ayer", "ahora", "temprano", "tarde", "semana"]
  },
  {
    title: "餐厅用语",
    intro: "今天练餐厅常见句：菜单、推荐、好吃、不要辣、买单。",
    coachTip: "菜单是 menu，和英文很像。想更礼貌就加 por favor。",
    pronunciationTip: "r 在词中轻弹一下舌尖，不用一开始就追求完美卷舌。",
    phraseIds: ["menu", "recomienda", "rico", "sinPicante", "pollo", "pescado", "verdura", "laCuenta"]
  },
  {
    title: "交通出行",
    intro: "今天学会打车、公交、地铁、机场和票。",
    coachTip: "Necesito 是“我需要”，后面可以接 taxi、boleto、ayuda。",
    pronunciationTip: "j 在 taxi 不出现，但 viaje 里的 j 是喉音，先轻轻发 h 音也可以。",
    phraseIds: ["taxi", "metro", "autobus", "aeropuerto", "boleto", "viaje", "necesito", "ayuda"]
  },
  {
    title: "酒店入住",
    intro: "今天练酒店场景：预订、房间、钥匙、护照、入住。",
    coachTip: "Tengo una reserva 是酒店前台高频句，整句背下来很值。",
    pronunciationTip: "v 在西语里常接近 b 的声音，reserva 不读成英文 v。",
    phraseIds: ["reserva", "habitacion", "pasaporte", "llave", "checkin", "noche", "wifi", "gracias"]
  },
  {
    title: "身体和求助",
    intro: "今天学会不舒服、需要医生、药店和帮助。",
    coachTip: "Me duele 后面接身体部位，表示“我某处疼”。旅行时很实用。",
    pronunciationTip: "duele 读 DWEH-leh，ue 是一个连起来的滑音。",
    phraseIds: ["meDuele", "cabeza", "estomago", "doctor", "farmacia", "medicina", "emergencia", "ayuda"]
  },
  {
    title: "天气和衣物",
    intro: "今天学会天气冷热、下雨、太阳和衣物。",
    coachTip: "Hace frio / hace calor 是天气表达，不要逐字翻译成“做冷”。",
    pronunciationTip: "frio 的 r 轻弹，calor 的重音在最后。",
    phraseIds: ["frio", "calor", "lluvia", "sol", "viento", "chaqueta", "zapatos", "ropa"]
  },
  {
    title: "喜好和感受",
    intro: "今天练表达喜欢、不喜欢、开心、累、饿。",
    coachTip: "Me gusta 是“我喜欢”的固定表达。先别纠结为什么不是 yo gusto。",
    pronunciationTip: "gusta 的 gu 发硬 g，像英文 go 的 g。",
    phraseIds: ["meGusta", "noMeGusta", "feliz", "cansado", "hambre", "sed", "bien", "mal"]
  },
  {
    title: "复习日：组合成句",
    intro: "今天把前面学过的高频表达串起来，练成真实旅行句子。",
    coachTip: "会 50 个词不如会 10 个能开口的句子。今天重点是流畅。",
    pronunciationTip: "句子里不要每个词都重读，重读你最想表达的信息。",
    phraseIds: ["hola", "meLlamo", "quiero", "cuanto", "dondeEsta", "necesito", "meGusta", "hastaLuego"]
  }
];

const cards = [
  ["hola", "greeting", "Hola", "你好", "Hello", "最常用的打招呼，不分正式或非正式。", "OH-lah"],
  ["buenosDias", "greeting", "Buenos días", "早上好", "Good morning", "上午见面用。días 的重音在 dí。", "BWEH-nos DEE-as"],
  ["buenasTardes", "greeting", "Buenas tardes", "下午好 / 傍晚好", "Good afternoon", "下午到傍晚都可以用。", "BWEH-nas TAR-des"],
  ["gracias", "greeting", "Gracias", "谢谢", "Thank you", "c 在 ia 前接近 s 的声音。", "GRAH-syas"],
  ["porFavor", "greeting", "Por favor", "请 / 麻烦你", "Please", "放在请求前后都自然。", "por fah-VOR"],
  ["perdon", "greeting", "Perdón", "抱歉 / 借过", "Sorry / Excuse me", "在路上想借过，也可以用这个。", "per-DON"],
  ["adios", "greeting", "Adiós", "再见", "Goodbye", "比较明确的告别。", "ah-DYOS"],
  ["hastaLuego", "greeting", "Hasta luego", "回头见", "See you later", "比 adios 更像“待会见”。", "AS-tah LWEH-goh"],
  ["meLlamo", "intro", "Me llamo...", "我叫……", "My name is...", "介绍名字的核心句。", "meh YAH-moh"],
  ["soyDe", "intro", "Soy de...", "我来自……", "I am from...", "de 后面接国家或城市。", "soy deh"],
  ["soyChina", "intro", "Soy china/chino", "我是中国人", "I am Chinese", "女性常说 china，男性常说 chino。", "soy CHEE-nah / CHEE-noh"],
  ["encantado", "intro", "Encantada/o", "很高兴认识你", "Nice to meet you", "女性常说 encantada，男性常说 encantado。", "en-kan-TAH-dah"],
  ["muchoGusto", "intro", "Mucho gusto", "很高兴认识你", "Nice to meet you", "更通用的见面寒暄。", "MOO-choh GOOS-toh"],
  ["comoTeLlamas", "intro", "¿Cómo te llamas?", "你叫什么名字？", "What is your name?", "非正式场合问名字。", "KOH-moh teh YAH-mas"],
  ["habloChino", "intro", "Hablo chino", "我说中文", "I speak Chinese", "hablo 来自 hablar，说语言用它。", "AH-bloh CHEE-noh"],
  ["unPoco", "intro", "Un poco", "一点点", "A little", "可以说 Hablo un poco de español。", "oon POH-koh"],
  ["quiero", "food", "Quiero...", "我想要……", "I want...", "点单时很常用。", "KYEH-roh"],
  ["cafe", "food", "Café", "咖啡", "Coffee", "重音符号表示最后一拍重读。", "kah-FEH"],
  ["agua", "food", "Agua", "水", "Water", "点水可以说 Quiero agua。", "AH-gwah"],
  ["te", "food", "Té", "茶", "Tea", "和英文 tea 很像。", "teh"],
  ["pan", "food", "Pan", "面包", "Bread", "a 发“啊”，不要读成英文 pan。", "pahn"],
  ["leche", "food", "Leche", "牛奶", "Milk", "ch 像英文 cheese 的 ch。", "LEH-cheh"],
  ["azucar", "food", "Azúcar", "糖", "Sugar", "重音在 a。", "AH-soo-kar"],
  ["laCuenta", "food", "La cuenta", "账单", "The bill", "餐厅结账核心词。", "lah KWEN-tah"],
  ["dondeEsta", "travel", "¿Dónde está...?", "……在哪里？", "Where is...?", "后面接地点名词。", "DON-deh es-TAH"],
  ["bano", "travel", "¿Dónde está el baño?", "洗手间在哪里？", "Where is the bathroom?", "ñ 像“尼亚”连起来的鼻音。", "DON-deh es-TAH el BAH-nyoh"],
  ["estacion", "travel", "Estación", "车站", "Station", "常见于火车站、地铁站。", "es-tah-SYON"],
  ["hotel", "travel", "Hotel", "酒店", "Hotel", "h 不发音，重音在最后。", "oh-TEL"],
  ["izquierda", "travel", "Izquierda", "左边", "Left", "问路时高频。", "ees-KYEHR-dah"],
  ["derecha", "travel", "Derecha", "右边", "Right", "ch 发清楚。", "deh-REH-chah"],
  ["cerca", "travel", "Cerca", "近", "Near", "可以说 Está cerca。", "SEHR-kah"],
  ["lejos", "travel", "Lejos", "远", "Far", "j 先轻轻发 h 音即可。", "LEH-hos"],
  ["cuanto", "shopping", "¿Cuánto cuesta?", "多少钱？", "How much is it?", "购物、打车、市场都能用。", "KWAN-toh KWES-tah"],
  ["caro", "shopping", "Caro", "贵", "Expensive", "看到价格太高可以说 Muy caro。", "KAH-roh"],
  ["barato", "shopping", "Barato", "便宜", "Cheap", "也可表达划算。", "bah-RAH-toh"],
  ["este", "shopping", "Este", "这个", "This one", "指近处的东西。", "ES-teh"],
  ["ese", "shopping", "Ese", "那个", "That one", "指稍远的东西。", "EH-seh"],
  ["quieroComprar", "shopping", "Quiero comprar", "我想买", "I want to buy", "comprar 是买。", "KYEH-roh kom-PRAR"],
  ["tarjeta", "shopping", "Tarjeta", "银行卡", "Card", "刷卡时会听到。", "tar-HEH-tah"],
  ["efectivo", "shopping", "Efectivo", "现金", "Cash", "付现金时用。", "eh-fek-TEE-voh"],
  ["uno", "number", "Uno", "一", "One", "数字 1。", "OO-noh"],
  ["dos", "number", "Dos", "二", "Two", "数字 2。", "dohs"],
  ["tres", "number", "Tres", "三", "Three", "数字 3。", "trehs"],
  ["cuatro", "number", "Cuatro", "四", "Four", "数字 4。", "KWAH-troh"],
  ["cinco", "number", "Cinco", "五", "Five", "数字 5。", "SEEN-koh"],
  ["seis", "number", "Seis", "六", "Six", "数字 6。", "seys"],
  ["siete", "number", "Siete", "七", "Seven", "数字 7。", "SYEH-teh"],
  ["ocho", "number", "Ocho", "八", "Eight", "数字 8。", "OH-choh"],
  ["nueve", "number", "Nueve", "九", "Nine", "数字 9。", "NWEH-veh"],
  ["diez", "number", "Diez", "十", "Ten", "数字 10。", "dyes"],
  ["queHora", "time", "¿Qué hora es?", "几点了？", "What time is it?", "问时间的固定句。", "keh OR-ah es"],
  ["hoy", "time", "Hoy", "今天", "Today", "h 不发音。", "oy"],
  ["manana", "time", "Mañana", "明天 / 早上", "Tomorrow / morning", "看语境判断意思。", "mah-NYAH-nah"],
  ["ayer", "time", "Ayer", "昨天", "Yesterday", "y 接近英文 y。", "ah-YEHR"],
  ["ahora", "time", "Ahora", "现在", "Now", "h 不发音。", "ah-OR-ah"],
  ["temprano", "time", "Temprano", "早", "Early", "表示时间早。", "tem-PRAH-noh"],
  ["tarde", "time", "Tarde", "晚 / 下午", "Late / afternoon", "语境决定。", "TAR-deh"],
  ["semana", "time", "Semana", "星期 / 周", "Week", "一周是 una semana。", "seh-MAH-nah"],
  ["menu", "food", "Menú", "菜单", "Menu", "餐厅先问菜单。", "meh-NOO"],
  ["recomienda", "food", "¿Qué recomienda?", "您推荐什么？", "What do you recommend?", "点餐很好用。", "keh reh-koh-MYEN-dah"],
  ["rico", "food", "Rico", "好吃", "Tasty", "也可表示丰富。", "REE-koh"],
  ["sinPicante", "food", "Sin picante", "不要辣", "No spicy", "sin 是“没有”。", "seen pee-KAN-teh"],
  ["pollo", "food", "Pollo", "鸡肉", "Chicken", "ll 接近 y 音。", "POH-yoh"],
  ["pescado", "food", "Pescado", "鱼肉", "Fish", "餐厅点鱼时常用。", "pes-KAH-doh"],
  ["verdura", "food", "Verdura", "蔬菜", "Vegetable", "复数常说 verduras。", "ver-DOO-rah"],
  ["taxi", "transport", "Taxi", "出租车", "Taxi", "读音接近 tak-si。", "TAK-see"],
  ["metro", "transport", "Metro", "地铁", "Subway", "很多城市通用。", "MEH-troh"],
  ["autobus", "transport", "Autobús", "公交车", "Bus", "重音在 bus。", "ow-toh-BOOS"],
  ["aeropuerto", "transport", "Aeropuerto", "机场", "Airport", "比较长，分拍读。", "ah-eh-roh-PWEHR-toh"],
  ["boleto", "transport", "Boleto", "票", "Ticket", "部分地区也说 billete。", "boh-LEH-toh"],
  ["viaje", "transport", "Viaje", "旅行", "Trip", "j 轻轻发 h 音。", "VYAH-heh"],
  ["necesito", "travel", "Necesito", "我需要", "I need", "后面接名词或帮助。", "neh-seh-SEE-toh"],
  ["ayuda", "travel", "Ayuda", "帮助", "Help", "Necesito ayuda 很实用。", "ah-YOO-dah"],
  ["reserva", "hotel", "Tengo una reserva", "我有预订", "I have a reservation", "酒店前台核心句。", "TEN-goh OO-nah reh-SEHR-vah"],
  ["habitacion", "hotel", "Habitación", "房间", "Room", "h 不发音。", "ah-bee-tah-SYON"],
  ["pasaporte", "hotel", "Pasaporte", "护照", "Passport", "办理入住会用到。", "pah-sah-POR-teh"],
  ["llave", "hotel", "Llave", "钥匙", "Key", "ll 接近 y 音。", "YAH-veh"],
  ["checkin", "hotel", "Entrada", "入住", "Check-in", "也可直接说 check-in。", "en-TRAH-dah"],
  ["noche", "hotel", "Noche", "晚上 / 夜", "Night", "una noche 是一晚。", "NOH-cheh"],
  ["wifi", "hotel", "Wifi", "无线网络", "Wi-Fi", "问密码很常见。", "WEE-fee"],
  ["meDuele", "health", "Me duele...", "我……疼", "...hurts", "后面接身体部位。", "meh DWEH-leh"],
  ["cabeza", "health", "Cabeza", "头", "Head", "Me duele la cabeza。", "kah-BEH-sah"],
  ["estomago", "health", "Estómago", "胃", "Stomach", "重音在 es。", "es-TOH-mah-goh"],
  ["doctor", "health", "Doctor", "医生", "Doctor", "需要医生可以说 Necesito un doctor。", "dok-TOR"],
  ["farmacia", "health", "Farmacia", "药店", "Pharmacy", "旅行时很有用。", "far-MAH-syah"],
  ["medicina", "health", "Medicina", "药", "Medicine", "也可表示医学。", "meh-dee-SEE-nah"],
  ["emergencia", "health", "Emergencia", "紧急情况", "Emergency", "紧急场景用。", "eh-mehr-HEN-syah"],
  ["frio", "weather", "Hace frío", "天气冷", "It is cold", "天气表达固定句。", "AH-seh FREE-oh"],
  ["calor", "weather", "Hace calor", "天气热", "It is hot", "calor 重音在最后。", "AH-seh kah-LOR"],
  ["lluvia", "weather", "Lluvia", "雨", "Rain", "ll 接近 y 音。", "YOO-vyah"],
  ["sol", "weather", "Sol", "太阳", "Sun", "很短但高频。", "sohl"],
  ["viento", "weather", "Viento", "风", "Wind", "ie 连读。", "VYEN-toh"],
  ["chaqueta", "weather", "Chaqueta", "外套", "Jacket", "ch 像英文 ch。", "chah-KEH-tah"],
  ["zapatos", "weather", "Zapatos", "鞋子", "Shoes", "旅行购物常用。", "sah-PAH-tohs"],
  ["ropa", "weather", "Ropa", "衣服", "Clothes", "集合名词。", "ROH-pah"],
  ["meGusta", "feeling", "Me gusta", "我喜欢", "I like", "固定表达，先整体记。", "meh GOOS-tah"],
  ["noMeGusta", "feeling", "No me gusta", "我不喜欢", "I do not like", "否定直接加 no。", "noh meh GOOS-tah"],
  ["feliz", "feeling", "Feliz", "开心", "Happy", "生日快乐是 Feliz cumpleaños。", "feh-LEES"],
  ["cansado", "feeling", "Cansada/o", "累", "Tired", "女性 cansada，男性 cansado。", "kan-SAH-dah"],
  ["hambre", "feeling", "Tengo hambre", "我饿了", "I am hungry", "西语说“我有饥饿”。", "TEN-goh AM-breh"],
  ["sed", "feeling", "Tengo sed", "我渴了", "I am thirsty", "sed 是口渴。", "TEN-goh sed"],
  ["bien", "feeling", "Bien", "好", "Good / well", "Como estas 的常见回答。", "byen"],
  ["mal", "feeling", "Mal", "不好", "Bad / poorly", "表达状态不好。", "mahl"]
].map(([id, category, es, zh, en, hint, sound]) => ({ id, category, es, zh, en, hint, sound }));

const state = {
  view: "today",
  filter: "all",
  search: "",
  known: new Set(JSON.parse(localStorage.getItem("knownCards") || "[]")),
  mistakes: JSON.parse(localStorage.getItem("mistakes") || "[]"),
  quizItems: [],
  quizIndex: 0,
  quizScore: 0,
  answered: false
};

const byId = Object.fromEntries(cards.map((card) => [card.id, card]));
const lesson = lessons[getDailyLessonIndex()];

function getDailyLessonIndex() {
  const start = new Date("2026-05-27T00:00:00");
  const today = new Date();
  const startDay = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate());
  const todayDay = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  const diff = Math.max(0, Math.floor((todayDay - startDay) / 86400000));
  return diff % lessons.length;
}

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
  document.querySelector(".eyebrow").textContent = `Nivel A1 · 第 ${getDailyLessonIndex() + 1} / ${lessons.length} 课`;
  document.querySelector("#lessonTitle").textContent = lesson.title;
  document.querySelector("#lessonIntro").textContent = lesson.intro;
  document.querySelector("#coachTip").textContent = lesson.coachTip;
  document.querySelector("#pronunciationTip").textContent = lesson.pronunciationTip;

  document.querySelector("#phraseList").innerHTML = lesson.phraseIds.map((id) => {
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
  }).join("");
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
    intro: "介绍",
    food: "饮食",
    travel: "旅行",
    shopping: "购物",
    number: "数字",
    time: "时间",
    transport: "交通",
    hotel: "酒店",
    health: "健康",
    weather: "天气",
    feeling: "感受"
  }[category] || "词汇";
}

function buildQuiz() {
  const todayCards = lesson.phraseIds.map((id) => byId[id]).filter(Boolean);
  const reviewCards = state.mistakes.map((mistake) => byId[mistake.cardId]).filter(Boolean).slice(0, 2);
  const pool = [...new Map([...reviewCards, ...todayCards].map((card) => [card.id, card])).values()].slice(0, 8);

  state.quizItems = pool.map((card, index) => {
    const askSpanish = index % 2 === 0;
    const answer = askSpanish ? card.zh : card.es;
    const choices = makeChoices(card, askSpanish);
    return {
      prompt: askSpanish ? `${card.es} 的中文意思是？` : `“${card.zh}” 用西班牙语怎么说？`,
      answer,
      choices,
      cardId: card.id
    };
  });
}

function makeChoices(card, askSpanish) {
  const key = askSpanish ? "zh" : "es";
  const others = cards
    .filter((item) => item.id !== card.id)
    .sort((a, b) => `${card.id}-${a.id}`.localeCompare(`${card.id}-${b.id}`))
    .slice(0, 3)
    .map((item) => item[key]);
  return shuffle([card[key], ...others]);
}

function shuffle(items) {
  return [...items].sort((a, b) => a.localeCompare(b, "zh-CN") * (new Date().getDate() % 2 ? 1 : -1));
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
  if (view === "quiz") {
    state.quizIndex = 0;
    state.quizScore = 0;
    buildQuiz();
    renderQuiz();
  }
  if (view === "review") renderReview();
}

function renderQuiz() {
  const item = state.quizItems[state.quizIndex];
  document.querySelector("#quizStep").textContent = `${state.quizIndex + 1} / ${state.quizItems.length}`;
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
  const item = state.quizItems[state.quizIndex];
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
  ].slice(0, 18);
}

function nextQuestion() {
  if (state.quizIndex === state.quizItems.length - 1) {
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
