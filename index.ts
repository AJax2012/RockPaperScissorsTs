import { stdin as input, stdout as output } from "node:process";
import readline from "readline-promise";
import PlayerTracker from "./OptionTracker";
import OptionType from "./OptionsEnum";
import ResultTracker from "./ResultTracker";
import { getComputerChoice } from "./ComputerUtils";

const personTracker = new PlayerTracker();
const resultTracker = new ResultTracker();
const rl = readline.createInterface({ input, output, terminal: true });
let count = 0;

const main = async (c: number) => {
  const mostLikelyPlayerChoice = personTracker.getMostLikelyPlayerSelection();
  const computerChoice = getComputerChoice(mostLikelyPlayerChoice);

  const response: string = await rl.questionAsync(`${c}: Choose rock, paper, or scissors: `);
  const playerChoice = OptionType[response.toUpperCase()] as OptionType;

  if (playerChoice === undefined) {
    console.log(`${response} is not an acceptable answer. Please try again`);
    main(count);
    return;
  }

  personTracker.incrementCounter(playerChoice);
  resultTracker.setResults(playerChoice, computerChoice);
  resultTracker.readResults();

  const playAgainResponse = await rl.questionAsync("Do you want to play again? (y/n) ")

  if (playAgainResponse.startsWith("y")) {
    main(++count);
    return;
  }

  process.exit(1);
}

main(count);