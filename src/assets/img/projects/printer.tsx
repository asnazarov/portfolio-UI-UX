import React, { FC } from 'react';

type OwnPropertyType = {
  width: number;
  height: number;
  hover: boolean;
};

const Printer: FC<OwnPropertyType> = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="7.5"
        y="5"
        width="10"
        height="14"
        stroke={props.hover ? '#4DD6CB' : '#009AFF'}
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 8H22.5V15V17H16.5V15H8.5V17H2.5V15V8ZM17.5 9H20.5V10H17.5V9Z"
        fill={props.hover ? '#4DD6CB' : '#009AFF'}
      />
    </svg>
  );
};

export default Printer;
