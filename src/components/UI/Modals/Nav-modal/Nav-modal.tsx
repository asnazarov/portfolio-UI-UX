import styles from './styles.module.scss'
import {NavType} from "../../../Header/Header";
import {FC} from "react";
import Link from "next/link";


type OwnPropertyType = {
  nav: NavType
}

const NavModal: FC<OwnPropertyType> = (props) => {

  return (
    <ul className={styles.list}>
      {
        props.nav?.map(el => (
          <li className={styles.link} key={el.id}>
            <Link href={el.link}>{el.text}</Link>
          </li>
        ))
      }
    </ul>
  )
}

export default NavModal