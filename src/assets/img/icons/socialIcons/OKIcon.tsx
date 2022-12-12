import React, { FC } from 'react';
import style from './socialIcons.module.scss';

type OwnPropertyType = {
  width: number;
  height: number;
};

const OKIcon: FC<OwnPropertyType> = (props) => {
  return (
    <>
      <svg
        width={props.width}
        height={props.height}
        viewBox='0 0 24 24'
        fill='#004077'
        className={style.socialIcons}
        xmlns='http://www.w3.org/2000/svg'>

        <path
          d='M12.4868 11.8241C9.79619 11.8241 7.55985 9.59534 7.55985 6.95811C7.55985 4.22968 9.79619 2 12.4878 2C15.2708 2 17.4148 4.22873 17.4148 6.95811C17.41 8.25303 16.8899 9.49306 15.9689 10.4057C15.0479 11.3183 13.8013 11.8288 12.503 11.825L12.4868 11.8241ZM12.4868 4.86619C11.3477 4.86619 10.481 5.82095 10.481 6.95906C10.481 8.09528 11.3477 8.95979 12.4878 8.95979C13.6736 8.95979 14.4946 8.09528 14.4946 6.95906C14.4956 5.82 13.6736 4.86619 12.4868 4.86619ZM14.4489 15.873L17.2329 18.5568C17.7805 19.1468 17.7805 20.0113 17.2329 20.5575C16.6405 21.1475 15.7271 21.1475 15.2708 20.5575L12.4878 17.8281L9.79619 20.5575C9.52284 20.8302 9.1571 20.966 8.74565 20.966C8.42658 20.966 8.06179 20.8292 7.74177 20.5575C7.19411 20.0113 7.19411 19.1468 7.74177 18.5559L10.5705 15.8721C9.54897 15.5703 8.569 15.143 7.65319 14.6C6.96838 14.2362 6.83218 13.327 7.19697 12.6439C7.65319 11.9618 8.4742 11.7804 9.20472 12.2354C10.1939 12.8376 11.3304 13.1561 12.4892 13.1561C13.6481 13.1561 14.7845 12.8376 15.7737 12.2354C16.5043 11.7804 17.37 11.9618 17.7805 12.6439C18.192 13.327 18.0082 14.2352 17.3691 14.6C16.5033 15.1463 15.4994 15.5557 14.4498 15.874L14.4489 15.873Z'
           />
      </svg>
    </>
  );
};

export default OKIcon;