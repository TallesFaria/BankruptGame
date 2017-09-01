const createPlayers = (money, behaviorList) => {
    const players = {};
    for (let i = 0; i < behaviorList.length; i++) {
        players[behaviorList[i]] = {
            behavior: behaviorList[i],
            money,
            position: -1,
            belongings: []
        };
    }
    return players;
};

module.exports = createPlayers;
