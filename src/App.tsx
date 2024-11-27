import React, { useState } from "react"
import rockIcon from "./assets/icon-rock.svg";
import paperIcon from "./assets/icon-paper.svg";
import scissorsIcon from "./assets/icon-scissors.svg";
import ArenaButton from "./components/ArenaButton";

const App: React.FC = () => {
  const [score, setScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState<string | null>(null);

  const submitPlayerChoice = (choice: string) => () => {
    setPlayerChoice(choice);
  }

  const incrementScore = () => {
    setScore(score + 1);
  }

  return (
    <main className="md:container min-w-[320px]">
      <div className="relative h-dvh p-8 md:p-14 mx-auto max-w-[1000px]">
        <div id="score-tracker-container" className="flex justify-between items-center p-3 rounded-lg md:p-6 border-3 md:rounded-2xl" style={{ borderColor: "hsl(217, 16%, 45%)" }}>
          <h1 className="ml-2 uppercase md:ml-3">
            rock
            <br />
            paper
            <br />
            scissors
          </h1>
          <div id="score-card" className="flex flex-col justify-center items-center p-2 w-24 bg-white rounded-md max-w-40 md:rounded-xl">
            <h2 className="font-semibold tracking-wider uppercase" style={{ color: "hsl(229, 64%, 46%)" }}>score</h2>
            <p className="text-4xl font-bold md:text-6xl" style={{ color: "hsl(229, 25%, 31%)" }}>{score}</p>
          </div>
        </div>
        <div id="arena" className="mt-20 md:mt-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full md:w-3/4 md:mx-auto">
            <g stroke="hsl(237, 49%, 15%)" strokeWidth={4}>
              <line x1="20" y1="20" x2="80" y2="20" />
              <line x1="50" y1="80" x2="20" y2="20" />
              <line x1="50" y1="80" x2="80" y2="20" />
            </g>
            <g id="arena-buttons-group" fill="white" strokeWidth={4} className="arenaBtn">
              <ArenaButton
                groupId="paper-group"
                label="Paper"
                cx={20}
                cy={20}
                stroke="hsl(230, 89%, 65%)"
                img={{ src: paperIcon, width: 12, height: 18 }}
                foreignObject={{ x: 6, y: 6 }}
                onClick={submitPlayerChoice("paper")}
              />
              <ArenaButton
                groupId="scissors-group"
                label="Scissors"
                cx={80}
                cy={20}
                stroke="hsl(40, 84%, 53%)"
                img={{ src: scissorsIcon, width: 14, height: 18 }}
                foreignObject={{ x: 66, y: 6 }}
                onClick={submitPlayerChoice("scissors")}
              />
              <ArenaButton
                groupId="rock-group"
                label="Rock"
                cx={50}
                cy={80}
                stroke="hsl(349, 70%, 56%)"
                img={{ src: rockIcon, width: 12, height: 18 }}
                foreignObject={{ x: 36, y: 66 }}
                onClick={submitPlayerChoice("rock")}
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex absolute left-0 bottom-8 justify-center px-8 w-full md:justify-end">
        <button className="rulesBtn">rules</button>
      </div>
    </main>
  )
}

export default App
