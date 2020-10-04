import React from 'react';
import Link from 'next/link';
import Ban from '../../src/assets/images/banner.png';

export default function Banner() {
  return (
    <>
      {/* Banner */}
      <section className='banner'>
        <img className='banner__image' src={Ban} alt='Principal image' />
        <div className='container'>
          <h1>Online Shopping</h1>
          <h2>Online price and offers comparator</h2>
          <p>
            Find that offer that you were looking for so much. Every second, we
            select and compare thousands of offers from the best brands.
          </p>
          <div className='button__banner'>
            <Link href='#allProducts'>
              <a className='text__button'>SHOP NOW</a>
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        a {
          text-decoration: none;
        }

        p {
          margin: 0;
        }
        .banner {
          width: 100%;
          height: 100%;
          position: relative;
          margin: auto 0;
        }
        img {
          height: inherit;
          width: inherit;
          position: absolute;
        }
        .container {
          padding: 1.5%;
          position: absolute;
          width: 32.5%;
          box-sizing: border-box;
          overflow: hidden;
        }
        .container > h1 {
          font-size: 1.75em;
          line-height: 1.5;
          letter-spacing: -0.2px;
          color: white;
          margin-top: 0.5em;
        }
        .container > h2 {
          font-size: 1.25em;
          color: #3e93c1;
        }
        .container > p {
          /* max-width: 37.5%; */
          font-size: 1em;
          color: white;
        }
        .button__banner {
          background: linear-gradient(
            to bottom,
            rgba(80, 181, 13, 1) 0%,
            rgba(0, 69, 43, 1) 100%
          );
          color: white;
          padding: 5px;
          border-radius: 20px;
          width: 90px;
          text-align: center;
          margin: 5% 0 0 0;
        }
        .button__banner:hover {
          color: #f7b733;
          font-size: 13px;
          background-color: white;
          border: 1px solid white;
        }

        .text__button {
          color: white;
          margin-bottom: 5px;
          font-size: 0.75em;
          font-weight: 600;
        }

        @media screen and (max-width: 768px) {
          .banner {
            overflow-x: scroll;
            overflow-y: hidden;
          }
          img {
            width: inherit;
            position: absolute;
          }
          .container {
            height: inherit;
          }
          .container > h1 {
            font-size: 0.75em;
            line-height: 1.5;
            letter-spacing: -0.2px;
            color: white;
            margin-top: 0.5em ;
          }
          .container > h2 {
            font-size: 0.5em;
            color: #3e93c1;
          }
          .container > p {
            /* max-width: 37.5%; */
            font-size: 0.5em;
            color: white;
          }
          .button__banner {
            background: linear-gradient(
              to bottom,
              rgba(80, 181, 13, 1) 0%,
              rgba(0, 69, 43, 1) 100%
            );
            color: white;
            /* padding: 5px; */
            border-radius: 20px;
            width: 60px;
            text-align: center;
            margin: 5% 0 0 0;
            font-size: 10px;
          }
        }
      `}</style>
    </>
  );
}
