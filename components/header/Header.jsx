import React from 'react';

import LogoHeader from './HeaderLogo';
import InputHeader from './HeaderInput';
import NavHeader from './HeaderNav';

export default function Header() {
  return (
    <>
      <div className='container'>
        <header>
          <LogoHeader />
          <InputHeader />
          <NavHeader />
        </header>
      </div>

      <style jsx>{`
        .container {
          height: 100px;
          max-width: 1100px;
          margin: 0 auto;
        }
        header {
          display: grid;
          grid-template: 1fr / 1fr 1.5fr 1.5fr;
          height: 100px;
        }
        @media (max-width: 320px) {
          header {
            grid-template: 1fr 1fr / 0.25fr 1fr 0.25fr;
            grid-template-areas:
              'categorie logo .'
              '. input .';
            height: 100px;
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
