import styles from './styles.module.scss'
import Image from "next/image";
import oboi from '../../assets/525592315.jpg'
import Link from "next/link";
import Arrow_2 from "../../assets/svg/Arrow_2";


const Projects = () => {

  return (
    <section className={styles.projects}>
      <div/>
      <h2 className={styles.projects__title}>Проекты</h2>
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <Link className={styles.list__link} href={'/'}>стили в веб-дизайне <Arrow_2/></Link>
        </li>
        <li className={styles.list__item}>
          <Link className={styles.list__link} href={'/'}>сайт гастроэнтеролога <Arrow_2/></Link>
        </li>
        <li className={styles.list__item}>
          <Link className={styles.list__link} href={'/'}>Чат-бот «ЭкоСбор» <Arrow_2/></Link>
        </li>
        <li className={styles.list__item}>
          <Link className={styles.list__link} href={'/'}>стили в веб-дизайне <Arrow_2/></Link>
        </li>
      </ul>
      <div className={styles.projects__oboi}>
        <Image src={oboi} alt='oboi' fill/>
      </div>
    </section>
  )
}

export default Projects