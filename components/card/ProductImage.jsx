import React from 'react';

import Product from '../../../src/assets/images/Mac.png';

export default function Card() {
  return (
    <>
      <div className='product-container'>
        <img className='image' src={Product} alt='' />
      </div>
      <style jsx>{`
        .product-container {
          width: 100%;
          height: auto;
          margin: auto;
        }
        .image {
          height: inherit;
          width: inherit;
        }
      `}</style>
    </>
  );
}
