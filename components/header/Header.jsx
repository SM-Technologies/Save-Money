import React from 'react';
import { Provider } from 'react-redux';

import LogoHeader from './HeaderLogo';
import InputHeader from './HeaderInput';
import NavHeader from './HeaderNav';

import store from '../../redux/store';

export default function Header() {
  return (
    <>
      <div className='container fadeInDown'>
        <header>
          <LogoHeader />
          <Provider store={store}>
            <InputHeader />
          </Provider>
          <NavHeader />
        </header>
      </div>

      <style jsx>{`
        .container {
          height: 100px;
          /* max-width: 1100px; */
          margin: 0 auto;
          margin-bottom: 20px;
          box-shadow: 0px 3px 3px #eff1f0;
        }
        header {
          display: grid;
          grid-template: 1fr / 1fr 1.5fr 1.5fr;
          height: 100px;
        }
        @media (max-width: 768px) {
          .container {
            height: 110px;
          }
          header {
            grid-template: 1fr 1fr / 0.25fr 1fr 0.25fr;
            grid-template-areas:
              'categorie logo .'
              '. input .';
            height: 100px;
            /* border-bottom: 1px solid var(--input-bg); */
          }
        }

        .fadeInDown {
          -webkit-animation-duration: 1.5s;
          animation-duration: 1.5s;
          animation-fill-mode: both;
          -webkit-animation-fill-mode: both;
          -webkit-animation-name: fadeInDown;
          animation-name: fadeInDown;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
          }
          to {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>

      <style global jsx>{`
        :root {
          --text-menu: rgba(3, 85, 130, 1);
          --input-bg: rgba(229, 229, 229, 1);
        }

        html,
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
