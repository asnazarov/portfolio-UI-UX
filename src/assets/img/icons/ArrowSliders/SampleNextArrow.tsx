import React from 'react';
import style from './style.module.scss';

const SampleNextArrow = (props) => {
  const { className, onClick } = props;


  return (
    <button className={`${className} ${style.btn}`}
            onClick={onClick}
            style={{
              right: 0,
              top: '115%'
            }}
    >
      1
    </button>
  );
};

export default SampleNextArrow;