const rollTheDice = require('./RollTheDice');

const startIt = (players, sequence, timeOut, board) => {
    const boardSize = board.length;
    console.log('sequence: ', sequence);
    for (let countTurns = 0; countTurns < timeOut; countTurns++) {
        console.log('Round ', countTurns);
        console.log('Players in the game', sequence);
        for (let play = 0; play < sequence.length; play++) {
            console.log('Player ', players[sequence[play]].behavior, ' moves ');
            //roll the dice
            const stepsForward = rollTheDice();
            console.log(stepsForward);
            //move
            const currentPlayer = players[sequence[play]];
            console.log('Going from', currentPlayer.position, ' to ');
            if (currentPlayer.position + stepsForward > boardSize - 1) {
                currentPlayer.position = currentPlayer.position + stepsForward + (-boardSize) + 1;
                currentPlayer.money += 100;
            } else {
                currentPlayer.position += stepsForward;
            }
            const position = currentPlayer.position;
            console.log(position);
            //check board
            if (board[position].belongsTo === '') {
                //check behavior
                if (currentPlayer.behavior === 'impulsive') {
                    console.log('IMPULSIVE player buys ', position, ' for ', board[position].price);
                    console.log('Money goes from ', currentPlayer.money, ' to ')
                    currentPlayer.money -= board[position].price;
                    console.log(currentPlayer.money)
                    currentPlayer.belongings.push(position);
                    board[position].belongsTo = currentPlayer.behavior;
                    console.log('board is like this ', board);
                } else if (currentPlayer.behavior === 'demanding') {
                    if (board[position].rent > 50) {
                        console.log('DEMANDING player buys ', position, ' for ', board[position].price);
                        console.log('Money goes from ', currentPlayer.money, ' to ')
                        currentPlayer.money -= board[position].price;
                        console.log(currentPlayer.money)
                        currentPlayer.belongings.push(position);
                        board[position].belongsTo = currentPlayer.behavior;
                        console.log('board is like this ', board);
                    }
                } else if (currentPlayer.behavior === 'cautious') { 
                    if (currentPlayer.money - board[position].price > 80) {
                        console.log('CAUTIOUS player buys ', position, ' for ', board[position].price);
                        console.log('Money goes from ', currentPlayer.money, ' to ')
                        currentPlayer.money -= board[position].price;
                        console.log(currentPlayer.money)
                        currentPlayer.belongings.push(position);
                        board[position].belongsTo = currentPlayer.behavior;
                        console.log('board is like this ', board);
                    }
                } else if (Math.random() > 0.5) {
                    console.log('RANDOM player buys ', position, ' for ', board[position].price);
                    console.log('Money goes from ', currentPlayer.money, ' to ')
                    currentPlayer.money -= board[position].price;
                    console.log(currentPlayer.money)
                    currentPlayer.belongings.push(position);
                    board[position].belongsTo = currentPlayer.behavior;
                    console.log('board is like this ', board);
                }
            } else {
                console.log('Pay rent in ', position, ' for ', board[position].rent);
                console.log('Money goes from ', currentPlayer.money, ' to ');
                currentPlayer.money -= board[position].rent;
                console.log(currentPlayer.money)
                players[board[position].belongsTo].money += board[position].rent;
                console.log('O ', board[position].belongsTo, 'receive ', board[position].rent, ' in rent');
                console.log('board is like this ', board);
            }
            //check if player lost
            if (currentPlayer.money < 0) {
                console.log('LOSER ', currentPlayer.behavior);
                players[currentPlayer.behavior].belongings.forEach((property) => board[property].belongsTo = '');
                sequence.splice(play, 1);        
                console.log('DELETEDDDDD', sequence);
                console.log('board is like this ', board);
                if (sequence.length === 1) {
                    console.log('We have a winner ', players[sequence[0]]);
                    const winnerData = players[sequence[0]];
                    return {
                        winnerData,
                        countTurns
                    };  
                }
            } else {
                //they didnt lost, update its data
                players[sequence[play]] = currentPlayer;
            }
        }
    }
    let winnerData = players[sequence[0]];
    console.log(players[sequence[0]]);
    console.log(players);
    for (const survivor in players) {
        let sumBelongings = 0;
        players[survivor].belongings.forEach((property) => sumBelongings += board[property]);
        if (survivor.money + sumBelongings > winnerData.money) {
            winnerData = survivor;
        }
    }
    //timeOut
    return {
        timeOut: true,
        winnerData, 
        countTurns: timeOut
    };
};

module.exports = startIt;
