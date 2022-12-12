import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '../src/store/store';
import './index.css';
import '../src/styles/global.scss'
import { createWrapper } from 'next-redux-wrapper';
import 'swiper/swiper-bundle.css';

export async function getInitialProps({ Component, ctx }) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
}

const App = ({ Component, pageProps }) => {

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(App);
