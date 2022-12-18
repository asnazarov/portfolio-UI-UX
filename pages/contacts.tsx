import Contacts from "../src/features/Contacts/Contacts";
import {motion as m} from "framer-motion";


const Cont = () => {

  return (
    <m.div
      initial={{y: '100%'}}
      animate={{y: '0%'}}
      exit={{opacity: 1}}
      transition={{duration: .75, ease: "easeOut"}}
      style={{background: '#F2F3F5', position: "absolute", top: 70, right: 0, left: 0, bottom: 0}}
    >
      <Contacts />
    </m.div>
  )
}

export default Cont