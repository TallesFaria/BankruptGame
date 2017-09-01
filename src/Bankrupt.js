const gameSequence = require('./GameSequence');
const createPlayers = require('./CreatePlayers');
const buildBoard = require('./BuildBoard');
const startIt = require('./Play');
const DEMANDING = require('./types').DEMANDING;
const IMPULSIVE = require('./types').IMPULSIVE;
const CAUTIOUS = require('./types').CAUTIOUS;
const RANDOM = require('./types').RANDOM;
const findMVP = require('./MVP');
const Reports = require('./Reports');

const bankrupt = () => {
    const numberOfGames = 1000;
    const timeOut = 6;
    let countTimeOuts = 0;
    const initialMoney = 1000;
    const rounds = [];
    const playersWins = {
        [IMPULSIVE]: 0,
        [CAUTIOUS]: 0,
        [RANDOM]: 0,
        [DEMANDING]: 0
    };
    for (let gameCounter = 0; gameCounter < numberOfGames; gameCounter++) {
        const players = createPlayers(initialMoney, [DEMANDING, IMPULSIVE, CAUTIOUS, RANDOM]);
        const sequence = gameSequence();    
        const board = buildBoard('gameConfig.txt');
        const result = startIt(players, sequence, timeOut, board);
        playersWins[result.winnerData.behavior]++;
        rounds.push(result.countTurns);
        if (result.timeOut) {
            countTimeOuts++;
        }
    }
    const mostWins = findMVP(playersWins);
    Reports(countTimeOuts, rounds, playersWins, mostWins);
};

module.exports = bankrupt;
