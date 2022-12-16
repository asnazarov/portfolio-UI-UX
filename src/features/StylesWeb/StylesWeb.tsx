import styles from './styles.module.scss'
import Image from "next/image";
import img from '../../assets/ecc8608ebb9732b0a74cc79493f1a31f.jpeg'
import {listProjects} from "../../data";
import arrow_1 from "../../assets/svg/Arrow_1_svg";
import Arrow_1_svg from "../../assets/svg/Arrow_1_svg";

const StylesWeb = () => {

  return (
    <section className={styles.stylesWeb}>
      {listProjects?.map(proj => (
        <>
          {proj.description?.text && <h2 className={styles.stylesWeb__title}>{proj.text}</h2>}
          {
            proj.description?.text && <div className={styles.content}>
              <div className={styles.content__blockWrap}>
                <h3 className={styles.content__description}>{proj.description?.text}</h3>
                <div className={styles.content__block}>
                  <ul className={styles.content__list}>
                    {proj.description?.list_1?.map(el => (
                      <li className={`${styles.content__listItem} ${styles.content__listItem_listType}`} style={{whiteSpace: "nowrap"}}>
                        <span><Arrow_1_svg/></span>{el}
                      </li>
                    ))}
                  </ul>
                  <ul className={`${styles.content__list} ${styles.content__list_type}`}>
                    {proj.description?.list_2?.map(el => (
                      <li className={styles.content__listItem}>{el}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={styles.content__img}>
                <Image src={img} alt={'img'} fill/>
              </div>
            </div>

          }
        </>
      ))}
    </section>
  )
}

export default StylesWeb