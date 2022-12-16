import style from './style.module.scss'
import Link from "next/link";
import Burger_svg from "../../assets/svg/Burger_svg";
import {useWindowSize} from "../../utils/js-utils";

const Header = () => {
  const size = useWindowSize()


  return (
    <header className={style.header}>
      <nav className={style.nav}>
        {size.width < 500 && (
          <div className={style.nav__burger}>
            <Burger_svg/>
          </div>
        )}
        <ul className={style.list}>
          <li className={style.link}>
            <Link href={'/'}>
              Главная
            </Link>
          </li>
          <li className={style.link}>
            <Link href={'/'}>
              Проекты
            </Link>
          </li>
          <li className={style.link}>
            <Link href={'/'}>
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header