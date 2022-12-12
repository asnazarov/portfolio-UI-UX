import React, { FC } from 'react';
import style from './socialIcons.module.scss';

type OwnPropertyType = {
  width: number;
  height: number;
};

const VKIcon: FC<OwnPropertyType> = (props) => {

  return (
    <>
      <svg
        width={props.width}
        height={props.height}
        viewBox='0 0 19 12'
        fill='#004077'
        xmlns='http://www.w3.org/2000/svg'
        className={style.socialIcons}
      >
        <path
          d='M10.3485 12C3.85691 12 0.154279 7.49549 0 0H3.25172C3.35853 5.5015 5.75572 7.83183 7.65453 8.31231V0H10.7165V4.74474C12.5916 4.54054 14.5613 2.37838 15.2259 0H18.2878C17.7775 2.93093 15.6414 5.09309 14.1223 5.98198C15.6414 6.7027 18.0743 8.58859 19 12H15.6295C14.9056 9.71772 13.1019 7.95195 10.7165 7.71171V12H10.3485Z'
           />
      </svg>
    </>

  );
};

export default VKIcon;