import React from 'react';
import Link from 'next/link';

import Arrow from '../../src/assets/icons/arrow-right.svg';

export default function ProductButtons({ id }) {
  const { _id } = id;
  return (
    <>
      <Link href={`product/${_id}`}>
        <a className='button'> See Product </a>
      </Link>

      <style jsx>{`
        .button {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.8em;
          font-weight: 600;
          width: 100%;
          height: 27px;
        }
        .button {
          background: var(--button-bg);
          border-radius: 0 0 10px 10px;
          color: white;
        }
        .button::visited {
          text-decoration: none;
          color: var(--compare-color);
        }

        @media (max-width: 504px) {
          .button {
            grid-area: see-product;
            place-self: center;
            width: 90%;
            border-radius: 20px;
          }
        }
      `}</style>
    </>
  );
}
