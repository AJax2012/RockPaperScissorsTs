import OptionType from "./OptionsEnum";
import ResultMatrix from "./ResultMatrix";

export enum ResultType {
  WIN,
  LOSE,
  TIE
}

class ResultTracker {
  private result: ResultType;
  private playerChoice: OptionType;
  private computerChoice: OptionType;
  private playerWinCounter: number;
  private computerWinCounter: number;

  constructor() {
    this.playerWinCounter = 0;
    this.computerWinCounter = 0;
  }

  setResults = (playerChoice: OptionType, computerChoice: OptionType): void => {
    const resultSet = ResultMatrix.get(playerChoice);
    this.playerChoice = playerChoice;
    this.computerChoice = computerChoice;

    switch (computerChoice) {
      case playerChoice:
        this.result = ResultType.TIE;
        break;
      case resultSet.win:
        this.result = ResultType.WIN;
        this.playerWinCounter++;
        break;
      case resultSet.lose:
        this.result = ResultType.LOSE;
        this.computerWinCounter++;
        break;
      default:
        throw new Error("not an accepted result set from computer.");
    }
  }

  readResults() {
    console.log('');
    console.log(`You played ${OptionType[this.playerChoice]}. I chose ${OptionType[this.computerChoice]}.`);

    if (this.result === ResultType.TIE) {
      console.log(`We tied!`);
    } else {
      console.log(`You ${ResultType[this.result]}!`);
    }

    console.log("All results");
    console.log(`Player wins: ${this.playerWinCounter}`);
    console.log(`Computer wins: ${this.computerWinCounter}`);
    console.log('');
  }
}

export default ResultTracker;