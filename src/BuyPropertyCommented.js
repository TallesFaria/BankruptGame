const DEMANDING = require('./types').DEMANDING;
const IMPULSIVE = require('./types').IMPULSIVE;
const CAUTIOUS = require('./types').CAUTIOUS;

const buyProperty = (playerBehavior, money, rent, price) => {
    let buy = false;
    if (playerBehavior === IMPULSIVE) {
        buy = true;
    } else if (playerBehavior === CAUTIOUS) {
        //console.log('Money I have is ', money, ' and the price is ', price);
        if (money - price >= 80) {
            //console.log(' So I Buy');
            buy = true;
        }
    } else if (playerBehavior === DEMANDING) {
        if (rent > 50) {
            buy = true;
        }
    } else {
        const random = Math.random();
        if (random > 0.5) {
            //console.log('random: ', random);
            buy = true;
        }
    }    
    return buy;
};

module.exports = buyProperty;
