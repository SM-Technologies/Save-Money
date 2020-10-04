import React from 'react';
import Link from 'next/link';
import LogoWhite from '../../src/assets/images/samotech-logo-white.svg';
import LogoInstagram from '../../src/assets/images/instagram.svg';
import LogoFacebook from '../../src/assets/images/facebook.svg';
import LogoTwitter from '../../src/assets/images/twitter.svg';
import LogoWorlwide from '../../src/assets/images/worlwide.svg';
import LogoMonedas from '../../src/assets/images/monedas-del-pais.svg';
import LogoVerificado from '../../src/assets/images/verificado.svg';
import LogoAvailability from '../../src/assets/images/availability.svg';
import LogoBusqueda from '../../src/assets/images/busqueda.svg';
import LogoAli from '../../src/assets/images/logo-ali-express.svg';
import LogoAmazon from '../../src/assets/images/logo-amazon.svg';
import LogoEbay from '../../src/assets/images/logo-ebay.svg';
import LogoMercado from '../../src/assets/images/logo-mercado-libre.svg';

const Footer = () => {
  return (
    <>
      {/* Characteristics */}
      <section className='main__characteristics'>
        <div className='container__box'>
          <div className='box'>
            <img src={LogoWorlwide} alt='En 2 idiomas' height='80'></img>
            <div className='txt__box'>
              <p>In 2 languages</p>
            </div>
          </div>
        </div>

        <div className='container__box'>
          <div className='box'>
            <img src={LogoMonedas} alt='En 2 idiomas' height='80'></img>
            <div className='txt__box'>
              <p>Different currencies</p>
            </div>
          </div>
        </div>

        <div className='container__box'>
          <div className='box'>
            <img src={LogoVerificado} alt='En 2 idiomas' height='80'></img>
            <div className='txt__box'>
              <p>Transaction security</p>
            </div>
          </div>
        </div>

        <div className='container__box'>
          <div className='box'>
            <img src={LogoAvailability} alt='En 2 idiomas' height='80'></img>
            <div className='txt__box'>
              <p>Attention 24/7</p>
            </div>
          </div>
        </div>

        <div className='container__box'>
          <div className='box'>
            <img src={LogoBusqueda} alt='En 2 idiomas' height='80'></img>
            <div className='txt__box'>
              <p>Thousands of offers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stores */}
      <section className='stores' id="stores">
        <div className='text_prices'>Compare Prices of:</div>
        <div className='logos__stores'>
          <a href='https://www.aliexpress.com/' target='_blank'>
            <img src={LogoAli} alt='Logo Ali Express' />
          </a>
        </div>

        <div className='logos__stores'>
          <a href='https://www.amazon.com/' target='_blank'>
            <img src={LogoAmazon} alt='Logo Amazon' />
          </a>
        </div>

        <div className='logos__stores'>
          <a href='https://www.ebay.com' target='_blank'>
            <img src={LogoEbay} alt='Logo ebay' />
          </a>
        </div>

        <div className='logos__stores'>
          <a href='https://www.mercadolibre.com.co' target='_blank'>
            <img src={LogoMercado} alt='Logo Mercado Libre' />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <ul className='footer__logo'>
          <li>
            <a href='#'>
              <img src={LogoWhite} alt='Logo Samotex' height='50' />
            </a>
          </li>
        </ul>
        <ul className='footer__menu'>
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
        <ul className='footer__social'>
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
        /* characteristics  */
        .main__characteristics {
          display: flex;
          justify-content: space-around;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
          height: auto;
        }

        .box {
          text-align: center;
          align-items: center;
          transition: all 300ms;
        }
        .box:hover {
          transform: scale(1.15);
        }
        .txt__box {
          color: #3e93c1;
        }
        /* _______ */
        /* footer  */
        /* _______ */
        a {
          text-decoration: none;
        }
        ul,
        ol,
        li {
          margin: 0;
          padding: 0;
          list-style: none;
        }
        footer {
          display: grid;
          grid-template: auto auto / 1fr 2fr 1fr;
          grid-template-areas:
            'logo menu social'
            'copyright copyright copyright';
          width: 100vw;
          place-self: center;
          font-size: 1em;
          background-color: #3e93c1;
        }
        footer p {
          font-family: 'Open Sans', sans-serif;
          margin: 0;
        }
        footer ul {
          display: flex;
          justify-content: center;
          font-family: 'Open Sans', sans-serif;
          list-style: none;
        }
        .footer__social {
          place-self: center;
        }
        .footer__social .text__social {
          font-size: 10px;
          text-align: center;
          display: contents;
        }
        footer .footer__logo {
          place-self: center;
        }
        .footer__menu {
          place-self: center;
        }
        footer > ul > li > a {
          margin: 5px;
          color: white;
        }
        .copyright {
          grid-area: copyright;
          color: white;
          font-size: 12px;
          margin: 5px auto;
        }

        .text_prices {
          color: #f7b733;
          margin-bottom: 30px;
        }

        .stores {
          margin: 0 auto;
          text-align: center;
          padding: 40px;
        }

        .logos__stores {
          display: contents;
          display: contents;
          margin: 0 auto;
          transition: all 300ms;
          display: inline-block;
        }

        .logos__stores:hover {
          transform: scale(1.15);
        }

        .stores .logos__stores img {
          width: 50%;
          height: 50%;
          max-width: 840px;
        }

        /* responsive */
        @media screen and (max-width: 768px) {
          .main__characteristics {
            display: grid;
            grid-template: auto / auto auto auto;
            margin: 0 auto;
            height: auto;
          }
          .box > img {
            place-self: center;
            height: 50px;
            width: 50px;
          }

          footer {
            display: grid;
            grid-template: auto auto auto auto / 1fr;
            grid-template-areas:
              'logo'
              'menus '
              'social'
              'copyright ';
            width: 100vw;
            place-self: center;
            font-size: 1em;
            background-color: #3e93c1;
          }
          .footer__logo {
            grid-area: logo;
          }
          .footer__menu {
            grid-area: menus;
          }
          .footer__social {
            grid-area: social;
          }
          .copyright {
            grid-area: copyright;
          }
        }

        @media screen and (max-width: 320px) {
          .footer__menu {
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
