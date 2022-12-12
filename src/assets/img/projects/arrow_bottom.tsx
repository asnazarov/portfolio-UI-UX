import React, { FC } from 'react';

type OwnPropertyType = {
  className: string;
  color: string;
};
const ArrowBottom: FC<OwnPropertyType> = (props) => {
  return (
    <svg
      className={props.className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 7L12.5 16.5L22 7" stroke={props.color} strokeWidth="2" />
    </svg>
  );
};
export default ArrowBottom;
