document.addEventListener('DOMContentLoaded', () => {
  const titleScreen = document.getElementById('title-screen');
  const playerScreen = document.getElementById('player-screen');
  const profileScreen = document.getElementById('profile-screen');
  const ageScreen = document.getElementById('age-screen');
  const progressScreen = document.getElementById('progress-screen');
  const categoryScreen = document.getElementById('category-screen');
  const gameScreen = document.getElementById('game-screen');
  const startButton = document.getElementById('start-button');
  const profileList = document.getElementById('profile-list');
  const emptyProfileMessage = document.getElementById('empty-profile-message');
  const profileStorageMessage = document.getElementById('profile-storage-message');
  const addProfileButton = document.getElementById('add-profile-button');
  const guestButton = document.getElementById('guest-button');
  const playerBackButton = document.getElementById('player-back-button');
  const profileForm = document.getElementById('profile-form');
  const profileFormTitle = document.getElementById('profile-form-title');
  const nicknameInput = document.getElementById('nickname-input');
  const avatarOptions = document.getElementById('avatar-options');
  const profilePreviewAvatar = document.getElementById('profile-preview-avatar');
  const profilePreviewName = document.getElementById('profile-preview-name');
  const profileFormMessage = document.getElementById('profile-form-message');
  const saveProfileButton = document.getElementById('save-profile-button');
  const cancelProfileButton = document.getElementById('cancel-profile-button');
  const deleteConfirmation = document.getElementById('delete-confirmation');
  const deleteConfirmationText = document.getElementById('delete-confirmation-text');
  const confirmDeleteButton = document.getElementById('confirm-delete-button');
  const cancelDeleteButton = document.getElementById('cancel-delete-button');
  const activePlayerLabel = document.getElementById('active-player-label');
  const activeProgressSummary = document.getElementById('active-progress-summary');
  const progressButton = document.getElementById('progress-button');
  const progressBackButton = document.getElementById('progress-back-button');
  const progressAvatar = document.getElementById('progress-avatar');
  const progressPlayerName = document.getElementById('progress-player-name');
  const progressStorageStatus = document.getElementById('progress-storage-status');
  const progressTotalJejak = document.getElementById('progress-total-jejak');
  const progressRankName = document.getElementById('progress-rank-name');
  const progressLevel = document.getElementById('progress-level');
  const rankProgressTrack = document.querySelector('.rank-progress-track');
  const rankProgressFill = document.getElementById('rank-progress-fill');
  const rankProgressText = document.getElementById('rank-progress-text');
  const completedPuzzleCount = document.getElementById('completed-puzzle-count');
  const totalWordsFound = document.getElementById('total-words-found');
  const badgeList = document.getElementById('badge-list');
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
  const victoryProgress = document.getElementById('victory-progress');
  const victoryJejakEarned = document.getElementById('victory-jejak-earned');
  const victoryBonusList = document.getElementById('victory-bonus-list');
  const victoryTotalJejak = document.getElementById('victory-total-jejak');
  const victoryPromotion = document.getElementById('victory-promotion');
  const victoryBadges = document.getElementById('victory-badges');
  const playAgainButton = document.getElementById('play-again-button');
  const menuButton = document.getElementById('menu-button');
  const gameMenuButton = document.getElementById('game-menu-button');
  const exitConfirmation = document.getElementById('exit-confirmation');
  const continueGameButton = document.getElementById('continue-game-button');
  const exitGameButton = document.getElementById('exit-game-button');

  const PROFILE_STORAGE_KEY = 'mataHelangProfiles_v1';
  const PROFILE_DATA_VERSION = 1;
  const MAX_PROFILES = 5;
  const PROGRESSION_STORAGE_KEY = 'mataHelangProgression_v1';
  const PROGRESSION_DATA_VERSION = 1;

  const RANKS = [
    { threshold: 0, level: 1, name: 'Pemerhati Baru' },
    { threshold: 80, level: 2, name: 'Pencari Kata' },
    { threshold: 200, level: 3, name: 'Penjejak Kata' },
    { threshold: 360, level: 4, name: 'Peninjau Cekap' },
    { threshold: 560, level: 5, name: 'Mata Tajam' },
    { threshold: 800, level: 6, name: 'Helang Unggul' },
    { threshold: 1100, level: 7, name: 'Legenda Helang' }
  ];

  const ACHIEVEMENTS = [
    { id: 'first-puzzle', name: 'Jejak Pertama', description: 'Selesaikan teka kata pertama.' },
    { id: 'category-explorer', name: 'Peneroka Kategori', description: 'Selesaikan keenam-enam kategori dalam satu tahap umur.' },
    { id: 'hundred-words', name: 'Pemburu 100 Kata', description: 'Temui 100 kata dalam teka kata yang diselesaikan.' },
    { id: 'four-ages', name: 'Penjelajah Empat Tahap', description: 'Selesaikan teka kata dalam setiap tahap umur.' }
  ];

  const ALL_CATEGORIES = ['Haiwan', 'Buah-buahan', 'Makanan', 'Sekolah', 'Kenderaan', 'Alam'];

  // These original inline SVG avatars need no external assets or third-party art.
  const AVATARS = [
    { id: 'helang-biru', name: 'Helang Biru', color: '#1D6FD6', accent: '#FFD166', symbol: 'wing' },
    { id: 'kompas-cyan', name: 'Kompas Sian', color: '#2BB8E8', accent: '#FFF2DC', symbol: 'compass' },
    { id: 'bintang-ambar', name: 'Bintang Ambar', color: '#EDA53B', accent: '#075ABB', symbol: 'star' },
    { id: 'awan-krim', name: 'Awan Krim', color: '#FFF2DC', accent: '#1D6FD6', symbol: 'cloud' },
    { id: 'daun-hijau', name: 'Daun Hijau', color: '#7BCF9C', accent: '#0D4EA3', symbol: 'leaf' },
    { id: 'bulan-ungu', name: 'Bulan Ungu', color: '#D9C5EF', accent: '#74411F', symbol: 'moon' }
  ];

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
  let profileData = createEmptyProfileData();
  let storageIsAvailable = true;
  let editingProfileId = null;
  let selectedAvatarId = AVATARS[0].id;
  let pendingDeleteProfileId = null;
  let isSavingProfile = false;
  let progressionData = createEmptyProgressionData();
  let progressionStorageIsAvailable = true;
  let guestProgress = createEmptyPlayerProgress();
  let currentPuzzleId = null;
  let currentPuzzleRewarded = false;

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

  function createEmptyProfileData() {
    return {
      version: PROFILE_DATA_VERSION,
      activeProfileId: null,
      profiles: []
    };
  }

  function createEmptyProgressionData() {
    return {
      version: PROGRESSION_DATA_VERSION,
      byProfileId: {}
    };
  }

  function createEmptyPlayerProgress() {
    return {
      totalJejak: 0,
      completedPuzzleCount: 0,
      totalWordsFound: 0,
      completedModes: {},
      firstModeBonusClaims: [],
      ageCompletionBonusClaims: [],
      unlockedAchievements: [],
      recentPuzzleIds: []
    };
  }

  function getValidModeKeys() {
    const keys = [];
    Object.keys(AGE_CONFIGS).forEach((age) => {
      ALL_CATEGORIES.forEach((category) => keys.push(`${age}|${category}`));
    });
    return new Set(keys);
  }

  function normalizePlayerProgress(value) {
    const emptyProgress = createEmptyPlayerProgress();
    if (!value || typeof value !== 'object') {
      return emptyProgress;
    }

    const validModeKeys = getValidModeKeys();
    const completedModes = {};
    if (value.completedModes && typeof value.completedModes === 'object') {
      Object.entries(value.completedModes).forEach(([key, count]) => {
        if (validModeKeys.has(key) && Number.isInteger(count) && count > 0) {
          completedModes[key] = count;
        }
      });
    }

    const uniqueStrings = (items, allowedValues = null, limit = 30) => {
      if (!Array.isArray(items)) {
        return [];
      }
      return [...new Set(items.filter((item) => (
        typeof item === 'string' && (!allowedValues || allowedValues.has(item))
      )))].slice(-limit);
    };

    return {
      totalJejak: Number.isInteger(value.totalJejak) && value.totalJejak >= 0
        ? value.totalJejak
        : 0,
      completedPuzzleCount: Number.isInteger(value.completedPuzzleCount) && value.completedPuzzleCount >= 0
        ? value.completedPuzzleCount
        : 0,
      totalWordsFound: Number.isInteger(value.totalWordsFound) && value.totalWordsFound >= 0
        ? value.totalWordsFound
        : 0,
      completedModes,
      firstModeBonusClaims: uniqueStrings(value.firstModeBonusClaims, validModeKeys, 24),
      ageCompletionBonusClaims: uniqueStrings(
        value.ageCompletionBonusClaims,
        new Set(Object.keys(AGE_CONFIGS)),
        4
      ),
      unlockedAchievements: uniqueStrings(
        value.unlockedAchievements,
        new Set(ACHIEVEMENTS.map((achievement) => achievement.id)),
        ACHIEVEMENTS.length
      ),
      recentPuzzleIds: uniqueStrings(value.recentPuzzleIds, null, 30)
    };
  }

  function loadProgression() {
    try {
      const storedValue = localStorage.getItem(PROGRESSION_STORAGE_KEY);
      if (!storedValue) {
        progressionData = createEmptyProgressionData();
        return;
      }

      const parsedData = JSON.parse(storedValue);
      if (
        !parsedData
        || parsedData.version !== PROGRESSION_DATA_VERSION
        || !parsedData.byProfileId
        || typeof parsedData.byProfileId !== 'object'
        || Array.isArray(parsedData.byProfileId)
      ) {
        throw new Error('Format kemajuan tidak sah.');
      }

      const validProfileIds = new Set(profileData.profiles.map((profile) => profile.id));
      const byProfileId = {};
      Object.entries(parsedData.byProfileId).forEach(([profileId, progress]) => {
        if (validProfileIds.has(profileId)) {
          byProfileId[profileId] = normalizePlayerProgress(progress);
        }
      });

      progressionData = {
        version: PROGRESSION_DATA_VERSION,
        byProfileId
      };
    } catch (error) {
      progressionData = createEmptyProgressionData();
      const isStorageError = error?.name === 'SecurityError'
        || error?.name === 'QuotaExceededError';
      progressionStorageIsAvailable = !isStorageError;
      profileStorageMessage.textContent = isStorageError
        ? 'Kemajuan tidak dapat disimpan. Permainan masih boleh diteruskan.'
        : 'Data Jejak Helang rosak dan telah dimulakan semula dengan selamat.';
    }
  }

  function saveProgression() {
    if (!progressionStorageIsAvailable) {
      return false;
    }

    try {
      localStorage.setItem(PROGRESSION_STORAGE_KEY, JSON.stringify(progressionData));
      return true;
    } catch (error) {
      progressionStorageIsAvailable = false;
      profileStorageMessage.textContent = 'Kemajuan tidak dapat disimpan. Permainan masih boleh diteruskan.';
      return false;
    }
  }

  function getProgressForProfile(profileId) {
    if (!profileId) {
      return guestProgress;
    }

    if (!progressionData.byProfileId[profileId]) {
      progressionData.byProfileId[profileId] = createEmptyPlayerProgress();
    }
    return progressionData.byProfileId[profileId];
  }

  function getActiveProgress() {
    return getProgressForProfile(profileData.activeProfileId);
  }

  function getRankForJejak(totalJejak) {
    let currentRank = RANKS[0];
    RANKS.forEach((rank) => {
      if (totalJejak >= rank.threshold) {
        currentRank = rank;
      }
    });
    return currentRank;
  }

  function getNextRank(rank) {
    return RANKS.find((item) => item.level === rank.level + 1) || null;
  }

  function getCompletedAges(progress) {
    return Object.keys(AGE_CONFIGS).filter((age) => (
      ALL_CATEGORIES.some((category) => progress.completedModes[`${age}|${category}`] > 0)
    ));
  }

  function hasCompletedAllCategories(progress) {
    return Object.keys(AGE_CONFIGS).some((age) => (
      ALL_CATEGORIES.every((category) => progress.completedModes[`${age}|${category}`] > 0)
    ));
  }

  function unlockEligibleAchievements(progress) {
    const eligibleIds = [];
    if (progress.completedPuzzleCount >= 1) {
      eligibleIds.push('first-puzzle');
    }
    if (hasCompletedAllCategories(progress)) {
      eligibleIds.push('category-explorer');
    }
    if (progress.totalWordsFound >= 100) {
      eligibleIds.push('hundred-words');
    }
    if (getCompletedAges(progress).length === 4) {
      eligibleIds.push('four-ages');
    }

    const newlyUnlocked = eligibleIds.filter((achievementId) => (
      !progress.unlockedAchievements.includes(achievementId)
    ));
    progress.unlockedAchievements.push(...newlyUnlocked);
    return newlyUnlocked;
  }

  function generatePuzzleId() {
    if (window.crypto && typeof window.crypto.randomUUID === 'function') {
      return window.crypto.randomUUID();
    }
    return `puzzle-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }

  function awardPuzzleCompletion() {
    const progress = getActiveProgress();
    if (
      currentPuzzleRewarded
      || !currentPuzzleId
      || progress.recentPuzzleIds.includes(currentPuzzleId)
    ) {
      return null;
    }

    currentPuzzleRewarded = true;
    const previousRank = getRankForJejak(progress.totalJejak);
    const modeKey = `${selectedAge}|${selectedCategory}`;
    const modeWasCompleted = progress.completedModes[modeKey] > 0;
    const ageWasComplete = ALL_CATEGORIES.every((category) => (
      progress.completedModes[`${selectedAge}|${category}`] > 0
    ));
    let earnedJejak = 20;
    const bonuses = [{ label: 'Teka kata selesai', amount: 20 }];

    progress.completedPuzzleCount += 1;
    progress.totalWordsFound += getTargetWords().length;
    progress.completedModes[modeKey] = (progress.completedModes[modeKey] || 0) + 1;

    if (!modeWasCompleted && !progress.firstModeBonusClaims.includes(modeKey)) {
      progress.firstModeBonusClaims.push(modeKey);
      earnedJejak += 5;
      bonuses.push({ label: 'Kombinasi umur dan kategori baharu', amount: 5 });
    }

    const completedAge = ALL_CATEGORIES.every((category) => (
      progress.completedModes[`${selectedAge}|${category}`] > 0
    ));
    if (
      completedAge
      && !ageWasComplete
      && !progress.ageCompletionBonusClaims.includes(selectedAge)
    ) {
      progress.ageCompletionBonusClaims.push(selectedAge);
      earnedJejak += 20;
      bonuses.push({ label: `Semua kategori ${selectedAge}`, amount: 20 });
    }

    progress.totalJejak += earnedJejak;
    progress.recentPuzzleIds.push(currentPuzzleId);
    progress.recentPuzzleIds = progress.recentPuzzleIds.slice(-30);

    const newlyUnlockedIds = unlockEligibleAchievements(progress);
    const newRank = getRankForJejak(progress.totalJejak);
    if (profileData.activeProfileId) {
      saveProgression();
    }

    return {
      earnedJejak,
      bonuses,
      totalJejak: progress.totalJejak,
      previousRank,
      newRank,
      newlyUnlockedIds,
      isGuest: !profileData.activeProfileId
    };
  }

  function renderBadges(progress) {
    badgeList.innerHTML = '';
    ACHIEVEMENTS.forEach((achievement) => {
      const unlocked = progress.unlockedAchievements.includes(achievement.id);
      const item = document.createElement('article');
      item.className = `badge-card ${unlocked ? 'badge-card--unlocked' : 'badge-card--locked'}`;
      const icon = document.createElement('span');
      icon.className = 'badge-icon';
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = unlocked ? '★' : '◇';
      const copy = document.createElement('div');
      const name = document.createElement('strong');
      name.textContent = achievement.name;
      const description = document.createElement('span');
      description.textContent = unlocked ? achievement.description : 'Belum dibuka';
      copy.append(name, description);
      item.append(icon, copy);
      item.setAttribute('aria-label', `${achievement.name}, ${unlocked ? 'dibuka' : 'terkunci'}`);
      badgeList.appendChild(item);
    });
  }

  function renderProgressionScreen() {
    const activeProfile = profileData.profiles.find((profile) => (
      profile.id === profileData.activeProfileId
    ));
    const progress = getActiveProgress();
    const rank = getRankForJejak(progress.totalJejak);
    const nextRank = getNextRank(rank);

    setAvatarArt(progressAvatar, activeProfile?.avatarId || AVATARS[0].id);
    progressPlayerName.textContent = activeProfile?.nickname || 'Tetamu';
    progressStorageStatus.textContent = activeProfile
      ? (progressionStorageIsAvailable ? 'Kemajuan disimpan pada peranti ini' : 'Kemajuan sesi sahaja')
      : 'Kemajuan tetamu untuk sesi ini sahaja';
    progressTotalJejak.textContent = `${progress.totalJejak} Jejak`;
    progressRankName.textContent = rank.name;
    progressLevel.textContent = `Tahap Ketajaman ${rank.level}`;
    completedPuzzleCount.textContent = String(progress.completedPuzzleCount);
    totalWordsFound.textContent = String(progress.totalWordsFound);

    if (nextRank) {
      const range = nextRank.threshold - rank.threshold;
      const withinRank = progress.totalJejak - rank.threshold;
      const percentage = Math.min(100, Math.max(0, (withinRank / range) * 100));
      rankProgressFill.style.width = `${percentage}%`;
      rankProgressTrack.setAttribute('aria-valuemin', String(rank.threshold));
      rankProgressTrack.setAttribute('aria-valuemax', String(nextRank.threshold));
      rankProgressTrack.setAttribute('aria-valuenow', String(progress.totalJejak));
      rankProgressText.textContent = `${nextRank.threshold - progress.totalJejak} Jejak lagi ke Tahap ${nextRank.level}`;
    } else {
      rankProgressFill.style.width = '100%';
      rankProgressTrack.setAttribute('aria-valuemin', '1100');
      rankProgressTrack.setAttribute('aria-valuemax', '1100');
      rankProgressTrack.setAttribute('aria-valuenow', '1100');
      rankProgressText.textContent = 'Tahap tertinggi dicapai • Jejak terus dikumpul';
    }

    renderBadges(progress);
  }

  function showProgressScreen() {
    renderProgressionScreen();
    showScreen(progressScreen);
  }

  function renderVictoryProgress(reward) {
    victoryBonusList.innerHTML = '';
    victoryBadges.innerHTML = '';
    victoryPromotion.textContent = '';

    if (!reward) {
      return;
    }

    victoryJejakEarned.textContent = `+${reward.earnedJejak} Jejak`;
    reward.bonuses.forEach((bonus) => {
      const item = document.createElement('li');
      item.textContent = `${bonus.label}: +${bonus.amount}`;
      victoryBonusList.appendChild(item);
    });
    victoryTotalJejak.textContent = reward.isGuest
      ? `Jumlah sesi tetamu: ${reward.totalJejak} Jejak`
      : `Jumlah terkini: ${reward.totalJejak} Jejak`;

    if (reward.newRank.level > reward.previousRank.level) {
      victoryPromotion.textContent = `Naik pangkat! Tahap ${reward.newRank.level} • ${reward.newRank.name}`;
    }

    reward.newlyUnlockedIds.forEach((achievementId) => {
      const achievement = ACHIEVEMENTS.find((item) => item.id === achievementId);
      if (achievement) {
        const badge = document.createElement('p');
        badge.textContent = `Lencana baharu: ${achievement.name}`;
        victoryBadges.appendChild(badge);
      }
    });
  }

  function isKnownAvatar(avatarId) {
    return AVATARS.some((avatar) => avatar.id === avatarId);
  }

  function normalizeStoredProfile(profile) {
    if (!profile || typeof profile !== 'object') {
      return null;
    }

    const nickname = typeof profile.nickname === 'string'
      ? profile.nickname.trim()
      : '';

    if (
      typeof profile.id !== 'string'
      || !profile.id
      || !nickname
      || nickname.length > 16
      || !isKnownAvatar(profile.avatarId)
      || typeof profile.createdAt !== 'string'
    ) {
      return null;
    }

    return {
      id: profile.id,
      nickname,
      avatarId: profile.avatarId,
      createdAt: profile.createdAt
    };
  }

  function loadProfiles() {
    try {
      const storedValue = localStorage.getItem(PROFILE_STORAGE_KEY);
      if (!storedValue) {
        profileData = createEmptyProfileData();
        return;
      }

      const parsedData = JSON.parse(storedValue);
      if (
        !parsedData
        || parsedData.version !== PROFILE_DATA_VERSION
        || !Array.isArray(parsedData.profiles)
      ) {
        throw new Error('Format data profil tidak sah.');
      }

      const seenIds = new Set();
      const validProfiles = parsedData.profiles
        .map(normalizeStoredProfile)
        .filter((profile) => {
          if (!profile || seenIds.has(profile.id) || seenIds.size >= MAX_PROFILES) {
            return false;
          }

          seenIds.add(profile.id);
          return true;
        });

      const activeProfileId = validProfiles.some((profile) => (
        profile.id === parsedData.activeProfileId
      ))
        ? parsedData.activeProfileId
        : null;

      profileData = {
        version: PROFILE_DATA_VERSION,
        activeProfileId,
        profiles: validProfiles
      };
    } catch (error) {
      profileData = createEmptyProfileData();
      const isStorageError = error?.name === 'SecurityError'
        || error?.name === 'QuotaExceededError';
      storageIsAvailable = !isStorageError;
      profileStorageMessage.textContent = isStorageError
        ? 'Simpanan tempatan tidak tersedia. Profil hanya aktif untuk sesi ini.'
        : 'Data profil lama rosak. Profil baharu masih boleh dibuat.';
    }
  }

  function saveProfiles() {
    if (!storageIsAvailable) {
      return false;
    }

    try {
      localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profileData));
      return true;
    } catch (error) {
      storageIsAvailable = false;
      profileStorageMessage.textContent = 'Simpanan tempatan tidak tersedia. Profil hanya aktif untuk sesi ini.';
      return false;
    }
  }

  function generateProfileId() {
    if (window.crypto && typeof window.crypto.randomUUID === 'function') {
      return window.crypto.randomUUID();
    }

    return `player-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }

  function getAvatar(avatarId) {
    return AVATARS.find((avatar) => avatar.id === avatarId) || AVATARS[0];
  }

  function getAvatarSymbol(symbol, accent) {
    const symbols = {
      wing: `<path d="M31 49c13-20 30-24 42-17-12 3-20 10-24 20 9-7 19-9 29-5-13 18-29 24-47 18z" fill="${accent}"/>`,
      compass: `<path d="M50 22l8 20 20 8-20 8-8 20-8-20-20-8 20-8z" fill="${accent}"/><circle cx="50" cy="50" r="8" fill="#fff"/>`,
      star: `<path d="M50 20l9 19 21 3-15 15 4 21-19-10-19 10 4-21-15-15 21-3z" fill="${accent}"/>`,
      cloud: `<path d="M29 63h43a13 13 0 000-26 22 22 0 00-41-5 16 16 0 00-2 31z" fill="${accent}"/>`,
      leaf: `<path d="M75 25C48 25 28 38 27 65c17 4 36-3 48-40z" fill="${accent}"/><path d="M30 72c10-17 22-26 38-36" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/>`,
      moon: `<path d="M68 25a28 28 0 11-34 42 31 31 0 0034-42z" fill="${accent}"/>`
    };

    return symbols[symbol] || symbols.star;
  }

  function getAvatarSvg(avatarId) {
    const avatar = getAvatar(avatarId);
    return `
      <svg viewBox="0 0 100 100" focusable="false" aria-hidden="true">
        <circle cx="50" cy="50" r="46" fill="${avatar.color}" />
        <circle cx="50" cy="50" r="39" fill="none" stroke="rgba(255,255,255,0.72)" stroke-width="4" />
        ${getAvatarSymbol(avatar.symbol, avatar.accent)}
      </svg>
    `;
  }

  function setAvatarArt(element, avatarId) {
    element.innerHTML = getAvatarSvg(avatarId);
    element.dataset.avatarId = avatarId;
  }

  function updateActivePlayerLabel() {
    const activeProfile = profileData.profiles.find((profile) => (
      profile.id === profileData.activeProfileId
    ));
    activePlayerLabel.textContent = activeProfile
      ? `Pemain: ${activeProfile.nickname}`
      : 'Pemain: Tetamu';
    const progress = getActiveProgress();
    const rank = getRankForJejak(progress.totalJejak);
    activeProgressSummary.textContent = `${progress.totalJejak} Jejak • Tahap ${rank.level} • ${rank.name}`;
  }

  function closeDeleteConfirmation() {
    pendingDeleteProfileId = null;
    deleteConfirmation.hidden = true;
  }

  function renderProfileList() {
    profileList.innerHTML = '';
    emptyProfileMessage.hidden = profileData.profiles.length > 0;
    addProfileButton.disabled = profileData.profiles.length >= MAX_PROFILES;
    addProfileButton.textContent = addProfileButton.disabled
      ? 'HAD 5 PROFIL DICAPAI'
      : 'TAMBAH PROFIL';

    profileData.profiles.forEach((profile) => {
      const card = document.createElement('article');
      card.className = 'profile-card';
      if (profile.id === profileData.activeProfileId) {
        card.classList.add('profile-card--active');
      }

      const avatar = document.createElement('div');
      avatar.className = 'avatar';
      avatar.setAttribute('aria-hidden', 'true');
      setAvatarArt(avatar, profile.avatarId);

      const details = document.createElement('div');
      details.className = 'profile-card-details';
      const name = document.createElement('strong');
      name.textContent = profile.nickname;
      const status = document.createElement('span');
      const progress = getProgressForProfile(profile.id);
      const rank = getRankForJejak(progress.totalJejak);
      status.textContent = `${progress.totalJejak} Jejak • Tahap ${rank.level} • ${rank.name}`;
      details.append(name, status);

      const controls = document.createElement('div');
      controls.className = 'profile-card-controls';

      const playButton = document.createElement('button');
      playButton.className = 'profile-play-button';
      playButton.type = 'button';
      playButton.textContent = 'MAIN';
      playButton.setAttribute('aria-label', `Main sebagai ${profile.nickname}`);
      playButton.addEventListener('click', () => selectProfile(profile.id));

      const editButton = document.createElement('button');
      editButton.className = 'profile-icon-button';
      editButton.type = 'button';
      editButton.textContent = 'UBAH';
      editButton.setAttribute('aria-label', `Ubah profil ${profile.nickname}`);
      editButton.addEventListener('click', () => openProfileEditor(profile.id));

      const deleteButton = document.createElement('button');
      deleteButton.className = 'profile-icon-button profile-delete-button';
      deleteButton.type = 'button';
      deleteButton.textContent = 'PADAM';
      deleteButton.setAttribute('aria-label', `Padam profil ${profile.nickname}`);
      deleteButton.addEventListener('click', () => requestProfileDeletion(profile.id));

      controls.append(playButton, editButton, deleteButton);
      card.append(avatar, details, controls);
      profileList.appendChild(card);
    });
  }

  function renderAvatarOptions() {
    avatarOptions.innerHTML = '';

    AVATARS.forEach((avatar) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'avatar-option';
      button.dataset.avatarId = avatar.id;
      button.setAttribute('aria-label', `Pilih avatar ${avatar.name}`);
      button.setAttribute('aria-pressed', String(avatar.id === selectedAvatarId));
      button.classList.toggle('selected', avatar.id === selectedAvatarId);

      const art = document.createElement('span');
      art.className = 'avatar';
      art.setAttribute('aria-hidden', 'true');
      setAvatarArt(art, avatar.id);
      const label = document.createElement('span');
      label.textContent = avatar.name;
      button.append(art, label);
      button.addEventListener('click', () => {
        selectedAvatarId = avatar.id;
        renderAvatarOptions();
        updateProfilePreview();
      });
      avatarOptions.appendChild(button);
    });
  }

  function updateProfilePreview() {
    setAvatarArt(profilePreviewAvatar, selectedAvatarId);
    profilePreviewName.textContent = nicknameInput.value.trim() || 'Pemain Baharu';
  }

  function showPlayerScreen() {
    closeDeleteConfirmation();
    renderProfileList();
    showScreen(playerScreen);
  }

  function openProfileEditor(profileId = null) {
    if (!profileId && profileData.profiles.length >= MAX_PROFILES) {
      profileStorageMessage.textContent = 'Maksimum lima profil dibenarkan.';
      return;
    }

    const profile = profileData.profiles.find((item) => item.id === profileId);
    editingProfileId = profile ? profile.id : null;
    selectedAvatarId = profile ? profile.avatarId : AVATARS[0].id;
    nicknameInput.value = profile ? profile.nickname : '';
    profileFormTitle.textContent = profile ? 'UBAH PROFIL' : 'TAMBAH PROFIL';
    saveProfileButton.textContent = profile ? 'SIMPAN PERUBAHAN' : 'SIMPAN PROFIL';
    profileFormMessage.textContent = '';
    isSavingProfile = false;
    renderAvatarOptions();
    updateProfilePreview();
    showScreen(profileScreen);
    nicknameInput.focus();
  }

  function selectProfile(profileId) {
    if (!profileData.profiles.some((profile) => profile.id === profileId)) {
      return;
    }

    profileData.activeProfileId = profileId;
    saveProfiles();
    updateActivePlayerLabel();
    showAgeScreen();
  }

  function requestProfileDeletion(profileId) {
    const profile = profileData.profiles.find((item) => item.id === profileId);
    if (!profile) {
      return;
    }

    pendingDeleteProfileId = profile.id;
    deleteConfirmationText.textContent = `Profil “${profile.nickname}” dan semua kemajuan Jejak Helang akan dipadam. Tindakan ini tidak boleh dibatalkan.`;
    deleteConfirmation.hidden = false;
    confirmDeleteButton.focus();
  }

  function deletePendingProfile() {
    if (!pendingDeleteProfileId) {
      return;
    }

    const deletedProfileId = pendingDeleteProfileId;
    profileData.profiles = profileData.profiles.filter((profile) => (
      profile.id !== pendingDeleteProfileId
    ));
    if (profileData.activeProfileId === pendingDeleteProfileId) {
      profileData.activeProfileId = null;
    }
    delete progressionData.byProfileId[deletedProfileId];
    saveProfiles();
    saveProgression();
    updateActivePlayerLabel();
    closeDeleteConfirmation();
    renderProfileList();
    profileStorageMessage.textContent = 'Profil telah dipadam.';
  }

  function saveProfileFromForm(event) {
    event.preventDefault();
    if (isSavingProfile) {
      return;
    }

    const nickname = nicknameInput.value.trim();
    if (!nickname) {
      profileFormMessage.textContent = 'Masukkan nama panggilan.';
      nicknameInput.focus();
      return;
    }
    if (nickname.length > 16) {
      profileFormMessage.textContent = 'Nama panggilan mestilah 16 aksara atau kurang.';
      nicknameInput.focus();
      return;
    }

    const existingProfile = profileData.profiles.find((profile) => (
      profile.id === editingProfileId
    ));
    if (!existingProfile && profileData.profiles.length >= MAX_PROFILES) {
      profileFormMessage.textContent = 'Maksimum lima profil dibenarkan.';
      return;
    }

    isSavingProfile = true;
    if (existingProfile) {
      existingProfile.nickname = nickname;
      existingProfile.avatarId = selectedAvatarId;
    } else {
      profileData.profiles.push({
        id: generateProfileId(),
        nickname,
        avatarId: selectedAvatarId,
        createdAt: new Date().toISOString()
      });
    }

    const savedPermanently = saveProfiles();
    if (savedPermanently) {
      profileStorageMessage.textContent = existingProfile
        ? 'Perubahan profil telah disimpan.'
        : 'Profil baharu telah disimpan.';
    }
    saveProfileButton.disabled = true;
    // Keep the disabled Save button in place until a possible second tap ends.
    window.setTimeout(() => {
      document.body.classList.add('profile-input-locked');
      showPlayerScreen();
      saveProfileButton.disabled = false;
      window.setTimeout(() => {
        document.body.classList.remove('profile-input-locked');
      }, 1000);
    }, 300);
  }

  function showScreen(show) {
    const screens = [
      titleScreen,
      playerScreen,
      profileScreen,
      ageScreen,
      progressScreen,
      categoryScreen,
      gameScreen
    ];

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
    updateActivePlayerLabel();
    showScreen(ageScreen);
  }

  function showCategoryScreen() {
    selectedAgeLabel.textContent = `Umur: ${selectedAge}`;
    showScreen(categoryScreen);
  }

  function showCategoryMessage(message) {
    categoryMessage.textContent = message;
  }

  function closeExitConfirmation() {
    exitConfirmation.classList.add('hidden');
    gameMenuButton.focus();
  }

  function discardUnfinishedPuzzle() {
    // An abandoned board must never reach the completion reward path.
    currentPuzzleRewarded = true;
    currentPuzzleId = null;
    clearSelection();
    clearFeedback();
    isDragging = false;
    activePointerId = null;
    dragStartCell = null;
    exitConfirmation.classList.add('hidden');
    showCategoryScreen();
  }

  function requestGameplayExit() {
    if (foundWords.size === getTargetWords().length) {
      showCategoryScreen();
      return;
    }

    exitConfirmation.classList.remove('hidden');
    continueGameButton.focus();
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
      const reward = awardPuzzleCompletion();
      renderVictoryProgress(reward);
      victoryPanel.classList.remove('hidden');
      gameMenuButton.classList.add('hidden');
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
    victoryProgress.classList.remove('hidden');
    victoryJejakEarned.textContent = '';
    victoryBonusList.innerHTML = '';
    victoryTotalJejak.textContent = '';
    victoryPromotion.textContent = '';
    victoryBadges.innerHTML = '';
    exitConfirmation.classList.add('hidden');
    gameMenuButton.classList.remove('hidden');
    currentPuzzleId = generatePuzzleId();
    currentPuzzleRewarded = false;
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
    startButton.addEventListener('click', showPlayerScreen);
  }

  if (addProfileButton) {
    addProfileButton.addEventListener('click', () => openProfileEditor());
  }

  if (guestButton) {
    guestButton.addEventListener('click', () => {
      profileData.activeProfileId = null;
      saveProfiles();
      showAgeScreen();
    });
  }

  if (playerBackButton) {
    playerBackButton.addEventListener('click', showTitleScreen);
  }

  if (profileForm) {
    profileForm.addEventListener('submit', saveProfileFromForm);
  }

  if (nicknameInput) {
    nicknameInput.addEventListener('input', updateProfilePreview);
  }

  if (cancelProfileButton) {
    cancelProfileButton.addEventListener('click', showPlayerScreen);
  }

  if (cancelDeleteButton) {
    cancelDeleteButton.addEventListener('click', closeDeleteConfirmation);
  }

  if (confirmDeleteButton) {
    confirmDeleteButton.addEventListener('click', deletePendingProfile);
  }

  if (progressButton) {
    progressButton.addEventListener('click', showProgressScreen);
  }

  if (progressBackButton) {
    progressBackButton.addEventListener('click', showAgeScreen);
  }

  if (ageBackButton) {
    ageBackButton.addEventListener('click', showPlayerScreen);
  }

  if (categoryBackButton) {
    categoryBackButton.addEventListener('click', showAgeScreen);
  }

  if (menuButton) {
    menuButton.addEventListener('click', () => {
      showCategoryScreen();
    });
  }

  if (gameMenuButton) {
    gameMenuButton.addEventListener('click', requestGameplayExit);
  }

  if (continueGameButton) {
    continueGameButton.addEventListener('click', closeExitConfirmation);
  }

  if (exitGameButton) {
    exitGameButton.addEventListener('click', discardUnfinishedPuzzle);
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

  document.addEventListener('click', (event) => {
    if (document.body.classList.contains('profile-input-locked')) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }, true);

  loadProfiles();
  loadProgression();
  updateActivePlayerLabel();

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
