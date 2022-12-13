import styles from './styles.module.scss'
import ListComponent from "../../components/ListComponent/ListComponent";
import {listContacts} from "../../data";



const Contacts = () => {

  return (
    <section className={styles.contacts}>
      <div />
      <h2 className={styles.contacts__title}>контакты</h2>
      <ListComponent list={listContacts} styles={{marginBottom: 0}}/>
    </section>
  )
}

export default Contacts