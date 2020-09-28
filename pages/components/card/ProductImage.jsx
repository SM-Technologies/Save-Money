import React from 'react';

import Product from '../../../src/assets/images/Mac.png';

export default function Card() {
  return (
    <>
      <div className='product-container'>
        <img src={Product} alt='' />
      </div>
      <style jsx>{`
        .product-container {
          width: 182px;
          height: 104px;
          margin: 0 5%;
          align-items: center;
        }
      `}</style>
    </>
  );
}
