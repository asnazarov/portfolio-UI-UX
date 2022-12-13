import styles from './styles.module.scss'
import Image from "next/image";
import img from '../../assets/ecc8608ebb9732b0a74cc79493f1a31f.jpeg'
import {listProjects} from "../../data";

const StylesWeb = () => {

  return (
    <section className={styles.stylesWeb}>
      {listProjects?.map(proj => (
        <>
          {proj.description?.text && <h2 className={styles.stylesWeb__title}>{proj.text}</h2>}
          <div className={styles.content}>
            <div >
              <h3 className={styles.content__description}>{proj.description?.text}</h3>
              <div className={styles.content__block}>
                <ul>
                  {proj.description?.list_1?.map(el => (
                    <li>{el}</li>
                  ))}
                </ul>
                <ul>
                  {proj.description?.list_2?.map(el => (
                    <li>{el}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.content__img}>
              <Image src={img} alt={'img'} fill/>
            </div>
          </div>
        </>
      ))}
    </section>
  )
}

export default StylesWeb