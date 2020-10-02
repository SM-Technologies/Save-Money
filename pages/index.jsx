import React from 'react';
import Head from 'next/head';
import useSWR from 'swr';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../redux/reducers/rootReducer';

import Layout from '../components/layout/Layout';
import ContainerProducts from '../components/productsContainer/HomeContainer';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

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
