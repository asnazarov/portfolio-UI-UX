import styles from './styles.module.scss'
import {NavType} from "../../../Header/Header";
import {FC} from "react";
import Link from "next/link";


type OwnPropertyType = {
  nav: NavType
  handleClose: () => void
}

const NavModal: FC<OwnPropertyType> = (props) => {

  return (
    <ul className={styles.list}>
      {
        props.nav?.map(el => (
          <li key={el.id} onClick={() => props.handleClose()}>
            <Link className={styles.link} href={el.link}>{el.text}</Link>
          </li>
        ))
      }
    </ul>
  )
}

export default NavModal