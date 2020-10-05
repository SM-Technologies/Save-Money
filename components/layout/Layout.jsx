import React from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';

export default function Layout(props) {
  return (
    <>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
}
