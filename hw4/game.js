   // y\x 0 1 2 3 4 5 6 7 8 9
    //0// p x x x x x x x x x
    //1// x x x x x x x x x x
    //2// x x x x x x x x x x
    //3// x x x x x x x x x x
    //4// x x x x x x x x x x
    //5// x x x x x x x x x x
    //6// x x x x x x x x x x
    //7// x x x x x x x x x x
    //8// x x x x x x x x x x
    //9// x x x x x x x x x x

const settings = {
    rowCount: 10,
    colCount: 10,
    startPositionX: 0,
    startPositionY: 0,
};

const player = {
    x: null,
    y: null,

    init(startX, startY) {
        this.x = startX;
        this.y = startY;
    },

    move(direction) {
        switch (direction) {
            case 2:
                this.y++;
                break;
            case 4:
                this.x--;
                break;
            case 6:
                this.x++;
                break;
            case 8:
                this.y--;
                break;
        }
    }
};

const game = {
    settings,
    player,
    run() {
        this.player.init(this.settings.startPositionX, this.settings.startPositionY);

        while (true) {
            this.render();

            const direction = this.getDirection();

            if (direction === -1) {
                return alert('До свидания!');
            }

            this.player.move(direction);
        }
    },
    render() {
        let map = '';

        for (let row = 0; row < this.settings.rowCount; row++) {
            for (let col = 0; col < this.settings.colCount; col++) {
                if (this.player.y === row && this.player.x === col) {
                    map += 'O ';
                } else {
                    map += 'x ';
                }
            }
            map += '\n';
        }

        console.clear();
        console.log(map);
    },
    getDirection() {
        const availableDirections = [-1, 2, 4, 6, 8];

        while (true) {
            const direction = parseInt(prompt('Введите число, куда хотите переместиться. Введите -1 для выхода'));

            if (!availableDirections.includes(direction)) {
                alert(`Введите одно из чисел ${availableDirections.join(', ')}.`);
                continue;
            }

            if (!this.isAllowedDirection(direction)) {
                alert(`Нельзя выходить за пределы игрового поля! Введите одно из чисел ${availableDirections.join(', ')}.`);
                continue;
            }

            return direction;
        }
    },
    isAllowedDirection(direction) {
        let result = true;
        switch (direction) {
            case 2:
                result = (this.player.y + 1) < this.settings.rowCount;
                break;
            case 4:
                result = (this.player.x - 1) >= 0;
                break;
            case 6:
                result = (this.player.x + 1) < this.settings.colCount;
                break;
            case 8:
                result = (this.player.y - 1) >= 0;
                break;
        }

        return result;
    }
};

function startGame() {
    game.run();
}
