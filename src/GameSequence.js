const gameSequence = () => {
    const sequence = [];
    const behaviorList = ['impulsive', 'demanding', 'cautious', 'random'];

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
