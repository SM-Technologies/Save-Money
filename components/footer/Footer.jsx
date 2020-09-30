import React from 'react';
import Link from 'next/link';
import LogoWhite from '../../../src/assets/images/samotech-logo-white.svg';
import LogoInstagram from '../../../src/assets/images/instagram.svg';
import LogoFacebook from '../../../src/assets/images/facebook.svg';
import LogoTwitter from '../../../src/assets/images/twitter.svg';

const Footer = () => {
  return (
    <>
      <footer>
        <ul className='footer__logo uno'>
          <li>
            <a href='#'>
              <img src={LogoWhite} alt='Logo Samotex' height='50' />
            </a>
          </li>
        </ul>
        <ul className='footer__menu dos'>
          <li className='text__menu--footer'>
            <Link href=''>
              <a>Nosotros</a>
            </Link>
          </li>
          <li className='text__menu--footer'>
            <Link href=''>
              <a>Políticas</a>
            </Link>
          </li>
          <li className='text__menu--footer'>
            <Link href=''>
              <a>Términos de uso</a>
            </Link>
          </li>
          <li className='text__menu--footer'>
            <Link href=''>
              <a>Contacto</a>
            </Link>
          </li>
        </ul>
        <ul className='footer__social tres'>
          <li className='text__social'>
            <Link href='' target='_blank'>
              <a>
                <img className='' src={LogoTwitter} width='20' alt='Twitter' />
                <p>Twitter</p>
              </a>
            </Link>
          </li>

          <li className='text__social'>
            <Link href='https://www.instagram.com/' target='_blank'>
              <a>
                <img
                  className=''
                  src={LogoInstagram}
                  width='20'
                  alt='Instagram'
                />
                <p>Instagram</p>
              </a>
            </Link>
          </li>

          <li className='text__social'>
            <Link href='https://www.facebook.com/' target='_blank'>
              <a>
                <img src={LogoFacebook} width='20' alt='Facebook' />
                <p>Facebook</p>
              </a>
            </Link>
          </li>
        </ul>

        <div className='copyright'>
          Copyright © 2020. Todos derechos reservados
        </div>
      </footer>

      <style jsx>{`
        ol,
        ul {
          margin: 0;
          padding: 0;
          margin-top: 5px;
          margin-bottom: -5px;
          list-style: none;
        }
        footer {
          width: 100vw;

          /* height: 90px; */
          bottom: 0;
          display: grid;
          grid-template: 10fr / repeat(3, 1fr);
          grid-template-areas:
            'logo menu social'
            'copy copy copy ';
          align-items: center;
          font-size: 16px;
          background-color: #3e93c1;
        }

        footer p {
          margin: 0;
          padding: 0;
          font-family: 'Open Sans', sans-serif;
        }

        footer a {
          margin: 0;
          padding: 0;
        }

        footer ul {
          list-style: none;
          display: flex;
          justify-content: center;
          font-family: 'Open Sans', sans-serif;
        }

        footer .text__menu--footer {
          margin-right: 20px;
        }

        footer .footer__social {
          justify-self: center;
        }

        footer .footer__social .text__social {
          font-size: 10px;
          text-align: center;
          display: contents;
        }

        .text__social > p {
          color: white;
          font-size: 10px;
          text-align: center;
          display: block;
        }

        footer .footer__logo {
          justify-self: center;
        }

        footer ul li a {
          margin: 5px;
          color: white;
          text-decoration: none;
        }

        .logo__footer {
          margin-left: 20px;
          margin-top: 10px;
        }

        .copyright {
          grid-area: copy;
          width: 100%;
          text-align: center;
          background-color: #3e93c1;
          color: white;
          font-size: 12px;
          margin-bottom: 10px;
          display: inline-block;
          /* margin-left: 650px; */
        }
      `}</style>
    </>
  );
};

export default Footer;
