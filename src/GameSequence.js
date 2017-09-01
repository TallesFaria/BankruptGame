const DEMANDING = require('./types').DEMANDING;
const IMPULSIVE = require('./types').IMPULSIVE;
const CAUTIOUS = require('./types').CAUTIOUS;
const RANDOM = require('./types').RANDOM;

const gameSequence = () => {
    const sequence = [];
    const behaviorList = [DEMANDING, IMPULSIVE, CAUTIOUS, RANDOM];

    for (let i = 0; i < 3; i++) {
        const behavior = behaviorList[Math.floor(Math.random() * behaviorList.length)];
        sequence[i] = behavior;
        const index = behaviorList.indexOf(behavior);
        if (index > -1) {
            behaviorList.splice(index, 1);
        }
    }

    sequence[3] = behaviorList[0];
    return sequence;
};

module.exports = gameSequence;
