import Contacts from "../src/features/Contacts/Contacts";
import {motion as m} from "framer-motion";
import Layout from "../src/layout/Layout";
import img from '../src/assets/img.png'


const Cont = () => {

  return (
    <Layout title={'Контакты А.С. Назарова'} content={'Описание страницы контакты'} img={img.src}>
      <Contacts/>
    </Layout>
  )
}

export default Cont