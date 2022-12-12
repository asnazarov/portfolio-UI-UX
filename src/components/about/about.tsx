import styles from './style.module.scss'
import Image from "next/image";
import ava from '../../assets/unsplash_C5NOq1BKlAk.png'


const About = () => {

  return (
    <section className={styles.about}>
      <div className={styles.avatar}>
        <Image src={ava} alt='avatar' fill/>
      </div>
      <div className={styles.content}>
        <p className={styles.hello}>Привет</p>
        <h2 className={styles.title}>Меня зовут Анастасия назарова.</h2>
        <h1 className={styles.title}>Я Ui/Ux дизайнер из санкт-петербурга</h1>
      </div>
    </section>
  )
}

export default About