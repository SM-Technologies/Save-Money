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
          width: 182px;
          height: 104px;
          margin: 5px 5%;

          align-items: center;
        }
        .image {
          height: inherit;
          width: inherit;
        }
      `}</style>
    </>
  );
}
