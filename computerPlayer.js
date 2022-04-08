"use strict"

const PlayerInfo = require('./playerInfo');

class ComputerPlayer extends PlayerInfo {
    constructor() {
        this.playerName = "Player 2";
    }

    makeMove(options) {
        console.log("Player 2 is making their move...");
        let options = Math.floor(Math.random[0] * options.length);
        console.log(`Player 2 has picked ${options}!`);
    }

    computerMakeMove(playerOneOrTwo) {
        const roundChoice = prompt(`${playerOneOrTwo}, make your move. (Choose from the following: ${gestures}.)`);
        return roundChoice;
    }



}



module.exports = ComputerPlayer;