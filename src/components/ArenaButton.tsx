import React from "react";

type ArenaButtonProps = {
  groupId: string;
  label: string;
  cx: number;
  cy: number;
  stroke: string;
  foreignObject: {
    x: number;
    y: number;
  };
  img: {
    src: string;
    width: number;
    height: number;
  };
  onClick?: () => void;
  fill?: string;
  strokeWidth?: number;
  loading?: boolean;
}

type GameOptionProps = {
  groupId: string;
  cx: number;
  cy: number;
  stroke: string;
  fill?: string;
  strokeWidth?: number;
  children?: React.ReactNode;
}

const GameOption: React.FC<GameOptionProps> = (props) => (
  <g id={props.groupId} role="presentation">
    <circle
      role="presentation"
      cx={props.cx}
      cy={props.cy}
      r="16"
      stroke={props.stroke}
      fill={props.fill}
      strokeWidth={props.strokeWidth}
    />
    {props.children}
  </g>
)

const ArenaButton: React.FC<ArenaButtonProps> = (props) => {
  const gameOptionProps = {
    groupId: props.groupId,
    cx: props.cx,
    cy: props.cy,
    stroke: props.stroke,
    fill: props.fill,
    strokeWidth: props.strokeWidth,
  };

  if (props.loading) {
    return (
      <circle
        role="presentation"
        cx={props.cx}
        cy={props.cy}
        r="16"
        fill="hsl(237, 49%, 15%)"
        strokeWidth={0}
        opacity={0.5}
      />
    );
  }

  if (!props.onClick) {
    return <GameOption {...gameOptionProps}>
      <foreignObject
        role="presentation"
        x={props.foreignObject.x}
        y={props.foreignObject.y}
        width={28}
        height={28}
      >
        <div className="flex justify-center items-center w-full h-full rounded-full">
          <img
            role="presentation"
            src={props.img.src}
            width={props.img.width}
            height={props.img.height}
          />
        </div>
      </foreignObject>
    </GameOption>;
  }

  return (
    <GameOption {...gameOptionProps}>
      <foreignObject
        role="presentation"
        x={props.foreignObject.x}
        y={props.foreignObject.y}
        width={28}
        height={28}
      >
        <button
          className="flex justify-center items-center w-full h-full rounded-full"
          onClick={props.onClick}
          aria-label={props.label}
          aria-pressed="false"
          aria-haspopup="false"
          tabIndex={0}
        >
          <img
            role="presentation"
            src={props.img.src}
            width={props.img.width}
            height={props.img.height}
          />
        </button>
      </foreignObject>
    </GameOption>
  )
}

export default ArenaButton;