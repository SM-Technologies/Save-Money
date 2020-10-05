import React from 'react';
import Link from 'next/link';

import Category from '../../src/assets/icons/cuadrado.svg';
import Store from '../../src/assets/icons/compras.svg';
import Country from '../../src/assets/images/usa.png';
import Arrow from '../../src/assets/icons/arrow-down.svg';

export default function NavHeader() {
  return (
    <>
      <div className='nav__container'>
        <div className='nav__categories'>
          <span>
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

        <div className='nav__store'>
          <span>
            <Link href='#stores'>
              <a>
                <img className='icon' src={Store} alt='' />
              </a>
            </Link>
            <Link href='#stores'>
              <a>
                <p>STORE</p>
              </a>
            </Link>
          </span>
        </div>

        <div className='nav__countries'>
          <ul>
            <li>
              <img className='icon' src={Country} alt='' />
              <img className='icon icon--arrow' src={Arrow} alt='' />
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .nav__container {
          display: grid;
          grid-template: 1fr / 1fr 1fr;
          font-family: 'Oxygen', sans-serif;
          color: var(--text-menu);
          font-weight: 600;
        }
        .nav__categories,
        .nav__store,
        .nav__countries {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .nav__categories {
          display: none;
        }
        span,
        .nav__countries > ul > li {
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
        .icon--arrow {
          height: 10px;
          margin: auto;
        }
        ul,
        li {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        @media (max-width: 768px) {
          .nav__container {
            grid-area: categorie;
            grid-template: 1fr / 1fr;
          }
          .nav__categories {
            display: flex;
            margin: auto;
          }
          .nav__categories > span {
            grid-template: none;
          }
          .nav__categories > span > a > p {
            display: none;
          }
          .nav__store,
          .nav__countries {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
