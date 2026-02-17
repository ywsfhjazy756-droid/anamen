// ==================== PACKAGES DATA ====================
const PACKAGES = {
    football: {
        name: "كورة ⚽",
        words: [
            "محمد صلاح", "ميسي", "كريستيانو", "مبابي", "نيمار",
            "زيدان", "رونالدينيو", "بيكهام", "مارادونا", "بيليه",
            "هالاند", "دي بروين", "مودريتش", "بنزيما", "ليفاندوفسكي",
            "أبو تريكة", "حسام حسن", "الحضري", "تريزيجيه", "محمد النني",
            "فان دايك", "أليسون", "كورتوا", "جريزمان", "سواريز",
            "إنييستا", "تشافي", "بويول", "راموس", "كارفخال"
        ]
    },
    traits: {
        name: "صفات غريبة 🤪",
        words: [
            "اللي بينام في أي مكان", "اللي بياكل كتير", "اللي بيتكلم وهو نايم",
            "اللي بيضحك على أي حاجة", "اللي دايماً متأخر", "اللي بينسى كل حاجة",
            "اللي بيحب الدراما", "اللي بيصور أكله", "اللي بيغير رأيه كل ثانية",
            "اللي بيتفرج على تيك توك طول الليل", "اللي بيحب البرد",
            "اللي بيخاف من الحشرات", "اللي بيحب يطبخ", "اللي بينام بدري",
            "اللي بيكره الزحمة", "اللي بيحب القطط", "اللي مش بيرد على التليفون",
            "اللي بيشخر وهو نايم", "اللي بيحب الحلويات", "اللي بيمشي ببطء",
            "اللي بياخد سيلفي كتير", "اللي بيتنرفز بسرعة", "اللي ضحكته عالية",
            "اللي بيحب يسهر", "اللي بيخاف من الأماكن العالية",
            "اللي بيحكي نفس القصة كل مرة", "اللي بيقول بكرة وما بيعملش حاجة",
            "اللي بيلبس شيك دايماً", "اللي بيحب يتكلم عن نفسه",
            "اللي مش بيعرف يطبخ"
        ]
    },
    animals: {
        name: "حيوانات 🦁",
        words: [
            "أسد", "فيل", "قرد", "زرافة", "باندا",
            "دلفين", "نسر", "فهد", "كنغر", "بطريق",
            "ثعبان", "قرش", "غزال", "ديناصور", "حصان",
            "قط", "كلب", "أرنب", "سلحفاة", "حرباء",
            "تمساح", "خفاش", "صقر", "طاووس", "بومة",
            "حمار وحشي", "وحيد القرن", "ببغاء", "نمر", "ذئب"
        ]
    },
    anime: {
        name: "أنمي 🎌",
        words: [
            "ناروتو", "غوكو", "لوفي", "إيتاشي", "ساسكي",
            "كاكاشي", "زورو", "ليفاي", "سينجو", "كيلوا",
            "غون", "إيرين", "ميكاسا", "لايت ياجامي", "إل",
            "فيجيتا", "سانجي", "نامي", "هيناتا", "ساكورا",
            "جيرايا", "مينانتو", "مادارا", "بيكولو", "فريزر",
            "تانجيرو", "آستا", "جوجو", "سايتاما", "كينشين"
        ]
    },
    bloggers: {
        name: "بلوجرز 📱",
        words: [
            "أحمد الغندور", "عمر حسين", "نور ستارز", "أنس مروة",
            "شادي سرور", "أبو فلة", "بيودي باي", "مستر بيست",
            "مايا أحمد", "أسامة مروة", "الدحيح", "جو حطاب",
            "رقم مجهول", "عز التمساح", "ابن سوريا", "ياسمين صبري",
            "خالد النجار", "رنا الحريري", "محمود حسونة", "أمير شاهين",
            "ليلى مراد", "زاب ثروت", "سلمى بيوتي", "نهاد الجريري",
            "هبة ونور", "سارة بيوتي", "رزان ومريم", "عمر فاروق",
            "أحمد أبو زهرة", "معتز هشام"
        ]
    },
    food: {
        name: "أكلات 🍔",
        words: [
            "كشري", "فلافل", "شاورما", "بيتزا", "سوشي",
            "برجر", "كباب", "محشي", "ملوخية", "فتة",
            "حواوشي", "كنافة", "بسبوسة", "أم علي", "رز بلبن",
            "مكرونة بشاميل", "فول مدمس", "طعمية", "بط محمر", "فراخ مشوية",
            "لقمة القاضي", "جلاش", "كريب", "وافل", "آيس كريم",
            "شوربة لسان عصفور", "مسقعة", "بامية", "كفتة", "مندي"
        ]
    }
};

