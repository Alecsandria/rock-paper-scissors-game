import React, { useEffect, useState } from "react";
import { GameOption } from "../utils/options.type";
import hasPlayerWon from "../utils/has-player-won";

type PlayAgainProps = {
  playerChoice: GameOption;
  houseChoice: GameOption | null;
  onPlayAgain: () => void;
  incrementScore: () => void;
}

const PlayAgain: React.FC<PlayAgainProps> = (props) => {
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    if (!props.houseChoice) return;

    const playerGameStatus = hasPlayerWon(props.playerChoice, props.houseChoice!);


    const timeoutId = setTimeout(() => {
      if (playerGameStatus === "draw") {
        setMessage("It's a draw");
      } else setMessage(`You ${playerGameStatus}!`);

      if (playerGameStatus === "win") props.incrementScore();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [props.playerChoice, props.houseChoice]);

  if (!props.houseChoice) return null;

  return (
    <div>
      {message}
      <button onClick={props.onPlayAgain}>play again</button>
    </div>
  );
};

export default PlayAgain;
