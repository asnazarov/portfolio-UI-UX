import React, { FC } from 'react';
import style from './style.module.scss';

type OwnPropertyType = {
  width?: number;
  height?: number;
}

const TownSvg: FC<OwnPropertyType> = (props) => {

  return (
    <svg className={style.pic}
         viewBox='0 0 48 48' fill='none'
         xmlns='http://www.w3.org/2000/svg'>
      <path d='M7 16.9316H19.684' stroke='#00DACC' strokeWidth='4' strokeMiterlimit='10' />
      <path d='M7 24.6309H19.684' stroke='#00DACC' strokeWidth='4' strokeMiterlimit='10' />
      <path d='M7 32.3311H19.684' stroke='#00DACC' strokeWidth='4' strokeMiterlimit='10' />
      <path d='M34.1011 40.435C34.1011 35.875 31.3651 32.563 25.5273 32.563' stroke='#00DACC'
            strokeWidth='4' strokeMiterlimit='10' />
      <path d='M25.5273 26.01L33.263 20.7876L40.9987 26.01V40.435' stroke='#FB4C00' strokeWidth='4'
            strokeMiterlimit='10' />
      <path d='M25.5285 40.4355V9.24512H7V40.435' stroke='#009CFF' strokeWidth='4'
            strokeMiterlimit='10' />
    </svg>
  );
};

export default TownSvg;