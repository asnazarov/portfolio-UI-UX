import style from './style.module.scss'
import Link from "next/link";

const Header = () => {

  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <ul className={style.list}>
          <div/>
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