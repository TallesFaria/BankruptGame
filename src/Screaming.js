const rollTheDice = require('./RollTheDice');
const buyProperty = require('./BuyProperty');

const startIt = (players, sequence, timeOut, board) => {
    const boardSize = board.length;
    console.log('sequence: ', sequence);
    for (let countTurns = 0; countTurns < timeOut; countTurns++) {
        console.log('Round ', countTurns);
        console.log('Players in the game', sequence);
        for (let play = 0; play < sequence.length; play++) {
            console.log('Player ', players[sequence[play]].behavior, ' moves ');
            const stepsForward = rollTheDice();
            console.log(stepsForward);
            const currentPlayer = players[sequence[play]];
            console.log('Going from', currentPlayer.position, ' to ');
            //player's move
            if (currentPlayer.position + stepsForward > boardSize - 1) {
                currentPlayer.position = currentPlayer.position + stepsForward + (-boardSize) + 1;
                currentPlayer.money += 100;
            } else {
                currentPlayer.position += stepsForward;
            }
            const position = currentPlayer.position;
            console.log(position);
            //act on player's move
            if (board[position].belongsTo === '') {
                const makeBusiness = buyProperty(currentPlayer.behavior, currentPlayer.money, board[position].rent, board[position].price);
                console.log('Should i Make Business: ', makeBusiness);
                if (makeBusiness) {
                        console.log(currentPlayer.behavior, ' player buys ', position, ' for ', board[position].price);
                        console.log('Money goes from ', currentPlayer.money, ' to ');
                        currentPlayer.money -= board[position].price;
                        console.log(currentPlayer.money);
                        currentPlayer.belongings.push(position);
                        board[position].belongsTo = currentPlayer.behavior;
                        console.log('board is like this ', board);
                } 
            } else {    
                console.log('Pay rent in ', position, ' for ', board[position].rent);
                console.log('Money goes from ', currentPlayer.money, ' to ');
                currentPlayer.money -= board[position].rent;
                console.log(currentPlayer.money);
                players[board[position].belongsTo].money += board[position].rent;
                console.log('O ', board[position].belongsTo, 'receive ', board[position].rent, ' in rent');
                console.log('board is like this ', board);
            }

            //check if player lost
            if (currentPlayer.money < 0) {
                console.log('LOSER ', currentPlayer.behavior);
                //free board
                players[currentPlayer.behavior].belongings.forEach((property) => board[property].belongsTo = '');
                //free sequence
                sequence.splice(play, 1);
                play--;
                console.log('DELETEDDDDD', sequence);
                console.log('board is like this ', board);
                //do we have a winner?
                if (sequence.length === 1) {
                    console.log('We have a winner ', players[sequence[0]]);
                    const winnerData = players[sequence[0]];
                    return {
                        winnerData,
                        countTurns
                    };  
                }        
            } else {
                //they didnt lost, update them data
                players[sequence[play]] = currentPlayer;
            }
        }
    }

    //timeOut
    //compute winner
    let winnersMoney = 0;
    let winnersTatic = '';
    for (let play = 0; play < sequence.length; play++) {
        if (players[sequence[play]].money > winnersMoney) {
            winnersMoney = players[sequence[play]].money;
            winnersTatic = sequence[play];
        }
    }
    return {
        timeOut: true,
        winnerData: {
            behavior: winnersTatic,
            money: winnersMoney
        },
        countTurns: timeOut
    };
};

module.exports = startIt;

// for (const survivor in players) {
//     let sumBelongings = 0;
//     players[survivor].belongings.forEach((property) => sumBelongings += board[property]);
//     if (survivor.money + sumBelongings > winnerData.money) {
//         winnerData = survivor;
//     }
// }

// if (board[position].belongsTo === '') {
//     if (currentPlayer.behavior === IMPULSIVE) {
//         currentPlayer.money -= board[position].price;
//         currentPlayer.belongings.push(position);
//         board[position].belongsTo = currentPlayer.behavior;
//     } else if (currentPlayer.behavior === DEMANDING) {
//         if (board[position].rent > 50) {                
//             currentPlayer.money -= board[position].price;
//             currentPlayer.belongings.push(position);
//             board[position].belongsTo = currentPlayer.behavior;
//         }
//     } else if (currentPlayer.behavior === CAUTIOUS) { 
//         if (currentPlayer.money - board[position].price > 80) {
//             currentPlayer.money -= board[position].price;
//             currentPlayer.belongings.push(position);
//             board[position].belongsTo = currentPlayer.behavior;
//         }
//     } else if (Math.random() > 0.5) {
//         currentPlayer.money -= board[position].price;
//         currentPlayer.belongings.push(position);
//         board[position].belongsTo = currentPlayer.behavior;
//     }
// } else {    
//     currentPlayer.money -= board[position].rent;
//     players[board[position].belongsTo].money += board[position].rent;
// }