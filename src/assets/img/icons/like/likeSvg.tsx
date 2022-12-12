import React from 'react';
import style from './style.module.scss';

const LikeSvg = (props) => {

  return (
    <svg className={style.pic} viewBox='0 0 12 10' fill='#99B3C9' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M9 0C7.5 0 6.74531 0.587985 6 1.36344C5.25469 0.587985 4.5 0 3 0C1.5 0 0 0.909672 0 3.63656C0 5 1.5 7.72689 6 10C10.5 7.72689 12 5 12 3.63656C12 0.909672 10.5 0 9 0Z'
      />
    </svg>
  );
};

export default LikeSvg;
