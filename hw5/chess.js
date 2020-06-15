'use strict';

const settings = {
  rowCount: 8,
  colCount: 8,
  whiteBgColor: '#e8e8e8',
  blackBgColor: '#909090',
  whiteColor: '#fff',
  blackColor: '#000',
  letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
  numbers: ['1', '2', '3', '4', '5', '6', '7', '8'],
  figures: {
    0 : ['fa-chess-rook', 'fa-chess-knight', 'fa-chess-bishop', 'fa-chess-queen', 'fa-chess-king', 'fa-chess-bishop', 'fa-chess-knight', 'fa-chess-rook'],
    1 : ['fa-chess-pawn', 'fa-chess-pawn', 'fa-chess-pawn', 'fa-chess-pawn', 'fa-chess-pawn', 'fa-chess-pawn', 'fa-chess-pawn', 'fa-chess-pawn'],
    6 : ['fa-chess-pawn', 'fa-chess-pawn', 'fa-chess-pawn', 'fa-chess-pawn', 'fa-chess-pawn', 'fa-chess-pawn', 'fa-chess-pawn', 'fa-chess-pawn'],
    7 : ['fa-chess-rook', 'fa-chess-knight', 'fa-chess-bishop', 'fa-chess-queen', 'fa-chess-king', 'fa-chess-bishop', 'fa-chess-knight', 'fa-chess-rook'],
  }
};

const board = {
  settings,
  boardContainer: null,
  numbersContainer: null,
  lettersContainer: null,
  cellElements: null,

  build() {
    this.init();
    this.render();
  },

  init() {
    this.boardContainer = document.getElementById('board-inner');
    this.numbersContainer = document.getElementById('numbers');
    this.lettersContainer = document.getElementById('letters');

    this.initCells()
  },

  initCells() {
    this.boardContainer.innerHTML = '';
    this.cellElements = [];

    for (let row = 0; row < this.settings.rowCount; row++) {
      const trElem = document.createElement('tr');
      this.boardContainer.appendChild(trElem);

      for (let col = 0; col < this.settings.colCount; col++) {
        const cell = document.createElement('td');
        trElem.appendChild(cell);

        if (this.settings.figures[row] !== undefined) {
          let figure = document.createElement('i');
          figure.classList.add('fas');
          figure.classList.add(this.settings.figures[row][col]);
          cell.insertAdjacentElement('beforeend', figure);

          switch (row) {
            case 0:
            case 1:
              cell.style.color = this.settings.blackColor;
              break;

            case 6:
            case 7:
              cell.style.color = this.settings.whiteColor;
              break;
          }
        }

        this.cellElements.push(cell);
      }
    }
  },

  render() {
    let change = false;
    let cellColor = this.settings.whiteBgColor;
    this.cellElements.forEach((cell, index) => {
      change = index % 8 === 0 || index === 0;

      if (!change) {
        cellColor = cellColor === this.settings.whiteBgColor
            ? this.settings.blackBgColor
            : this.settings.whiteBgColor;
      }

      cell.style.backgroundColor = cellColor;

      change = false;
    });

    this.boardContainer.style.border = '1px solid black';

    this.renderLabels();
  },

  renderLabels() {
    this.numbersContainer.innerHTML = '';
    this.lettersContainer.innerHTML = '';

    this.settings.letters.forEach((letter, key) => {
      let numDiv = document.createElement('div');
      let letDiv = document.createElement('div');

      letDiv.innerText = letter;
      letDiv.className = 'label';
      numDiv.innerText = this.settings.numbers[key];
      numDiv.className = 'label';

      this.numbersContainer.insertAdjacentElement('afterbegin', numDiv);
      this.lettersContainer.appendChild(letDiv);
    });
  },

};

function buildChessBoard() {
  board.build();
}
