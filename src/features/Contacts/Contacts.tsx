import styles from './styles.module.scss'
import ListComponent, {listType} from "../../components/ListComponent/ListComponent";

const list: listType = [
  {
    id: 1,
    link: '/',
    text: 'asn.nazarova@gmail.com',
    description: 'e-mail',
  },
  {
    id: 2,
    link: '/',
    text: 'Telegramm',
    description: 'Telegramm',
  },
]

const Contacts = () => {

  return (
    <section className={styles.contacts}>
      <div />
      <h2 className={styles.contacts__title}>контакты</h2>
      <ListComponent list={list}/>
    </section>
  )
}

export default Contacts