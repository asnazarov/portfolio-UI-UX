import React, { FC } from 'react';
import style from './socialIcons.module.scss';

type OwnPropertyType = {
  width: number;
  height: number;
};

const TlgmIcon: FC<OwnPropertyType> = (props) => {
  return (
    <>
      <svg
        viewBox="0 0 24 24"
        fill="#004077"
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        className={style.socialIcons}
      >
        <path d="M19.3808 4.14126C19.3808 4.14126 21.1383 3.4487 20.9913 5.13052C20.9429 5.82309 20.5036 8.2473 20.1616 10.869L18.99 18.6358C18.99 18.6358 18.8922 19.7737 18.0133 19.9716C17.1348 20.1691 15.8166 19.279 15.5723 19.0811C15.3768 18.9325 11.9108 16.7062 10.6902 15.6182C10.3483 15.3211 9.9574 14.7277 10.7391 14.0352L15.865 9.08799C16.4508 8.49462 17.0366 7.10948 14.5956 8.7913L7.76022 13.4907C7.76022 13.4907 6.97897 13.9858 5.51463 13.5405L2.34077 12.5508C2.34077 12.5508 1.16912 11.8089 3.17088 11.0669C8.05336 8.74193 14.0586 6.36754 19.3799 4.14126H19.3808Z"
              />
      </svg>
    </>



  );
};

export default TlgmIcon;
