import React from 'react';
import Link from 'next/link';

import Arrow from '../../src/assets/icons/arrow-right.svg';

export default function ProductButtons() {
  return (
    <>
      <Link href='product/1'>
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
          border-radius: 15px;
          color: white;
        }
        .button::visited {
          text-decoration: none;
          color: var(--compare-color);
        }

        @media (max-width: 320px) {
          .button {
            grid-area: see-product;
            place-self: center;
          }
        }
      `}</style>
    </>
  );
}
