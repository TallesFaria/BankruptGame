const Mean = require('./Mean');

const Reports = (countTimeOuts, rounds, playersWins, mostWins, numberOfGames) => {
    console.log('Number of games ended by Timeout: ', countTimeOuts);
    console.log('Games ended in about the: ', Mean(rounds), ' rounds');
    console.log('Distribution of wins by players: ', playersWins);
    for (const key in playersWins) {
        console.log(key, ': ', (playersWins[key] * 100) / numberOfGames, '%');
    }    
    console.log('Tatic most successful: ', mostWins);
};

module.exports = Reports;
