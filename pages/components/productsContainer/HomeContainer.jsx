import React from 'react';

import Cards from '../card/CardProduct';
import mac from '../../../src/assets/images/Mac.png';

export default function HomeContainer() {
  return (
    <>
      <div className='home-container'>
        <div className='banner-container'>
          <img src={mac} alt='' />
        </div>
        <div className='title-container'>
          <h2>Offers of the week</h2>
        </div>
        <div className='offers-container'>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
        <div className='title2-container'>
          <h2>All Products</h2>
        </div>
        <div className='products-container'>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>

      <style jsx>{`
        .home-container {
          display: grid;
          grid-template: 300px 75px 0.5fr 75px 1fr 50px / 1fr 1150px 1fr;
          grid-template-areas:
            '. banner .'
            '. title .'
            '. offers .'
            '. title2 .'
            '. products .'
            '. . .';
          width: 100vw;
        }

        .banner-container {
          grid-area: banner;
        }
        .banner-container > img {
          height: 300px;
          width: 100%;
        }
        .title-container {
          grid-area: title;
        }
        .title2-container {
          grid-area: title2;
        }
        .title-container,
        .title2-container {
          margin: auto 0;
          font-weight: 400;
          font-size: 1em;
          color: var(--button-bg);
        }
        .offers-container {
          grid-area: offers;
          display: grid;
          grid-template: 1fr / repeat(auto-fit, minmax(250px, 1fr));
          grid-gap: 5px;
        }
        .products-container {
          grid-area: products;
          display: grid;
          grid-template: 1fr / repeat(auto-fit, minmax(250px, 1fr));
          /* grid-template: 1fr / repeat(4, 1fr); */
          grid-gap: 10px;
        }

        @media (max-width: 320px) {
          .home-container {
            grid-template: 300px 50px 0.5fr 75px 1fr 50px / 1fr;
            grid-template-areas:
              'banner'
              'title'
              'offers'
              'title2'
              'products'
              '.';
          }
        }
      `}</style>
    </>
  );
}
