"use strict"

const PlayerInfo = require('./playerInfo');

class ComputerPlayer extends PlayerInfo {
    constructor() {
        this.options = gestures;
    }

    // constructor ComputerPLayer end

    makeMove(options) {
        return Math.floor(Math.random[0] * options.length);
    }

    // method chooseGesture end

}

// class ComputerPlayer end

module.exports = ComputerPlayer;