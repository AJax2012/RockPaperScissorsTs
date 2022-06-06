import OptionType from "./OptionsEnum";

type OptionIncrementor = {
  option: OptionType;
  counter: number;
}

const getHighestOptionIncrementorCounter = (counters: OptionIncrementor[]) => {
  return Math.max(...counters.map(c => c.counter));
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
    const allCounters = [this.rockCounter, this.paperCounter, this.scissorsCounter];
    const highestNumber = getHighestOptionIncrementorCounter(allCounters);

    const nextHighestNumber = getHighestOptionIncrementorCounter(
      allCounters.filter(x => x.counter != highestNumber));
    
    const highestCounters = allCounters.filter(c => c.counter === highestNumber);

    if (highestCounters.length > 1 || isSmallDifference(highestNumber, nextHighestNumber)) {
      return undefined;
    }

    return highestCounters[0].option;
  };
}

export default PlayerTracker;