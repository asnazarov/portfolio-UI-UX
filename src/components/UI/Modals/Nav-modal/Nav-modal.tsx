import styles from './styles.module.scss'
import {NavType} from "../../../Header/Header";
import {FC} from "react";
import Link from "next/link";
import {AnimatePresence, motion as m} from "framer-motion";

type OwnPropertyType = {
  nav: NavType
  open: boolean
  handleClose: (bool: boolean) => void
}

const NavModal: FC<OwnPropertyType> = (props) => {

  console.log(props.open)

  return (
    // <AnimatePresence initial={false}>
      <m.ul
        initial={{y: '0%'}}
        animate={props.open ? {y:'0%', opacity: 1} :  {y: '-100%', opacity: 0}}
        transition={{duration: .5, ease: "easeOut"}}
        className={styles.list}>
        {
          props.nav?.map(el => (
            <li key={el.id} onClick={() => props.handleClose(!props.open)}>
              <Link className={styles.link} href={el.link}>{el.text}</Link>
            </li>
          ))
        }
      </m.ul>
    // </AnimatePresence>
  )
}

export default NavModal