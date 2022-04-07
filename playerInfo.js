"use strict"

class PlayerInfo {
    constructor() {
        this.playerName = playerOneOrTwo;
        this.playerScore = "";
        this.roundChoice = roundChoice;
        this.gestures = ["rock", "paper", "scissors", "lizard", "Spock"];
    }

    // constructor PlayerInfo end

    setName(playerOneOrTwo) {
        let playerOneOrTwo = prompt("Enter player name:");
        return playerOneOrTwo;
    }

    // method setName end

    displayName() {
        console.log(playerName);
    } 

    // method displayName end

    makeMove(playerName) {
        let roundChoice = prompt(`${playerName}, make your move. (Choose from the following: ${gestures}.)`);
    }

    // method makeMove end

} // class PlayerInfo end

module.exports = PlayerInfo;