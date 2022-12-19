import Head from 'next/head'
import Image from 'next/image'
import Header from "../src/components/Header/Header";
import favicon from '../public/favicon.ico'
import About from "../src/features/About/About";
import Script from "next/script";
import Contacts from "../src/features/Contacts/Contacts";
import Projects from "../src/features/Projects/Projects";
import StylesWeb from "../src/features/StylesWeb/StylesWeb";
import photo from '../src/assets/525592315.jpg'
import {motion as m} from "framer-motion";

export default function Home() {
  return (
    <m.div
      initial={{y: '100%'}}
      animate={{y: '0%'}}
      // exit={{opacity: 1}}
      transition={{duration: .5, ease: "easeOut"}}
      // style={{background: '#F2F3F5', position: "absolute", top: 70, right: 0, left: 0, bottom: 0}}
      style={{background: '#F2F3F5'}}
    >
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <meta name="twitter:card" content="summary" key="twcard"/>
        <meta name="twitter:creator" content={photo.src} key="twhandle"/>


        <meta property="og:title" content="Портфолио А.С. Назарова" key="title"/>
        <meta property='og:description' content="Сюда пожно добавить описание страницы."/>
        <meta property="og:image" content={photo.src}/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:image:type" content="image/jpg"/>
        <meta property="og:url" content="https://n-web-d.ru/"/>
        <meta property="og:type" content="website"/>
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon"/>
        {/* <!-- Yandex.Metrika counter -->*/}
        <Script
          id="show-banner"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(91654445, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
        })`,
          }}
        />
        {/*<noscript>*/}
        {/*  dangerouslySetInnerHTML={{*/}
        {/*    __html: `<div><img src="https://mc.yandex.ru/watch/91654445" style="position:absolute; left:-9999px;" alt="" /></div>`*/}
        {/*}}*/}
        {/*</noscript>*/}
        {/*<noscript><div><img src="https://mc.yandex.ru/watch/91654445" style="position:absolute; left:-9999px;" alt="" /></div></noscript>*/}
        {/* <!-- /Yandex.Metrika counter -->*/}
      </Head>
      <main>
        <About/>
        {/*<Projects/>*/}
        {/*<Contacts/>*/}
      </main>

    </m.div>
  )
}
