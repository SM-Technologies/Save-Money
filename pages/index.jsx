import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';

import Layout from '../components/layout/Layout';
import ContainerProducts from '../components/productsContainer/HomeContainer';

import store from '../redux/store';

export default function Home() {
  return (
    <>
      <Head>
        <title>Save-Money</title>
      </Head>
      <Layout>
        <Provider store={store}>
          <ContainerProducts />
        </Provider>
      </Layout>
    </>
  );
}
