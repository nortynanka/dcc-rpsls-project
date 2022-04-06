"use strict"

class baseGame {
    constructor(){
        this.playerOne = "";
        this.playerTwo = "";
    }

displayWelcome();
displayRules();
determineNumberOfPlayers();
runRounds();
compareGestures();
checkWinner();
displayWinner();
runGame();
askToRestart();

}

class handGesture {
    constructor(){
        this.gestureName = "";
    }
}

class playerInfo {
    constructor(){
        this.playerName = "";
        this.score = "";
        this.roundChoice = "";
        this.gestures = "";
    }

displayName();
setName();
chooseGesture();

}

class playerInfo extends humanPlayer {
    constructor(){

    }

chooseGesture();

}

class playerInfo extends computerPlayer {
    constructor(){

    }

chooseGesture();

}