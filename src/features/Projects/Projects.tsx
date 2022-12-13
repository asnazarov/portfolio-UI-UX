import styles from './styles.module.scss'
import Image from "next/image";
import oboi from '../../assets/525592315.jpg'
import Link from "next/link";
import Arrow_2 from "../../assets/svg/Arrow_2";
import ListComponent, {listType} from "../../components/ListComponent/ListComponent";

const list: listType = [
  {
    id:1,
    link: '/',
    text: 'стили в веб-дизайне',
    description: '',
  },
  {
    id:2,
    link: '/',
    text: 'сайт гастроэнтеролога',
    description: '',
  },
  {
    id:3,
    link: '/',
    text: 'Чат-бот «ЭкоСбор»',
    description: '',
  },
  {
    id:4,
    link: '/',
    text: 'стили в веб-дизайне',
    description: '',
  },
]

const Projects = () => {

  return (
    <section className={styles.projects}>
      <div/>
      <h2 className={styles.projects__title}>Проекты</h2>
      <ListComponent list={list}/>
      <div className={styles.projects__oboi}>
        <Image src={oboi} alt='oboi' fill/>
      </div>
    </section>
  )
}

export default Projects