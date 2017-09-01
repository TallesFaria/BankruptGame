const computePlayersMove = (currentPlayer, board, position) => {
    currentPlayer.money -= board[position].price;
    currentPlayer.belongings.push(position);
    board[position].belongsTo = currentPlayer.behavior;
    return {
        currentPlayer,
        board
    };
};

module.exports = computePlayersMove;
