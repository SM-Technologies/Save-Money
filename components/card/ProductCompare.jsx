import React from 'react';
import Link from 'next/link';

import Arrow from '../../src/assets/icons/arrow-right.svg';

export default function ProductCompare() {
  return (
    <>
      <Link href=''>
        <a className='link'>
          Compare prices &nbsp;
          <img src={Arrow} alt='' />
        </a>
      </Link>

      <style jsx>{`
        .link {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 27px;
          color: var(--compare-color);
          font-size: 0.8em;
          font-weight: 600;
          width: 100%;
          height: 27px;
        }
        .link::link {
          color: yellow;
        }

        @media (max-width: 320px) {
          .link {
            grid-area: compare;
            place-self: center;
          }
        }
      `}</style>
    </>
  );
}
