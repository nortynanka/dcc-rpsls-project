class BaseGame {

    constructor() {
        this.playerOne = "";
        this.playerTwo = "";
    }

    displayWelcome() {
        console.log("Welcome to Rock, Paper, Scissors, Lizard, Spock!");
    }

    // displayRules()

    determineNumberOfPlayers() {
        console.log("How many players are there? (one, two)");
    }

    // runRounds()
    // compareGestures()
    // checkWinner()
    // displayWinner()
    // runGame()
    // askToRestart()

}

module.exports = BaseGame;