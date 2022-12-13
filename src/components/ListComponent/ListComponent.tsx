import styles from './styles.module.scss'
import Link from "next/link";
import Arrow_2 from "../../assets/svg/Arrow_2";
import {FC} from "react";
import {listType} from "../../types";



type OwnPropertyType = {
  list: listType,
  styles?: object
}

const ListComponent:FC<OwnPropertyType> = (props) => {

  return (
    <ul className={styles.list} style={props.styles}>
      {
        props.list?.map(el => (
          <li className={styles.list__item} key={el.id}>
            {el.tag && <p className={styles.list__description}>{el.tag}</p>}
            <Link className={styles.list__link} href={'/'}>{el.text} <Arrow_2/></Link>
          </li>
        ))
      }
      {/*<li className={styles.list__item}>*/}
      {/*  <Link className={styles.list__link} href={'/'}>стили в веб-дизайне <Arrow_2/></Link>*/}
      {/*</li>*/}
      {/*<li className={styles.list__item}>*/}
      {/*  <Link className={styles.list__link} href={'/'}>сайт гастроэнтеролога <Arrow_2/></Link>*/}
      {/*</li>*/}
      {/*<li className={styles.list__item}>*/}
      {/*  <Link className={styles.list__link} href={'/'}>Чат-бот «ЭкоСбор» <Arrow_2/></Link>*/}
      {/*</li>*/}
      {/*<li className={styles.list__item}>*/}
      {/*  <Link className={styles.list__link} href={'/'}>стили в веб-дизайне <Arrow_2/></Link>*/}
      {/*</li>*/}
    </ul>
  )
}

export default ListComponent