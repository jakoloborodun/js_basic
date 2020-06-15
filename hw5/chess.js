'use strict';

const settings = {
  rowCount: 8,
  colCount: 8,
  whiteColor: '#e8e8e8',
  blackColor: '#909090',
  letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
  numbers: ['1', '2', '3', '4', '5', '6', '7', '8'],
  figures: {
    0 : ['Л', 'К', 'С', 'Ф', 'Кр', 'С', 'К', 'Л'],
    1 : ['п', 'п', 'п', 'п', 'п', 'п', 'п', 'п'],
    6 : ['п', 'п', 'п', 'п', 'п', 'п', 'п', 'п'],
    7 : ['Л', 'К', 'С', 'Ф', 'Кр', 'С', 'К', 'Л'],
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
          cell.innerText = this.settings.figures[row][col];

          switch (row) {
            case 0:
            case 1:
              cell.style.color = '#000';
              break;

            case 6:
            case 7:
              cell.style.color = '#fff';
              break;
          }
        }

        this.cellElements.push(cell);
      }
    }
  },

  render() {
    let change = false;
    let cellColor = this.settings.whiteColor;
    this.cellElements.forEach((cell, index) => {
      change = index % 8 === 0 || index === 0;

      if (!change) {
        cellColor = cellColor === this.settings.whiteColor
            ? this.settings.blackColor
            : this.settings.whiteColor;
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

      // this.numbersContainer.appendChild(numDiv);

      this.numbersContainer.insertAdjacentElement('afterbegin', numDiv);
      this.lettersContainer.appendChild(letDiv);
    });
  },

};


function buildChessBoard() {
  board.build();
}
