const Mean = require('./Mean');
const sprintf = require('sprintf-js').sprintf;

const Reports = (countTimeOuts, rounds, playersWins, mostWins, numberOfGames) => {
    console.log(sprintf('Number of games ended by Timeout: %-10.3f', countTimeOuts));
    console.log(sprintf('Games ended in about the: %-10.3f', Mean(rounds), ' rounds'));
    console.log('Distribution of wins by players: ');
    for (const key in playersWins) {
        const percentageWin = (playersWins[key] * 100) / numberOfGames;
        
        console.log(sprintf('%s: %-10.2f%%', key, percentageWin));
    }    
    console.log('Tatic most successful: ', mostWins);
};

module.exports = Reports;
