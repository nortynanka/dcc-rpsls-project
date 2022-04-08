"use strict"

const prompt = require("prompt-sync");

class PlayerInfo {
    constructor() {
        this.playerName = playerOneOrTwo;
        this.playerScore = "";
        this.roundChoice = roundChoice;
        this.gestures = ["rock", "paper", "scissors", "lizard", "Spock"];
    }



    setPlayerName(playerOneOrTwo) {
        const playerOneOrTwo = prompt(`${playerOneOrTwo}, enter your name:`);
        return playerOneOrTwo;
    }



    displayName() {
        console.log(playerName);
    } 



} // class PlayerInfo end

module.exports = PlayerInfo;