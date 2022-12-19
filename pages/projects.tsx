import {motion as m, useScroll} from "framer-motion";
import Projects from "../src/features/Projects/Projects";
import StylesWeb from "../src/features/StylesWeb/StylesWeb";
import {useRef} from "react";

const Pr = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });
  console.log(scrollYProgress)

  return (
    <m.div
      initial={{y: '100%'}}
      animate={{y: '0%'}}
      // exit={{opacity: 1}}
      transition={{duration: .75, ease: "easeOut"}}
      whileInView={{ opacity: 1 }}
      style={{background: '#F2F3F5', position: "absolute", top: 70, right: 0, left: 0, bottom: 0}}
    >
      <Projects />
      <StylesWeb/>
    </m.div>
  )
}

export default Pr