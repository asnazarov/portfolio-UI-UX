import React from 'react';
import style from './style.module.scss'

const MessageSvg = () => {

  return (
    <svg className={style.pic} viewBox="0 0 12 13" fill="#99B3C9" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd"
            d="M1.97974 0H10.0203C11.1119 0 12 0.804442 12 1.79318V8C12 8.98897 11.1119 9.79342 10.0203 9.79342H6.13934L1.97271 12.4195V9.79318C0.884268 9.78983 0 8.98682 0 8V1.79318C0 0.804442 0.888135 0 1.97974 0ZM2 3H10V4H2V3ZM10 6H2V7H10V6Z"
            />
    </svg>
  )
}
export default MessageSvg