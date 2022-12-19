import {motion as m, useScroll} from "framer-motion";
import Projects from "../src/features/Projects/Projects";
import StylesWeb from "../src/features/StylesWeb/StylesWeb";
import {useRef} from "react";
import Layout from "../src/layout/Layout";

const Pr = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });
  console.log(scrollYProgress)

  return (
    <Layout title={'Проекты А.C. Назарова'} content={'Описание страницы Проекты'}>
      <Projects/>
      <StylesWeb/>
    </Layout>

  )
}

export default Pr