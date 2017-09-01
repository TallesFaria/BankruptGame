const findMVP = (playersWins) => {
    let mostWins = 0;
    let tatic = '';
    for (const behavior in playersWins) {
        if (playersWins[behavior] > mostWins) {
            mostWins = playersWins[behavior];
            tatic = behavior;
        }
    }
    return {
        [tatic]: mostWins
    };
};

module.exports = findMVP;
