import React, { FC } from 'react';

type OwnPropertyType = {
  width: string;
  height: string;
};

const PlusInputSvg: FC<OwnPropertyType> = (props) => {
  return (
    <svg width={props.width} height={props.width} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.21582 0.977654V15.6732"
        stroke="white"
        strokeWidth="1.5873"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.04248 8.50037H15.738"
        stroke="white"
        strokeWidth="1.5873"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PlusInputSvg;
