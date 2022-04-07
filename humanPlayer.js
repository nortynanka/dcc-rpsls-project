"use strict"

const PlayerInfo = require('./playerInfo');

class HumanPlayer extends PlayerInfo {
    constructor() {}

    makeMove(playerName) {
        let roundChoice = prompt(`${playerName}, make your move. (Choose from the following: ${gestures}.)`);
    }

    // method chooseGesture end

}

// class HumanPlayer end

module.exports = HumanPlayer;