document.addEventListener('DOMContentLoaded', () => {
  const titleScreen = document.getElementById('title-screen');
  const ageScreen = document.getElementById('age-screen');
  const categoryScreen = document.getElementById('category-screen');
  const gameScreen = document.getElementById('game-screen');
  const startButton = document.getElementById('start-button');
  const ageBackButton = document.getElementById('age-back-button');
  const categoryBackButton = document.getElementById('category-back-button');
  const ageButtons = document.querySelectorAll('.age-button');
  const categoryButtons = document.querySelectorAll('.category-button');
  const selectedAgeLabel = document.getElementById('selected-age-label');
  const categoryMessage = document.getElementById('category-message');
  const wordGrid = document.getElementById('word-grid');
  const wordList = document.getElementById('word-list');
  const gameSessionLabel = document.getElementById('game-session-label');
  const gameFeedback = document.getElementById('game-feedback');
  const victoryPanel = document.getElementById('victory-panel');
  const victorySummary = document.getElementById('victory-summary');
  const playAgainButton = document.getElementById('play-again-button');
  const menuButton = document.getElementById('menu-button');

  const DIRECTIONS = {
    horizontal: { row: 0, col: 1 },
    vertical: { row: 1, col: 0 },
    diagonalDownRight: { row: 1, col: 1 },
    diagonalDownLeft: { row: 1, col: -1 }
  };

  // Soft colours keep found words distinct while preserving dark, readable text.
  const FOUND_WORD_COLORS = [
    { background: '#F6C7C7', border: '#C77474' },
    { background: '#F8D7A8', border: '#C8893D' },
    { background: '#F7E59B', border: '#B69A2E' },
    { background: '#CDE8B6', border: '#72A64A' },
    { background: '#B9E3D7', border: '#4F9B88' },
    { background: '#B8DCEC', border: '#4F91B0' },
    { background: '#C9D0F5', border: '#6B78BE' },
    { background: '#D9C5EF', border: '#8C68B5' },
    { background: '#E8C2DA', border: '#AD6894' },
    { background: '#D8D3C4', border: '#8B826A' }
  ];

  // Each age group owns its board rules, making future levels easy to add.
  const AGE_CONFIGS = {
    '5–7 Tahun': {
      gridSize: 6,
      wordCount: 4,
      directions: ['horizontal', 'vertical'],
      reverse: false
    },
    '8–10 Tahun': {
      gridSize: 8,
      wordCount: 6,
      directions: ['horizontal', 'vertical', 'diagonalDownRight', 'diagonalDownLeft'],
      reverse: false
    },
    '11–12 Tahun': {
      gridSize: 10,
      wordCount: 8,
      directions: ['horizontal', 'vertical', 'diagonalDownRight', 'diagonalDownLeft'],
      reverse: true
    },
    '13–15 Tahun': {
      gridSize: 12,
      wordCount: 10,
      directions: ['horizontal', 'vertical', 'diagonalDownRight', 'diagonalDownLeft'],
      reverse: true
    }
  };

  // Word banks are separate by age and category so content can grow independently.
  const WORDS_BY_AGE_AND_CATEGORY = {
    '5–7 Tahun': {
      Haiwan: ['AYAM', 'IKAN', 'KUDA', 'ULAR', 'ITIK', 'RUSA', 'LEMBU', 'KUCING', 'ARNAB', 'GAJAH', 'MONYET', 'BUAYA', 'BURUNG', 'TAPIR', 'KERBAU', 'SEMUT', 'LEBAH', 'SIPUT', 'CACING', 'KATAK', 'TIKUS'],
      'Buah-buahan': ['EPAL', 'MANGGA', 'NANAS', 'BETIK', 'DUKU', 'LIMAU', 'KIWI', 'PISANG', 'CIKU', 'JAMBU', 'DURIAN', 'ANGGUR', 'KURMA', 'SALAK', 'SUKUN', 'CERMA', 'BACANG', 'MELON', 'LAICI', 'PIR'],
      Makanan: ['NASI', 'ROTI', 'MI', 'SUP', 'TELUR', 'KEK', 'BUBUR', 'SATE', 'LAKSA', 'AYAM', 'DONAT', 'BISKUT', 'LEMANG', 'KUIH', 'WAJIK', 'DODOL', 'KARI', 'CUCUR', 'SOSEJ', 'BURGER'],
      Sekolah: ['BUKU', 'PEN', 'MEJA', 'KERUSI', 'BEG', 'PINTU', 'KELAS', 'PAPAN', 'PENSEL', 'GURU', 'MURID', 'KAPUR', 'GAM', 'KERTAS', 'FAIL', 'KANTIN', 'TANDAS', 'DEWAN', 'PADANG', 'LOKAR', 'KRAYON'],
      Kenderaan: ['BAS', 'VAN', 'BOT', 'TEKSI', 'LORI', 'KERETA', 'FERI', 'JIP', 'TREM', 'RAKIT', 'SAMPAN', 'KAPAL', 'BECA', 'ROKET', 'SKUTER', 'KANU', 'MOTO', 'LRT', 'MRT', 'ETS'],
      Alam: ['AWAN', 'HUJAN', 'POKOK', 'SUNGAI', 'BATU', 'PASIR', 'BUKIT', 'LAUT', 'GUNUNG', 'HUTAN', 'PANTAI', 'PULAU', 'TANAH', 'BUNGA', 'RUMPUT', 'OMBAK', 'ANGIN', 'TASIK', 'PAYA', 'EMBUN', 'KABUS', 'RIBUT']
    },
    '8–10 Tahun': {
      Haiwan: ['HARIMAU', 'KUCING', 'ARNAB', 'GAJAH', 'MONYET', 'ZIRAFAH', 'BURUNG', 'KERBAU', 'BERUANG', 'HELANG', 'BUAYA', 'TAPIR', 'RUSA', 'LEMBU', 'KAMBING', 'PANDA', 'SINGA', 'ZEBRA', 'BADAK', 'LANDAK', 'PENYU', 'BELALANG'],
      'Buah-buahan': ['PISANG', 'MANGGA', 'TEMBIKAI', 'RAMBUTAN', 'DURIAN', 'CIKU', 'LIMAU', 'BETIK', 'JAMBU', 'NANAS', 'ANGGUR', 'KURMA', 'MANGGIS', 'CEMPEDAK', 'DUKU', 'EPAL', 'LAICI', 'SALAK', 'SUKUN', 'BACANG', 'CERMA', 'MELON'],
      Makanan: ['SANDWIC', 'LAKSA', 'MIGORENG', 'BISKUT', 'AYAM', 'SATE', 'DONAT', 'NASI', 'ROTI', 'MIHUN', 'RENDANG', 'KETUPAT', 'KARIPAP', 'LEMPENG', 'BUBUR', 'LEMANG', 'CUCUR', 'WAJIK', 'DODOL', 'SAMBAL', 'BURGER', 'SOSEJ', 'KARI'],
      Sekolah: ['PENSEL', 'PEMADAM', 'PEMBARIS', 'GUNTING', 'KELAS', 'PAPAN', 'SEKOLAH', 'BEG', 'BUKU', 'GURU', 'MURID', 'KANTIN', 'MAKMAL', 'DEWAN', 'PADANG', 'KERTAS', 'FAIL', 'KRAYON', 'KAPUR', 'KAMUS', 'LATIHAN', 'TUGAS', 'LOKAR'],
      Kenderaan: ['KERETA', 'BASIKAL', 'KERETAPI', 'TEKSI', 'LORI', 'BOT', 'VAN', 'AMBULANS', 'TRAKTOR', 'FERI', 'BAS', 'LRT', 'MRT', 'ETS', 'KOMUTER', 'MONOREL', 'SKUTER', 'SAMPAN', 'KAPAL', 'RAKIT', 'ROKET', 'JIP'],
      Alam: ['GUNUNG', 'SUNGAI', 'PANTAI', 'HUTAN', 'HUJAN', 'PELANGI', 'BUKIT', 'AWAN', 'LAUTAN', 'PULAU', 'PASIR', 'ANGIN', 'OMBAK', 'TASIK', 'TANAH', 'RUMPUT', 'KABUS', 'RIBUT', 'EMBUN', 'PAYA', 'BUNGA']
    },
    '11–12 Tahun': {
      Haiwan: ['HARIMAU', 'GAJAH', 'ARNAB', 'MONYET', 'KERBAU', 'BERUANG', 'HELANG', 'BUAYA', 'TAPIR', 'RUSA', 'ZIRAFAH', 'KUCING', 'ORANGUTAN', 'KAMBING', 'LEMBU', 'SINGA', 'ZEBRA', 'BADAK', 'LANDAK', 'PENYU', 'PANDA', 'BELALANG', 'LELABAH', 'KURAKURA'],
      'Buah-buahan': ['TEMBIKAI', 'RAMBUTAN', 'DURIAN', 'MANGGIS', 'CEMPEDAK', 'PISANG', 'MANGGA', 'BETIK', 'JAMBU', 'LIMAU', 'NANAS', 'CIKU', 'BELIMBING', 'ANGGUR', 'KURMA', 'LAICI', 'SALAK', 'SUKUN', 'BACANG', 'CERMA', 'MELON', 'EPAL', 'DUKU', 'BUAHNAGA'],
      Makanan: ['NASILEMAK', 'LAKSA', 'SATE', 'RENDANG', 'BISKUT', 'SANDWIC', 'MIHUN', 'LEMPENG', 'KETUPAT', 'KARIPAP', 'DONAT', 'BUBUR', 'MIGORENG', 'NASIGORENG', 'NASI', 'ROTI', 'AYAM', 'LEMANG', 'CUCUR', 'WAJIK', 'DODOL', 'SAMBAL', 'BURGER', 'SOSEJ', 'KARI', 'KUIH'],
      Sekolah: ['PEMBARIS', 'PEMADAM', 'GUNTING', 'SEKOLAH', 'PENSEL', 'KOMPUTER', 'KANTIN', 'GURU', 'KELAS', 'PAPAN', 'MAKMAL', 'MURID', 'DEWAN', 'PADANG', 'KERTAS', 'KRAYON', 'KAPUR', 'KAMUS', 'LATIHAN', 'TUGAS', 'LOKAR', 'GEOGRAFI', 'SEJARAH', 'SAINS', 'MATEMATIK', 'BAHASA', 'UJIAN', 'CIKGU'],
      Kenderaan: ['KERETAPI', 'MOTOSIKAL', 'BASIKAL', 'KERETA', 'AMBULANS', 'TRAKTOR', 'LORI', 'TEKSI', 'VAN', 'BOT', 'FERI', 'BAS', 'KOMUTER', 'MONOREL', 'SKUTER', 'SAMPAN', 'KAPAL', 'RAKIT', 'ROKET', 'JIP', 'TREM', 'LRT', 'MRT', 'ETS', 'BULDOZER', 'BOTLAJU'],
      Alam: ['GUNUNG', 'SUNGAI', 'PELANGI', 'HUTAN', 'PANTAI', 'LAUTAN', 'AIRTERJUN', 'BUKIT', 'AWAN', 'HUJAN', 'PASIR', 'PULAU', 'ANGIN', 'OMBAK', 'TASIK', 'TANAH', 'RUMPUT', 'KABUS', 'RIBUT', 'EMBUN', 'PAYA', 'BUNGA', 'LEMBAH', 'GAUNG', 'TELUK', 'DELTA']
    },
    '13–15 Tahun': {
      Haiwan: ['ORANGUTAN', 'HARIMAU', 'BERUANG', 'BUAYA', 'ZIRAFAH', 'KERBAU', 'HELANG', 'TAPIR', 'RUSA', 'KUCING', 'ARNAB', 'MONYET', 'GAJAH', 'KELAWAR', 'KAMBING', 'SINGA', 'ZEBRA', 'BADAK', 'LANDAK', 'PENYU', 'PANDA', 'BELALANG', 'LELABAH', 'KURAKURA', 'RAMARAMA', 'CENGKERIK', 'KALAJENGKING', 'MEMERANG', 'MUSANG'],
      'Buah-buahan': ['TEMBIKAI', 'RAMBUTAN', 'CEMPEDAK', 'MANGGIS', 'DURIAN', 'BELIMBING', 'MANGGA', 'PISANG', 'JAMBU', 'BETIK', 'LIMAU', 'NANAS', 'ANGGUR', 'KURMA', 'LAICI', 'SALAK', 'SUKUN', 'BACANG', 'CERMA', 'MELON', 'EPAL', 'DUKU', 'BUAHNAGA', 'DOKONG', 'LONGAN', 'PULASAN', 'KUINI'],
      Makanan: ['NASILEMAK', 'RENDANG', 'KETUPAT', 'KARIPAP', 'LAKSA', 'LEMPENG', 'MIGORENG', 'MIHUN', 'BISKUT', 'SATE', 'BUBUR', 'DONAT', 'NASIGORENG', 'ROTICANAI', 'MURTABAK', 'LONTONG', 'LEMANG', 'DODOL', 'WAJIK', 'CUCUR', 'SAMBAL', 'BURGER', 'SOSEJ', 'KARI', 'KUIH', 'AYAM', 'NASI', 'ROTI'],
      Sekolah: ['PERPUSTAKAAN', 'KOMPUTER', 'PEMBARIS', 'PEMADAM', 'GUNTING', 'SEKOLAH', 'KANTIN', 'PENSEL', 'BUKULATIHAN', 'MAKMAL', 'KELAS', 'PAPAN', 'MURID', 'GURU', 'DEWAN', 'PADANG', 'KERTAS', 'KRAYON', 'KAPUR', 'KAMUS', 'LATIHAN', 'TUGAS', 'LOKAR', 'GEOGRAFI', 'SEJARAH', 'SAINS', 'MATEMATIK', 'BAHASA', 'PEPERIKSAAN', 'TINGKATAN', 'AKADEMIK'],
      Kenderaan: ['MOTOSIKAL', 'KERETAPI', 'AMBULANS', 'BASIKAL', 'TRAKTOR', 'KERETA', 'FERI', 'TEKSI', 'LORI', 'BOT', 'VAN', 'BAS', 'KOMUTER', 'MONOREL', 'SKUTER', 'SAMPAN', 'KAPAL', 'RAKIT', 'ROKET', 'JIP', 'TREM', 'LRT', 'MRT', 'ETS', 'BULDOZER', 'BOTLAJU', 'KAPALTERBANG', 'HELIKOPTER', 'PERAHU'],
      Alam: ['AIRTERJUN', 'GUNUNG', 'SUNGAI', 'PELANGI', 'HUTAN', 'PANTAI', 'LAUTAN', 'BUKIT', 'PULAU', 'HUJAN', 'PASIR', 'AWAN', 'ANGIN', 'OMBAK', 'TASIK', 'TANAH', 'RUMPUT', 'KABUS', 'RIBUT', 'EMBUN', 'PAYA', 'BUNGA', 'LEMBAH', 'GAUNG', 'TELUK', 'DELTA', 'TANJUNG', 'DATARAN', 'GUA', 'CERUN', 'LURAH']
    }
  };

  // Grid tokens stay A-Z only; labels preserve natural Malay spelling for players.
  const WORD_LABELS = {
    AIRTERJUN: 'AIR TERJUN',
    BOTLAJU: 'BOT LAJU',
    BUAHNAGA: 'BUAH NAGA',
    BUKULATIHAN: 'BUKU LATIHAN',
    KAPALTERBANG: 'KAPAL TERBANG',
    KURAKURA: 'KURA-KURA',
    MIGORENG: 'MI GORENG',
    NASIGORENG: 'NASI GORENG',
    NASILEMAK: 'NASI LEMAK',
    RAMARAMA: 'RAMA-RAMA',
    ROTICANAI: 'ROTI CANAI'
  };

  let selectedAge = 'Belum dipilih';
  let selectedCategory = 'Belum dipilih';
  let currentTargetWords = [];
  let puzzle = null;
  let foundWords = new Set();
  let wordColors = new Map();
  let foundCellDetails = new Map();
  let isDragging = false;
  let activePointerId = null;
  let dragStartCell = null;
  let currentSelection = [];
  let feedbackTimerId = null;
  const previousPuzzleWordsByMode = new Map();

  function getTargetWords() {
    return currentTargetWords;
  }

  function getWordLabel(word) {
    return WORD_LABELS[word] || word;
  }

  function getAgeConfig() {
    return AGE_CONFIGS[selectedAge];
  }

  function shuffleWords(words) {
    const shuffledWords = [...words];

    for (let index = shuffledWords.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [shuffledWords[index], shuffledWords[randomIndex]] = [
        shuffledWords[randomIndex],
        shuffledWords[index]
      ];
    }

    return shuffledWords;
  }

  function getPuzzleModeKey(category) {
    return `${selectedAge}|${category}`;
  }

  function chooseTargetWords(category, config) {
    const categoryWords = WORDS_BY_AGE_AND_CATEGORY[selectedAge]?.[category] || [];
    const normalizedWords = categoryWords.map((word) => word.toUpperCase());
    const validWords = [...new Set(normalizedWords)].filter((word) => (
      word.length <= config.gridSize && /^[A-Z]+$/.test(word)
    ));
    const previousWords = previousPuzzleWordsByMode.get(getPuzzleModeKey(category));

    if (!previousWords) {
      return shuffleWords(validWords).slice(0, config.wordCount);
    }

    const previousWordSet = new Set(previousWords);
    const differentWords = validWords.filter((word) => !previousWordSet.has(word));
    const preferredDifferentCount = Math.min(
      Math.ceil(config.wordCount / 2),
      differentWords.length
    );
    let bestSelection = [];
    let bestDifferentCount = -1;

    // A short retry window keeps selection random without risking an endless loop.
    for (let attempt = 0; attempt < 12; attempt += 1) {
      const candidate = shuffleWords(validWords).slice(0, config.wordCount);
      const differentCount = candidate.filter((word) => !previousWordSet.has(word)).length;

      if (differentCount > bestDifferentCount) {
        bestSelection = candidate;
        bestDifferentCount = differentCount;
      }

      if (differentCount >= preferredDifferentCount) {
        return candidate;
      }
    }

    // Graceful fallback guarantees variety when enough alternatives are available.
    const requiredDifferentWords = shuffleWords(differentWords)
      .slice(0, preferredDifferentCount);
    const fallbackPool = shuffleWords(validWords.filter((word) => (
      !requiredDifferentWords.includes(word)
    )));
    const guaranteedSelection = shuffleWords([
      ...requiredDifferentWords,
      ...fallbackPool.slice(0, config.wordCount - requiredDifferentWords.length)
    ]);

    return guaranteedSelection.length === config.wordCount
      ? guaranteedSelection
      : bestSelection;
  }

  function showScreen(show) {
    const screens = [titleScreen, ageScreen, categoryScreen, gameScreen];

    screens.forEach((screen) => {
      const isActive = screen === show;
      screen.classList.toggle('active', isActive);
      screen.setAttribute('aria-hidden', String(!isActive));
    });
  }

  function showTitleScreen() {
    showScreen(titleScreen);
  }

  function showAgeScreen() {
    showScreen(ageScreen);
  }

  function showCategoryScreen() {
    selectedAgeLabel.textContent = `Umur: ${selectedAge}`;
    showScreen(categoryScreen);
  }

  function showCategoryMessage(message) {
    categoryMessage.textContent = message;
  }

  function getRandomLetter() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return letters[Math.floor(Math.random() * letters.length)];
  }

  function tryBuildBoard(targetWords, config) {
    const board = Array.from(
      { length: config.gridSize },
      () => Array(config.gridSize).fill('')
    );
    const cellsByWord = {};
    const reversedWords = new Set();
    const requiredReverseIndex = config.reverse
      ? Math.floor(Math.random() * targetWords.length)
      : -1;

    for (let i = 0; i < targetWords.length; i += 1) {
      let placed = false;
      let tries = 0;
      const shouldReverse = config.reverse && (
        i === requiredReverseIndex || Math.random() < 0.5
      );
      const targetWord = targetWords[i];
      const placedWord = shouldReverse
        ? targetWord.split('').reverse().join('')
        : targetWord;

      while (!placed && tries < 400) {
        tries += 1;

        const directionName = config.directions[
          Math.floor(Math.random() * config.directions.length)
        ];
        const direction = DIRECTIONS[directionName];
        const row = Math.floor(Math.random() * config.gridSize);
        const col = Math.floor(Math.random() * config.gridSize);
        const word = placedWord;

        const endRow = row + direction.row * (word.length - 1);
        const endCol = col + direction.col * (word.length - 1);

        if (
          endRow < 0 || endRow >= config.gridSize ||
          endCol < 0 || endCol >= config.gridSize
        ) {
          continue;
        }

        const cells = [];
        let canPlace = true;

        for (let letterIndex = 0; letterIndex < word.length; letterIndex += 1) {
          const nextRow = row + direction.row * letterIndex;
          const nextCol = col + direction.col * letterIndex;

          if (board[nextRow][nextCol] !== '' && board[nextRow][nextCol] !== word[letterIndex]) {
            canPlace = false;
            break;
          }

          cells.push({ row: nextRow, col: nextCol, letter: word[letterIndex] });
        }

        if (!canPlace) {
          continue;
        }

        cells.forEach((cell) => {
          board[cell.row][cell.col] = cell.letter;
        });

        cellsByWord[targetWord] = cells.map(({ row: cellRow, col: cellCol }) => ({
          row: cellRow,
          col: cellCol
        }));

        if (shouldReverse) {
          reversedWords.add(targetWord);
        }

        placed = true;
      }

      if (!placed) {
        return null;
      }
    }

    return { board, cellsByWord, reversedWords };
  }

  function buildBoard(targetWords, config) {
    let generatedPuzzle = null;

    // Restart with an empty grid if random placements block a later word.
    for (let boardAttempt = 0; boardAttempt < 100 && !generatedPuzzle; boardAttempt += 1) {
      generatedPuzzle = tryBuildBoard(targetWords, config);
    }

    if (!generatedPuzzle) {
      return null;
    }

    const { board } = generatedPuzzle;
    for (let row = 0; row < config.gridSize; row += 1) {
      for (let col = 0; col < config.gridSize; col += 1) {
        if (board[row][col] === '') {
          board[row][col] = getRandomLetter();
        }
      }
    }

    return generatedPuzzle;
  }

  function renderWordList() {
    wordList.innerHTML = '';

    getTargetWords().forEach((word) => {
      const item = document.createElement('li');
      const wordLabel = getWordLabel(word);
      item.className = 'word-item';
      item.textContent = wordLabel;

      if (foundWords.has(word)) {
        const color = wordColors.get(word);
        item.classList.add('completed');
        item.setAttribute('aria-label', `${wordLabel} ditemui`);
        if (color) {
          item.style.setProperty('--word-color', color.background);
          item.style.setProperty('--word-border', color.border);
        }
      }

      wordList.appendChild(item);
    });
  }

  function assignWordColors() {
    const availableColors = [...FOUND_WORD_COLORS];

    for (let index = availableColors.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [availableColors[index], availableColors[randomIndex]] = [
        availableColors[randomIndex],
        availableColors[index]
      ];
    }

    wordColors = new Map();
    getTargetWords().forEach((word, index) => {
      wordColors.set(word, availableColors[index]);
    });
  }

  function getFoundCellBackground(details) {
    if (details.length === 1) {
      return details[0].color.background;
    }

    const sectionSize = 100 / details.length;
    const sections = details.flatMap((detail, index) => {
      const start = (index * sectionSize).toFixed(2);
      const end = ((index + 1) * sectionSize).toFixed(2);
      return [
        `${detail.color.background} ${start}%`,
        `${detail.color.background} ${end}%`
      ];
    });

    return `linear-gradient(135deg, ${sections.join(', ')})`;
  }

  function applyFoundCellColor(cell, word, color) {
    const cellKey = `${cell.dataset.row},${cell.dataset.col}`;
    const details = foundCellDetails.get(cellKey) || [];

    if (!details.some((detail) => detail.word === word)) {
      details.push({ word, color });
      foundCellDetails.set(cellKey, details);
    }

    cell.classList.add('found');
    cell.style.setProperty('--found-background', getFoundCellBackground(details));
    cell.style.setProperty(
      '--found-border',
      details.length === 1 ? color.border : '#516274'
    );
    cell.setAttribute(
      'aria-label',
      `${cell.dataset.letter}, ditemui dalam ${details.map((detail) => detail.word).join(' dan ')}`
    );
  }

  function clearSelection() {
    document.querySelectorAll('.cell').forEach((cell) => {
      cell.classList.remove('selected');
    });
    currentSelection = [];
  }

  function clearFeedback() {
    window.clearTimeout(feedbackTimerId);
    gameFeedback.textContent = '';
    gameFeedback.className = 'game-feedback';
    wordGrid.classList.remove('wrong-selection');
  }

  function showFeedback(message, type) {
    clearFeedback();
    gameFeedback.textContent = message;
    gameFeedback.classList.add(type);

    if (type === 'retry') {
      // Restart the shake animation for each incorrect attempt.
      void wordGrid.offsetWidth;
      wordGrid.classList.add('wrong-selection');
    }

    feedbackTimerId = window.setTimeout(clearFeedback, 900);
  }

  function selectionsMatch(selectedCells, wordCells) {
    if (!wordCells || selectedCells.length !== wordCells.length) {
      return false;
    }

    const isSameOrder = selectedCells.every((cell, index) => (
      cell.row === wordCells[index].row && cell.col === wordCells[index].col
    ));
    const isReverseOrder = selectedCells.every((cell, index) => {
      const reverseCell = wordCells[wordCells.length - 1 - index];
      return cell.row === reverseCell.row && cell.col === reverseCell.col;
    });

    return isSameOrder || isReverseOrder;
  }

  function markWordAsFound(word) {
    if (foundWords.has(word)) {
      return false;
    }

    foundWords.add(word);

    const wordCells = puzzle.cellsByWord[word];
    const color = wordColors.get(word);
    if (wordCells) {
      wordCells.forEach(({ row, col }) => {
        const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
        if (cell && color) {
          applyFoundCellColor(cell, word, color);
        }
      });
    }

    renderWordList();

    victorySummary.textContent = `${foundWords.size}/${getTargetWords().length} kata ditemui`;

    if (foundWords.size === getTargetWords().length) {
      victoryPanel.classList.remove('hidden');
    }

    return true;
  }

  function finishSelection(event) {
    if (!isDragging) {
      return;
    }

    if (event && activePointerId !== null && event.pointerId !== activePointerId) {
      return;
    }

    const matchedWord = getTargetWords().find((word) => (
      selectionsMatch(currentSelection, puzzle.cellsByWord[word])
    ));

    clearSelection();

    if (matchedWord) {
      if (markWordAsFound(matchedWord)) {
        showFeedback('Betul!', 'success');
      } else {
        showFeedback('Kata ini sudah ditemui.', 'neutral');
      }
    } else {
      showFeedback('Cuba lagi', 'retry');
    }

    if (activePointerId !== null && wordGrid.hasPointerCapture(activePointerId)) {
      wordGrid.releasePointerCapture(activePointerId);
    }

    isDragging = false;
    activePointerId = null;
    dragStartCell = null;
  }

  function getLineBetweenCells(startCell, endCell) {
    const cells = [];
    const config = getAgeConfig();
    const rowDifference = endCell.row - startCell.row;
    const colDifference = endCell.col - startCell.col;
    const rowDistance = Math.abs(rowDifference);
    const colDistance = Math.abs(colDifference);
    const snappedEndCell = { ...endCell };

    let rowStep = Math.sign(rowDifference);
    let colStep = Math.sign(colDifference);
    let directionName = '';

    if (rowDistance === 0) {
      directionName = 'horizontal';
      rowStep = 0;
    } else if (colDistance === 0) {
      directionName = 'vertical';
      colStep = 0;
    } else if (rowDistance === colDistance) {
      directionName = colStep > 0 ? 'diagonalDownRight' : 'diagonalDownLeft';
    } else if (colDistance >= rowDistance * 2) {
      // A mostly horizontal drag snaps back onto its row.
      directionName = 'horizontal';
      rowStep = 0;
      snappedEndCell.row = startCell.row;
    } else if (rowDistance >= colDistance * 2) {
      // A mostly vertical drag snaps back onto its column.
      directionName = 'vertical';
      colStep = 0;
      snappedEndCell.col = startCell.col;
    }

    if (!config || !config.directions.includes(directionName)) {
      return cells;
    }

    const stepCount = Math.max(
      Math.abs(snappedEndCell.row - startCell.row),
      Math.abs(snappedEndCell.col - startCell.col)
    );

    for (let index = 0; index <= stepCount; index += 1) {
      const row = startCell.row + rowStep * index;
      const col = startCell.col + colStep * index;
      cells.push({ row, col, letter: puzzle.board[row][col] });
    }

    return cells;
  }

  function updateSelection(targetCell) {
    if (!dragStartCell) {
      return;
    }

    const startCell = dragStartCell;
    const cellsInLine = getLineBetweenCells(startCell, targetCell);

    if (cellsInLine.length === 0) {
      clearSelection();
      return;
    }

    document.querySelectorAll('.cell').forEach((cell) => {
      cell.classList.remove('selected');
    });

    currentSelection = cellsInLine;
    cellsInLine.forEach(({ row, col }) => {
      const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
      if (cell) {
        cell.classList.add('selected');
      }
    });
  }

  function setupBoard() {
    const config = getAgeConfig();
    if (!config) {
      return false;
    }

    currentTargetWords = chooseTargetWords(selectedCategory, config);
    const generatedPuzzle = buildBoard(currentTargetWords, config);

    if (!generatedPuzzle || currentTargetWords.length !== config.wordCount) {
      showCategoryMessage('Papan tidak dapat dibina. Cuba lagi.');
      showScreen(categoryScreen);
      return false;
    }

    const { board, cellsByWord, reversedWords } = generatedPuzzle;

    puzzle = {
      board,
      words: getTargetWords(),
      cellsByWord,
      reversedWords
    };
    previousPuzzleWordsByMode.set(
      getPuzzleModeKey(selectedCategory),
      [...currentTargetWords]
    );

    wordGrid.innerHTML = '';
    foundWords = new Set();
    foundCellDetails = new Map();
    assignWordColors();
    clearSelection();
    clearFeedback();
    isDragging = false;
    activePointerId = null;
    dragStartCell = null;
    victoryPanel.classList.add('hidden');
    victorySummary.textContent = `0/${getTargetWords().length} kata ditemui`;
    wordGrid.style.setProperty('--grid-size', String(config.gridSize));
    wordGrid.classList.toggle('word-grid--large', config.gridSize > 6);
    wordGrid.classList.toggle('word-grid--compact', config.gridSize > 8);
    wordGrid.classList.toggle('word-grid--dense', config.gridSize > 10);

    for (let row = 0; row < config.gridSize; row += 1) {
      for (let col = 0; col < config.gridSize; col += 1) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.row = String(row);
        cell.dataset.col = String(col);
        cell.dataset.letter = board[row][col];
        cell.textContent = board[row][col];
        wordGrid.appendChild(cell);
      }
    }

    renderWordList();

    wordGrid.querySelectorAll('.cell').forEach((cell) => {
      cell.addEventListener('pointerdown', (event) => {
        if (event.pointerType === 'mouse' && event.button !== 0) {
          return;
        }

        event.preventDefault();
        const row = Number(cell.dataset.row);
        const col = Number(cell.dataset.col);
        isDragging = true;
        activePointerId = event.pointerId;
        dragStartCell = { row, col };
        wordGrid.setPointerCapture(event.pointerId);
        clearSelection();
        updateSelection({ row, col });
      });
    });

    return true;
  }

  function startGame() {
    if (!getAgeConfig()) {
      showCategoryMessage('Akan datang');
      showScreen(categoryScreen);
      return;
    }

    gameSessionLabel.textContent = `Umur: ${selectedAge} | Kategori: ${selectedCategory}`;
    showCategoryMessage('');
    if (setupBoard()) {
      showScreen(gameScreen);
    }
  }

  if (startButton) {
    startButton.addEventListener('click', showAgeScreen);
  }

  if (ageBackButton) {
    ageBackButton.addEventListener('click', showTitleScreen);
  }

  if (categoryBackButton) {
    categoryBackButton.addEventListener('click', showAgeScreen);
  }

  if (menuButton) {
    menuButton.addEventListener('click', () => {
      showCategoryScreen();
    });
  }

  if (playAgainButton) {
    playAgainButton.addEventListener('click', () => {
      if (setupBoard()) {
        showScreen(gameScreen);
      }
    });
  }

  ageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      selectedAge = button.dataset.age;
      showCategoryMessage('');
      showCategoryScreen();
    });
  });

  categoryButtons.forEach((button) => {
    button.addEventListener('click', () => {
      selectedCategory = button.dataset.category;
      startGame();
    });
  });

  document.addEventListener('pointerup', (event) => {
    finishSelection(event);
  });

  document.addEventListener('pointermove', (event) => {
    if (!isDragging || !dragStartCell || event.pointerId !== activePointerId) {
      return;
    }

    event.preventDefault();
    const element = document.elementFromPoint(event.clientX, event.clientY);
    if (!element || !element.classList.contains('cell')) {
      return;
    }

    const row = Number(element.dataset.row);
    const col = Number(element.dataset.col);
    updateSelection({ row, col });
  });

  document.addEventListener('pointercancel', (event) => {
    if (activePointerId !== null && event.pointerId !== activePointerId) {
      return;
    }

    clearSelection();
    isDragging = false;
    activePointerId = null;
    dragStartCell = null;
  });
});
