import React from 'react';
import Head from 'next/head';
import useSWR from 'swr';

import Layout from '../components/layout/Layout';
import ContainerProducts from '../components/productsContainer/HomeContainer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Save-Money</title>
      </Head>
      <Layout>
        <ContainerProducts />
      </Layout>
    </>
  );
}
