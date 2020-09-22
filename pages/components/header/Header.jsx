import React from 'react';
import Link from 'next/link';
import Logo from '../../../public/Logo';
// import Logo from '../../public/samotech-logo.svg';

export default function Header() {
  return (
    <>
      <header>
        <div className='logo-container'>
          <Link href=''>
            <a>
              <Logo width={175} />
            </a>
          </Link>
        </div>

        <div className='input-container'>
          <span className=''>
            <input type='text' />
            <span>
              <img src='' alt='' />
              Icon
            </span>
          </span>
        </div>

        <div className='nav-container'>
          <div>CATEGORIES</div>
          <div>STORE</div>
          <div>
            <ul>
              <li>
                <p>Argentina </p>
              </li>
              <li>
                <p>Bolivia </p>
              </li>
              <li>
                <p>Brasil </p>
              </li>
              <li>
                <p>Chile </p>
              </li>
              <li>
                <p>Colombia</p>
              </li>
              <li>
                <p>Costa Rica</p>
              </li>
              <li>
                <p>Dominicana</p>
              </li>
              <li>
                <p>Ecuador </p>
              </li>
              <li>
                <p>Guatemala </p>
              </li>
              <li>
                <p>Honduras </p>
              </li>
              <li>
                <p>México </p>
              </li>
              <li>
                <p>Nicaragua </p>
              </li>
              <li>
                <p>Panamá </p>
              </li>
              <li>
                <p>Paraguay</p>
              </li>
              <li>
                <p>Perú</p>
              </li>
              <li>
                <p>Salvador </p>
              </li>
              <li>
                <p>Uruguay </p>
              </li>
              <li>
                <p>Venezuela</p>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <style jsx>{`
        html,
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          margin: 0 auto;
        }

        header {
          display: grid;
          grid-template: 1fr /1fr 1fr 1fr;
          /* height: 200px; */
          width: 1100px;
          position: absolute;
          border: 1px solid red;
        }
        .logo-container {
          place-self: center;
        }
        .input-container {
          place-self: center;
        }
        .nav-container {
          display: flex;
        }

        li {
          list-style: none;
        }
      `}</style>

      <style jsx>{`
        html {
          display: flex;
        }
      `}</style>
    </>
  );
}
