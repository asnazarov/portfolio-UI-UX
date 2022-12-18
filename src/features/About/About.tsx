import styles from './style.module.scss'
import Image from "next/image";
import ava from '../../assets/unsplash_C5NOq1BKlAk.png'
import Arrow_1_svg from "../../assets/svg/Arrow_1_svg";
import {motion as m} from "framer-motion";


const About = () => {

  return (
    <section className={styles.about}>
      <div className={styles.about__avatar}>
        <Image src={ava} alt='avatar' fill/>
      </div>
      <div className={styles.about__content}>
        <m.p
          initial={{x: '100%', opacity: 0}}
          animate={{x: '0%', opacity: 1}}
          transition={{delay: .5, duration: .5, ease: "easeOut"}}
          className={styles.hello}>Привет</m.p>
        <m.h2
          initial={{x: '100%', opacity: 0}}
          animate={{x: '0%', opacity: 1}}
          transition={{delay: .7, duration: .5, ease: "easeOut"}}
          className={styles.title}>Меня зовут Анастасия назарова.</m.h2>
        <m.h1
          initial={{x: '100%', opacity: 0}}
          animate={{x: '0%', opacity: 1}}
          transition={{delay: .9, duration: .5, ease: "easeOut"}}
          className={`${styles.title} ${styles.title_style}`}>Я Ui/Ux дизайнер из санкт-петербурга</m.h1>
        <m.p
          initial={{x: '100%', opacity: 0}}
          animate={{x: '0%', opacity: 1}}
          transition={{delay: 1.1, duration: .5, ease: "easeOut"}}
          className={styles.specialization}><Arrow_1_svg /> Специализация</m.p>
        <m.p
          initial={{x: '100%', opacity: 0}}
          animate={{x: '0%', opacity: 1}}
          transition={{delay: 1.1, duration: .5, ease: "easeOut"}}
          className={styles.specialization}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</m.p>
        <m.p
          initial={{x: '100%', opacity: 0}}
          animate={{x: '0%', opacity: 1}}
          transition={{delay: 1.3, duration: .5, ease: "easeOut"}}
          className={styles.open}>Открыта к предложениями <br/> по сотрудничеству</m.p>
      </div>
    </section>
  )
}

export default About