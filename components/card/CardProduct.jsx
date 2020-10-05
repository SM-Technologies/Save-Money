import React from 'react';

import ProductImage from './ProductImage';
import ProductDescription from './ProductDescription';
import ProductCompare from './ProductCompare';
import ProductButton from './ProductButton';

export default function Card({ data }) {
  const { _id } = data;
  return (
    <>
      <div className='card__container' data-id={_id}>
        <ProductImage image={data}/>
        <ProductDescription desc={data}/>
        <ProductCompare />
        <ProductButton id={data}/>
      </div>

      <style jsx>{`
        .card__container {
          display grid;
          place-self:center;
          border: 1px solid var(--border-color);
          width: 200px;
          height: min-content;
          /* padding: 5px 10px; */
          border-radius: 10px;
          box-shadow:2px 2px .1em var(--border-color)
        }

        @media (max-width: 504px) {
          .card__container {
            height:inherit;
            width:100%;
            grid-template: 1fr 37px /.75fr 1fr;
            grid-template-areas:
            'image contenido'
            'compare see-product';
            /* margin:5px; */
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

        a {
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
