import Head from 'next/head'
import Image from 'next/image'
import Header from "../src/components/Header/Header";
import favicon from '../public/favicon.ico'
import About from "../src/components/about/about";
import Projects from "../src/components/projects/projects";
import Script from "next/script";
import photo from '../src/assets/img.png'

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Портфолио А.С. Назарова</title>
        {/*<meta property="og:image"*/}
        {/*      content={'../src/assets/img.png'}/>*/}
        <meta name="description"
              content="Сюда пожно добавить описание страницы сайта столько слов сколько хош. Сюда пожно добавить описание страницы сайта столько слов сколько хош.  Сюда пожно добавить описание страницы сайта столько слов сколько хош.  Сюда пожно добавить описание страницы сайта столько слов сколько хош.  Сюда пожно добавить описание страницы сайта столько слов сколько хош.   "/>
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
      <Header/>
      <main>
        <About/>
        <Projects/>

      </main>

    </div>
  )
}
