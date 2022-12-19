import style from './style.module.scss'
import Link from "next/link";
import Burger_svg from "../../assets/svg/Burger_svg";
import {useWindowSize} from "../../utils/js-utils";
import {useState} from "react";
import NavModal from "../UI/Modals/Nav-modal/Nav-modal";

export type NavType = {
  id: number,
  text: string,
  link: string
}[]

const nav: NavType = [
  {
    id: 1,
    text: 'главная',
    link: '/'
  },
  {
    id: 2,
    text: 'Проекты',
    link: '/projects'
  },
  {
    id: 3,
    text: 'Контакты',
    link: '/contacts'
  },
]


const Header = () => {
  const size = useWindowSize()
  const [open, setOpen] = useState<boolean>(false)

  console.log(open)

  return (
    <header className={style.header}>
      <nav className={style.nav}>
        {size.width < 500 ? (
          <>
            <div className={style.nav__burger} onClick={() => setOpen(!open)}>
              <Burger_svg/>
            </div>
            {
              open && <NavModal nav={nav} handleClose={() => setOpen(!open)}/>
            }
          </>
        ) : (
          <ul className={style.list}>
            {nav?.map(el => (
              <li className={style.link} key={el.id}>
                <Link href={el.link}>
                  {el.text}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>


    </header>
  )
}

export default Header