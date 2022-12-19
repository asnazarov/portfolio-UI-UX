import Head from "next/head";
import photo from "../assets/525592315.jpg";
import favicon from "../../public/favicon.ico";
import {motion as m} from "framer-motion";
import About from "../features/About/About";
import Script from "next/script";
import {FC, ReactNode} from "react";


type OwnPropertyProps = {
  img?: string
  title: string,
  content?: string,
  children: ReactNode,
}

const Layout:FC<OwnPropertyProps> = (props) => {

  return (
    <div>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <meta name="twitter:card" content="summary" key="twcard"/>
        <meta name="twitter:creator" content={photo.src} key="twhandle"/>

        <title>{props.title ? props.title : 'Портфолио А.С. Назарова'}</title>
        <meta property="og:title" content={props.title ? props.title : 'Портфолио А.С. Назарова'} key="title"/>
        <meta property='og:description' content={props.content ? props.content : 'Сюда пожно добавить описание страницы.'}/>
        <meta property="og:image" content={props.img ? props.img : photo.src}/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:image:type" content="image/jpg"/>
        <meta property="og:url" content="https://n-web-d.ru/"/>
        <meta property="og:type" content="website"/>
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon"/>

        <Script
          id="show-banner"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        ym(91767756, "init", {
        defer=true,
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
          })`,
          }}
        ></Script>
      </Head>
      <m.main
        initial={{y: '100%'}}
        animate={{y: '0%'}}
        transition={{duration: .5, ease: "easeOut"}}
        style={{background: '#F2F3F5'}}
      >
        {props.children}
      </m.main>
    </div>
  )
}

export default Layout