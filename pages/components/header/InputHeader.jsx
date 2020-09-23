import React from 'react';
import Link from 'next/link';

import Search from '../../../src/assets/icons/buscar.svg';

export default function InputHeader() {
  return (
    <>
      <div className='input-container'>
        <input
          className='input-input'
          type='text'
          placeholder='What do you want to buy?'
        />
        <span className='input-icon'>
          <Link href=''>
            <img src={Search} alt='Icon search' />
          </Link>
        </span>
      </div>

      <style jsx>{`
        .input-container {
          place-self: center;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 40px;
          margin: 0;
          padding: 0;
          border-radius: 25px;
          background-color: var(--input-bg);
        }
        .input-input {
          /* display: flex; */
          justify-content: center;
          align-items: center;
          width: 90%;
          height: inherit;
          background: none;
          border: none;
          padding: 5px 5%;
        }
        .input-input::placeholder {
          font-weight: 500;
          font-size: 1.25em;
          color: rgba(62, 147, 193, 1);
        }
        .input-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 10%;
          height: inherit;
        }
        img {
          fill: rgba(62, 147, 193, 1);
          height: 50%;
        }
      `}</style>
    </>
  );
}
