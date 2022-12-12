import React from 'react';
import style from './style.module.scss';

const EcologySvg = () => {
  return (
    <svg className={style.pic} viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M29.2259 18.9701C29.2259 22.6757 26.8859 24.6519 23.9997 24.6519C21.1134 24.6519 18.7734 22.6757 18.7734 18.9701C18.7734 14.3621 23.9997 7.58691 23.9997 7.58691C23.9997 7.58691 29.2259 14.3626 29.2259 18.9701Z'
        stroke='#009CFF' strokeWidth='4' strokeMiterlimit='10' strokeLinecap='square' />
      <path d='M24.0001 40.0375V38.2754C24.0001 32.7281 18.3461 28.231 12.7988 28.231H10.6738'
            stroke='#FB4C00' strokeWidth='4' strokeMiterlimit='10' strokeLinecap='square' />
      <path d='M24 40.0375V38.2754C24 32.7281 29.6539 28.231 35.2013 28.231H37.3262'
            stroke='#00DACC' strokeWidth='4' strokeMiterlimit='10' strokeLinecap='square' />
      <path
        d='M10.6738 28.231V29.5337C10.6738 36.1332 16.3417 41.4857 24.0001 41.4857C31.6585 41.4857 37.3263 36.1351 37.3263 29.5337V28.231'
        stroke='#009CFF' strokeWidth='4' strokeMiterlimit='10' strokeLinecap='square' />
      <path d='M37.0449 28.231H37.3262' stroke='#00DACC' strokeWidth='4' strokeMiterlimit='10'
            strokeLinecap='square' />
      <path d='M10.6738 28.231H10.9551' stroke='#FB4C00' strokeWidth='4' strokeMiterlimit='10'
            strokeLinecap='square' />
    </svg>
  );
};

export default EcologySvg;