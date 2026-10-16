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

  const GRID_SIZE = 6;
  const WORDS_PER_PUZZLE = 4;

  // Word banks are kept together so more age groups can be added later.
  const WORDS_BY_CATEGORY = {
    Haiwan: ['AYAM', 'IKAN', 'KUDA', 'ULAR', 'ITIK', 'RUSA', 'SAPI', 'KAMBING'],
    'Buah-buahan': ['EPAL', 'MANGGA', 'NANAS', 'BETIK', 'DUKU', 'LIMAU', 'KIWI', 'PISANG'],
    Makanan: ['NASI', 'ROTI', 'MEE', 'SUP', 'TELUR', 'KEK', 'BUBUR', 'SATAY'],
    Sekolah: ['BUKU', 'PENA', 'MEJA', 'KERUSI', 'BEG', 'PINTU', 'KELAS', 'PAPAN'],
    Kenderaan: ['BAS', 'VAN', 'BOT', 'TEKSI', 'LORI', 'MOTOSIKAL', 'KERETA', 'BASIKAL'],
    Alam: ['AWAN', 'HUJAN', 'POKOK', 'SUNGAI', 'BATU', 'PASIR', 'BUKIT', 'LAUT']
  };

  let selectedAge = 'Belum dipilih';
  let selectedCategory = 'Belum dipilih';
  let currentTargetWords = [];
  let puzzle = null;
  let foundWords = new Set();
  let isDragging = false;
  let activePointerId = null;
  let dragStartCell = null;
  let currentSelection = [];
  let feedbackTimerId = null;

  function getTargetWords() {
    return currentTargetWords;
  }

  function chooseTargetWords(category) {
    const categoryWords = WORDS_BY_CATEGORY[category] || [];
    const validWords = [...new Set(categoryWords)].filter((word) => (
      word.length <= GRID_SIZE && /^[A-Z]+$/.test(word)
    ));

    // Shuffle valid words, then take four unique targets for this puzzle.
    for (let index = validWords.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [validWords[index], validWords[randomIndex]] = [validWords[randomIndex], validWords[index]];
    }

    return validWords.slice(0, WORDS_PER_PUZZLE);
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

  function tryBuildBoard(targetWords) {
    const board = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(''));
    const cellsByWord = {};

    for (let i = 0; i < targetWords.length; i += 1) {
      let placed = false;
      let tries = 0;

      while (!placed && tries < 400) {
        tries += 1;

        const direction = Math.random() < 0.5 ? 'H' : 'V';
        const row = Math.floor(Math.random() * GRID_SIZE);
        const col = Math.floor(Math.random() * GRID_SIZE);
        const word = targetWords[i];

        const endRow = direction === 'H' ? row : row + word.length - 1;
        const endCol = direction === 'H' ? col + word.length - 1 : col;

        if (endRow >= GRID_SIZE || endCol >= GRID_SIZE) {
          continue;
        }

        const cells = [];
        let canPlace = true;

        for (let letterIndex = 0; letterIndex < word.length; letterIndex += 1) {
          const nextRow = direction === 'H' ? row : row + letterIndex;
          const nextCol = direction === 'H' ? col + letterIndex : col;

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

        cellsByWord[word] = cells.map(({ row: cellRow, col: cellCol }) => ({
          row: cellRow,
          col: cellCol
        }));

        placed = true;
      }

      if (!placed) {
        return null;
      }
    }

    return { board, cellsByWord };
  }

  function buildBoard(targetWords) {
    let generatedPuzzle = null;

    // Restart with an empty grid if random placements block a later word.
    for (let boardAttempt = 0; boardAttempt < 100 && !generatedPuzzle; boardAttempt += 1) {
      generatedPuzzle = tryBuildBoard(targetWords);
    }

    if (!generatedPuzzle) {
      return null;
    }

    const { board } = generatedPuzzle;
    for (let row = 0; row < GRID_SIZE; row += 1) {
      for (let col = 0; col < GRID_SIZE; col += 1) {
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
      item.className = 'word-item';
      item.textContent = word;

      if (foundWords.has(word)) {
        item.classList.add('completed');
        item.setAttribute('aria-label', `${word} ditemui`);
      }

      wordList.appendChild(item);
    });
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
    if (wordCells) {
      wordCells.forEach(({ row, col }) => {
        const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
        if (cell) {
          cell.classList.add('found');
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
    const rowDistance = Math.abs(endCell.row - startCell.row);
    const colDistance = Math.abs(endCell.col - startCell.col);

    // Snap a slightly diagonal drag to its strongest straight axis.
    const snappedEndCell = { ...endCell };
    if (rowDistance > 0 && colDistance > 0) {
      if (rowDistance > colDistance) {
        snappedEndCell.col = startCell.col;
      } else {
        snappedEndCell.row = startCell.row;
      }
    }

    if (startCell.row === snappedEndCell.row) {
      const startCol = Math.min(startCell.col, snappedEndCell.col);
      const endCol = Math.max(startCell.col, snappedEndCell.col);

      for (let col = startCol; col <= endCol; col += 1) {
        cells.push({ row: startCell.row, col, letter: puzzle.board[startCell.row][col] });
      }

      return cells;
    }

    if (startCell.col === snappedEndCell.col) {
      const startRow = Math.min(startCell.row, snappedEndCell.row);
      const endRow = Math.max(startCell.row, snappedEndCell.row);

      for (let row = startRow; row <= endRow; row += 1) {
        cells.push({ row, col: startCell.col, letter: puzzle.board[row][startCell.col] });
      }

      return cells;
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
    currentTargetWords = chooseTargetWords(selectedCategory);
    const generatedPuzzle = buildBoard(currentTargetWords);

    if (!generatedPuzzle || currentTargetWords.length !== WORDS_PER_PUZZLE) {
      showCategoryMessage('Papan tidak dapat dibina. Cuba lagi.');
      showScreen(categoryScreen);
      return false;
    }

    const { board, cellsByWord } = generatedPuzzle;

    puzzle = {
      board,
      words: getTargetWords(),
      cellsByWord
    };

    wordGrid.innerHTML = '';
    foundWords = new Set();
    clearSelection();
    clearFeedback();
    isDragging = false;
    activePointerId = null;
    dragStartCell = null;
    victoryPanel.classList.add('hidden');
    victorySummary.textContent = `0/${getTargetWords().length} kata ditemui`;

    for (let row = 0; row < GRID_SIZE; row += 1) {
      for (let col = 0; col < GRID_SIZE; col += 1) {
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
    if (selectedAge !== '5–7 Tahun') {
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
