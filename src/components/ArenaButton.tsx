import React from "react";

type ArenaButtonProps = {
  groupId: string;
  label: string;
  cx: number;
  cy: number;
  stroke: string;
  onClick: () => void;
  foreignObject: {
    x: number;
    y: number;
  };
  img: {
    src: string;
    width: number;
    height: number;
  };
}

const ArenaButton: React.FC<ArenaButtonProps> = (props) => (
  <g id={props.groupId} role="presentation">
    <circle role="presentation" cx={props.cx} cy={props.cy} r="16" stroke={props.stroke} />
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
        <img role="presentation" src={props.img.src} width={props.img.width} height={props.img.height} />
      </button>
    </foreignObject>
  </g>
)

export default ArenaButton;