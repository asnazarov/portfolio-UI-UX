import React from 'react';
import style from './style.module.scss'
import SamplePrevArrow from './SamplePrevArrow';
import SampleNextArrow from './SampleNextArrow';


const ArrowSlideWrap = () => {

  return (
    <div style={{ width: 112, zIndex:40 }}>
      <SamplePrevArrow />
      <SampleNextArrow />
    </div>
  );
};

export default ArrowSlideWrap
