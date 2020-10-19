import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Carousel from 'react-elastic-carousel';

import Cards from '../card/CardProduct';
import Banner from '../banner/banner';
import loaderGif from '../../src/assets/images/loader.gif';
import { getProducts } from '../../redux/actions/productsActions';

const HomeContainer = (props) => {
  const { dataProducts, productByName } = props;

  let offers = dataProducts.slice(1782, 1792);
  let allProducts = dataProducts.slice(1792, 1812);

  const getProds = async () => {
    await props.getProducts();
  };

  useEffect(() => {
    getProds();
  }, [dataProducts.length]);

  if (productByName.length) {
    allProducts = productByName.slice(0, 10);
  }

  if (dataProducts.length == 0) {
    offers = [
      {
        imageURL: `${loaderGif}`,
      },
    ];
    allProducts = [
      {
        imageURL: `${loaderGif}`,
      },
    ];
  }

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <>
      <div className='home__container'>
        <div className='banner__container fadeShow'>
          <Banner />
        </div>
        <div className='title__container'>
          <h2>Offers of the week</h2>
        </div>
        <div className='offers__container'>
          <Carousel breakPoints={breakPoints}>
            {offers.map((prod) => (
              <Cards data={prod} key={prod._id} />
            ))}
          </Carousel>
        </div>
        <div className='title2__container'>
          <h2 name='all'>All Products</h2>
        </div>
        <div className='products__container' id='allProducts'>
          {allProducts.map((prod) => (
            <Cards data={prod} key={prod._id} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .home__container {
          display: grid;
          grid-template: 300px 75px  min-content 75px 1fr 50px / 1fr minmax(200px, 1100px) 1fr;
          grid-template-areas:
            '. banner .'
            '. title .'
            '. offers .'
            '. title2 .'
            '. products .'
            '. . .';
          width: 100%;
        }

        .banner__container {
          grid-area: banner;
          width: 100%;
        }
        .banner__container > img {
          width: 100%;
          height:100%;
          box-sizing: border-box;
        }
         .fadeShow{
          -webkit-animation-duration: 1.5s;
          animation-duration: 1.5s;
          animation-fill-mode: both;
          -webkit-animation-fill-mode: both;
          -webkit-animation-name: fadeShow;
          animation-name: fadeShow;
        }    
        @keyframes fadeShow {
          0%{
            opacity: 0;
          }
          25%{
            opacity: 0.25;
          }
          50%{
            opacity: 0.50;
          }
          75%{
            opacity: 0.75;
          }
          100%{
            opacity: 1;
          }
        }
        .title__container {
          grid-area: title;
        }
        .title2__container {
          grid-area: title2;
        }
        .title__container,
        .title2__container {
          margin: auto 0;
          font-weight: 400;
          font-size: 1em;
          color: var(--button-bg);
        }
        .offers__container {
          grid-area: offers;
          height:min-content;
        }
        .products__container {
          grid-area: products;
          display: grid;
          grid-template: 1fr / repeat(auto-fit, minmax(250px, 1fr));
          /* grid-template: 1fr / repeat(4, 1fr); */
          grid-gap: 10px;
          height: auto;
          width: 100%;
        }
        @media (max-width: 504px) {
          .home__container {
            grid-template: auto 50px auto 75px 1fr 50px / .05fr 1fr .05fr;
            grid-template-areas:
              '. banner .'
              '. title .'
              '. offers .'
              '. title2 .'
              '. products .'
              '. . .';
          }
          .banner__container {
          grid-area: banner;
          display:none;
          }
          .title__container {
          grid-area: title;
           margin-top:0;
          }
        }
        @media (max-width: 320px) {
          /* .home__container {
            grid-template: auto 50px 0.5fr 75px 1fr 50px / 10px 1fr 10px;
            grid-template-areas:
              '. banner .'
              '. title .'
              '. offers .'
              '. title2 .'
              '. products .'
              '. . .';
          } */
          .banner__container {
          grid-area: banner;
          display:none;
        }
          .offers__container {
          grid-area: offers;
          display: grid;
          grid-template: 1fr / repeat(auto-fit, minmax(250px, 1fr));
          grid-gap: 5px;
        }
        .products__container {
          height: min-content;
        }

       
      `}</style>
    </>
  );
};

const mapStateToProps = ({ productsReducer }) => productsReducer;

const mapDispatchToProps = {
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
