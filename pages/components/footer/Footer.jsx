import React from "react";
import Link from "next/link";
import LogoWhite from "../../../src/assets/images/samotech-logo-white.svg";
import LogoInstagram from "../../../src/assets/images/instagram.svg";
import LogoFacebook from "../../../src/assets/images/facebook.svg";
import LogoTwitter from "../../../src/assets/images/twitter.svg";
import LogoWorlwide from "../../../src/assets/images/worlwide.svg";
import LogoMonedas from "../../../src/assets/images/monedas-del-pais.svg";
import LogoVerificado from "../../../src/assets/images/verificado.svg";
import LogoAvailability from "../../../src/assets/images/availability.svg";
import LogoBusqueda from "../../../src/assets/images/busqueda.svg";
import LogoAli from "../../../src/assets/images/logo-ali-express.svg";
import LogoAmazon from "../../../src/assets/images/logo-amazon.svg";
import LogoEbay from "../../../src/assets/images/logo-ebay.svg";
import LogoMercado from "../../../src/assets/images/logo-mercado-libre.svg";

const Footer = () => {
  return (
    <>
      {/* Characteristics */}
      <section className="main__characteristics">
        <div className="container__box">
          <div className="box">
            <img src={LogoWorlwide} alt="En 2 idiomas" height="80"></img>
            <div className="txt__box">
              <p>In 2 languages</p>
            </div>
          </div>
        </div>

        <div className="container__box">
          <div className="box">
            <img src={LogoMonedas} alt="En 2 idiomas" height="80"></img>
            <div className="txt__box">
              <p>Different currencies</p>
            </div>
          </div>
        </div>

        <div className="container__box">
          <div className="box">
            <img src={LogoVerificado} alt="En 2 idiomas" height="80"></img>
            <div className="txt__box">
              <p>Transaction security</p>
            </div>
          </div>
        </div>

        <div className="container__box">
          <div className="box">
            <img src={LogoAvailability} alt="En 2 idiomas" height="80"></img>
            <div className="txt__box">
              <p>Attention 24/7</p>
            </div>
          </div>
        </div>

        <div className="container__box">
          <div className="box">
            <img src={LogoBusqueda} alt="En 2 idiomas" height="80"></img>
            <div className="txt__box">
              <p>Thousands of offers</p>
            </div>
          </div>
        </div>
      </section>
      {/* end Characteristics */}

      {/* Stores */}
      <section className="stores">
        <div className="text_prices">Compare Prices of:</div>
        <div className="logos__stores">
          <a href="https://www.aliexpress.com/" target="_blank">
            <img src={LogoAli} alt="Logo Ali Express">
          </a>
        </div>

        <div className="logos__stores">
          <a href="https://www.amazon.com/" target="_blank">
            <img src={LogoAmazon} alt="Logo Amazon">
          </a>
        </div>

        <div className="logos__stores">
          <a href="https://www.ebay.com" target="_blank">
            <img src={LogoEbay} alt="Logo ebay">
          </a>
        </div>

        <div className="logos__stores">
          <a href="https://www.mercadolibre.com.co" target="_blank">
            <img src={LogoMercado} alt="Logo Mercado Libre">
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <ul className="footer__logo uno">
          <li>
            <a href="#">
              <img src={LogoWhite} alt="Logo Samotex" height="50" />
            </a>
          </li>
        </ul>
        <ul className="footer__menu dos">
          <li className="text__menu--footer">
            <Link href="">
              <a>Nosotros</a>
            </Link>
          </li>
          <li className="text__menu--footer">
            <Link href="">
              <a>Políticas</a>
            </Link>
          </li>
          <li className="text__menu--footer">
            <Link href="">
              <a>Términos de uso</a>
            </Link>
          </li>
          <li className="text__menu--footer">
            <Link href="">
              <a>Contacto</a>
            </Link>
          </li>
        </ul>
        <ul className="footer__social tres">
          <li className="text__social">
            <Link href="" target="_blank">
              <a>
                <img className="" src={LogoTwitter} width="20" alt="Twitter" />
                <p>Twitter</p>
              </a>
            </Link>
          </li>

          <li className="text__social">
            <Link href="https://www.instagram.com/" target="_blank">
              <a>
                <img
                  className=""
                  src={LogoInstagram}
                  width="20"
                  alt="Instagram"
                />
                <p>Instagram</p>
              </a>
            </Link>
          </li>

          <li className="text__social">
            <Link href="https://www.facebook.com/" target="_blank">
              <a>
                <img src={LogoFacebook} width="20" alt="Facebook" />
                <p>Facebook</p>
              </a>
            </Link>
          </li>
        </ul>

        <div className="copyright">
          Copyright © 2020. Todos derechos reservados
        </div>
      </footer>

      <style jsx>{`
        a {
          text-decoration: none;
          color: inherit;
        }

        p {
          margin: 0;
        }
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
          position: absolute;
          bottom: 0;
          display: grid;
          grid-template: 10fr / repeat(3, 1fr);
          grid-template-areas:
            "logo menu social"
            "copyright copyright copyright";
          align-items: center;
          font-size: 16px;
          background-color: #3e93c1;
        }

        footer p {
          margin: 0;
          padding: 0;
          font-family: "Open Sans", sans-serif;
        }

        footer a {
          margin: 0;
          padding: 0;
        }

        footer ul {
          list-style: none;
          display: flex;
          justify-content: center;
          font-family: "Open Sans", sans-serif;
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
          grid-area: copyright;
          width: 100%;
          text-align: center;
          color: white;
          font-size: 12px;
          margin-bottom: 10px;
          display: inline-block;
        }
        /* characteristics  */
        .main__characteristics {
          max-width: 1100px;
          margin: 0 auto;
          /*  height: 150px; */
          color: black;
          display: flex;
          justify-content: space-around;
          align-items: center;
          border: 1px solid #e5e5e5;
          border-radius: 10px;
          /* margin-top: 50px; */
        }

        .container__box {
          display: contents;
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

        /* responsive */
        @media screen and (max-width: 1024px) {
          footer {
            padding: 5px;
          }
          footer .footer__logo {
            margin-top: 5px;
          }
          footer .footer__menu {
            font-size: 14px;
            width: max-content;
          }
          /*characteristics*/
          .main__characteristics {
            max-width: 840px;
            margin-top: 200px;
          }
        }

        @media screen and (max-width: 768px) {
          footer .footer__menu {
            margin: 10px auto;
            margin-left: -10px;
          }
          footer .text__menu--footer {
            margin: 0;
          }
          footer .footer__logo {
            margin: 5px;
          }
          footer .footer__social {
            margin-bottom: 0;
            margin: 0;
            margin-left: 5px;
          }
          footer .copyright {
            display: inline-block;
            margin-bottom: 10px;
          }
          footer p {
            margin: -3px;
          }
          .button__banner {
            margin: 0;
            margin-top: 300px;
            width: 70px;
            height: 10px;
            font-size: 9px;
          }
          /*characteristics*/
          .main__characteristics {
            max-width: 640px;
            height: 90px;
            margin-top: 200px;
          }
          .txt__box {
            font-size: 12px;
          }
          .main__characteristics .container__box img {
            width: 35%;
            height: 35%;
          }
          .stores {
            display: grid;
            grid-template: 1.25fr 1fr / repeat(4, 1fr);
            grid-template-areas: "title title title title" ". . . .";
            padding: 25px;
          }
          .text_prices {
            grid-area: title;
          }
          .logos__stores {
            margin: auto;
          }
          .stores .logos__stores img {
            width: 60%;
            height: 60%;
            max-width: 840px;
          }
        }

        @media screen and (max-width: 480px) {
          footer {
            width: 100%;
            height: auto;
            padding: 10px 0;
            display: block;
          }
          footer .footer__menu {
            margin: 0 auto;
            display: flex;
          }
          .copyright {
            margin-top: 10px;
            margin-left: auto;
            font-size: 10px;
          }
          footer .footer__menu {
            font-size: 12px;
            width: auto;
            margin-top: -5px;
            margin-bottom: -10px;
          }
          footer .footer__logo {
            margin: 0;
          }
          footer .text__menu--footer {
            margin: 10px 5px;
          }
          footer .footer__social {
            margin: 5px;
          }
          footer .footer__social .text__social {
            font-size: 10px;
          }
          /*characteristics*/
          .main__characteristics {
            max-width: 400px;
            height: 90px;
            margin-top: 120px;
          }
          .txt__box {
            font-size: 10px;
          }
        }

        @media screen and (max-width: 320px) {
          .footer__menu {
            display: block;
            font-size: 10px;
            text-align: center;
          }
          /*characteristics*/
          .main__characteristics {
            display: contents;
            margin-top: 70px;
            border: none;
          }
          .txt__box {
            font-size: 10px;
          }
          .main__characteristics .container__box img {
            width: 35%;
            height: 35%;
          }
          .box {
            margin: 10px;
          }
          .stores {
            display: grid;
            grid-template: 1.25fr 1fr 1fr / 1fr 1fr;
            grid-template-areas: "title title" ". ." ". .";
          }
          .text_prices {
            grid-area: title;
          }
          .logos__stores {
            margin: auto;
          }
          .stores .logos__stores img {
            width: 70%;
            height: 70%;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
