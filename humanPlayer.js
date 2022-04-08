"use strict"

const PlayerInfo = require('./playerInfo');
const prompt = require("prompt-sync");

class HumanPlayer extends PlayerInfo {
    constructor() {}

    makeMove(playerOneOrTwo) {
        const humanRoundChoice = prompt(`${playerOneOrTwo}, make your move. (Choose from the following: ${gestures}.)`);
        return humanRoundChoice;
    }
}

module.exports = HumanPlayer;