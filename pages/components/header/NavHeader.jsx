import React from 'react';
import Link from 'next/link';

import Category from '../../../src/assets/icons/cuadrado.svg';
import Store from '../../../src/assets/icons/compras.svg';
import Country from '../../../src/assets/icons/Brands/mexico.svg';
import Arrow from '../../../src/assets/icons/arrow-down.svg';

export default function NavHeader() {
  return (
    <>
      <div className='nav-container'>
        <div className='nav-categories'>
          <span>
            {/* <img className='icon' src={Category} alt='' />
            <p>CATEGORIES</p> */}
            <Link href=''>
              <a>
                <img className='icon' src={Category} alt='' />
              </a>
            </Link>
            <Link href=''>
              <a>
                <p>CATEGORIES</p>
              </a>
            </Link>
          </span>
        </div>

        <div className='nav-store'>
          <span>
            <Link href=''>
              <a>
                <img className='icon' src={Store} alt='' />
              </a>
            </Link>
            <Link href=''>
              <a>
                <p>STORE</p>
              </a>
            </Link>
          </span>
        </div>

        <div className='nav-countries'>
          <ul>
            <li>
              <img className='icon' src={Country} alt='' />
              <img className='icon arrow' src={Arrow} alt='' />
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .nav-container {
          display: grid;
          grid-template: 1fr / 1fr 1fr 0.5fr;
          font-family: 'Oxygen', sans-serif;
          color: var(--text-menu);
          font-weight: 600;
        }
        .nav-categories,
        .nav-store,
        .nav-countries {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        span,
        .nav-countries > ul > li {
          display: grid;
          grid-template: 1fr / 1fr 1fr;
        }
        span > a {
          text-decoration: none;
          cursor: pointer;
          margin: auto;
        }
        img {
          margin: 0 auto;
        }
        p {
          margin: auto 0;
        }
        .icon {
          height: 30px;
        }
        .arrow {
          height: 10px;
          margin: auto;
        }
        ul,
        li {
          list-style: none;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </>
  );
}
