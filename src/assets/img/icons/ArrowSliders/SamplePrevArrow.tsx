import React from 'react';
import style from './style.module.scss';

const SamplePrevArrow = (props) => {
  const { className, onClick } = props;


  return (
    <button className={`${className} ${style.btn}`}
            onClick={onClick}
            style={{
              left: 0,
              top: '115%'
            }}
    >
      2
    </button>
  );
};

export default SamplePrevArrow;