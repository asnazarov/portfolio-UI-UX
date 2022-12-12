import React from 'react';
import style from './style.module.scss';

const SportSvg = () => {
  return (
    <svg className={style.pic} viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12.398 39.9312C15.7632 39.9312 18.4912 37.2031 18.4912 33.8379C18.4912 30.4727 15.7632 27.7446 12.398 27.7446C9.03274 27.7446 6.30469 30.4727 6.30469 33.8379C6.30469 37.2031 9.03274 39.9312 12.398 39.9312Z'
        stroke='#009CFF' strokeWidth='4' strokeMiterlimit='10' />
      <path
        d='M35.5991 39.9312C38.9643 39.9312 41.6924 37.2031 41.6924 33.8379C41.6924 30.4727 38.9643 27.7446 35.5991 27.7446C32.2339 27.7446 29.5059 30.4727 29.5059 33.8379C29.5059 37.2031 32.2339 39.9312 35.5991 39.9312Z'
        stroke='#009CFF' strokeWidth='4' strokeMiterlimit='10' />
      <path d='M35.5977 22.8691V33.838' stroke='#009CFF' strokeWidth='4' strokeMiterlimit='10' />
      <path d='M23.8177 37.7525V29.1891L17.498 22.8695L23.8177 16.5498L30.1374 22.8695H39.1824'
            stroke='#00DACC' strokeWidth='4' strokeMiterlimit='10' />
      <path
        d='M31.7322 15.7247C33.8463 15.7247 35.5601 14.0109 35.5601 11.8968C35.5601 9.78267 33.8463 8.06885 31.7322 8.06885C29.6181 8.06885 27.9043 9.78267 27.9043 11.8968C27.9043 14.0109 29.6181 15.7247 31.7322 15.7247Z'
        stroke='#FB4C00' strokeWidth='4' strokeMiterlimit='10' />
    </svg>
  );
};

export default SportSvg;