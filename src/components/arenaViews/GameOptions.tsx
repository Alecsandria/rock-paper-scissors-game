import React from "react";

import rockIcon from "../../assets/icon-rock.svg";
import paperIcon from "../../assets/icon-paper.svg";
import scissorsIcon  from "../../assets/icon-scissors.svg";
import ArenaButton from "../ArenaButton";

type GameOptionsProps = {
  elite: boolean;
  hasPlayerChosen: boolean;
  onSubmitPlayerChoice: (choice: string) => () => void;
}

const GameOptions: React.FC<GameOptionsProps> = (props) => {
  if (props.hasPlayerChosen) return null;

  if (props.elite) {
    return <div>TODO: Elite view</div>;
  }

  return (
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
          onClick={props.onSubmitPlayerChoice("paper")}
        />
        <ArenaButton
          groupId="scissors-group"
          label="Scissors"
          cx={80}
          cy={20}
          stroke="hsl(40, 84%, 53%)"
          img={{ src: scissorsIcon, width: 14, height: 18 }}
          foreignObject={{ x: 66, y: 6 }}
          onClick={props.onSubmitPlayerChoice("scissors")}
        />
        <ArenaButton
          groupId="rock-group"
          label="Rock"
          cx={50}
          cy={80}
          stroke="hsl(349, 70%, 56%)"
          img={{ src: rockIcon, width: 12, height: 18 }}
          foreignObject={{ x: 36, y: 66 }}
          onClick={props.onSubmitPlayerChoice("rock")}
        />
      </g>
    </svg>
  )
};

export default GameOptions;
