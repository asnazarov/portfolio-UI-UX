import React, { FC } from 'react';
import style from '../../components/UtilityComponents/ArrowButton/style.module.scss';

type OwnPropertyType = {
  checkStatuses?: boolean;
  width: string;
  height: string;
};

const NextSvg: FC<OwnPropertyType> = (props) => {
  return (
    <svg
      className={style.nextSvg}
      width={props.width}
      height={props.height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="14" cy="14" r="14" fill={props.checkStatuses ? '#CFCFCF' : '#009AFF'} />
      <path
        d="M8.3999 14H18.8999M18.8999 14L13.7666 8.86667M18.8999 14L13.7666 19.1333"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
};
export default NextSvg;
