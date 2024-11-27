import React, { useState } from "react"
import { GameOption, validateGameOptions } from "./utils/options.type";
import { ChosenChoices, GameOptions } from "./components/arenaViews";
import getHouseChoice from "./utils/get-house-choice";

const gameOptions = {
  standard: ["rock", "paper", "scissors"],
  elite: ["rock", "paper", "scissors", "lizard", "spock"]
}

const App: React.FC = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState<GameOption | null>(null);
  const [houseChoice, setHouseChoice] = useState<GameOption | null>(null);
  const [hasHouseChosen, setHasHouseChosen] = useState(false);
  const [gameMode, setGameMode] = useState<"standard" | "elite">("standard");

  const submitPlayerChoice = (choice: string) => () => {
    const validation = validateGameOptions(choice);

    if (!validation.success) {
      console.error("Invalid player choice");
      return;
    }

    setPlayerChoice(choice as GameOption);

    setTimeout(() => {
      const houseChoice = getHouseChoice(gameOptions[gameMode]);

      if (houseChoice.error) {
        console.error("Invalid house choice");
        return;
      }

      setHouseChoice(houseChoice.chosenOption);
      setHasHouseChosen(true);
    }, 1000);
  }

  const incrementScore = () => {
    setPlayerScore((prevScore) => prevScore + 1);
  }

  const handlePlayAgain = () => {
    setPlayerChoice(null);
    setHouseChoice(null);
    setHasHouseChosen(false);
  }

  return (
    <main className="md:container min-w-[320px]">
      <div className="relative h-dvh p-8 md:p-14 mx-auto max-w-[1000px]">
        <div
          id="score-tracker-container"
          className="flex justify-between items-center p-3 rounded-lg md:p-6 border-3 md:rounded-2xl"
          style={{ borderColor: "hsl(217, 16%, 45%)" }}
        >
          <h1 className="ml-2 uppercase md:ml-3">
            rock
            <br />
            paper
            <br />
            scissors
          </h1>
          <div
            id="score-card"
            className="flex flex-col justify-center items-center p-2 w-24 bg-white rounded-md max-w-40 md:rounded-xl"
          >
            <h2
              className="font-semibold tracking-wider uppercase"
              style={{ color: "hsl(229, 64%, 46%)" }}
            >
              score
            </h2>
            <p
              className="text-4xl font-bold md:text-6xl"
              style={{ color: "hsl(229, 25%, 31%)" }}
            >
              {playerScore}
            </p>
          </div>
        </div>
        <div id="arena" className="mt-20 md:mt-10">
          <GameOptions
            elite={gameMode === "elite"}
            hasPlayerChosen={Boolean(playerChoice)}
            onSubmitPlayerChoice={submitPlayerChoice}
          />
          <ChosenChoices
            playerChoice={playerChoice}
            houseChoice={houseChoice}
            hasHouseChosen={hasHouseChosen}
            onPlayAgain={handlePlayAgain}
            incrementScore={incrementScore}
          />
        </div>
      </div>
      <div className="flex absolute left-0 bottom-8 justify-center px-8 w-full md:justify-end">
        <button className="rulesBtn">rules</button>
      </div>
    </main>
  )
}

export default App