// ==================== GAME STATE ====================
let gameState = {
    partyName: "",
    partyDesc: "",
    players: [],
    rounds: 4,
    roundTime: 60,
    selectedPackages: [],
    currentRound: 0,
    currentCards: {},
    scores: {},
    handoverIndex: 0,
    turnIndex: 0,
    guessOrder: [],
    guessIndex: 0,
    timerInterval: null,
    timeLeft: 0,
    turnPairs: [],
    turnPairIndex: 0
};

// ==================== INITIALIZATION ====================
function init() {
    renderPackages();
    createFloatingParticles();
}

// ==================== FLOATING PARTICLES ====================
function createFloatingParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    const colors = ['#7c3aed', '#a855f7', '#fbbf24', '#ec4899', '#c084fc'];

    for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.animationDuration = (Math.random() * 12 + 8) + 's';
        particle.style.animationDelay = (Math.random() * 10) + 's';
        particle.style.boxShadow = `0 0 ${size * 2}px ${particle.style.backgroundColor}`;
        container.appendChild(particle);
    }
}

// ==================== SCREEN MANAGEMENT ====================
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const screen = document.getElementById(screenId);
    screen.classList.add('active');
    // Re-trigger animation
    screen.style.animation = 'none';
    screen.offsetHeight;
    screen.style.animation = '';
    // Scroll to top
    window.scrollTo(0, 0);
}

function showSetup() {
    showScreen('screen-setup');
}

function showHowToPlay() {
    showScreen('screen-howto');
}

// ==================== TOAST ====================
function showToast(msg) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

// ==================== PACKAGES ====================
function renderPackages() {
    const grid = document.getElementById('packages-grid');
    grid.innerHTML = '';
    Object.keys(PACKAGES).forEach(key => {
        const btn = document.createElement('button');
        btn.className = 'package-btn';
        btn.textContent = PACKAGES[key].name;
        btn.dataset.key = key;
        btn.onclick = () => togglePackage(key, btn);
        grid.appendChild(btn);
    });
}

function togglePackage(key, btn) {
    const idx = gameState.selectedPackages.indexOf(key);
    if (idx === -1) {
        gameState.selectedPackages.push(key);
        btn.classList.add('selected');
    } else {
        gameState.selectedPackages.splice(idx, 1);
        btn.classList.remove('selected');
    }
}

function randomPackages() {
    const keys = Object.keys(PACKAGES);
    const count = Math.floor(Math.random() * 3) + 1;
    gameState.selectedPackages = [];
    document.querySelectorAll('.package-btn').forEach(b => b.classList.remove('selected'));
    const shuffled = shuffle([...keys]);
    for (let i = 0; i < count && i < shuffled.length; i++) {
        gameState.selectedPackages.push(shuffled[i]);
        document.querySelector(`.package-btn[data-key="${shuffled[i]}"]`).classList.add('selected');
    }
}

// ==================== OPTIONS ====================
function selectOption(type, value, btn) {
    const parentId = type === 'rounds' ? 'rounds-options' : 'time-options';
    document.querySelectorAll(`#${parentId} .option-btn`).forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    if (type === 'rounds') gameState.rounds = value;
    else gameState.roundTime = value;
}

// ==================== PLAYERS ====================
function addPlayer() {
    const input = document.getElementById('newPlayerName');
    const name = input.value.trim();
    if (!name) { showToast('اكتب اسم اللاعب الأول!'); return; }
    if (gameState.players.length >= 10) { showToast('أقصى عدد 10 لاعبين!'); return; }
    if (gameState.players.includes(name)) { showToast('الاسم ده موجود قبل كده!'); return; }
    gameState.players.push(name);
    input.value = '';
    input.focus();
    renderPlayers();
}

function removePlayer(index) {
    gameState.players.splice(index, 1);
    renderPlayers();
}

function renderPlayers() {
    const list = document.getElementById('players-list');
    list.innerHTML = '';
    gameState.players.forEach((p, i) => {
        const tag = document.createElement('div');
        tag.className = 'player-tag';
        tag.innerHTML = `<span>${p}</span><span class="remove-player" onclick="removePlayer(${i})">✕</span>`;
        list.appendChild(tag);
    });
    document.getElementById('players-count').textContent = `عدد اللاعبين: ${gameState.players.length} (الحد الأدنى 2)`;
}

// ==================== START GAME ====================
function startGame() {
    gameState.partyName = document.getElementById('partyName').value.trim() || 'فورة';
    gameState.partyDesc = document.getElementById('partyDesc').value.trim();

    if (gameState.players.length < 2) {
        showToast('محتاج على الأقل لاعبين!');
        return;
    }
    if (gameState.selectedPackages.length === 0) {
        showToast('اختار باكدج واحد على الأقل!');
        return;
    }

    // Initialize scores
    gameState.scores = {};
    gameState.players.forEach(p => gameState.scores[p] = 0);
    gameState.currentRound = 0;

    startRound();
}

