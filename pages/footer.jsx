import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <ul class="footer__logo uno">
          <li>
            <a href="#">
              <img
                src="images/samotech-logo-white.svg"
                alt="Logo Samotex"
                height="50"
              />
            </a>
          </li>
        </ul>
        <ul class="footer__menu dos">
          <li class="text__menu--footer">
            <a href="">Nosotros</a>
          </li>
          <li class="text__menu--footer">
            <a href="">Políticas</a>
          </li>
          <li class="text__menu--footer">
            <a href="">Términos de uso</a>
          </li>
          <li class="text__menu--footer">
            <a href="">Contacto</a>
          </li>
        </ul>
        <ul class="footer__social tres">
          <li class="text__social">
            <a href="https://twitter.com/" target="_blank">
              <img class="" src="images/twitter.svg" width="20" alt="Twitter" />
            </a>
            <p>Twitter</p>
          </li>
          <li class="text__social">
            <a href="https://www.instagram.com/" target="_blank">
              <img
                class=""
                src="images/instagram.svg"
                width="20"
                alt="Instagram"
              />
            </a>
            <p>Instagram</p>
          </li>
          <li class="text__social">
            <a href="https://www.facebook.com/" target="_blank">
              <img
                class=""
                src="images/facebook.svg"
                width="20"
                alt="Facebook"
              />
            </a>
            <p>Facebook</p>
          </li>
        </ul>
        <div class="copyright">Copyright © 2020. Todos derechos reservados</div>
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
          height: 90px;
          position: absolute;
          bottom: 0;
          display: grid;
          grid-template: 10fr / repeat(3, 1fr);
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
          width: 100%;
          text-align: center;
          background-color: #3e93c1;
          color: white;
          font-size: 12px;
          margin-bottom: 10px;
          display: inline-block;
          margin-left: 100%;
        }
      `}</style>
    </>
  );
};

export default Footer;
