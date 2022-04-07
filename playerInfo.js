class PlayerInfo {
    constructor() {
        this.playerName = playerName;
        this.score = "";
        this.roundChoice = roundChoice;
        this.gestures = ["rock", "paper", "scissors", "lizard", "Spock"];
    }

    // constructor PlayerInfo end

    setName(playerName) {
        let playerName = prompt("Enter player name:");
        return playerName;
    }

    // method setName end

    displayName() {
        console.log(playerName);
    } 

    // method displayName end

    chooseGesture(playerName) {
        let roundChoice = prompt(`${playerName}, choose your move: ${gestures}`);
        return roundChoice;
    }
    
    // method chooseGesture end

} // class PlayerInfo end

module.exports = PlayerInfo;