import React from 'react';
import Link from 'next/link';

import Arrow from '../../../src/assets/icons/arrow-right.svg';

export default function ProductButtons() {
  return (
    <>
      <div className='button-container'>
        <div>
          <Link href='' className='link'>
            <a>Compare prices</a>
          </Link>
          <img src={Arrow} alt='' />
        </div>
        <button>See Product</button>
        <Link href='' className='button'>
          <a> See Product</a>
        </Link>
        <button> fjsdlfjñal</button>
      </div>

      <style jsx>{`
        .button-container > Link {
          height: 27px;
        }
        .button {
          width: 100%;
          height: 27px;
          background: var(--button-bg);
          border: 1px solid red;
          border-radius: 15px;
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
