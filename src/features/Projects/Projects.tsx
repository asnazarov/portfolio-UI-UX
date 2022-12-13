import styles from './styles.module.scss'
import Image from "next/image";
import oboi from '../../assets/525592315.jpg'
import ListComponent from "../../components/ListComponent/ListComponent";
import {listProjects} from "../../data";



const Projects = () => {

  return (
    <section className={styles.projects}>
      <div/>
      <h2 className={styles.projects__title}>Проекты</h2>
      <ListComponent list={listProjects}/>
      <div className={styles.projects__oboi}>
        <Image src={oboi} alt='oboi' fill/>
      </div>
    </section>
  )
}

export default Projects