import React from 'react';

import LogoHeader from './Logo';
import InputHeader from './InputHeader';
import NavHeader from './NavHeader';

export default function Header() {
  return (
    <>
      <header>
        <LogoHeader />
        <InputHeader />
        <NavHeader />
      </header>

      <style jsx>{`
        header {
          display: grid;
          grid-template: 1fr / 1fr 1.5fr 1.5fr 0.25fr;
          /* height: 200px; */
          /* width: 1100px; */
          width: 100vw;
          position: absolute;
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
