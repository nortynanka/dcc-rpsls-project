class BaseGame {

    constructor() {
        this.playerOne = "";
        this.playerTwo = "";
        this.gameRules = ("Rock crushes scissors, scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock");
    }

    displayWelcome() {
        console.log("Welcome to Rock, Paper, Scissors, Lizard, Spock!");
        let numberOfPlayers = prompt("How many players are there? (one, two)");
        return(numberOfPlayers);
    }

    diplayRules(gameRules) {
        console.log(`How to play: ${gameRules}`);
    }

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

// class BaseGame end

module.exports = BaseGame;