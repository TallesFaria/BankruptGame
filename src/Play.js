const rollTheDice = require('./RollTheDice');
const buyProperty = require('./BuyProperty');

const startIt = (players, sequence, timeOut, board) => {
    const boardSize = board.length;
    for (let countTurns = 0; countTurns < timeOut; countTurns++) {
        for (let play = 0; play < sequence.length; play++) {
            const stepsForward = rollTheDice();
            const currentPlayer = players[sequence[play]];

            //player's move
            if (currentPlayer.position + stepsForward > boardSize - 1) {
                currentPlayer.position = currentPlayer.position + stepsForward + (-boardSize) + 1;
                currentPlayer.money += 100;
            } else {
                currentPlayer.position += stepsForward;
            }
            const position = currentPlayer.position;

            //act on player's move
            if (board[position].belongsTo === '') {
                const makeBusiness = buyProperty(currentPlayer.behavior, currentPlayer.money, board[position].rent, board[position].price);
        
                if (makeBusiness) {    
                        currentPlayer.money -= board[position].price;
                        currentPlayer.belongings.push(position);
                        board[position].belongsTo = currentPlayer.behavior;
                } 
            } else {    
                currentPlayer.money -= board[position].rent;
                players[board[position].belongsTo].money += board[position].rent;        
            }

            //check if player lost
            if (currentPlayer.money < 0) {
                //free board
                players[currentPlayer.behavior].belongings.forEach((property) => board[property].belongsTo = '');
                //free sequence
                sequence.splice(play, 1);
                play--;
                
                //do we have a winner?
                if (sequence.length === 1) {
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
