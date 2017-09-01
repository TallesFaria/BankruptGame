const gameSequence = require('./GameSequence');
const createPlayers = require('./CreatePlayers');
const buildBoard = require('./BuildBoard');
const startIt = require('./Play');

const bankrupt = () => {
    const numberOfGames = 300;
    const timeOut = 5;
    let countTimeOuts = 0;
    const rounds = [];
    const playersWins = {
        impulsive: 0,
        cautious: 0,
        random: 0,
        demanding: 0
    };
    for (let gameCounter = 0; gameCounter < numberOfGames; gameCounter++) {
        console.log('Game ', gameCounter);
        console.log('------------------------------------------------------');
        const players = createPlayers();
        console.log(players);
        const sequence = gameSequence();    
        const board = buildBoard('gameConfig.txt');
        const result = startIt(players, sequence, timeOut, board);
        console.log(result);
        playersWins[result.winnerData.behavior]++;
        rounds.push(result.countTurns);
        if (result.timeOut) {
            countTimeOuts++;
        }
    }
    console.log('TIME OUT total ', countTimeOuts);
    console.log('Mean Turns: ', rounds.reduce((a, b) => a + b, 0) / rounds.length);
    console.log(playersWins);
};

module.exports = bankrupt;
