const DEMANDING = require('./types').DEMANDING;
const IMPULSIVE = require('./types').IMPULSIVE;
const CAUTIOUS = require('./types').CAUTIOUS;
const RANDOM = require('./types').RANDOM;

const createPlayers = () => {
    const players = {
        impulsive: {
            behavior: IMPULSIVE,
            money: 300,
            position: -1,
            belongings: [] 
        },
        demanding: {
            behavior: DEMANDING,
            money: 300,
            position: -1,
            belongings: []
        },
        cautious: {
            behavior: CAUTIOUS,
            money: 300,
            position: -1,
            belongings: []
        },
        random: {
            behavior: RANDOM,
            money: 300,
            position: -1,
            belongings: []
        }
    };

    return players;
};

module.exports = createPlayers;
