import OptionType from "./OptionsEnum";
import * as _ from "lodash/core";

type OptionIncrementor = {
  option: OptionType;
  counter: number;
}

const getTwoHighestIncrementors = (counters: OptionIncrementor[]): OptionIncrementor[] => {
  const orderedIncrementors = _.sortBy(counters, "counter");
  return [orderedIncrementors[2], orderedIncrementors[1]];
}

const isSmallDifference = (highest: number, nextHighest: number): boolean => {
  return Math.abs(highest - nextHighest) <= 2;
}

class PlayerTracker {
  rockCounter: OptionIncrementor;
  paperCounter: OptionIncrementor;
  scissorsCounter: OptionIncrementor;
  
  constructor() {
    this.rockCounter = {
      option: OptionType.ROCK,
      counter: 0
    };
    this.paperCounter = {
      option: OptionType.PAPER,
      counter: 0
    };
    this.scissorsCounter = {
      option: OptionType.SCISSORS,
      counter: 0
    };
  }

  incrementCounter(optionType: OptionType): void {
    switch (optionType) {
      case OptionType.ROCK:
        this.rockCounter.counter++;
        break;
      case OptionType.PAPER:
        this.paperCounter.counter++;
        break;
      case OptionType.SCISSORS:
        this.scissorsCounter.counter++;
        break;
    }
  };

  getMostLikelyPlayerSelection(): OptionType | undefined {
    const highestIncrementors = getTwoHighestIncrementors([
      this.rockCounter,
      this.paperCounter,
      this.scissorsCounter
    ]);

    if (isSmallDifference(highestIncrementors[0].counter, highestIncrementors[1].counter)) {
      return undefined;
    }

    return highestIncrementors[0].option;
  };
}

export default PlayerTracker;