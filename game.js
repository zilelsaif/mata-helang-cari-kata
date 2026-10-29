document.addEventListener('DOMContentLoaded', () => {
  const titleScreen = document.getElementById('title-screen');
  const playerScreen = document.getElementById('player-screen');
  const profileScreen = document.getElementById('profile-screen');
  const ageScreen = document.getElementById('age-screen');
  const progressScreen = document.getElementById('progress-screen');
  const galleryScreen = document.getElementById('gallery-screen');
  const categoryScreen = document.getElementById('category-screen');
  const modeScreen = document.getElementById('mode-screen');
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
  const ageGalleryButton = document.getElementById('age-gallery-button');
  const retroactiveCardSummary = document.getElementById('retroactive-card-summary');
  const retroactiveCardMessage = document.getElementById('retroactive-card-message');
  const retroactiveGalleryButton = document.getElementById('retroactive-gallery-button');
  const progressGalleryButton = document.getElementById('progress-gallery-button');
  const progressBackButton = document.getElementById('progress-back-button');
  const progressAvatar = document.getElementById('progress-avatar');
  const progressPlayerName = document.getElementById('progress-player-name');
  const progressStorageStatus = document.getElementById('progress-storage-status');
  const progressTotalJejak = document.getElementById('progress-total-jejak');
  const progressRankEmblem = document.getElementById('progress-rank-emblem');
  const progressRankName = document.getElementById('progress-rank-name');
  const progressLevel = document.getElementById('progress-level');
  const rankProgressTrack = document.querySelector('.rank-progress-track');
  const rankProgressFill = document.getElementById('rank-progress-fill');
  const rankProgressText = document.getElementById('rank-progress-text');
  const completedPuzzleCount = document.getElementById('completed-puzzle-count');
  const totalWordsFound = document.getElementById('total-words-found');
  const badgeList = document.getElementById('badge-list');
  const galleryOwner = document.getElementById('gallery-owner');
  const galleryOwnedCount = document.getElementById('gallery-owned-count');
  const galleryStorageMessage = document.getElementById('gallery-storage-message');
  const galleryFilters = document.getElementById('gallery-filters');
  const rakaCardGrid = document.getElementById('raka-card-grid');
  const galleryBackButton = document.getElementById('gallery-back-button');
  const cardViewer = document.getElementById('card-viewer');
  const cardViewerEdition = document.getElementById('card-viewer-edition');
  const cardViewerTitle = document.getElementById('card-viewer-title');
  const cardViewerImage = document.getElementById('card-viewer-image');
  const cardViewerMessage = document.getElementById('card-viewer-message');
  const saveCardLink = document.getElementById('save-card-link');
  const closeCardViewerButton = document.getElementById('close-card-viewer-button');
  const cardReveal = document.getElementById('card-reveal');
  const cardRevealCard = document.getElementById('card-reveal-card');
  const cardRevealHeading = document.getElementById('card-reveal-heading');
  const cardRevealImage = document.getElementById('card-reveal-image');
  const cardRevealTitle = document.getElementById('card-reveal-title');
  const cardRevealDetails = document.getElementById('card-reveal-details');
  const cardRevealCount = document.getElementById('card-reveal-count');
  const continueCardRevealButton = document.getElementById('continue-card-reveal-button');
  const saveRevealedCardLink = document.getElementById('save-revealed-card-link');
  const ageBackButton = document.getElementById('age-back-button');
  const categoryBackButton = document.getElementById('category-back-button');
  const modeBackButton = document.getElementById('mode-back-button');
  const modeButtons = document.querySelectorAll('.mode-button');
  const modeSelectionLabel = document.getElementById('mode-selection-label');
  const ageButtons = document.querySelectorAll('.age-button');
  const categoryButtons = document.querySelectorAll('.category-button');
  const selectedAgeLabel = document.getElementById('selected-age-label');
  const categoryMessage = document.getElementById('category-message');
  const wordGrid = document.getElementById('word-grid');
  const wordList = document.getElementById('word-list');
  const wordPanel = document.getElementById('word-panel');
  const wordListTitle = document.getElementById('word-list-title');
  const secretProgress = document.getElementById('secret-progress');
  const gameHeading = document.getElementById('game-heading');
  const gameSessionLabel = document.getElementById('game-session-label');
  const gameModeLabel = document.getElementById('game-mode-label');
  const gameFeedback = document.getElementById('game-feedback');
  const hintPanel = document.getElementById('hint-panel');
  const hintButton = document.getElementById('hint-button');
  const hintHelper = document.getElementById('hint-helper');
  const hintStatus = document.getElementById('hint-status');
  const hintList = document.getElementById('hint-list');
  const chainPanel = document.getElementById('chain-panel');
  const chainTarget = document.getElementById('chain-target');
  const chainStage = document.getElementById('chain-stage');
  const chainProgress = document.getElementById('chain-progress');
  const chainProgressFill = document.getElementById('chain-progress-fill');
  const chainStatus = document.getElementById('chain-status');
  const victoryPanel = document.getElementById('victory-panel');
  const victoryTitle = document.getElementById('victory-title');
  const victorySummary = document.getElementById('victory-summary');
  const victoryProgress = document.getElementById('victory-progress');
  const victoryJejakEarned = document.getElementById('victory-jejak-earned');
  const victoryBonusList = document.getElementById('victory-bonus-list');
  const victoryTotalJejak = document.getElementById('victory-total-jejak');
  const victoryPromotion = document.getElementById('victory-promotion');
  const victoryBadges = document.getElementById('victory-badges');
  const victoryRakaCards = document.getElementById('victory-raka-cards');
  const playAgainButton = document.getElementById('play-again-button');
  const menuButton = document.getElementById('menu-button');
  const gameMenuButton = document.getElementById('game-menu-button');
  const exitConfirmation = document.getElementById('exit-confirmation');
  const continueGameButton = document.getElementById('continue-game-button');
  const exitGameButton = document.getElementById('exit-game-button');
  const brandIntro = document.getElementById('brand-intro');
  const brandIntroSkip = document.getElementById('brand-intro-skip');
  const brandIntroLogo = document.getElementById('brand-intro-logo');
  const titleZilterokaButton = document.getElementById('title-zilteroka-button');
  const playerZilterokaButton = document.getElementById('player-zilteroka-button');
  const zilterokaDialog = document.getElementById('zilteroka-dialog');
  const zilterokaDialogCard = zilterokaDialog?.querySelector('.zilteroka-dialog-card');
  const zilterokaDialogClose = document.getElementById('zilteroka-dialog-close');
  const zilterokaDialogDone = document.getElementById('zilteroka-dialog-done');

  const PROFILE_STORAGE_KEY = 'mataHelangProfiles_v1';
  const PROFILE_DATA_VERSION = 1;
  const MAX_PROFILES = 5;
  const PROGRESSION_STORAGE_KEY = 'mataHelangProgression_v1';
  const PROGRESSION_DATA_VERSION = 1;
  const KATA_RAKA_STORAGE_KEY = 'mataHelangKataRaka_v1';
  const KATA_RAKA_DATA_VERSION = 1;
  const BRAND_INTRO_SESSION_KEY = 'mataHelangZilTerokaIntro_v1';

  const GAME_MODES = {
    classic: { label: 'MOD KLASIK' },
    secret: { label: 'PENCARIAN RAHSIA' },
    hidden: { label: 'HURUF TERSEMBUNYI' },
    combined: { label: 'MISTERI BERGANDA' },
    chain: { label: 'RANTAIAN KATA' }
  };

  let brandIntroTimer = null;
  let brandIntroDismissed = false;
  let zilterokaDialogTrigger = null;

  const RANKS = [
    { threshold: 0, level: 1, name: 'Pemerhati Baru' },
    { threshold: 80, level: 2, name: 'Pencari Kata' },
    { threshold: 200, level: 3, name: 'Penjejak Kata' },
    { threshold: 360, level: 4, name: 'Peninjau Cekap' },
    { threshold: 560, level: 5, name: 'Mata Tajam' },
    { threshold: 800, level: 6, name: 'Helang Unggul' },
    { threshold: 1100, level: 7, name: 'Legenda Helang' }
  ];

  // Premium artwork is mapped centrally so UI components never depend on file order.
  const RANK_ARTWORK = {
    1: { src: 'assets/pangkat/pangkat-helang/pangkat-helang-tahap-01.webp' },
    2: { src: 'assets/pangkat/pangkat-helang/pangkat-helang-tahap-02.webp' },
    3: { src: 'assets/pangkat/pangkat-helang/pangkat-helang-tahap-03.webp' },
    4: { src: 'assets/pangkat/pangkat-helang/pangkat-helang-tahap-04.webp' },
    5: { src: 'assets/pangkat/pangkat-helang/pangkat-helang-tahap-05.webp' },
    6: { src: 'assets/pangkat/pangkat-helang/pangkat-helang-tahap-06.webp' },
    7: { src: 'assets/pangkat/pangkat-helang/pangkat-helang-tahap-07.webp' }
  };

  const ACHIEVEMENT_ARTWORK = {
    'first-puzzle': { src: 'assets/lencana/achievements/jejak-pertama.webp', lockedSrc: null, fallback: '★' },
    'category-explorer': { src: 'assets/lencana/achievements/peneroka-kategori.webp', lockedSrc: null, fallback: '✦' },
    'hundred-words': { src: 'assets/lencana/achievements/pemburu-100-kata.webp', lockedSrc: null, fallback: 'A' },
    'four-ages': { src: 'assets/lencana/achievements/penjelajah-empat-tahap.webp', lockedSrc: null, fallback: '◆' }
  };

  // New IDs deliberately avoid colliding with the six legacy IDs stored in profiles.
  const PREMIUM_AVATAR_ASSET_PLAN = [
    { id: 'premium-awan', name: 'Awan', src: 'assets/avatar/avatar-awan.png' },
    { id: 'premium-bintang', name: 'Bintang', src: 'assets/avatar/avatar-bintang.png' },
    { id: 'premium-bulan', name: 'Bulan', src: 'assets/avatar/avatar-bulan.png' },
    { id: 'premium-kristal', name: 'Kristal', src: 'assets/avatar/avatar-kristal.png' },
    { id: 'premium-daun', name: 'Daun', src: 'assets/avatar/avatar-daun.png' },
    { id: 'premium-helang', name: 'Helang', src: 'assets/avatar/avatar-helang.png' },
    { id: 'premium-rubah', name: 'Rubah', src: 'assets/avatar/avatar-rubah.png' },
    { id: 'premium-arnab', name: 'Arnab', src: 'assets/avatar/avatar-arnab.png' },
    { id: 'premium-kucing', name: 'Kucing', src: 'assets/avatar/avatar-kucing.png' },
    { id: 'premium-robot', name: 'Robot', src: 'assets/avatar/avatar-robot.png' },
    { id: 'premium-roket', name: 'Roket', src: 'assets/avatar/avatar-roket.png' },
    { id: 'premium-mentari', name: 'Mentari', src: 'assets/avatar/avatar-mentari.png' }
  ];

  const MODE_ARTWORK = {
    classic: 'assets/ikon/mod-klasik.webp',
    secret: 'assets/ikon/mod-pencarian-rahsia.webp',
    hidden: 'assets/ikon/mod-huruf-tersembunyi.webp',
    combined: 'assets/ikon/mod-misteri-berganda.webp',
    chain: 'assets/ikon/mod-rantaian-kata.webp'
  };

  const ACTION_ARTWORK = {
    main: 'assets/ikon/btn-main.webp',
    collection: 'assets/ikon/btn-koleksi.webp',
    edit: 'assets/ikon/btn-ubah.webp',
    delete: 'assets/ikon/btn-padam.webp',
    addProfile: 'assets/ikon/btn-tambah-profil.webp',
    guest: 'assets/ikon/btn-main-tanpa-profil.webp',
    zilteroka: 'assets/ikon/btn-kenali-zilteroka.webp',
    menu: 'assets/ikon/btn-menu.webp',
    back: 'assets/ikon/btn-kembali.webp',
    continue: 'assets/ikon/btn-teruskan.webp',
    exit: 'assets/ikon/btn-keluar.webp',
    playAgain: 'assets/ikon/btn-main-lagi.webp'
  };

  const ACHIEVEMENTS = [
    { id: 'first-puzzle', name: 'Jejak Pertama', description: 'Selesaikan teka kata pertama.' },
    { id: 'category-explorer', name: 'Peneroka Kategori', description: 'Selesaikan keenam-enam kategori dalam satu tahap umur.' },
    { id: 'hundred-words', name: 'Pemburu 100 Kata', description: 'Temui 100 kata dalam teka kata yang diselesaikan.' },
    { id: 'four-ages', name: 'Penjelajah Empat Tahap', description: 'Selesaikan teka kata dalam setiap tahap umur.' }
  ];

  const KATA_RAKA_CATALOGUE = [
    { id: 'KR-I01', title: 'Mata Tajam', edition: 'inspirasi' },
    { id: 'KR-I02', title: 'Satu Demi Satu', edition: 'inspirasi' },
    { id: 'KR-I03', title: 'Jangan Mengalah', edition: 'inspirasi' },
    { id: 'KR-I04', title: 'Lihat Sekali Lagi', edition: 'inspirasi' },
    { id: 'KR-I05', title: 'Jejak Kecil', edition: 'inspirasi' },
    { id: 'KR-I06', title: 'Berani Bermula', edition: 'inspirasi' },
    { id: 'KR-I07', title: 'Terus Mencuba', edition: 'inspirasi' },
    { id: 'KR-I08', title: 'Cahaya Ilmu', edition: 'inspirasi' },
    { id: 'KR-I09', title: 'Fokus Hati', edition: 'inspirasi' },
    { id: 'KR-I10', title: 'Langkah ke Puncak', edition: 'inspirasi' },
    { id: 'KR-P01', title: 'Hasil Usaha', edition: 'pencapaian' },
    { id: 'KR-P02', title: 'Jejak Bertambah', edition: 'pencapaian' },
    { id: 'KR-P03', title: 'Penemuan Baharu', edition: 'pencapaian' },
    { id: 'KR-P04', title: 'Kemenangan Bermakna', edition: 'pencapaian' },
    { id: 'KR-P05', title: 'Naik Pangkat', edition: 'pencapaian' },
    { id: 'KR-P06', title: 'Rentak Kemajuan', edition: 'pencapaian' },
    { id: 'KR-P07', title: 'Misi Selesai', edition: 'pencapaian' },
    { id: 'KR-P08', title: 'Kombinasi Baharu', edition: 'pencapaian' },
    { id: 'KR-P09', title: 'Semua Kategori', edition: 'pencapaian' },
    { id: 'KR-P10', title: 'Jejak Gemilang', edition: 'pencapaian' },
    { id: 'KR-L01', title: 'Kemungkinan Baharu', edition: 'legenda' },
    { id: 'KR-L02', title: 'Sayap Keberanian', edition: 'legenda' },
    { id: 'KR-L03', title: 'Di Sebalik Cabaran', edition: 'legenda' },
    { id: 'KR-L04', title: 'Puncak Ketajaman', edition: 'legenda' },
    { id: 'KR-L05', title: 'Langit Tanpa Batas', edition: 'legenda' },
    { id: 'KR-L06', title: 'Legenda Sebenar', edition: 'legenda' },
    { id: 'KR-L07', title: 'Dunia Penemuan', edition: 'legenda' },
    { id: 'KR-L08', title: 'Rahsia Kehebatan', edition: 'legenda' },
    { id: 'KR-L09', title: 'Pandangan Helang', edition: 'legenda' },
    { id: 'KR-L10', title: 'Pengembaraan Seterusnya', edition: 'legenda' }
  ].map((card) => ({
    ...card,
    image: `assets/kata-raka/${card.id}.webp`
  }));

  const KATA_RAKA_UNLOCKS = {
    'KR-I01': { type: 'puzzles', value: 1, label: 'Selesaikan teka kata pertama' },
    'KR-I02': { type: 'puzzles', value: 2, label: 'Selesaikan 2 teka kata' },
    'KR-I03': { type: 'puzzles', value: 5, label: 'Selesaikan 5 teka kata' },
    'KR-I04': { type: 'categoriesInOneAge', value: 2, label: 'Lengkapkan 2 kategori dalam satu tahap umur' },
    'KR-I05': { type: 'puzzles', value: 10, label: 'Selesaikan 10 teka kata' },
    'KR-I06': { type: 'categoriesInOneAge', value: 3, label: 'Lengkapkan 3 kategori dalam satu tahap umur' },
    'KR-I07': { type: 'puzzles', value: 15, label: 'Selesaikan 15 teka kata' },
    'KR-I08': { type: 'categoriesInOneAge', value: 4, label: 'Lengkapkan 4 kategori dalam satu tahap umur' },
    'KR-I09': { type: 'puzzles', value: 20, label: 'Selesaikan 20 teka kata' },
    'KR-I10': { type: 'categoriesInOneAge', value: 5, label: 'Lengkapkan 5 kategori dalam satu tahap umur' },
    'KR-P01': { type: 'puzzles', value: 6, label: 'Selesaikan 6 teka kata' },
    'KR-P02': { type: 'jejak', value: 150, label: 'Kumpul 150 Jejak' },
    'KR-P03': { type: 'combinations', value: 4, label: 'Terokai 4 kombinasi umur dan kategori' },
    'KR-P04': { type: 'puzzles', value: 12, label: 'Selesaikan 12 teka kata' },
    'KR-P05': { type: 'jejak', value: 80, label: 'Capai Tahap 2 • 80 Jejak' },
    'KR-P06': { type: 'jejak', value: 250, label: 'Kumpul 250 Jejak' },
    'KR-P07': { type: 'puzzles', value: 3, label: 'Selesaikan 3 teka kata' },
    'KR-P08': { type: 'combinations', value: 5, label: 'Terokai 5 kombinasi umur dan kategori' },
    'KR-P09': { type: 'categoriesInOneAge', value: 6, label: 'Lengkapkan semua 6 kategori dalam satu tahap umur' },
    'KR-P10': { type: 'jejak', value: 650, label: 'Kumpul 650 Jejak' },
    'KR-L01': { type: 'jejak', value: 360, label: 'Capai Tahap 4 • 360 Jejak' },
    'KR-L02': { type: 'jejak', value: 450, label: 'Kumpul 450 Jejak' },
    'KR-L03': { type: 'jejak', value: 550, label: 'Kumpul 550 Jejak' },
    'KR-L04': { type: 'jejak', value: 700, label: 'Kumpul 700 Jejak' },
    'KR-L05': { type: 'jejak', value: 900, label: 'Kumpul 900 Jejak' },
    'KR-L06': { type: 'jejak', value: 1100, label: 'Capai Tahap 7 • 1,100 Jejak' },
    'KR-L07': { type: 'jejak', value: 1300, label: 'Kumpul 1,300 Jejak' },
    'KR-L08': { type: 'jejak', value: 1550, label: 'Kumpul 1,550 Jejak' },
    'KR-L09': { type: 'jejak', value: 1800, label: 'Kumpul 1,800 Jejak' },
    'KR-L10': { type: 'jejak', value: 2100, label: 'Kumpul 2,100 Jejak' }
  };

  const KATA_RAKA_EDITION_LABELS = {
    inspirasi: 'Inspirasi',
    pencapaian: 'Pencapaian',
    legenda: 'Legenda'
  };

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
      hiddenPercentage: 0.05,
      directions: ['horizontal', 'vertical'],
      reverse: false
    },
    '8–10 Tahun': {
      gridSize: 8,
      wordCount: 6,
      hiddenPercentage: 0.10,
      directions: ['horizontal', 'vertical', 'diagonalDownRight', 'diagonalDownLeft'],
      reverse: false
    },
    '11–12 Tahun': {
      gridSize: 10,
      wordCount: 8,
      hiddenPercentage: 0.15,
      directions: ['horizontal', 'vertical', 'diagonalDownRight', 'diagonalDownLeft'],
      reverse: true
    },
    '13–15 Tahun': {
      gridSize: 12,
      wordCount: 10,
      hiddenPercentage: 0.20,
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
  let selectedGameMode = 'classic';
  let currentTargetWords = [];
  let puzzle = null;
  let foundWords = new Set();
  let wordColors = new Map();
  let foundCellDetails = new Map();
  let hiddenCellKeys = new Set();
  let targetHiddenCellKeys = new Set();
  let fillerHiddenCellKeys = new Set();
  let revealedHiddenCellKeys = new Set();
  let hintedWords = new Set();
  let chainPlan = null;
  let chainStageIndex = 0;
  let chainTransitioning = false;
  let chainTransitionTimer = null;
  let isDragging = false;
  let activePointerId = null;
  let dragStartCell = null;
  let currentSelection = [];
  let feedbackTimerId = null;
  const previousPuzzleWordsByMode = new Map();
  let profileData = createEmptyProfileData();
  let storageIsAvailable = true;
  let editingProfileId = null;
  let selectedAvatarId = PREMIUM_AVATAR_ASSET_PLAN[0].id;
  let pendingDeleteProfileId = null;
  let isSavingProfile = false;
  let progressionData = createEmptyProgressionData();
  let progressionStorageIsAvailable = true;
  let guestProgress = createEmptyPlayerProgress();
  let currentPuzzleId = null;
  let currentPuzzleRewarded = false;
  let kataRakaData = createEmptyKataRakaData();
  let kataRakaStorageIsAvailable = true;
  let guestKataRaka = createEmptyKataRakaCollection();
  let galleryFilter = 'all';
  let galleryReturnScreen = ageScreen;
  let galleryProfileId = null;
  let cardViewerReturnElement = null;
  let cardRevealQueue = [];
  let cardRevealIndex = 0;
  let cardRevealMode = 'unlock';
  const kataRakaSessionByPlayer = new Map();

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
    return `${selectedAge}|${category}|${selectedGameMode}`;
  }

  function getEligibleWords(category, config) {
    const categoryWords = WORDS_BY_AGE_AND_CATEGORY[selectedAge]?.[category] || [];
    const normalizedWords = categoryWords.map((word) => word.toUpperCase());
    return [...new Set(normalizedWords)].filter((word) => (
      word.length <= config.gridSize && /^[A-Z]+$/.test(word)
    ));
  }

  function chooseTargetWords(category, config, wordPool = null) {
    const validWords = wordPool || getEligibleWords(category, config);
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

  function createEmptyKataRakaData() {
    return {
      version: KATA_RAKA_DATA_VERSION,
      byProfileId: {}
    };
  }

  function createEmptyKataRakaCollection() {
    return {
      ownedCards: {},
      viewedCards: []
    };
  }

  function normalizeKataRakaCollection(value) {
    const validCardIds = new Set(KATA_RAKA_CATALOGUE.map((card) => card.id));
    const ownedCards = {};
    if (value?.ownedCards && typeof value.ownedCards === 'object' && !Array.isArray(value.ownedCards)) {
      Object.entries(value.ownedCards).forEach(([cardId, unlockedAt]) => {
        if (validCardIds.has(cardId) && typeof unlockedAt === 'string') {
          ownedCards[cardId] = unlockedAt;
        }
      });
    }

    const viewedCards = Array.isArray(value?.viewedCards)
      ? [...new Set(value.viewedCards.filter((cardId) => (
        validCardIds.has(cardId) && Object.prototype.hasOwnProperty.call(ownedCards, cardId)
      )))]
      : [];

    return { ownedCards, viewedCards };
  }

  function loadKataRaka() {
    try {
      const storedValue = localStorage.getItem(KATA_RAKA_STORAGE_KEY);
      if (!storedValue) {
        kataRakaData = createEmptyKataRakaData();
        return;
      }

      const parsedData = JSON.parse(storedValue);
      if (
        !parsedData
        || parsedData.version !== KATA_RAKA_DATA_VERSION
        || !parsedData.byProfileId
        || typeof parsedData.byProfileId !== 'object'
        || Array.isArray(parsedData.byProfileId)
      ) {
        throw new Error('Format Kata Raka tidak sah.');
      }

      const validProfileIds = new Set(profileData.profiles.map((profile) => profile.id));
      const byProfileId = {};
      Object.entries(parsedData.byProfileId).forEach(([profileId, collection]) => {
        if (validProfileIds.has(profileId)) {
          byProfileId[profileId] = normalizeKataRakaCollection(collection);
        }
      });
      kataRakaData = { version: KATA_RAKA_DATA_VERSION, byProfileId };
    } catch (error) {
      kataRakaData = createEmptyKataRakaData();
      const isStorageError = error?.name === 'SecurityError'
        || error?.name === 'QuotaExceededError';
      kataRakaStorageIsAvailable = !isStorageError;
      profileStorageMessage.textContent = isStorageError
        ? 'Koleksi Kata Raka hanya tersedia untuk sesi ini.'
        : 'Data Kata Raka rosak dan telah dimulakan semula dengan selamat.';
    }
  }

  function saveKataRaka() {
    if (!kataRakaStorageIsAvailable) {
      return false;
    }

    try {
      localStorage.setItem(KATA_RAKA_STORAGE_KEY, JSON.stringify(kataRakaData));
      return true;
    } catch (error) {
      kataRakaStorageIsAvailable = false;
      profileStorageMessage.textContent = 'Koleksi Kata Raka hanya tersedia untuk sesi ini.';
      return false;
    }
  }

  function getKataRakaCollection(profileId = profileData.activeProfileId) {
    if (!profileId) {
      return guestKataRaka;
    }

    if (!kataRakaData.byProfileId[profileId]) {
      kataRakaData.byProfileId[profileId] = createEmptyKataRakaCollection();
    }
    return kataRakaData.byProfileId[profileId];
  }

  function getCompletedModeKeys(progress) {
    return Object.keys(progress.completedModes).filter((key) => progress.completedModes[key] > 0);
  }

  function getMaximumCategoryCoverage(progress) {
    return Object.keys(AGE_CONFIGS).reduce((highestCount, age) => {
      const categoryCount = ALL_CATEGORIES.filter((category) => (
        progress.completedModes[`${age}|${category}`] > 0
      )).length;
      return Math.max(highestCount, categoryCount);
    }, 0);
  }

  function getCardConditionValue(condition, progress) {
    if (condition.type === 'puzzles') {
      return progress.completedPuzzleCount;
    }
    if (condition.type === 'jejak') {
      return progress.totalJejak;
    }
    if (condition.type === 'combinations') {
      return getCompletedModeKeys(progress).length;
    }
    if (condition.type === 'categoriesInOneAge') {
      return getMaximumCategoryCoverage(progress);
    }
    return 0;
  }

  function cardConditionIsMet(cardId, progress) {
    const condition = KATA_RAKA_UNLOCKS[cardId];
    if (!condition) {
      return false;
    }
    return getCardConditionValue(condition, progress) >= condition.value;
  }

  function unlockEligibleKataRaka(progress, profileId = profileData.activeProfileId) {
    const collection = getKataRakaCollection(profileId);
    const newlyUnlockedIds = [];
    Object.keys(KATA_RAKA_UNLOCKS).forEach((cardId) => {
      if (!collection.ownedCards[cardId] && cardConditionIsMet(cardId, progress)) {
        collection.ownedCards[cardId] = new Date().toISOString();
        newlyUnlockedIds.push(cardId);
      }
    });

    if (newlyUnlockedIds.length && profileId) {
      saveKataRaka();
    }
    return newlyUnlockedIds;
  }

  function syncActiveKataRakaUnlocks() {
    return unlockEligibleKataRaka(getActiveProgress());
  }

  function getKataRakaSession() {
    const playerKey = profileData.activeProfileId || 'guest';
    if (!kataRakaSessionByPlayer.has(playerKey)) {
      kataRakaSessionByPlayer.set(playerKey, {
        completedPuzzles: 0,
        randomPosterShown: false,
        lastRandomCardId: null
      });
    }
    return kataRakaSessionByPlayer.get(playerKey);
  }

  function getRandomPosterRoll() {
    const params = new URLSearchParams(window.location.search);
    const testRoll = Number(params.get('randomPosterRoll'));
    const isLocalTest = ['localhost', '127.0.0.1'].includes(window.location.hostname);
    return isLocalTest && Number.isFinite(testRoll) && testRoll >= 0 && testRoll <= 1
      ? testRoll
      : Math.random();
  }

  function selectRandomPosterCard(collection, session) {
    const ownedIds = Object.keys(collection.ownedCards).filter((cardId) => Boolean(getCardById(cardId)));
    const viewedIds = ownedIds.filter((cardId) => collection.viewedCards.includes(cardId));
    let candidates = viewedIds.length ? viewedIds : ownedIds;
    if (candidates.length > 1 && session.lastRandomCardId) {
      candidates = candidates.filter((cardId) => cardId !== session.lastRandomCardId);
    }
    if (!candidates.length) {
      return null;
    }
    return candidates[Math.floor(Math.random() * candidates.length)];
  }

  function getRandomPosterForVictory(hasNewCards) {
    const session = getKataRakaSession();
    session.completedPuzzles += 1;
    if (
      hasNewCards
      || session.completedPuzzles < 3
      || session.randomPosterShown
      || getRandomPosterRoll() >= 0.2
    ) {
      return null;
    }

    const cardId = selectRandomPosterCard(getKataRakaCollection(), session);
    if (!cardId) {
      return null;
    }
    session.randomPosterShown = true;
    session.lastRandomCardId = cardId;
    return cardId;
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
    // Card checks run after Jejak, rank and badge calculations.
    const newlyUnlockedCardIds = unlockEligibleKataRaka(progress);
    const randomPosterCardId = getRandomPosterForVictory(newlyUnlockedCardIds.length > 0);

    return {
      earnedJejak,
      bonuses,
      totalJejak: progress.totalJejak,
      previousRank,
      newRank,
      newlyUnlockedIds,
      newlyUnlockedCardIds,
      randomPosterCardId,
      isGuest: !profileData.activeProfileId
    };
  }

  function renderBadges(progress) {
    badgeList.innerHTML = '';
    ACHIEVEMENTS.forEach((achievement) => {
      const unlocked = progress.unlockedAchievements.includes(achievement.id);
      const item = document.createElement('article');
      item.className = `badge-card ${unlocked ? 'badge-card--unlocked' : 'badge-card--locked'}`;
      const icon = createAchievementArtwork(achievement, unlocked, 'badge-icon');
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

  function getCardById(cardId) {
    return KATA_RAKA_CATALOGUE.find((card) => card.id === cardId);
  }

  function getCardConditionProgress(cardId, progress) {
    const condition = KATA_RAKA_UNLOCKS[cardId];
    if (!condition) {
      return '';
    }
    const currentValue = getCardConditionValue(condition, progress);
    const units = {
      puzzles: 'teka kata',
      jejak: 'Jejak',
      combinations: 'kombinasi diteroka',
      categoriesInOneAge: 'kategori lengkap'
    };
    const unit = units[condition.type] || '';
    return `${Math.min(currentValue, condition.value)}/${condition.value} ${unit}`;
  }

  function markCardAsViewed(cardId, profileId = galleryProfileId) {
    const collection = getKataRakaCollection(profileId);
    if (!collection.ownedCards[cardId] || collection.viewedCards.includes(cardId)) {
      return;
    }
    collection.viewedCards.push(cardId);
    if (profileId) {
      saveKataRaka();
    }
  }

  function openCardViewer(cardId, returnElement = document.activeElement, profileId = galleryProfileId) {
    const card = getCardById(cardId);
    const collection = getKataRakaCollection(profileId);
    if (!card || !collection.ownedCards[cardId]) {
      return;
    }

    galleryProfileId = profileId || null;
    cardViewerReturnElement = returnElement;
    markCardAsViewed(cardId, galleryProfileId);
    cardViewerEdition.textContent = `Edisi ${KATA_RAKA_EDITION_LABELS[card.edition]} • ${card.id}`;
    cardViewerTitle.textContent = card.title;
    cardViewerImage.src = card.image;
    cardViewerImage.alt = `Kad Raka ${card.title}, Edisi ${KATA_RAKA_EDITION_LABELS[card.edition]}`;
    saveCardLink.href = card.image;
    saveCardLink.download = `${card.id}.webp`;
    cardViewerMessage.textContent = 'Jika muat turun tidak bermula, kad akan dibuka dalam pelayar untuk disimpan.';
    cardViewer.classList.remove('hidden');
    document.body.classList.add('modal-open');
    closeCardViewerButton.focus();
    returnElement?.querySelector?.('.raka-new-badge')?.remove();
  }

  function closeCardViewer() {
    if (cardViewer.classList.contains('hidden')) {
      return;
    }
    cardViewer.classList.add('hidden');
    document.body.classList.remove('modal-open');
    cardViewerImage.src = '';
    if (cardViewerReturnElement?.isConnected) {
      cardViewerReturnElement.focus();
    }
    cardViewerReturnElement = null;
  }

  function renderCurrentCardReveal() {
    const cardId = cardRevealQueue[cardRevealIndex];
    const card = getCardById(cardId);
    if (!card) {
      closeCardReveal();
      return;
    }

    if (cardRevealMode === 'unlock') {
      markCardAsViewed(card.id, profileData.activeProfileId);
    }
    cardRevealCard.className = `card-reveal-card card-reveal-card--${card.edition}`;
    window.requestAnimationFrame(() => {
      if (!cardReveal.classList.contains('hidden')) {
        cardRevealCard.classList.add('card-reveal-card--animate');
      }
    });
    cardRevealImage.src = card.image;
    cardRevealImage.alt = `Kad Raka ${card.title}, Edisi ${KATA_RAKA_EDITION_LABELS[card.edition]}`;
    cardRevealHeading.textContent = cardRevealMode === 'poster'
      ? 'KATA RAKA UNTUKMU'
      : 'KAD RAKA BAHARU!';
    cardRevealTitle.textContent = card.title;
    cardRevealDetails.textContent = `Edisi ${KATA_RAKA_EDITION_LABELS[card.edition]} • ${card.id}`;
    cardRevealCount.textContent = cardRevealMode === 'unlock' && cardRevealQueue.length > 1
      ? `Kad ${cardRevealIndex + 1} daripada ${cardRevealQueue.length}`
      : '';
    saveRevealedCardLink.classList.toggle('hidden', cardRevealMode !== 'poster');
    saveRevealedCardLink.href = card.image;
    saveRevealedCardLink.download = `${card.id}.webp`;
    continueCardRevealButton.focus();
  }

  function openCardReveal(cardIds, mode = 'unlock') {
    cardRevealQueue = cardIds.filter((cardId) => Boolean(getCardById(cardId)));
    cardRevealIndex = 0;
    cardRevealMode = mode;
    if (!cardRevealQueue.length) {
      return;
    }

    renderCurrentCardReveal();
    cardReveal.classList.remove('hidden');
    cardRevealCard.classList.add('card-reveal-card--animate');
    document.body.classList.add('modal-open');
    continueCardRevealButton.focus();
  }

  function closeCardReveal() {
    if (cardReveal.classList.contains('hidden')) {
      return;
    }
    cardReveal.classList.add('hidden');
    document.body.classList.remove('modal-open');
    cardRevealImage.src = '';
    cardRevealQueue = [];
    cardRevealIndex = 0;
    cardRevealMode = 'unlock';
    playAgainButton.focus();
  }

  function continueCardReveal() {
    if (cardRevealIndex < cardRevealQueue.length - 1) {
      cardRevealIndex += 1;
      renderCurrentCardReveal();
      return;
    }
    closeCardReveal();
  }

  function renderRetroactiveUnlockSummary(cardIds) {
    const hasNewCards = cardIds.length > 0;
    retroactiveCardSummary.classList.toggle('hidden', !hasNewCards);
    retroactiveCardMessage.textContent = hasNewCards
      ? `${cardIds.length} Kad Raka Baharu!`
      : '';
  }

  function createRakaCardElement(card, collection, progress) {
    const isOwned = Boolean(collection.ownedCards[card.id]);
    const hasApprovedCondition = Boolean(KATA_RAKA_UNLOCKS[card.id]);
    const isNew = isOwned && !collection.viewedCards.includes(card.id);
    const item = document.createElement(isOwned ? 'button' : 'article');
    item.className = `raka-gallery-card raka-gallery-card--${card.edition}`;
    item.dataset.cardId = card.id;

    if (isOwned) {
      item.type = 'button';
      item.classList.add('raka-gallery-card--owned');
      item.setAttribute('aria-label', `Buka ${card.id}, ${card.title}, Edisi ${KATA_RAKA_EDITION_LABELS[card.edition]}`);
      const image = document.createElement('img');
      image.src = card.image;
      image.alt = '';
      image.loading = 'lazy';
      image.decoding = 'async';
      item.appendChild(image);
      item.addEventListener('click', () => openCardViewer(card.id, item, galleryProfileId));
    } else {
      item.classList.add(hasApprovedCondition ? 'raka-gallery-card--locked' : 'raka-gallery-card--upcoming');
      item.setAttribute('aria-label', `${card.id}, ${card.title}, ${hasApprovedCondition ? 'terkunci' : 'akan datang'}`);
      const silhouette = document.createElement('div');
      silhouette.className = 'raka-card-silhouette';
      silhouette.setAttribute('aria-hidden', 'true');
      silhouette.textContent = hasApprovedCondition ? '🔒' : '✦';
      item.appendChild(silhouette);
    }

    const copy = document.createElement('div');
    copy.className = 'raka-card-copy';
    const state = document.createElement('span');
    state.className = 'raka-card-state';
    state.textContent = isOwned ? 'DIMILIKI' : (hasApprovedCondition ? 'TERKUNCI' : 'AKAN DATANG');
    const title = document.createElement('strong');
    title.textContent = card.title;
    const meta = document.createElement('span');
    meta.textContent = `${card.id} • ${KATA_RAKA_EDITION_LABELS[card.edition]}`;
    copy.append(state, title, meta);

    if (!isOwned && hasApprovedCondition) {
      const condition = document.createElement('span');
      condition.className = 'raka-card-condition';
      condition.textContent = `${KATA_RAKA_UNLOCKS[card.id].label} • ${getCardConditionProgress(card.id, progress)}`;
      copy.appendChild(condition);
    }
    item.appendChild(copy);

    if (isNew) {
      const newBadge = document.createElement('span');
      newBadge.className = 'raka-new-badge';
      newBadge.textContent = 'BAHARU';
      item.appendChild(newBadge);
    }
    return item;
  }

  function renderKataRakaGallery() {
    const profile = profileData.profiles.find((item) => item.id === galleryProfileId);
    const progress = getProgressForProfile(galleryProfileId);
    unlockEligibleKataRaka(progress, galleryProfileId);
    const collection = getKataRakaCollection(galleryProfileId);
    const ownedCount = Object.keys(collection.ownedCards).length;
    galleryOwner.textContent = profile ? `Koleksi ${profile.nickname}` : 'Koleksi Tetamu';
    galleryOwnedCount.textContent = `${ownedCount}/30 Kad Dimiliki`;
    galleryStorageMessage.textContent = profile
      ? (kataRakaStorageIsAvailable ? 'Koleksi disimpan pada peranti ini.' : 'Koleksi tersedia untuk sesi ini sahaja.')
      : 'Koleksi tetamu untuk sesi ini sahaja.';
    rakaCardGrid.innerHTML = '';

    KATA_RAKA_CATALOGUE
      .filter((card) => galleryFilter === 'all' || card.edition === galleryFilter)
      .forEach((card) => {
        rakaCardGrid.appendChild(createRakaCardElement(card, collection, progress));
      });

    galleryFilters.querySelectorAll('.gallery-filter').forEach((button) => {
      const selected = button.dataset.edition === galleryFilter;
      button.classList.toggle('selected', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
  }

  function showKataRakaGallery(returnScreen = ageScreen, profileId = profileData.activeProfileId) {
    galleryReturnScreen = returnScreen;
    galleryProfileId = profileId || null;
    galleryFilter = 'all';
    renderKataRakaGallery();
    showScreen(galleryScreen);
  }

  function renderVictoryRakaCards(cardIds) {
    victoryRakaCards.innerHTML = '';
    victoryRakaCards.classList.toggle('hidden', !cardIds.length);
    if (!cardIds.length) {
      return;
    }

    const heading = document.createElement('h4');
    heading.textContent = cardIds.length === 1 ? 'KAD RAKA BAHARU!' : `${cardIds.length} KAD RAKA BAHARU!`;
    victoryRakaCards.appendChild(heading);
    cardIds.forEach((cardId) => {
      const card = getCardById(cardId);
      if (!card) {
        return;
      }
      const row = document.createElement('div');
      row.className = 'victory-raka-row';
      const copy = document.createElement('p');
      copy.textContent = `${card.title} • Edisi ${KATA_RAKA_EDITION_LABELS[card.edition]}`;
      const viewButton = document.createElement('button');
      viewButton.type = 'button';
      viewButton.className = 'raka-view-button';
      viewButton.textContent = 'LIHAT KAD';
      viewButton.addEventListener('click', () => (
        openCardViewer(card.id, viewButton, profileData.activeProfileId)
      ));
      row.append(copy, viewButton);
      victoryRakaCards.appendChild(row);
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
    progressRankEmblem.replaceChildren(createRankArtwork(rank, 'rank-emblem--progress'));
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
    renderVictoryRakaCards([]);

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
      const rankUnlock = document.createElement('div');
      rankUnlock.className = 'victory-rank-unlock';
      const rankCopy = document.createElement('div');
      const rankHeading = document.createElement('strong');
      rankHeading.textContent = 'NAIK PANGKAT!';
      const rankName = document.createElement('span');
      rankName.textContent = `Tahap ${reward.newRank.level} • ${reward.newRank.name}`;
      rankCopy.append(rankHeading, rankName);
      rankUnlock.append(createRankArtwork(reward.newRank, 'rank-emblem--victory'), rankCopy);
      victoryPromotion.appendChild(rankUnlock);
    }

    reward.newlyUnlockedIds.forEach((achievementId) => {
      const achievement = ACHIEVEMENTS.find((item) => item.id === achievementId);
      if (achievement) {
        const badge = document.createElement('div');
        badge.className = 'victory-achievement-unlock';
        const badgeCopy = document.createElement('div');
        const badgeHeading = document.createElement('strong');
        badgeHeading.textContent = 'LENCANA BAHARU!';
        const badgeName = document.createElement('span');
        badgeName.textContent = achievement.name;
        badgeCopy.append(badgeHeading, badgeName);
        badge.append(createAchievementArtwork(achievement, true, 'badge-icon--victory'), badgeCopy);
        victoryBadges.appendChild(badge);
      }
    });
    renderVictoryRakaCards(reward.newlyUnlockedCardIds || []);
  }

  function isKnownAvatar(avatarId) {
    return getAllAvatars().some((avatar) => avatar.id === avatarId);
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
    return getAllAvatars().find((avatar) => avatar.id === avatarId) || PREMIUM_AVATAR_ASSET_PLAN[0];
  }

  function getAllAvatars() {
    // Legacy definitions remain available so existing stored profiles never change identity.
    return [...AVATARS, ...PREMIUM_AVATAR_ASSET_PLAN];
  }

  function getSelectableAvatars() {
    // New and edited profiles choose from the coherent premium collection only.
    return PREMIUM_AVATAR_ASSET_PLAN.filter((avatar) => Boolean(avatar.src));
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

  function createArtworkImage(src, alt, className) {
    const image = document.createElement('img');
    image.className = className;
    image.src = src;
    image.alt = alt;
    image.width = 256;
    image.height = 256;
    image.loading = 'lazy';
    image.decoding = 'async';
    return image;
  }

  function decorateActionButton(button, artworkKey) {
    const src = ACTION_ARTWORK[artworkKey];
    if (!button || !src || button.dataset.premiumArtwork === artworkKey) {
      return;
    }

    const labelText = button.textContent.trim();
    const label = document.createElement('span');
    label.className = 'premium-action-label';
    label.textContent = labelText;
    const image = createArtworkImage(src, '', 'premium-action-image');
    image.setAttribute('aria-hidden', 'true');
    image.addEventListener('error', () => button.classList.add('artwork-fallback-active'), { once: true });
    button.textContent = '';
    button.dataset.premiumArtwork = artworkKey;
    button.classList.add('premium-action-button');
    button.append(image, label);
  }

  function setActionButtonLabel(button, labelText) {
    const premiumLabel = button?.querySelector('.premium-action-label');
    if (premiumLabel) {
      premiumLabel.textContent = labelText;
    } else if (button) {
      button.textContent = labelText;
    }
  }

  function decoratePremiumControls() {
    const staticActions = [
      [addProfileButton, 'addProfile'],
      [guestButton, 'guest'],
      [playerZilterokaButton, 'zilteroka'],
      [ageGalleryButton, 'collection'],
      [retroactiveGalleryButton, 'collection'],
      [progressGalleryButton, 'collection'],
      [playerBackButton, 'back'],
      [ageBackButton, 'back'],
      [categoryBackButton, 'back'],
      [modeBackButton, 'back'],
      [progressBackButton, 'back'],
      [galleryBackButton, 'back'],
      [gameMenuButton, 'menu'],
      [menuButton, 'menu'],
      [continueGameButton, 'continue'],
      [continueCardRevealButton, 'continue'],
      [exitGameButton, 'exit'],
      [confirmDeleteButton, 'delete'],
      [playAgainButton, 'playAgain']
    ];
    staticActions.forEach(([button, key]) => decorateActionButton(button, key));

    modeButtons.forEach((button) => {
      const src = MODE_ARTWORK[button.dataset.mode];
      const emblem = button.querySelector('.mode-emblem');
      const title = button.querySelector('strong');
      if (!src || !emblem || !title) {
        return;
      }
      const image = createArtworkImage(src, '', 'mode-artwork-image');
      image.setAttribute('aria-hidden', 'true');
      image.addEventListener('error', () => button.classList.add('artwork-fallback-active'), { once: true });
      emblem.textContent = '';
      emblem.classList.add('mode-emblem--artwork');
      emblem.appendChild(image);
      title.classList.add('mode-visible-title');
      button.classList.add('mode-button--premium-artwork');
    });
  }

  function createRankArtwork(rank, extraClass = '') {
    const artwork = RANK_ARTWORK[rank.level];
    const frame = document.createElement('div');
    frame.className = `rank-emblem rank-emblem--level-${rank.level} ${extraClass}`.trim();
    frame.setAttribute('role', 'img');
    frame.setAttribute('aria-label', `Pangkat Tahap ${rank.level}, ${rank.name}`);

    if (artwork?.src) {
      frame.classList.add('rank-emblem--has-image');
      const image = createArtworkImage(artwork.src, '', 'rank-emblem-image');
      image.setAttribute('aria-hidden', 'true');
      image.addEventListener('error', () => frame.classList.add('artwork-fallback-active'), { once: true });
      frame.appendChild(image);
    }

    const fallback = document.createElement('span');
    fallback.className = 'rank-emblem-fallback';
    fallback.setAttribute('aria-hidden', 'true');
    fallback.textContent = String(rank.level);
    frame.appendChild(fallback);
    return frame;
  }

  function createAchievementArtwork(achievement, unlocked, extraClass = '') {
    const artwork = ACHIEVEMENT_ARTWORK[achievement.id];
    const frame = document.createElement('span');
    frame.className = `achievement-emblem ${unlocked ? 'achievement-emblem--unlocked' : 'achievement-emblem--locked'} ${extraClass}`.trim();
    frame.setAttribute('aria-hidden', 'true');

    const artworkSource = unlocked ? artwork?.src : (artwork?.lockedSrc || artwork?.src);
    if (artworkSource) {
      frame.classList.add('achievement-emblem--has-image');
      if (!unlocked && !artwork.lockedSrc) {
        frame.classList.add('achievement-emblem--generated-locked');
      }
      const image = createArtworkImage(artworkSource, '', 'achievement-emblem-image');
      image.setAttribute('aria-hidden', 'true');
      image.addEventListener('error', () => frame.classList.add('artwork-fallback-active'), { once: true });
      frame.appendChild(image);
    }

    const fallback = document.createElement('span');
    fallback.className = 'achievement-emblem-fallback';
    fallback.textContent = unlocked ? (artwork?.fallback || '★') : '🔒';
    frame.appendChild(fallback);
    return frame;
  }

  function setAvatarArt(element, avatarId) {
    const avatar = getAvatar(avatarId);
    element.innerHTML = '';
    if (avatar.src) {
      const image = createArtworkImage(avatar.src, '', 'avatar-image');
      image.setAttribute('aria-hidden', 'true');
      image.addEventListener('error', () => {
        element.innerHTML = getAvatarSvg(AVATARS[0].id);
        element.classList.add('artwork-fallback-active');
      }, { once: true });
      element.appendChild(image);
    } else {
      element.innerHTML = getAvatarSvg(avatar.id);
    }
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
    setActionButtonLabel(addProfileButton, addProfileButton.disabled
      ? 'HAD 5 PROFIL DICAPAI'
      : 'TAMBAH PROFIL');

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
      const nextRank = getNextRank(rank);
      status.className = 'profile-rank';
      status.textContent = `Tahap ${rank.level} • ${rank.name}`;

      const rankRow = document.createElement('div');
      rankRow.className = 'profile-rank-row';
      rankRow.append(createRankArtwork(rank, 'rank-emblem--profile'), status);

      const jejak = document.createElement('span');
      jejak.className = 'profile-jejak';
      jejak.textContent = `${progress.totalJejak} Jejak Helang`;

      const rankProgress = document.createElement('div');
      rankProgress.className = 'profile-rank-progress';
      const rankProgressFill = document.createElement('span');
      const rankProgressText = document.createElement('small');
      if (nextRank) {
        const range = nextRank.threshold - rank.threshold;
        const earnedInRank = progress.totalJejak - rank.threshold;
        const percentage = Math.max(0, Math.min(100, (earnedInRank / range) * 100));
        rankProgressFill.style.width = `${percentage}%`;
        rankProgressText.textContent = `${nextRank.threshold - progress.totalJejak} Jejak lagi ke Tahap ${nextRank.level}`;
      } else {
        rankProgress.classList.add('profile-rank-progress--complete');
        rankProgressFill.style.width = '100%';
        rankProgressText.textContent = 'Tahap tertinggi dicapai';
      }
      rankProgress.append(rankProgressFill);
      details.append(name, rankRow, jejak, rankProgress, rankProgressText);

      const controls = document.createElement('div');
      controls.className = 'profile-card-controls';

      const playButton = document.createElement('button');
      playButton.className = 'profile-play-button';
      playButton.type = 'button';
      playButton.textContent = 'MAIN';
      playButton.setAttribute('aria-label', `Main sebagai ${profile.nickname}`);
      decorateActionButton(playButton, 'main');
      playButton.addEventListener('click', () => selectProfile(profile.id));

      const editButton = document.createElement('button');
      editButton.className = 'profile-icon-button';
      editButton.type = 'button';
      editButton.textContent = 'UBAH';
      editButton.setAttribute('aria-label', `Ubah profil ${profile.nickname}`);
      decorateActionButton(editButton, 'edit');
      editButton.addEventListener('click', () => openProfileEditor(profile.id));

      const deleteButton = document.createElement('button');
      deleteButton.className = 'profile-icon-button profile-delete-button';
      deleteButton.type = 'button';
      deleteButton.textContent = 'PADAM';
      deleteButton.setAttribute('aria-label', `Padam profil ${profile.nickname}`);
      decorateActionButton(deleteButton, 'delete');
      deleteButton.addEventListener('click', () => requestProfileDeletion(profile.id));

      const collectionButton = document.createElement('button');
      collectionButton.className = 'profile-icon-button profile-collection-button';
      collectionButton.type = 'button';
      collectionButton.textContent = 'KOLEKSI';
      collectionButton.setAttribute('aria-label', `Buka Koleksi Kata Raka ${profile.nickname}`);
      decorateActionButton(collectionButton, 'collection');
      collectionButton.addEventListener('click', () => (
        showKataRakaGallery(playerScreen, profile.id)
      ));

      controls.append(playButton, collectionButton, editButton, deleteButton);
      card.append(avatar, details, controls);
      profileList.appendChild(card);
    });
  }

  function renderAvatarOptions() {
    avatarOptions.innerHTML = '';

    getSelectableAvatars().forEach((avatar) => {
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
    selectedAvatarId = profile ? profile.avatarId : PREMIUM_AVATAR_ASSET_PLAN[0].id;
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
    deleteConfirmationText.textContent = `Profil “${profile.nickname}”, kemajuan Jejak Helang dan Koleksi Kata Raka akan dipadam. Tindakan ini tidak boleh dibatalkan.`;
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
    delete kataRakaData.byProfileId[deletedProfileId];
    saveProfiles();
    saveProgression();
    saveKataRaka();
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
      galleryScreen,
      categoryScreen,
      modeScreen,
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
    const newlyUnlockedIds = syncActiveKataRakaUnlocks();
    renderRetroactiveUnlockSummary(newlyUnlockedIds);
    updateActivePlayerLabel();
    showScreen(ageScreen);
  }

  function showCategoryScreen() {
    selectedAgeLabel.textContent = `Umur: ${selectedAge}`;
    showScreen(categoryScreen);
  }

  function showModeScreen() {
    modeSelectionLabel.textContent = `Umur: ${selectedAge} | Kategori: ${selectedCategory}`;
    modeButtons.forEach((button) => {
      const isSelected = button.dataset.mode === selectedGameMode;
      button.classList.toggle('selected', isSelected);
      button.setAttribute('aria-pressed', String(isSelected));
    });
    showScreen(modeScreen);
  }

  function showCategoryMessage(message) {
    categoryMessage.textContent = message;
  }

  function closeExitConfirmation() {
    exitConfirmation.classList.add('hidden');
    document.body.classList.remove('modal-open');
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
    window.clearTimeout(chainTransitionTimer);
    chainTransitionTimer = null;
    chainTransitioning = false;
    wordGrid.classList.remove('word-grid--transitioning');
    exitConfirmation.classList.add('hidden');
    document.body.classList.remove('modal-open');
    showCategoryScreen();
  }

  function requestGameplayExit() {
    if (foundWords.size === getTargetWords().length) {
      showCategoryScreen();
      return;
    }

    // A modal or navigation change must never leave a half-finished drag active.
    resetActivePointer();
    exitConfirmation.classList.remove('hidden');
    document.body.classList.add('modal-open');
    continueGameButton.focus();
  }

  function handleExitConfirmationKeydown(event) {
    if (exitConfirmation.classList.contains('hidden')) {
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      closeExitConfirmation();
      return;
    }

    if (event.key !== 'Tab') {
      return;
    }

    const focusable = [continueGameButton, exitGameButton];
    const currentIndex = focusable.indexOf(document.activeElement);
    const nextIndex = event.shiftKey
      ? (currentIndex <= 0 ? focusable.length - 1 : currentIndex - 1)
      : (currentIndex === focusable.length - 1 ? 0 : currentIndex + 1);
    event.preventDefault();
    focusable[nextIndex].focus();
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

  function buildBoard(targetWords, config, maximumAttempts = 100) {
    let generatedPuzzle = null;

    // Restart with an empty grid if random placements block a later word.
    for (let boardAttempt = 0; boardAttempt < maximumAttempts && !generatedPuzzle; boardAttempt += 1) {
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

  function getChainPlacementCandidates(word, config, plannedLetters, minimumNewCells) {
    const candidates = [];
    const orientations = config.reverse
      ? [
          { letters: word, reversed: false },
          { letters: word.split('').reverse().join(''), reversed: true }
        ]
      : [{ letters: word, reversed: false }];

    orientations.forEach(({ letters, reversed }) => {
      config.directions.forEach((directionName) => {
        const direction = DIRECTIONS[directionName];
        for (let row = 0; row < config.gridSize; row += 1) {
          for (let col = 0; col < config.gridSize; col += 1) {
            const endRow = row + direction.row * (letters.length - 1);
            const endCol = col + direction.col * (letters.length - 1);
            if (
              endRow < 0 || endRow >= config.gridSize
              || endCol < 0 || endCol >= config.gridSize
            ) {
              continue;
            }

            const cells = [];
            let compatible = true;
            let newCellCount = 0;
            for (let index = 0; index < letters.length; index += 1) {
              const nextRow = row + direction.row * index;
              const nextCol = col + direction.col * index;
              const key = getCellKey(nextRow, nextCol);
              const existingLetter = plannedLetters.get(key);
              if (existingLetter && existingLetter !== letters[index]) {
                compatible = false;
                break;
              }
              if (!existingLetter) {
                newCellCount += 1;
              }
              cells.push({ row: nextRow, col: nextCol, letter: letters[index] });
            }

            if (compatible && newCellCount >= minimumNewCells) {
              candidates.push({ cells, reversed, newCellCount });
            }
          }
        }
      });
    });

    return shuffleWords(candidates);
  }

  function planChainPaths(targetWords, config, minimumNewCells) {
    const plannedLetters = new Map();
    const cellsByWord = {};
    const introducedCellsByWord = {};
    const reversedWords = new Set();
    let visitedNodes = 0;

    const placeNextWord = (wordIndex) => {
      if (wordIndex === targetWords.length) {
        return !config.reverse || reversedWords.size > 0;
      }
      if (visitedNodes >= 5000) {
        return false;
      }

      const word = targetWords[wordIndex];
      const candidates = getChainPlacementCandidates(
        word,
        config,
        plannedLetters,
        minimumNewCells
      ).slice(0, 240);

      for (const candidate of candidates) {
        visitedNodes += 1;
        const addedKeys = [];
        candidate.cells.forEach((cell) => {
          const key = getCellKey(cell.row, cell.col);
          if (!plannedLetters.has(key)) {
            plannedLetters.set(key, cell.letter);
            addedKeys.push(key);
          }
        });
        cellsByWord[word] = candidate.cells.map(({ row, col }) => ({ row, col }));
        introducedCellsByWord[word] = candidate.newCellCount;
        if (candidate.reversed) {
          reversedWords.add(word);
        }

        if (placeNextWord(wordIndex + 1)) {
          return true;
        }

        addedKeys.forEach((key) => plannedLetters.delete(key));
        delete cellsByWord[word];
        delete introducedCellsByWord[word];
        reversedWords.delete(word);
      }
      return false;
    };

    if (!placeNextWord(0)) {
      return null;
    }

    return {
      cellsByWord,
      introducedCellsByWord,
      reversedWords,
      visitedNodes
    };
  }

  function getRandomLetterExcept(excludedLetters) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const availableLetters = [...letters].filter((letter) => !excludedLetters.has(letter));
    return availableLetters[Math.floor(Math.random() * availableLetters.length)];
  }

  function buildChainFrames(targetWords, pathPlan, config) {
    const frames = [];
    const lockedLetters = new Map();

    for (let stageIndex = 0; stageIndex < targetWords.length; stageIndex += 1) {
      const activeWord = targetWords[stageIndex];
      const activeCells = pathPlan.cellsByWord[activeWord];
      const previousFrame = frames[stageIndex - 1] || null;
      const lockedAfterStage = new Set(lockedLetters.keys());
      activeCells.forEach((cell) => lockedAfterStage.add(getCellKey(cell.row, cell.col)));
      const nextWord = targetWords[stageIndex + 1];
      const nextLettersByCell = new Map();
      if (nextWord) {
        const placedNextWord = pathPlan.reversedWords.has(nextWord)
          ? nextWord.split('').reverse().join('')
          : nextWord;
        pathPlan.cellsByWord[nextWord].forEach((cell, index) => {
          const key = getCellKey(cell.row, cell.col);
          if (!lockedAfterStage.has(key)) {
            nextLettersByCell.set(key, placedNextWord[index]);
          }
        });
      }

      let acceptedFrame = null;
      for (let frameAttempt = 0; frameAttempt < 120 && !acceptedFrame; frameAttempt += 1) {
        const board = Array.from(
          { length: config.gridSize },
          () => Array(config.gridSize).fill('')
        );
        lockedLetters.forEach((letter, key) => {
          const [row, col] = key.split(',').map(Number);
          board[row][col] = letter;
        });

        const placedActiveWord = pathPlan.reversedWords.has(activeWord)
          ? activeWord.split('').reverse().join('')
          : activeWord;
        let activeWordFitsTransition = true;
        activeCells.forEach((cell, index) => {
          const key = getCellKey(cell.row, cell.col);
          const letter = placedActiveWord[index];
          if (
            previousFrame
            && !lockedLetters.has(key)
            && previousFrame[cell.row][cell.col] === letter
          ) {
            activeWordFitsTransition = false;
          }
          board[cell.row][cell.col] = letter;
        });
        if (!activeWordFitsTransition) {
          return null;
        }

        for (let row = 0; row < config.gridSize; row += 1) {
          for (let col = 0; col < config.gridSize; col += 1) {
            if (board[row][col]) {
              continue;
            }
            const key = getCellKey(row, col);
            const excludedLetters = new Set();
            if (previousFrame && !lockedLetters.has(key)) {
              excludedLetters.add(previousFrame[row][col]);
            }
            if (nextLettersByCell.has(key)) {
              excludedLetters.add(nextLettersByCell.get(key));
            }
            board[row][col] = getRandomLetterExcept(excludedLetters);
          }
        }

        if (getWordOccurrences(board, activeWord, config).size === 1) {
          acceptedFrame = board;
        }
      }

      if (!acceptedFrame) {
        return null;
      }
      frames.push(acceptedFrame);

      const placedActiveWord = pathPlan.reversedWords.has(activeWord)
        ? activeWord.split('').reverse().join('')
        : activeWord;
      activeCells.forEach((cell, index) => {
        lockedLetters.set(getCellKey(cell.row, cell.col), placedActiveWord[index]);
      });
    }

    return frames;
  }

  function chainPlanIsValid(targetWords, pathPlan, frames, config) {
    if (!frames || frames.length !== targetWords.length) {
      return false;
    }
    const lockedKeys = new Set();

    return targetWords.every((word, stageIndex) => {
      const frame = frames[stageIndex];
      const cells = pathPlan.cellsByWord[word];
      const pathText = cells.map((cell) => frame[cell.row][cell.col]).join('');
      if (
        pathText !== word
        && pathText !== word.split('').reverse().join('')
        || getWordOccurrences(frame, word, config).size !== 1
      ) {
        return false;
      }

      if (stageIndex > 0) {
        const previousFrame = frames[stageIndex - 1];
        for (let row = 0; row < config.gridSize; row += 1) {
          for (let col = 0; col < config.gridSize; col += 1) {
            const key = getCellKey(row, col);
            if (lockedKeys.has(key)) {
              if (frame[row][col] !== previousFrame[row][col]) {
                return false;
              }
            } else if (frame[row][col] === previousFrame[row][col]) {
              return false;
            }
          }
        }
      }

      cells.forEach((cell) => lockedKeys.add(getCellKey(cell.row, cell.col)));
      return true;
    });
  }

  function buildChainPuzzle(config) {
    for (let wordSetAttempt = 0; wordSetAttempt < 24; wordSetAttempt += 1) {
      const targetWords = chooseTargetWords(selectedCategory, config);
      if (targetWords.length !== config.wordCount) {
        continue;
      }

      for (let planAttempt = 0; planAttempt < 8; planAttempt += 1) {
        const pathPlan = planChainPaths(targetWords, config, 2)
          || planChainPaths(targetWords, config, 1);
        if (!pathPlan) {
          continue;
        }
        const frames = buildChainFrames(targetWords, pathPlan, config);
        if (chainPlanIsValid(targetWords, pathPlan, frames, config)) {
          return {
            targetWords,
            ...pathPlan,
            frames,
            wordSetAttempts: wordSetAttempt + 1,
            planAttempts: planAttempt + 1
          };
        }
      }
    }
    return null;
  }

  function getCellKey(row, col) {
    return `${row},${col}`;
  }

  function buildHiddenCellMask(generatedPuzzle, targetWords, config) {
    const hiddenCount = Math.round(
      config.gridSize * config.gridSize * config.hiddenPercentage
    );
    const targetHiddenQuota = Math.floor(hiddenCount / 2);
    const fillerHiddenQuota = hiddenCount - targetHiddenQuota;
    const targetCells = new Map();

    targetWords.forEach((word) => {
      generatedPuzzle.cellsByWord[word].forEach((cell, index) => {
        const key = getCellKey(cell.row, cell.col);
        const memberships = targetCells.get(key) || [];
        memberships.push({ word, index });
        targetCells.set(key, memberships);
      });
    });

    const fillerKeys = [];
    for (let row = 0; row < config.gridSize; row += 1) {
      for (let col = 0; col < config.gridSize; col += 1) {
        const key = getCellKey(row, col);
        if (!targetCells.has(key)) {
          fillerKeys.push(key);
        }
      }
    }

    const minimumCoveredWords = Math.min(targetHiddenQuota, targetWords.length);

    // Retry a shuffled, constraint-aware mask without ever changing board letters.
    for (let attempt = 0; attempt < 40; attempt += 1) {
      const selected = new Set();
      const coveredWords = new Set();
      const hiddenCountByWord = new Map(targetWords.map((word) => [word, 0]));

      const canHideTargetCell = (key) => {
        const memberships = targetCells.get(key) || [];
        return memberships.every(({ word, index }) => {
          if (hiddenCountByWord.get(word) >= word.length - 2) {
            return false;
          }
          const wordCells = generatedPuzzle.cellsByWord[word];
          return !wordCells.some((cell, cellIndex) => (
            Math.abs(cellIndex - index) === 1
            && selected.has(getCellKey(cell.row, cell.col))
          ));
        });
      };

      const addTargetCell = (key) => {
        if (selected.has(key) || !canHideTargetCell(key)) {
          return false;
        }
        selected.add(key);
        (targetCells.get(key) || []).forEach(({ word }) => {
          hiddenCountByWord.set(word, hiddenCountByWord.get(word) + 1);
          coveredWords.add(word);
        });
        return true;
      };

      // First spread hidden letters across different target words.
      shuffleWords(targetWords).forEach((word) => {
        if (selected.size >= targetHiddenQuota || coveredWords.has(word)) {
          return;
        }
        const candidates = shuffleWords(
          generatedPuzzle.cellsByWord[word].map((cell) => getCellKey(cell.row, cell.col))
        );
        candidates.some((key) => addTargetCell(key));
      });

      // Then add a modest number of extra target cells while avoiding neighbours.
      const remainingTargetCells = shuffleWords([...targetCells.keys()]);
      for (const key of remainingTargetCells) {
        if (selected.size >= targetHiddenQuota) {
          break;
        }
        addTargetCell(key);
      }

      if (
        selected.size !== targetHiddenQuota
        || coveredWords.size < minimumCoveredWords
      ) {
        continue;
      }

      // Filler coordinates are shuffled independently and never overlap a word path.
      const selectedFillerKeys = shuffleWords(fillerKeys).slice(0, fillerHiddenQuota);
      if (selectedFillerKeys.length !== fillerHiddenQuota) {
        continue;
      }

      if (fillerHiddenQuota > 1) {
        const fillerRows = new Set(selectedFillerKeys.map((key) => key.split(',')[0]));
        const fillerCols = new Set(selectedFillerKeys.map((key) => key.split(',')[1]));
        if (fillerRows.size < 2 || fillerCols.size < 2) {
          continue;
        }
      }

      const filler = new Set(selectedFillerKeys);
      return {
        all: new Set([...selected, ...filler]),
        target: selected,
        filler
      };
    }

    return null;
  }

  function buildHiddenPuzzle(config) {
    // A failed mask causes a bounded full-board retry, never a weakened puzzle.
    for (let attempt = 0; attempt < 20; attempt += 1) {
      const targetWords = chooseTargetWords(selectedCategory, config);
      const generatedPuzzle = buildBoard(targetWords, config);
      if (!generatedPuzzle || targetWords.length !== config.wordCount) {
        continue;
      }
      const hiddenMask = buildHiddenCellMask(generatedPuzzle, targetWords, config);
      if (hiddenMask) {
        return { targetWords, generatedPuzzle, hiddenMask };
      }
    }
    return null;
  }

  function buildCombinedPuzzle(config) {
    // Combined mode accepts only a fully validated Secret board with a valid mask.
    for (let attempt = 0; attempt < 8; attempt += 1) {
      const secretResult = buildSecretPuzzle(config);
      if (!secretResult) {
        continue;
      }
      const hiddenMask = buildHiddenCellMask(
        secretResult.generatedPuzzle,
        secretResult.targetWords,
        config
      );
      if (hiddenMask) {
        return { ...secretResult, hiddenMask, combinedAttempts: attempt + 1 };
      }
    }
    return null;
  }

  function getSearchDirections(config) {
    const directions = [];
    config.directions.forEach((directionName) => {
      const direction = DIRECTIONS[directionName];
      directions.push(direction, { row: -direction.row, col: -direction.col });
    });
    return directions;
  }

  function getWordOccurrences(board, word, config) {
    const occurrences = new Set();
    const directions = getSearchDirections(config);

    for (let row = 0; row < config.gridSize; row += 1) {
      for (let col = 0; col < config.gridSize; col += 1) {
        directions.forEach((direction) => {
          const cells = [];
          for (let index = 0; index < word.length; index += 1) {
            const nextRow = row + direction.row * index;
            const nextCol = col + direction.col * index;
            if (
              nextRow < 0 || nextRow >= config.gridSize
              || nextCol < 0 || nextCol >= config.gridSize
              || board[nextRow][nextCol] !== word[index]
            ) {
              return;
            }
            cells.push(`${nextRow},${nextCol}`);
          }

          // Reading the same path from its other end is one occurrence.
          occurrences.add([...cells].sort().join('|'));
        });
      }
    }

    return occurrences;
  }

  function secretPuzzleIsFair(generatedPuzzle, targetWords, config) {
    const targetSet = new Set(targetWords);
    const eligibleWords = getEligibleWords(selectedCategory, config);

    return eligibleWords.every((word) => {
      const occurrenceCount = getWordOccurrences(
        generatedPuzzle.board,
        word,
        config
      ).size;
      return targetSet.has(word) ? occurrenceCount === 1 : occurrenceCount === 0;
    });
  }

  function buildSecretPuzzle(config) {
    const eligibleWords = getEligibleWords(selectedCategory, config);
    const secretCandidateWords = eligibleWords.filter((word) => (
      !eligibleWords.some((otherWord) => (
        otherWord !== word && word.includes(otherWord)
      ))
    ));

    if (secretCandidateWords.length < config.wordCount) {
      return null;
    }

    // Bounded retries prevent accidental bank words without risking a frozen UI.
    for (let setAttempt = 0; setAttempt < 16; setAttempt += 1) {
      const targetWords = chooseTargetWords(
        selectedCategory,
        config,
        secretCandidateWords
      );
      if (targetWords.length !== config.wordCount) {
        continue;
      }

      for (let boardAttempt = 0; boardAttempt < 6; boardAttempt += 1) {
        const generatedPuzzle = buildBoard(targetWords, config, 12);
        if (generatedPuzzle && secretPuzzleIsFair(generatedPuzzle, targetWords, config)) {
          return {
            targetWords,
            generatedPuzzle,
            secretWordSetAttempts: setAttempt + 1,
            secretBoardAttempts: (setAttempt * 6) + boardAttempt + 1
          };
        }
      }
    }

    return null;
  }

  function renderWordList() {
    wordList.innerHTML = '';

    const isDiscoveryMode = ['secret', 'combined'].includes(selectedGameMode);
    const isChainMode = selectedGameMode === 'chain';
    wordPanel.classList.toggle('word-panel--secret', isDiscoveryMode);
    wordPanel.classList.toggle('word-panel--chain', isChainMode);
    wordListTitle.textContent = isChainMode
      ? 'KATA DITEMUI'
      : isDiscoveryMode
        ? 'PENEMUAN'
        : 'Senarai Kata';
    secretProgress.classList.toggle('hidden', !isDiscoveryMode);
    secretProgress.replaceChildren();
    if (isDiscoveryMode) {
      const progressNumber = document.createElement('strong');
      const progressLabel = document.createElement('span');
      progressNumber.textContent = `${foundWords.size}/${getTargetWords().length}`;
      progressLabel.textContent = 'Ditemui';
      secretProgress.append(progressNumber, progressLabel);
      secretProgress.setAttribute(
        'aria-label',
        `${foundWords.size} daripada ${getTargetWords().length} kata ditemui`
      );
    } else {
      secretProgress.removeAttribute('aria-label');
    }
    wordList.setAttribute(
      'aria-label',
      isChainMode
        ? 'Sejarah kata rantaian yang telah ditemui'
        : isDiscoveryMode
          ? 'Kata rahsia yang telah ditemui'
          : 'Senarai kata'
    );

    if (isChainMode) {
      const completedWords = getTargetWords().filter((word) => foundWords.has(word));
      if (!completedWords.length) {
        const emptyItem = document.createElement('li');
        emptyItem.className = 'chain-history-empty';
        emptyItem.textContent = 'Belum ada kata ditemui.';
        wordList.appendChild(emptyItem);
        return;
      }

      completedWords.forEach((word) => {
        const item = document.createElement('li');
        const wordLabel = getWordLabel(word);
        const color = wordColors.get(word);
        item.className = 'word-item completed';
        item.textContent = wordLabel;
        item.setAttribute('aria-label', `${wordLabel} ditemui`);
        if (wordLabel.length > 7 || /[\s-]/.test(wordLabel)) {
          item.classList.add('word-item--wide');
        }
        if (color) {
          item.style.setProperty('--word-color', color.background);
          item.style.setProperty('--word-border', color.border);
        }
        wordList.appendChild(item);
      });
      return;
    }

    getTargetWords().forEach((word) => {
      const item = document.createElement('li');
      const wordLabel = getWordLabel(word);
      item.className = 'word-item';

      if (isDiscoveryMode && !foundWords.has(word)) {
        item.classList.add('mystery-slot');
        item.textContent = '?';
        item.setAttribute('aria-label', 'Kata rahsia belum ditemui');
        wordList.appendChild(item);
        return;
      }

      item.textContent = wordLabel;

      if (foundWords.has(word)) {
        // Keep longer or naturally separated labels readable in the two-column panel.
        if (wordLabel.length > 7 || /[\s-]/.test(wordLabel)) {
          item.classList.add('word-item--wide');
        }

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

  function renderHints() {
    const isCombinedMode = selectedGameMode === 'combined';
    hintPanel.classList.toggle('hidden', !isCombinedMode);
    hintList.innerHTML = '';

    if (!isCombinedMode) {
      hintStatus.textContent = '';
      return;
    }

    const activeHints = [...hintedWords].filter((word) => !foundWords.has(word));
    hintHelper.classList.toggle('hidden', activeHints.length > 0);

    activeHints.forEach((word, index) => {
      const item = document.createElement('li');
      item.className = 'hint-card';
      const title = document.createElement('strong');
      const text = document.createElement('p');
      const firstLetter = document.createElement('span');
      const wordLength = document.createElement('span');

      title.textContent = `Petunjuk ${index + 1}`;
      firstLetter.className = 'hint-emphasis';
      firstLetter.textContent = word[0];
      wordLength.className = 'hint-emphasis';
      wordLength.textContent = String(word.length);
      text.append(
        'Salah satu kata bermula dengan ',
        firstLetter,
        '. Panjangnya ',
        wordLength,
        ' huruf.'
      );
      item.append(title, text);
      hintList.appendChild(item);
    });
  }

  function renderChainPanel() {
    const isChainMode = selectedGameMode === 'chain';
    chainPanel.classList.toggle('hidden', !isChainMode);
    if (!isChainMode || !chainPlan) {
      chainStatus.textContent = '';
      return;
    }

    const totalWords = getTargetWords().length;
    const isComplete = foundWords.size === totalWords;
    chainTarget.textContent = isComplete
      ? 'RANTAIAN LENGKAP!'
      : getWordLabel(getTargetWords()[chainStageIndex]);
    chainStage.textContent = isComplete
      ? `Rantaian ${totalWords} daripada ${totalWords}`
      : `Rantaian ${chainStageIndex + 1} daripada ${totalWords}`;
    chainProgress.textContent = `${foundWords.size}/${totalWords} selesai`;
    chainProgressFill.style.width = `${(foundWords.size / totalWords) * 100}%`;
    chainProgressFill.parentElement.setAttribute('role', 'progressbar');
    chainProgressFill.parentElement.setAttribute('aria-valuemin', '0');
    chainProgressFill.parentElement.setAttribute('aria-valuemax', String(totalWords));
    chainProgressFill.parentElement.setAttribute('aria-valuenow', String(foundWords.size));
    chainProgressFill.parentElement.setAttribute(
      'aria-label',
      `${foundWords.size} daripada ${totalWords} kata rantaian selesai`
    );
    if (isComplete) {
      chainStatus.textContent = 'Semua kata rantaian ditemui.';
    }
  }

  function requestHint() {
    if (selectedGameMode !== 'combined') {
      return;
    }

    const availableWords = getTargetWords().filter((word) => (
      !foundWords.has(word) && !hintedWords.has(word)
    ));
    if (!availableWords.length) {
      hintStatus.textContent = 'Semua petunjuk untuk kata yang belum ditemui telah dipaparkan.';
      return;
    }

    const word = availableWords[Math.floor(Math.random() * availableWords.length)];
    hintedWords.add(word);
    hintStatus.textContent = 'Petunjuk baharu daripada Raka.';
    renderHints();
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
    const row = Number(cell.dataset.row);
    const col = Number(cell.dataset.col);

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
      `${puzzle.board[row][col]}, ditemui dalam ${details.map((detail) => getWordLabel(detail.word)).join(' dan ')}`
    );
  }

  function revealHiddenCell(cell, row, col) {
    const key = getCellKey(row, col);
    if (!hiddenCellKeys.has(key) || revealedHiddenCellKeys.has(key)) {
      return;
    }

    revealedHiddenCellKeys.add(key);
    cell.classList.remove('cell--hidden');
    cell.classList.add('cell--revealed');
    cell.textContent = puzzle.board[row][col];
    cell.setAttribute('aria-label', `${puzzle.board[row][col]}, baris ${row + 1}, lajur ${col + 1}`);
  }

  function revealRemainingFillerCells() {
    fillerHiddenCellKeys.forEach((key) => {
      if (revealedHiddenCellKeys.has(key)) {
        return;
      }
      const [row, col] = key.split(',').map(Number);
      const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
      if (cell) {
        revealHiddenCell(cell, row, col);
      }
    });
  }

  function applyChainFrame(stageIndex) {
    if (!chainPlan?.frames[stageIndex]) {
      return;
    }

    const nextBoard = chainPlan.frames[stageIndex];
    const lockedKeys = new Set();
    foundWords.forEach((word) => {
      puzzle.cellsByWord[word].forEach((cell) => {
        lockedKeys.add(getCellKey(cell.row, cell.col));
      });
    });

    puzzle.board = nextBoard.map((row) => [...row]);
    wordGrid.querySelectorAll('.cell').forEach((cell) => {
      const row = Number(cell.dataset.row);
      const col = Number(cell.dataset.col);
      if (lockedKeys.has(getCellKey(row, col))) {
        return;
      }
      cell.textContent = puzzle.board[row][col];
      cell.setAttribute(
        'aria-label',
        `${puzzle.board[row][col]}, baris ${row + 1}, lajur ${col + 1}`
      );
    });
  }

  function beginChainTransition() {
    const transitionPuzzleId = currentPuzzleId;
    chainTransitioning = true;
    chainStatus.textContent = 'Bagus! Papan sedang berubah untuk sasaran seterusnya.';
    chainTarget.textContent = 'PAPAN SEDANG BERUBAH…';
    wordGrid.classList.add('word-grid--transitioning');
    clearSelection();

    const updateBoard = () => {
      if (currentPuzzleId !== transitionPuzzleId || selectedGameMode !== 'chain') {
        return;
      }
      chainStageIndex += 1;
      applyChainFrame(chainStageIndex);
      renderChainPanel();
      chainStatus.textContent = `Sasaran ${chainStageIndex + 1} sudah tersedia.`;
    };
    const finishTransition = () => {
      if (currentPuzzleId !== transitionPuzzleId || selectedGameMode !== 'chain') {
        return;
      }
      wordGrid.classList.remove('word-grid--transitioning');
      chainTransitioning = false;
      chainTransitionTimer = null;
    };

    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true;
    window.clearTimeout(chainTransitionTimer);
    if (reducedMotion) {
      updateBoard();
      finishTransition();
      return;
    }
    chainTransitionTimer = window.setTimeout(() => {
      updateBoard();
      chainTransitionTimer = window.setTimeout(finishTransition, 250);
    }, 250);
  }

  function clearSelection() {
    document.querySelectorAll('.cell').forEach((cell) => {
      cell.classList.remove('selected');
    });
    currentSelection = [];
  }

  function resetActivePointer(releaseCapture = true) {
    clearSelection();
    if (
      releaseCapture
      && activePointerId !== null
      && wordGrid.hasPointerCapture?.(activePointerId)
    ) {
      wordGrid.releasePointerCapture(activePointerId);
    }
    isDragging = false;
    activePointerId = null;
    dragStartCell = null;
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
          revealHiddenCell(cell, row, col);
          applyFoundCellColor(cell, word, color);
        }
      });
    }

    renderWordList();
    renderHints();
    renderChainPanel();

    victorySummary.textContent = `${foundWords.size}/${getTargetWords().length} kata ditemui`;

    if (selectedGameMode === 'chain' && foundWords.size < getTargetWords().length) {
      beginChainTransition();
      return true;
    }

    if (foundWords.size === getTargetWords().length) {
      const reward = awardPuzzleCompletion();
      renderVictoryProgress(reward);
      victoryPanel.classList.remove('hidden');
      gameMenuButton.classList.add('hidden');
      revealRemainingFillerCells();
      const newlyUnlockedCardIds = reward?.newlyUnlockedCardIds || [];
      if (newlyUnlockedCardIds.length) {
        openCardReveal(newlyUnlockedCardIds, 'unlock');
      } else if (reward?.randomPosterCardId) {
        openCardReveal([reward.randomPosterCardId], 'poster');
      }
    }

    return true;
  }

  function finishSelection(event) {
    if (!isDragging || chainTransitioning) {
      return;
    }

    if (event && activePointerId !== null && event.pointerId !== activePointerId) {
      return;
    }

    const selectableWords = selectedGameMode === 'chain'
      ? [getTargetWords()[chainStageIndex]]
      : getTargetWords();
    const matchedWord = selectableWords.find((word) => (
      selectionsMatch(currentSelection, puzzle.cellsByWord[word])
    ));

    clearSelection();

    if (matchedWord) {
      if (markWordAsFound(matchedWord)) {
        showFeedback(
          ['secret', 'combined'].includes(selectedGameMode)
            ? `Hebat! ${getWordLabel(matchedWord)} ditemui!`
            : selectedGameMode === 'chain'
              ? 'Betul! Papan berubah…'
              : 'Betul!',
          'success'
        );
      } else {
        showFeedback('Kata ini sudah ditemui.', 'neutral');
      }
    } else {
      showFeedback(
        ['secret', 'combined'].includes(selectedGameMode)
          ? 'Belum tepat. Cuba laluan lain.'
          : 'Cuba lagi',
        ['secret', 'combined'].includes(selectedGameMode) ? 'neutral' : 'retry'
      );
    }

    resetActivePointer();
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

    let generatedPuzzle = null;
    let generatedHiddenMask = new Set();
    let generatedTargetHiddenMask = new Set();
    let generatedFillerHiddenMask = new Set();
    let generatedChainPlan = null;
    if (selectedGameMode === 'secret') {
      const secretResult = buildSecretPuzzle(config);
      currentTargetWords = secretResult?.targetWords || [];
      generatedPuzzle = secretResult?.generatedPuzzle || null;
    } else if (selectedGameMode === 'combined') {
      const combinedResult = buildCombinedPuzzle(config);
      currentTargetWords = combinedResult?.targetWords || [];
      generatedPuzzle = combinedResult?.generatedPuzzle || null;
      generatedHiddenMask = combinedResult?.hiddenMask.all || new Set();
      generatedTargetHiddenMask = combinedResult?.hiddenMask.target || new Set();
      generatedFillerHiddenMask = combinedResult?.hiddenMask.filler || new Set();
    } else if (selectedGameMode === 'hidden') {
      const hiddenResult = buildHiddenPuzzle(config);
      currentTargetWords = hiddenResult?.targetWords || [];
      generatedPuzzle = hiddenResult?.generatedPuzzle || null;
      generatedHiddenMask = hiddenResult?.hiddenMask.all || new Set();
      generatedTargetHiddenMask = hiddenResult?.hiddenMask.target || new Set();
      generatedFillerHiddenMask = hiddenResult?.hiddenMask.filler || new Set();
    } else if (selectedGameMode === 'chain') {
      generatedChainPlan = buildChainPuzzle(config);
      currentTargetWords = generatedChainPlan?.targetWords || [];
      generatedPuzzle = generatedChainPlan
        ? {
            board: generatedChainPlan.frames[0],
            cellsByWord: generatedChainPlan.cellsByWord,
            reversedWords: generatedChainPlan.reversedWords
          }
        : null;
    } else {
      currentTargetWords = chooseTargetWords(selectedCategory, config);
      generatedPuzzle = buildBoard(currentTargetWords, config);
    }

    if (!generatedPuzzle || currentTargetWords.length !== config.wordCount) {
      showCategoryMessage(
        selectedGameMode === 'secret'
          ? 'Papan rahsia yang adil tidak dapat dibina. Sila pilih mod semula.'
          : selectedGameMode === 'combined'
            ? 'Papan misteri berganda yang adil tidak dapat dibina. Sila pilih mod semula.'
          : selectedGameMode === 'hidden'
            ? 'Papan huruf tersembunyi tidak dapat dibina. Sila cuba lagi.'
            : selectedGameMode === 'chain'
              ? 'Rantaian lengkap tidak dapat dirancang. Sila cuba mod ini semula.'
            : 'Papan tidak dapat dibina. Cuba lagi.'
      );
      showCategoryScreen();
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
    hiddenCellKeys = new Set(generatedHiddenMask);
    targetHiddenCellKeys = new Set(generatedTargetHiddenMask);
    fillerHiddenCellKeys = new Set(generatedFillerHiddenMask);
    revealedHiddenCellKeys = new Set();
    hintedWords = new Set();
    chainPlan = generatedChainPlan;
    chainStageIndex = 0;
    chainTransitioning = false;
    window.clearTimeout(chainTransitionTimer);
    chainTransitionTimer = null;
    wordGrid.classList.remove('word-grid--transitioning');
    chainStatus.textContent = '';
    hintStatus.textContent = '';
    assignWordColors();
    resetActivePointer();
    clearFeedback();
    victoryPanel.classList.add('hidden');
    victoryTitle.textContent = selectedGameMode === 'chain' ? 'RANTAIAN LENGKAP!' : 'TAHNIAH!';
    victorySummary.textContent = `0/${getTargetWords().length} kata ditemui`;
    victoryProgress.classList.remove('hidden');
    victoryJejakEarned.textContent = '';
    victoryBonusList.innerHTML = '';
    victoryTotalJejak.textContent = '';
    victoryPromotion.textContent = '';
    victoryBadges.innerHTML = '';
    renderVictoryRakaCards([]);
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
        const cellKey = getCellKey(row, col);
        if (['hidden', 'combined'].includes(selectedGameMode) && hiddenCellKeys.has(cellKey)) {
          cell.classList.add('cell--hidden');
          cell.textContent = '?';
          cell.setAttribute(
            'aria-label',
            `Huruf tersembunyi, baris ${row + 1}, lajur ${col + 1}`
          );
        } else {
          cell.textContent = board[row][col];
          cell.setAttribute(
            'aria-label',
            `${board[row][col]}, baris ${row + 1}, lajur ${col + 1}`
          );
        }
        wordGrid.appendChild(cell);
      }
    }

    renderWordList();
    renderHints();
    renderChainPanel();

    wordGrid.querySelectorAll('.cell').forEach((cell) => {
      cell.addEventListener('pointerdown', (event) => {
        if (chainTransitioning) {
          event.preventDefault();
          return;
        }
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

  function sessionHasSeenBrandIntro() {
    try {
      return sessionStorage.getItem(BRAND_INTRO_SESSION_KEY) === 'seen';
    } catch (error) {
      return false;
    }
  }

  function rememberBrandIntro() {
    try {
      sessionStorage.setItem(BRAND_INTRO_SESSION_KEY, 'seen');
    } catch (error) {
      // The intro still works when session storage is unavailable.
    }
  }

  function dismissBrandIntro(options = {}) {
    if (!brandIntro || brandIntroDismissed) {
      return;
    }

    brandIntroDismissed = true;
    if (brandIntroTimer !== null) {
      window.clearTimeout(brandIntroTimer);
      brandIntroTimer = null;
    }

    const finish = () => {
      brandIntro.classList.add('hidden');
      brandIntro.classList.remove('is-leaving');
      brandIntro.setAttribute('aria-hidden', 'true');
      document.querySelector('main')?.removeAttribute('inert');
      if (!options.silent) {
        startButton?.focus({ preventScroll: true });
      }
    };

    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true;
    if (options.immediate || reducedMotion) {
      finish();
      return;
    }

    brandIntro.classList.add('is-leaving');
    window.setTimeout(finish, 220);
  }

  function startBrandIntro() {
    if (!brandIntro) {
      return;
    }

    if (brandIntroLogo?.complete && brandIntroLogo.naturalWidth === 0) {
      dismissBrandIntro({ immediate: true, silent: true });
      return;
    }

    if (sessionHasSeenBrandIntro()) {
      dismissBrandIntro({ immediate: true, silent: true });
      return;
    }

    rememberBrandIntro();
    document.querySelector('main')?.setAttribute('inert', '');
    brandIntroSkip?.focus({ preventScroll: true });
    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true;
    brandIntroTimer = window.setTimeout(
      dismissBrandIntro,
      reducedMotion ? 250 : 1750
    );
  }

  function getZilterokaDialogFocusables() {
    if (!zilterokaDialogCard) {
      return [];
    }

    return Array.from(zilterokaDialogCard.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )).filter((element) => !element.hidden && element.getClientRects().length > 0);
  }

  function openZilterokaDialog(trigger) {
    if (!zilterokaDialog) {
      return;
    }

    zilterokaDialogTrigger = trigger || document.activeElement;
    zilterokaDialog.classList.remove('hidden');
    zilterokaDialog.setAttribute('aria-hidden', 'false');
    document.body.classList.add('zilteroka-modal-open');
    document.querySelector('main')?.setAttribute('inert', '');
    zilterokaDialogClose?.focus({ preventScroll: true });
  }

  function closeZilterokaDialog() {
    if (!zilterokaDialog || zilterokaDialog.classList.contains('hidden')) {
      return;
    }

    zilterokaDialog.classList.add('hidden');
    zilterokaDialog.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('zilteroka-modal-open');
    document.querySelector('main')?.removeAttribute('inert');
    zilterokaDialogTrigger?.focus({ preventScroll: true });
    zilterokaDialogTrigger = null;
  }

  function handleZilterokaDialogKeydown(event) {
    if (!zilterokaDialog || zilterokaDialog.classList.contains('hidden')) {
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopImmediatePropagation();
      closeZilterokaDialog();
      return;
    }

    if (event.key !== 'Tab') {
      return;
    }

    const focusable = getZilterokaDialogFocusables();
    if (focusable.length === 0) {
      event.preventDefault();
      zilterokaDialogCard?.focus();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function startGame() {
    if (!getAgeConfig()) {
      showCategoryMessage('Akan datang');
      showScreen(categoryScreen);
      return;
    }

    gameHeading.textContent = 'CARI KATA';
    gameSessionLabel.textContent = `Umur: ${selectedAge} | Kategori: ${selectedCategory}`;
    gameModeLabel.textContent = GAME_MODES[selectedGameMode].label;
    showCategoryMessage('');
    if (setupBoard()) {
      showScreen(gameScreen);
    }
  }

  if (startButton) {
    startButton.addEventListener('click', showPlayerScreen);
  }

  brandIntroSkip?.addEventListener('click', () => dismissBrandIntro());
  brandIntroLogo?.addEventListener('error', () => dismissBrandIntro({ immediate: true }));
  titleZilterokaButton?.addEventListener('click', () => openZilterokaDialog(titleZilterokaButton));
  playerZilterokaButton?.addEventListener('click', () => openZilterokaDialog(playerZilterokaButton));
  zilterokaDialogClose?.addEventListener('click', closeZilterokaDialog);
  zilterokaDialogDone?.addEventListener('click', closeZilterokaDialog);
  document.addEventListener('keydown', handleZilterokaDialogKeydown, true);

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

  if (ageGalleryButton) {
    ageGalleryButton.addEventListener('click', () => showKataRakaGallery(ageScreen));
  }

  if (retroactiveGalleryButton) {
    retroactiveGalleryButton.addEventListener('click', () => {
      renderRetroactiveUnlockSummary([]);
      showKataRakaGallery(ageScreen);
    });
  }

  if (progressGalleryButton) {
    progressGalleryButton.addEventListener('click', () => showKataRakaGallery(progressScreen));
  }

  if (galleryFilters) {
    galleryFilters.addEventListener('click', (event) => {
      const button = event.target.closest('.gallery-filter');
      if (!button) {
        return;
      }
      galleryFilter = button.dataset.edition;
      renderKataRakaGallery();
    });
  }

  if (galleryBackButton) {
    galleryBackButton.addEventListener('click', () => {
      if (galleryReturnScreen === playerScreen) {
        showPlayerScreen();
      } else if (galleryReturnScreen === progressScreen) {
        showProgressScreen();
      } else {
        showAgeScreen();
      }
    });
  }

  if (closeCardViewerButton) {
    closeCardViewerButton.addEventListener('click', closeCardViewer);
  }

  if (continueCardRevealButton) {
    continueCardRevealButton.addEventListener('click', continueCardReveal);
  }

  if (saveCardLink) {
    saveCardLink.addEventListener('click', () => {
      cardViewerMessage.textContent = 'Muat turun dimulakan. Jika disekat, kad akan dibuka untuk disimpan.';
    });
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

  if (modeBackButton) {
    modeBackButton.addEventListener('click', showCategoryScreen);
  }

  if (menuButton) {
    menuButton.addEventListener('click', () => {
      showCategoryScreen();
    });
  }

  if (gameMenuButton) {
    gameMenuButton.addEventListener('click', requestGameplayExit);
  }

  if (hintButton) {
    hintButton.addEventListener('click', requestHint);
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
      showModeScreen();
    });
  });

  modeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      selectedGameMode = button.dataset.mode;
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
  loadKataRaka();
  decoratePremiumControls();
  updateActivePlayerLabel();
  startBrandIntro();

  document.addEventListener('keydown', (event) => {
    if (!exitConfirmation.classList.contains('hidden')) {
      handleExitConfirmationKeydown(event);
      return;
    }
    if (!cardReveal.classList.contains('hidden')) {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeCardReveal();
      } else if (event.key === 'Tab') {
        const focusable = cardRevealMode === 'poster'
          ? [saveRevealedCardLink, continueCardRevealButton]
          : [continueCardRevealButton];
        const currentIndex = focusable.indexOf(document.activeElement);
        const nextIndex = event.shiftKey
          ? (currentIndex <= 0 ? focusable.length - 1 : currentIndex - 1)
          : (currentIndex === focusable.length - 1 ? 0 : currentIndex + 1);
        event.preventDefault();
        focusable[nextIndex].focus();
      }
      return;
    }
    if (cardViewer.classList.contains('hidden')) {
      return;
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      closeCardViewer();
      return;
    }
    if (event.key === 'Tab') {
      const focusable = [saveCardLink, closeCardViewerButton];
      const currentIndex = focusable.indexOf(document.activeElement);
      const nextIndex = event.shiftKey
        ? (currentIndex <= 0 ? focusable.length - 1 : currentIndex - 1)
        : (currentIndex === focusable.length - 1 ? 0 : currentIndex + 1);
      event.preventDefault();
      focusable[nextIndex].focus();
    }
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

    resetActivePointer(false);
  });

  wordGrid.addEventListener('lostpointercapture', (event) => {
    if (isDragging && event.pointerId === activePointerId) {
      resetActivePointer(false);
    }
  });

  window.addEventListener('blur', () => resetActivePointer(false));
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      resetActivePointer(false);
    }
  });
});
