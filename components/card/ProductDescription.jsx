import React from 'react';
import Link from 'next/link';

import Stars from '../../src/assets/images/stars.png';
import Store from '../../src/assets//icons/Brands/amazon-icon.svg';

export default function ProductDescription({ desc }) {
  const { _id, name, Price, stars } = desc;
  return (
    <>
      <div className='details__container'>
        <Link href={`product/${_id}`}>
          <h2>{name}</h2>
        </Link>
        <h1>$ {Price}</h1>
        <div className='ship__detail'>
          <img src={Store} alt='' />
          <div className='avalible'>
            <p>Ships to Colombia</p>
            <h5>Availability in stock</h5>
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
          max-width: 1100px;
        }
        .details__container > h2 {
          height: 32px;
          font-size: 0.8em;
          font-weight: 600;
          text-overflow: ellipsis;
          overflow: hidden;
          cursor: pointer;
        }
        .details__container > h2::-webkit-scrollbar {
          background: transparent;
          height: 1px;
        }
        .details__container > h1 {
          font-size: 1.5em;
        }
        .details__container > p {
          color: var(--last-update-color);
          font-size: 0.75em;
          /* font-weight: 600; */
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
        .avalible > h5 {
          color: var(--last-update-color);
          margin: 0;
          font-weight: 500;
          font-size: 0.8em;
          /* height: 32px; */
        }
        .assesment {
          display: flex;
          align-items: center;
          height: 20px;
          margin: auto;
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
