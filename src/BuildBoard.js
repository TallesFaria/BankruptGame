const fs = require('fs');

const buildBoard = (file) => {
    const textLines = fs.readFileSync(file).toString().split('\n');
    const board = [];
    for (let i = 0; i < textLines.length; i++) {
        const position = textLines[i].trim();
        const hop = position.split(/ +/);
        board[i] = {
            price: Number(hop[0]),
            rent: Number(hop[1]),
            belongsTo: ''
        };
    }
    return board;
};

module.exports = buildBoard;
