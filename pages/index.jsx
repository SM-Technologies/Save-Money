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

// function Allproducts() {
//   const { getProduct, error } = useSWR('http://35.198.26.40/api-docs', fetcher);
//   if (error) return <div>failed to load</div>;
//   if (!getProduct) return <div>loading...</div>;
//   console.log({ getProduct: id });
//   // return <div>hello {data.id}!</div>;
//   return {};
// }
