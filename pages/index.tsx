import Head from 'next/head'
import Image from 'next/image'
import Header from "../src/components/Header/Header";
import favicon from '../public/favicon.ico'
import About from "../src/components/about/about";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Портфолио АСН</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon"/>
      </Head>
      <Header/>
      <main>
        <About/>


      </main>

    </div>
  )
}