// ==================== ROUND ====================
function startRound() {
    gameState.currentRound++;

    // Assign cards
    const allWords = [];
    gameState.selectedPackages.forEach(key => {
        allWords.push(...PACKAGES[key].words);
    });
    const shuffledWords = shuffle([...allWords]);
    gameState.currentCards = {};
    gameState.players.forEach((p, i) => {
        gameState.currentCards[p] = shuffledWords[i % shuffledWords.length];
    });

    // Start handover phase
    gameState.handoverIndex = 0;
    showHandover();
}

function showHandover() {
    const player = gameState.players[gameState.handoverIndex];
    document.getElementById('handover-title').textContent = 'ادي الموبايل لـ';
    document.getElementById('handover-player').textContent = player;
    document.getElementById('handover-btn').textContent = `أنا ${player} 👋`;
    showScreen('screen-handover');
}

function confirmHandover() {
    const player = gameState.players[gameState.handoverIndex];
    // Show other players' cards
    const othersDiv = document.getElementById('others-cards');
    othersDiv.innerHTML = '';
    gameState.players.forEach(p => {
        if (p !== player) {
            const card = document.createElement('div');
            card.className = 'other-card';
            card.innerHTML = `<span class="other-card-name">${p}</span><span class="other-card-word">${gameState.currentCards[p]}</span>`;
            othersDiv.appendChild(card);
        }
    });
    showScreen('screen-cards');
}

function nextHandover() {
    gameState.handoverIndex++;
    if (gameState.handoverIndex < gameState.players.length) {
        showHandover();
    } else {
        startRoundPlay();
    }
}

// ==================== ROUND PLAY ====================
function startRoundPlay() {
    // Generate turn pairs
    gameState.turnPairs = [];
    const shuffledPlayers = shuffle([...gameState.players]);
    for (let i = 0; i < shuffledPlayers.length; i++) {
        for (let j = 0; j < shuffledPlayers.length; j++) {
            if (i !== j) {
                gameState.turnPairs.push({
                    asker: shuffledPlayers[i],
                    answerer: shuffledPlayers[j]
                });
            }
        }
    }
    shuffle(gameState.turnPairs);
    gameState.turnPairIndex = 0;

    // Set up timer
    gameState.timeLeft = gameState.roundTime;
    document.getElementById('round-badge').textContent = `الجولة ${gameState.currentRound} من ${gameState.rounds}`;
    updateTurnDisplay();
    showScreen('screen-round');
    startTimer();
}

function updateTurnDisplay() {
    if (gameState.turnPairIndex >= gameState.turnPairs.length) {
        gameState.turnPairIndex = 0;
        shuffle(gameState.turnPairs);
    }
    const pair = gameState.turnPairs[gameState.turnPairIndex];
    document.getElementById('turn-asker').textContent = pair.asker;
    document.getElementById('turn-answerer').textContent = pair.answerer;
}

function nextTurn() {
    gameState.turnPairIndex++;
    updateTurnDisplay();
}

function startTimer() {
    clearInterval(gameState.timerInterval);
    const timerText = document.getElementById('timer-text');
    const timerCircle = document.getElementById('timer-circle');
    const timerProgress = document.getElementById('timer-progress');
    const totalTime = gameState.roundTime;
    const circumference = 2 * Math.PI * 62; // r=62

    timerText.textContent = gameState.timeLeft;
    timerCircle.classList.remove('warning');
    if (timerProgress) {
        timerProgress.classList.remove('warning-stroke');
        timerProgress.style.strokeDasharray = circumference;
        timerProgress.style.strokeDashoffset = 0;
    }

    gameState.timerInterval = setInterval(() => {
        gameState.timeLeft--;
        timerText.textContent = gameState.timeLeft;

        // Update circular progress
        if (timerProgress) {
            const progress = (totalTime - gameState.timeLeft) / totalTime;
            timerProgress.style.strokeDashoffset = circumference * progress;
        }

        if (gameState.timeLeft <= 10) {
            timerCircle.classList.add('warning');
            if (timerProgress) {
                timerProgress.classList.add('warning-stroke');
            }
        }

        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timerInterval);
            startGuessing();
        }
    }, 1000);
}

// ==================== GUESSING ====================
function startGuessing() {
    gameState.guessOrder = shuffle([...gameState.players]);
    gameState.guessIndex = 0;
    showGuessHandover();
}

function showGuessHandover() {
    const player = gameState.guessOrder[gameState.guessIndex];
    document.getElementById('guess-player-name').textContent = player;
    const btn = document.getElementById('guess-handover-btn');
    btn.textContent = `أنا ${player} 👋`;
    showScreen('screen-guess-handover');
}

