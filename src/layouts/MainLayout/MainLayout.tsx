import React, { FC } from 'react';
import style from './style.module.scss';
import Head from 'next/head';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Logo from '../../assets/headerLogo.svg';

type OwnPropertyType = {
  img?: string;
  content?: string;
  title: string;
  children: React.ReactNode
};

const MainLayout: FC<OwnPropertyType> = (props) => {
  return (
    <div className={style.mainLayout} id='mainLayout' style={{ maxHeight: '100vh', overflow: 'scroll' }}>
      <Head>
        <title>{props.title ? props.title : 'Родные города'}</title>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css'
        />
        <meta property='og:description' content={props.content ? props.content : ''} />
        <meta property='og:image' content={props.img ? props.img : Logo} />
        {/*<script*/}
        {/*  dangerouslySetInnerHTML={{*/}
        {/*    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PD3SFQG');`,*/}
        {/*  }}*/}
        {/*/>*/}
        {/* <script*/}
        {/*   dangerouslySetInnerHTML={{*/}
        {/*     __html: `(function(d, w, q) {*/}
        {/* w.QCHAT_ID = 'V5zFGcQvQET19rj7kwBWG';*/}
        {/* w[q] = w[q] || function() {*/}
        {/*     (w[q].q = w[q].q || []).push(arguments);*/}
        {/* };*/}
        {/* var l = function () {*/}
        {/*     var s = d.createElement('script');*/}
        {/*     s.type = 'text/javascript';*/}
        {/*     s.async = true;*/}
        {/*     s.src = 'https://quickley.chat/chat.js';*/}
        {/*     var x = d.getElementsByTagName('script')[0];*/}
        {/*     x.parentNode.insertBefore(s, x);*/}
        {/* };*/}
        {/*l()*/}
        {/* })(document, window, 'Quickley');`,*/}
        {/*   }}*/}
        {/* />*/}
      </Head>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default MainLayout;
