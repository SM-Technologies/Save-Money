import React from 'react';
import Link from 'next/link';

import Arrow from '../../../src/assets/icons/arrow-right.svg';

export default function ProductButtons() {
  return (
    <>
      <div className='button-container'>
        <div>
          <Link href=''>
            <a className='link'>
              Compare prices &nbsp;
              <img src={Arrow} alt='' />
            </a>
          </Link>
        </div>
        <Link href=''>
          <a className='button'> See Product </a>
        </Link>
      </div>

      <style jsx>{`
        .button-container > Link {
          height: 27px;
        }
        .link,
        .button {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.8em;
          font-weight: 600;
          width: 100%;
          height: 27px;
        }
        .link {
          color: var(--compare-color);
        }
        .link::link {
          color: yellow;
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
      `}</style>

      <style global jsx>{`
        a {
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
