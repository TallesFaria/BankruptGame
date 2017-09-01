const fs = require('fs');

const buildBoard = (file) => {
    const textLines = fs.readFileSync(file).toString().split('\n');
    const board = [];
    for (let i = 0; i < textLines.length; i++) {
        const values = textLines[i].split(/ +/);
        board[i] = {
            price: Number(values[0]),
            rent: Number(values[1]),
            belongsTo: ''
        };
    }
    return board;
};

module.exports = buildBoard;
