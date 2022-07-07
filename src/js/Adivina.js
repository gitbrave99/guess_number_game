"use strict";
class Adivina {
    constructor(attemp = 10) {
        this._message = "";
        let numRam = Math.floor(Math.random() * 100) + 1;
        this._numRandom = numRam;
        this._attemps = attemp;
    }
    get message() {
        return this._message;
    }
    set message(message) {
        this._message = message;
    }
    get attemps() {
        return this._attemps;
    }
    set attemps(attemp) {
        this._attemps = attemp;
    }
    get numRandom() {
        return this._numRandom;
    }
    validateNumber(numTyped) {
        let levelResult = numTyped < 0 ? "Negative number" : this.calcLevenNumber(numTyped);
        this.message = levelResult;
        // return levelResult;
    }
    calcLevenNumber(numTyped) {
        let numRestado = 0;
        let result = "";
        numRestado = numTyped - this.numRandom;
        if (numRestado == 0) {
            result = "Win";
        }
        else if (numRestado > -11 && numRestado < 11) {
            result = "Soo Hot";
        }
        if ((numRestado > 10 && numRestado < 21) ||
            (numRestado < -10 && numRestado > -21)) {
            result = "Midle Hot";
        }
        else if ((numRestado > 20 && numRestado < 31) ||
            (numRestado < -20 && numRestado > -31)) {
            result = "Cold";
        }
        else if (numRestado > 31 || numRestado < -30) {
            result = "Soo Cold";
        }
        return result;
    }
}
