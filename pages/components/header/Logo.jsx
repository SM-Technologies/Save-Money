import React from 'react';
import Link from 'next/link';

import Image from '../../../public/samotech-logo.svg';

export default function Logo() {
  return (
    <>
      <div className='logo-container'>
        <Link href=''>
          <a>
            <img className='logo' src={Image} alt='' />
          </a>
        </Link>
      </div>

      <style jsx>{`
        .logo-container {
          place-self: center;
        }
        .logo {
          width: 175px;
        }
      `}</style>
    </>
  );
}
