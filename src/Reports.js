const Mean = require('./Mean');

const Reports = (countTimeOuts, rounds, playersWins, mostWins) => {
    console.log('Number of games ended by Timeout: ', countTimeOuts);
    console.log('Games ended in about the: ', Mean(rounds), ' rounds');
    console.log('Distribution of wins by players: ', playersWins);
    console.log('Tatic most successful: ', mostWins);
};

module.exports = Reports;
