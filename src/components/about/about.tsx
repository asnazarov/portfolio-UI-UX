import styles from './style.module.scss'
import Image from "next/image";
import ava from '../../assets/unsplash_C5NOq1BKlAk.png'
import Arrow_1 from "../../assets/Arrow_1";


const About = () => {

  return (
    <section className={styles.about}>
      <div className={styles.avatar}>
        <Image src={ava} alt='avatar' fill/>
      </div>
      <div className={styles.content}>
        <p className={styles.hello}>Привет</p>
        <h2 className={styles.title}>Меня зовут Анастасия назарова.</h2>
        <h1 className={`${styles.title} ${styles.title_style}`}>Я Ui/Ux дизайнер из санкт-петербурга</h1>
        <p className={styles.specialization}><Arrow_1 /> Специализация</p>
        <p className={styles.specialization}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <p className={styles.open}>Открыта к предложениями по сотрудничеству</p>
      </div>
    </section>
  )
}

export default About