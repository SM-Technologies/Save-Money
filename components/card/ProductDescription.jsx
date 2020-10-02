import React from 'react';

import Stars from '../../src/assets/images/stars.png';
import Store from '../../src/assets//icons/Brands/amazon-icon.svg';

export default function ProductDescription() {
  // const {name, salePrice, description} = data;
  return (
    <>
      <div className='details__container'>
        <h2>Laptop Apple Macbook Air 256gb - 13 </h2>
        <h1>$1.485.00</h1>
        <div className='ship__detail'>
          <img src={Store} alt='' />
          <div className='avalible'>
            <p>Ships to Colombia</p>
            <h3>Availability in stock</h3>
          </div>
        </div>
        <p>Offer updated on: 20/9/2020</p>
        <div className='assesment'>
          <p>Assessment:</p>
          <img src={Stars} alt='' />
        </div>
      </div>

      <style jsx>{`
        h1,
        h2,
        h3,
        h4,
        p {
          margin: 0;
        }
        .details__container {
          color: var(--text-color);
          padding: 0 2.5%;
        }
        .details__container > h2 {
          font-size: 0.8em;
          font-weight: 600;
        }
        .details__container > h1 {
          font-size: 1.5em;
        }
        .details__container > p {
          color: var(--last-update-color);
          font-size: 0.75em;
          font-weight: 600;
        }
        .details__container > h2 {
        }

        .ship__detail {
          display: grid;
          grid-template: 1fr/0.25fr 1fr;
        }

        .ship__detail > img {
          width: 20px;
          height: 20px;
          margin: auto;
        }
        .avalible > p {
          font-size: 0.75em;
        }
        .avalible > h3 {
          color: var(--last-update);
          font-weight: 600;
          font-size: 1em;
        }
        .assesment {
          display: flex;
        }
        .assesment > p {
          font-size: 0.75em;
        }

        @media (max-width: 504px) {
          .details__container {
            grid-area: contenido;
            place-self: center;
            padding: 0;
          }
        }
      `}</style>
    </>
  );
}
