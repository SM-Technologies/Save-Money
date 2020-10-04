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
          width: 100%;
          height: auto;
          margin: auto;
        }
        .image {
          height: inherit;
          width: inherit;
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
