"use strict"

const HumanPlayer = require('./humanPlayer');
const ComputerPlayer = require('./computerPlayer');
const PlayerInfo = require('./playerInfo');
const BaseGame = require('./baseGame');

displayWelcome();

determineNumberOfPlayers();

displayRules(gameRules);

function autoValid(input) {
    return true; // default validation only
  }





