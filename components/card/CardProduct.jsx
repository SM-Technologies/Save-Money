import React from 'react';

import ProductImage from './ProductImage';
import ProductDescription from './ProductDescription';
import ProductButtons from './ProductButtons';

export default function Card() {
  return (
    <>
      <div className='card-container'>
        <ProductImage />
        <ProductDescription />
        <ProductButtons />
      </div>

      <style jsx>{`
        .card-container {
          display grid;
          place-self:center;
          border: 1px solid var(--border-color);
          width: 200px;
          height: 300px;
          padding: 0 10px;
          border-radius: 10px;
          box-shadow:2px 2px .1em var(--border-color)
        }

        @media (max-width: 320px) {
          .card-container {
            height:inherit;
            width:100%;
            grid-template: 1fr auto /.75fr 1fr;
          }
        }
      `}</style>

      <style global jsx>{`
        :root {
          --border-color: rgba(229, 229, 229, 1);
          --text-color: rgba(3, 85, 130, 1);
          --last-update-color: rgba(57, 130, 9, 1);
          --compare-color: rgba(247, 183, 51, 1);
          --button-bg: rgba(62, 147, 193, 1);
        }

        html,
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Open Sans', sans-serif;
        }
      `}</style>
    </>
  );
}
