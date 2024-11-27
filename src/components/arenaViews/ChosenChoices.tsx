import React from "react";

import paperIcon from "../../assets/icon-paper.svg";
import rockIcon from "../../assets/icon-rock.svg";
import scissorsIcon from "../../assets/icon-scissors.svg";
import lizardIcon from "../../assets/icon-lizard.svg";
import spockIcon from "../../assets/icon-spock.svg";
import { GameOption } from "../../utils/options.type";
import ArenaButton from "../ArenaButton";
import PlayAgain from "../PlayAgain";

type ChosenChoicesProps = {
  playerChoice: GameOption | null;
  houseChoice: GameOption | null;
  hasHouseChosen: boolean;
  onPlayAgain:  () => void;
  incrementScore: () => void;
}

type ChosenChoiceProps = {
  choice?: GameOption;
  groupId: string;
  title: string;
  loading?: boolean;
}

const lookupOption = {
  paper: {
    src: paperIcon,
    stroke: "hsl(230, 89%, 65%)"
  },
  rock: {
    src: rockIcon,
    stroke: "hsl(349, 71%, 52%)"
  },
  scissors: {
    src: scissorsIcon,
    stroke: "hsl(39, 89%, 49%)"
  },
  lizard: {
    src: lizardIcon,
    stroke: "hsl(265, 6%, 42%)"
  },
  spock: {
    src: spockIcon,
    stroke: "hsl(189, 59%, 53%)"
  },
};

const ChosenChoice: React.FC<ChosenChoiceProps> = (props) => (
  <div className="flex flex-col items-center">
    <p className="mb-8 text-2xl font-semibold tracking-widest uppercase">{props.title}</p>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="w-3/5">
      <ArenaButton
        groupId={props.groupId}
        label={props.choice || ""}
        cx={20}
        cy={20}
        stroke={props.choice ? lookupOption[props.choice].stroke : ""}
        img={{ 
          src: props.choice ? lookupOption[props.choice].src : "", 
          width: 12, 
          height: 18 
        }}
        foreignObject={{ x: 6, y: 6 }}
        fill="white"
        strokeWidth={4}
        loading={props.loading}
      />
    </svg>
  </div>
)

const ChosenChoices: React.FC<ChosenChoicesProps> = (props) => {
  if (!props.playerChoice) return null;
  
  return (
    <div className="grid grid-flow-col justify-stretch">
      <ChosenChoice
        choice={props.playerChoice}
        groupId="player-choice-group"
        title="you picked"
      />
      <PlayAgain
        playerChoice={props.playerChoice}
        houseChoice={props.houseChoice}
        onPlayAgain={props.onPlayAgain}
        incrementScore={props.incrementScore}
      />
      <ChosenChoice
        choice={props.houseChoice ?? undefined}
        loading={!props.hasHouseChosen}
        groupId="house-choice-group"
        title="the house picked"
      />
    </div>
  );
};

export default ChosenChoices;
