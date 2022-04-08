"use strict"

const prompt = require("prompt-sync");
const HumanPlayer = require('./humanPlayer');
const ComputerPlayer = require('./computerPlayer');
const PlayerInfo = require('./playerInfo');
const BaseGame = require('./baseGame');

displayWelcome();

let numberOfPlayers = determineNumberOfPlayers();
console.log(numberOfPlayers);

let playerOne = new PlayerInfo();
  if(numberOfPlayers === "two") {
    let playerTwo = new PlayerInfo();
  }

setPlayerName(playerOne);
setPlayerName(playerTwo);

displayRules(gameRules);

runRounds();

compareGestures();

// function autoValid(input) {
//     return true;
//   }





