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
            <Link href='#'>
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
          height: inherit;
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
          font-size: 1.75rem;
          line-height: 1.5;
          letter-spacing: -0.2px;
          color: white;
          margin-top: 0.5rem ¿;
        }
        .container > h2 {
          font-size: 1.25rem;
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
        }
        /* Banner =========== */
        /* .banner {
          max-width: 1100px;
          isplay: flex; 
          align-items: center;
          flex-wrap: wrap; 
        }*/

        /* .container {
          margin: 0 auto;
          display: inherit;
          justify-content: inherit;
          height: inherit;
          flex-wrap: inherit;
          overflow: hidden;
          box-sizing: border-box;
        }
        .container::-webkit-scrollbar {
          background: transparent;
        }

        h1 {
          font-size: 30px;
          margin: 0;
          z-index: 5;
          margin-top: 20px;
          margin-left: 20px;
          position: absolute;
        }

        h2 {
          font-size: 20px;
          margin: 0%;
          z-index: 3;
          margin-top: 70px;
          margin-left: 20px;
          max-width: 320px;
          position: absolute;
        }

        .banner .container p {
          position: absolute;
          z-index: 3;
          font-size: 16px;
          margin-left: 20px;
          margin-top: 130px;
          max-width: 320px;
          color: white;
        }

        .button__banner {
          font-size: 12px;
          font-weight: 600;
          padding: 10px;
          color: white;
          border-radius: 20px;
          width: 80px;
          text-align: center;
          margin-left: 20px;
          z-index: 5;
          position: absolute;
          margin-top: 230px;
          background: linear-gradient(
            to bottom,
            rgba(80, 181, 13, 1) 0%,
            rgba(0, 69, 43, 1) 100%
          );
        }

        


        .banner__image {
          position: relative;
          max-width: 1100px;
        } */
        /* end Banner =========== */

        /* Responsive =========== */
        /* @media screen and (max-width: 1024px) {
          .banner {
            height: auto;
            position: relative;
            padding: 30px;
          }
          .container {
            align-items: inherit;
          }

          .banner__image {
            position: absolute;
            z-index: 1;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            width: 100%;
            max-width: 840px;
            margin: 0 auto;
            width: 100%;
          }
          h1 {
            font-size: 24px;
            z-index: 2;
            color: white;
            margin-left: 80px;
            margin-top: 10px;
          }
          h2 {
            font-size: 17px;
            max-width: 150px;
            color: #3e93c1;
            z-index: 3;
            margin-left: 80px;
            margin-top: 85px;
          }
          .banner .container p {
            margin-top: 220px;
            color: white;
            margin-left: 80px;
            max-width: 200px;
            font-size: 12px;
          }
          .button__banner {
            margin: 80px;
            margin-top: 410px;
            width: 70px;
            height: 10px;
            font-size: 10px;
          }
        }

        @media screen and (max-width: 768px) {
          h1 {
            font-size: 25px;
            margin-top: 20px;
            margin: 0;
          }
          h2 {
            font-size: 15px;
            margin-top: 85px;
            max-width: 150px;
            margin: 0;
            margin-top: 80px;
          }
          .banner .container p {
            font-size: 12px;
            margin-top: 210px;
            margin: 0;
            margin-top: 190px;
          }
          .button__banner {
            margin: 0;
            margin-top: 300px;
            width: 70px;
            height: 10px;
            font-size: 9px;
          }
        } */

        /* @media screen and (max-width: 480px) {
          .banner {
            padding: 20px;
          }
          h1 {
            font-size: 16px;
            margin-top: 5px;
          }
          h2 {
            font-size: 11px;
            margin-top: 60px;
            margin-bottom: 5px;
          }
          .banner .container p {
            font-size: 9px;
            margin-top: 150px;
            max-width: 140px;
            line-height: 1.2;
          }
          .button__banner {
            margin: 0;
            margin-top: -300px;
            width: 70px;
            height: 10px;
            font-size: 9px;
          }
        } */

        /* @media screen and (max-width: 320px) { */
        /* h1 {
            font-size: 12px;
            max-width: 50px;
            line-height: 1;
          }
          h2 {
            font-size: 10px;
            max-width: 70px;
            margin-top: 76px;
          }
          .banner .container p {
            margin-left: -220px;
          } */
        /* } */
      `}</style>
    </>
  );
}
