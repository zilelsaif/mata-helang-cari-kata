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
  const victoryPanel = document.getElementById('victory-panel');
  const playAgainButton = document.getElementById('play-again-button');
  const menuButton = document.getElementById('menu-button');

  const GRID_SIZE = 6;
  const TARGET_WORDS = ['AYAM', 'IKAN', 'KUDA', 'API'];

  let selectedAge = 'Belum dipilih';
  let selectedCategory = 'Belum dipilih';
  let puzzle = null;
  let foundWords = new Set();
  let isDragging = false;
  let dragStartCell = null;
  let currentSelection = [];

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

  function buildBoard() {
    const board = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(''));

    for (let i = 0; i < TARGET_WORDS.length; i += 1) {
      let placed = false;
      let tries = 0;

      while (!placed && tries < 400) {
        tries += 1;

        const direction = Math.random() < 0.5 ? 'H' : 'V';
        const row = Math.floor(Math.random() * GRID_SIZE);
        const col = Math.floor(Math.random() * GRID_SIZE);
        const word = TARGET_WORDS[i];

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

        placed = true;
      }

      if (!placed) {
        return null;
      }
    }

    for (let row = 0; row < GRID_SIZE; row += 1) {
      for (let col = 0; col < GRID_SIZE; col += 1) {
        if (board[row][col] === '') {
          board[row][col] = getRandomLetter();
        }
      }
    }

    return board;
  }

  function renderWordList() {
    wordList.innerHTML = '';

    TARGET_WORDS.forEach((word) => {
      const item = document.createElement('li');
      item.className = 'word-item';
      item.textContent = word;

      if (foundWords.has(word)) {
        item.classList.add('completed');
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

  function markWordAsFound(word) {
    if (foundWords.has(word)) {
      return;
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

    if (foundWords.size === TARGET_WORDS.length) {
      victoryPanel.classList.remove('hidden');
    }
  }

  function finishSelection() {
    if (!isDragging) {
      return;
    }

    const selectedWord = currentSelection.map((cell) => cell.letter).join('');
    const matchedWord = TARGET_WORDS.find((word) => word === selectedWord);

    if (matchedWord) {
      markWordAsFound(matchedWord);
    } else {
      clearSelection();
    }

    isDragging = false;
    dragStartCell = null;
    currentSelection = [];
  }

  function getLineBetweenCells(startCell, endCell) {
    const cells = [];
    const rowStep = Math.sign(endCell.row - startCell.row);
    const colStep = Math.sign(endCell.col - startCell.col);

    if (startCell.row === endCell.row) {
      const startCol = Math.min(startCell.col, endCell.col);
      const endCol = Math.max(startCell.col, endCell.col);

      for (let col = startCol; col <= endCol; col += 1) {
        cells.push({ row: startCell.row, col, letter: puzzle.board[startCell.row][col] });
      }

      return cells;
    }

    if (startCell.col === endCell.col) {
      const startRow = Math.min(startCell.row, endCell.row);
      const endRow = Math.max(startCell.row, endCell.row);

      for (let row = startRow; row <= endRow; row += 1) {
        cells.push({ row, col: startCell.col, letter: puzzle.board[row][startCell.col] });
      }

      return cells;
    }

    if (rowStep !== 0 && colStep !== 0) {
      return [];
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
    const board = buildBoard();

    if (!board) {
      return;
    }

    const cellsByWord = {};
    const wordEntries = TARGET_WORDS.map((word) => {
      let placedCells = [];

      for (let row = 0; row < GRID_SIZE; row += 1) {
        for (let col = 0; col < GRID_SIZE; col += 1) {
          if (board[row][col] === word[0]) {
            let found = false;
            const directions = [
              { row: 0, col: 1 },
              { row: 1, col: 0 }
            ];

            directions.forEach((direction) => {
              if (found) {
                return;
              }

              const line = [];
              let valid = true;

              for (let index = 0; index < word.length; index += 1) {
                const r = row + direction.row * index;
                const c = col + direction.col * index;

                if (r >= GRID_SIZE || c >= GRID_SIZE) {
                  valid = false;
                  break;
                }

                if (board[r][c] !== word[index]) {
                  valid = false;
                  break;
                }

                line.push({ row: r, col: c });
              }

              if (valid) {
                placedCells = line;
                found = true;
              }
            });
          }

          if (placedCells.length > 0) {
            break;
          }
        }

        if (placedCells.length > 0) {
          break;
        }
      }

      cellsByWord[word] = placedCells;
      return { word, cells: placedCells };
    });

    puzzle = {
      board,
      words: TARGET_WORDS,
      cellsByWord
    };

    wordGrid.innerHTML = '';
    foundWords = new Set();
    victoryPanel.classList.add('hidden');

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
        event.preventDefault();
        const row = Number(cell.dataset.row);
        const col = Number(cell.dataset.col);
        isDragging = true;
        dragStartCell = { row, col };
        clearSelection();
        updateSelection({ row, col });
      });

      cell.addEventListener('pointerenter', () => {
        if (isDragging && dragStartCell) {
          const row = Number(cell.dataset.row);
          const col = Number(cell.dataset.col);
          updateSelection({ row, col });
        }
      });
    });
  }

  function startGame() {
    if (selectedAge !== '5–7 Tahun' || selectedCategory !== 'Haiwan') {
      showCategoryMessage('Akan datang');
      showScreen(categoryScreen);
      return;
    }

    gameSessionLabel.textContent = `Umur: ${selectedAge} | Kategori: ${selectedCategory}`;
    showCategoryMessage('');
    setupBoard();
    showScreen(gameScreen);
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
      setupBoard();
      showScreen(gameScreen);
    });
  }

  ageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      selectedAge = button.dataset.age;
      console.log('Umur dipilih:', selectedAge);
      showCategoryScreen();
    });
  });

  categoryButtons.forEach((button) => {
    button.addEventListener('click', () => {
      selectedCategory = button.dataset.category;
      console.log('Umur dipilih:', selectedAge);
      console.log('Kategori dipilih:', selectedCategory);
      startGame();
    });
  });

  document.addEventListener('pointerup', () => {
    finishSelection();
  });

  document.addEventListener('pointercancel', () => {
    clearSelection();
    isDragging = false;
    dragStartCell = null;
  });
});
