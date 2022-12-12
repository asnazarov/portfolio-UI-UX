import React, { FC } from 'react';
import style from './style.module.scss';

type OwnPropertyProps = {
  style: any
}

const SearchSvg:FC<OwnPropertyProps> = (props) => {
  return (
    <svg className={style.headerSearch} style={props.style} width='24' height='24' viewBox='0 0 24 24' fill='none'
         xmlns='http://www.w3.org/2000/svg'>
      <line x1='16.6307' y1='15.3228' x2='22.4204' y2='21.1581' stroke='#E65907' strokeWidth='4' />
      <circle cx='10.1379' cy='10.1379' r='8.13793' stroke='#009AFF' strokeWidth='4' />
    </svg>

  );
};
export default SearchSvg;
