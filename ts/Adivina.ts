class Adivina {
  private _attemps: number;
  private _numRandom: number;
  private _message: string = "";

  constructor(attemp: number = 10) {
    let numRam: number = Math.floor(Math.random() * 100) + 1;
    this._numRandom = numRam;
    this._attemps = attemp;
  }

  public get message(): string {
    return this._message;
  }

  public set message(message: string) {
    this._message = message;
  }

  public get attemps(): number {
    return this._attemps;
  }

  public set attemps(attemp) {
    this._attemps = attemp;
  }

  public get numRandom() {
    return this._numRandom;
  }

  public validateNumber(numTyped: number): void {
    let levelResult: string =
      numTyped < 0 ? "Negative number" : this.calcLevenNumber(numTyped);
    this.message = levelResult;
    // return levelResult;
  }
  public calcLevenNumber(numTyped: number): string {
    let numRestado: number = 0;
    let result: string = "";
    numRestado = numTyped - this.numRandom;
    if (numRestado == 0) {
      result = "Win";
    } else if (numRestado > -11 && numRestado < 11) {
      result = "Soo Hot";
    }
    if (
      (numRestado > 10 && numRestado < 21) ||
      (numRestado < -10 && numRestado > -21)
    ) {
      result = "Midle Hot";
    } else if (
      (numRestado > 20 && numRestado < 31) ||
      (numRestado < -20 && numRestado > -31)
    ) {
      result = "Cold";
    } else if (numRestado > 31 || numRestado < -30) {
      result = "Soo Cold";
    }

    return result;
  }
}
