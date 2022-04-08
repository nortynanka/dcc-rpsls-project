"use strict"

const prompt = require("prompt-sync");

class BaseGame {

    constructor() {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.gameRules = ("Each player picks a move: rock, paper, scissors, lizard, or Spock. The winner of the round is based on the following:\nRock crushes scissors, scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock.\nIf both players draw the same move, the round is marked as a tie. The first player to win 3 total rounds wins the game!");
    }

    displayWelcome() {
        console.log("Welcome to Rock, Paper, Scissors, Lizard, Spock!");
    }

    determineNumberOfPlayers() {
        const numberOfPlayers = prompt("How many players are there? (one, two)");
            if (numberOfPlayers === "one") {
                setName(playerOne);
                let playerTwo = ComputerPlayer;
            }
            else if (numberOfPlayers === "two") {
                setName(playerOne);
                setName(playerTwo);
            }    
        return numberOfPlayers;
    }

    diplayRules(gameRules) {
        console.log(`How to play: ${gameRules}`);
        prompt("Press any key to begin the game.");
    }

    runRounds() {
        for(let i=0; i < 3; i++) {
            let playerOneChoice = makeMove(playerOne);
            let playerTwoChoice = makeMove(playerTwo);
                if(numberOfPlayers = "one") {
                    let playerTwoChoice = computerMakeMove(gestures);
                }
        }
    }

    compareGestures() {
        if(playerOneChoice === playerTwoChoice) {
            console.log("Draw!");
        }
        // else if();
        // else if();
        // else if();
        // else if();
        // else if();
        // else if();
        // else if();
        // else if();
        // else if();
        else {}
    }

    // checkWinner() return xyzResult

    displayWinner(winnerName) {
        console.log(`${winnerName} won 3 rounds and has won the game!`);
    }

    // runGame()

    askToRestart(playAgain) {
        const playAgain = prompt("Would you like to play again? (y/n)");
        return playAgain;
    }

}

module.exports = BaseGame;