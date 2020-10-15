import React from 'react';

import Product from '../../src/assets/images/Mac.png';
// const {urlImage} = data;
export default function Card({ image }) {
  const { imageURL } = image;
  return (
    <>
      <div className='product__container'>
        <img className='image' src={imageURL} alt='' />
      </div>
      <style jsx>{`
        .product__container {
          display: flex;
          width: 100%;
        }
        .image {
          margin: auto;
          width: calc(100% - 20px);
        }

        @media (max-width: 320px) {
          .product__container {
            grid-area: image;
            padding: 0 5px;
          }
        }
      `}</style>
    </>
  );
}
