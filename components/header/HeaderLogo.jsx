import React from 'react';
import Link from 'next/link';

// import Image from '../../../public/samotech-logo.svg';
import Image from '../../public/samotech-logo.svg';

export default function Logo() {
  return (
    <>
      <div className='logo__container'>
        <Link href='/'>
          <a>
            <img className='logo' src={Image} alt='' />
          </a>
        </Link>
      </div>

      <style jsx>{`
        .logo__container {
          place-self: center;
        }
        .logo {
          width: 175px;
        }

        @media (max-width: 320px) {
          .logo__container {
            grid-area: logo;
          }
        }
      `}</style>
    </>
  );
}
