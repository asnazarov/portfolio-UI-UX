import React from 'react';
import style from './style.module.scss';

const CultureSvg = () => {
  return (
    <svg className={style.pic} viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M36.8457 9.23145V30.7086' stroke='#00DACC' strokeWidth='4' strokeMiterlimit='10' />
      <path d='M18.7832 34.9546V9.23145' stroke='#009CFF' strokeWidth='4' strokeMiterlimit='10' />
      <path d='M36.8446 9.23145H18.7832' stroke='#FB4C00' strokeWidth='4' strokeMiterlimit='10'
            strokeLinecap='square' />
      <path
        d='M33.0314 34.2483C35.1381 34.2483 36.8459 32.5404 36.8459 30.4337C36.8459 28.327 35.1381 26.6191 33.0314 26.6191C30.9246 26.6191 29.2168 28.327 29.2168 30.4337C29.2168 32.5404 30.9246 34.2483 33.0314 34.2483Z'
        stroke='#009CFF' strokeWidth='4' strokeMiterlimit='10' />
      <path
        d='M14.9689 38.7693C17.0756 38.7693 18.7834 37.0614 18.7834 34.9547C18.7834 32.848 17.0756 31.1401 14.9689 31.1401C12.8621 31.1401 11.1543 32.848 11.1543 34.9547C11.1543 37.0614 12.8621 38.7693 14.9689 38.7693Z'
        stroke='#6DC4C6' strokeWidth='4' strokeMiterlimit='10' />
    </svg>
  );
};

export default CultureSvg