import OptionType from "./OptionsEnum";

type Result = {
  win: OptionType;
  lose: OptionType;
};

const ResultMatrix = new Map<OptionType, Result>([
  [OptionType.ROCK, {
    win: OptionType.SCISSORS,
    lose: OptionType.PAPER
  }],

  [OptionType.PAPER, {
    win: OptionType.ROCK,
    lose: OptionType.SCISSORS
  }],

  [OptionType.SCISSORS, {
    win: OptionType.PAPER,
    lose: OptionType.ROCK
  }]
]);

export default ResultMatrix;