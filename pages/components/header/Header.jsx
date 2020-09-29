import React from 'react';

import LogoHeader from './Logo';
import InputHeader from './InputHeader';
import NavHeader from './NavHeader';

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
          width: 100vw;
        }
        header {
          display: grid;
          grid-template: 1fr / 1fr 1.5fr 1.5fr 0.25fr;
          height: 100px;
          /* width: ; */
          width: inherit;
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
