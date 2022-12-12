import React from 'react';
import style from './style.module.scss';

const ArrowSvg = (props) => {

  return (
    <svg className={style.pic}  style={props.style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 5L5 20" stroke="#FB4C00" strokeWidth="4" strokeLinecap="square"/>
      <path d="M4 4H21V20" stroke="#009CFF" strokeWidth="4" strokeLinecap="square"/>
    </svg>
  )
}

export default ArrowSvg