function showGuessOptions() {
    const player = gameState.guessOrder[gameState.guessIndex];
    const correctWord = gameState.currentCards[player];

    // Get all available words
    const allWords = [];
    gameState.selectedPackages.forEach(key => {
        allWords.push(...PACKAGES[key].words);
    });

    // Get 5 wrong options
    const wrongWords = shuffle(allWords.filter(w => w !== correctWord));
    const options = [correctWord];
    for (let i = 0; options.length < 6 && i < wrongWords.length; i++) {
        if (!options.includes(wrongWords[i])) {
            options.push(wrongWords[i]);
        }
    }
    while (options.length < 6) {
        options.push("???");
    }
    shuffle(options);

    document.getElementById('guess-label').textContent = `${player}، انت فاكر نفسك إيه؟`;
    const optionsDiv = document.getElementById('guess-options');
    optionsDiv.innerHTML = '';
    options.forEach(word => {
        const btn = document.createElement('button');
        btn.className = 'guess-option-btn';
        btn.textContent = word;
        btn.onclick = () => handleGuess(player, word, correctWord);
        optionsDiv.appendChild(btn);
    });

    showScreen('screen-guess');
}

function handleGuess(player, chosen, correct) {
    const isCorrect = chosen === correct;
    const content = document.getElementById('guess-result-content');

    if (isCorrect) {
        gameState.scores[player] += 2;
        content.innerHTML = `
            <div class="result-icon">🎉</div>
            <div class="result-text result-correct">صح يا معلم!</div>
            <div class="result-detail">${player} كان "${correct}"</div>
            <div class="result-points points-positive">+2 نقطة</div>
        `;
    } else {
        gameState.scores[player] -= 1;
        content.innerHTML = `
            <div class="result-icon">😅</div>
            <div class="result-text result-wrong">غلط يا صاحبي!</div>
            <div class="result-detail">انت كنت "${correct}" مش "${chosen}"</div>
            <div class="result-points points-negative">-1 نقطة</div>
        `;
    }

    showScreen('screen-guess-result');
}

function nextGuess() {
    gameState.guessIndex++;
    if (gameState.guessIndex < gameState.guessOrder.length) {
        showGuessHandover();
    } else {
        if (gameState.currentRound < gameState.rounds) {
            startRound();
        } else {
            showResults();
        }
    }
}

// ==================== RESULTS ====================
function showResults() {
    document.getElementById('party-name-result').textContent = gameState.partyName;

    const sorted = [...gameState.players].sort((a, b) => gameState.scores[b] - gameState.scores[a]);
    const winner = sorted[0];

    const winnerSection = document.getElementById('winner-section');
    winnerSection.innerHTML = `
        <div class="winner-label">الفائز 👑</div>
        <div class="winner-name">${winner}</div>
        <div class="winner-sub">كسب الفورة 🔥</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.4);margin-top:8px;position:relative;font-weight:600">${gameState.scores[winner]} نقطة</div>
    `;

    const scoreboard = document.getElementById('scoreboard');
    scoreboard.innerHTML = '';
    const rankEmojis = ['🥇', '🥈', '🥉'];
    sorted.forEach((p, i) => {
        const row = document.createElement('div');
        row.className = 'score-row' + (i === 0 ? ' first' : '');
        row.innerHTML = `
            <span class="score-rank">${rankEmojis[i] || (i + 1)}</span>
            <span class="score-name">${p}</span>
            <span class="score-points">${gameState.scores[p]} نقطة</span>
        `;
        scoreboard.appendChild(row);
    });

    showScreen('screen-results');
    launchConfetti();
}

function playAgain() {
    gameState.currentRound = 0;
    gameState.currentCards = {};
    gameState.scores = {};
    gameState.players.forEach(p => gameState.scores[p] = 0);
    startRound();
}

// ==================== UTILITIES ====================
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function launchConfetti() {
    const container = document.createElement('div');
    container.className = 'confetti-container';
    document.body.appendChild(container);

    const colors = ['#fbbf24', '#a855f7', '#ec4899', '#4ade80', '#60a5fa', '#f97316', '#ffd700'];
    for (let i = 0; i < 80; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + '%';
        const color = colors[Math.floor(Math.random() * colors.length)];
        piece.style.backgroundColor = color;
        piece.style.boxShadow = `0 0 6px ${color}`;
        piece.style.width = (Math.random() * 10 + 5) + 'px';
        piece.style.height = (Math.random() * 10 + 5) + 'px';
        piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        piece.style.animationDuration = (Math.random() * 2 + 2) + 's';
        piece.style.animationDelay = (Math.random() * 2) + 's';
        container.appendChild(piece);
    }

    setTimeout(() => container.remove(), 5000);
}

// ==================== INIT ====================
init();
