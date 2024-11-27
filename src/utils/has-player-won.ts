import { GameOption } from "./options.type";

const hasPlayerWon = (playerChoice: GameOption, houseChoice: GameOption) => {
  if (playerChoice === houseChoice) return "draw";

  const rules: Record<GameOption, GameOption> = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  return rules[playerChoice] === houseChoice ? "win" : "lose";
}

export default hasPlayerWon;