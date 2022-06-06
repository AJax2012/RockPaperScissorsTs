import OptionType from "./OptionsEnum";
import ResultMatrix from "./ResultMatrix";

export const getComputerChoice = (mostLikelyPlayerSelection: OptionType | undefined): OptionType => {
  if (mostLikelyPlayerSelection !== undefined) {
    var resultSet = ResultMatrix.get(mostLikelyPlayerSelection);
    return resultSet.lose;
  }

  const computerChoiceNumber = Math.floor(Math.random() * 3);
  return OptionType[OptionType[computerChoiceNumber]] as OptionType;
};
