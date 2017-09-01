const DEMANDING = require('./types').DEMANDING;
const IMPULSIVE = require('./types').IMPULSIVE;
const CAUTIOUS = require('./types').CAUTIOUS;

const buyProperty = (playerBehavior, money, rent, price) => {
    let buy = false;
    if (playerBehavior === IMPULSIVE) {
        buy = true;
    } else if (playerBehavior === CAUTIOUS) {
        if (money - price >= 80) {
            buy = true;
        }
    } else if (playerBehavior === DEMANDING) {
        if (rent > 50) {
            buy = true;
        }
    } else {
        const random = Math.random();
        if (random > 0.5) {
            buy = true;
        }
    }    
    return buy;
};

module.exports = buyProperty;
