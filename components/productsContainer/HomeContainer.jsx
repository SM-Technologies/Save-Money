import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Cards from '../card/CardProduct';
import Banner  from '../banner/banner';
import loaderGif from '../../src/assets/images/loader.gif'
import { getProducts } from '../../redux/actions/productsActions';

const HomeContainer = (props) => {
  
  const { dataProducts, productByName } = props;
  
  let  offers = dataProducts.slice(1782, 1790);
  let  allProducts = dataProducts.slice(1786, 1896);

  const getProds = async () => {
    await props.getProducts();
  };

  useEffect(() => {
      getProds();
  }, [dataProducts.lenght]);

  if(productByName){
    allProducts = productByName.slice(0, 10);
    console.log(allProducts)
  }

  if (!dataProducts ) {
    offers=[{
      "imageURL": `${loaderGif}`,
    }];
    allProducts=[{
      "imageURL": `${loaderGif}`,
    }];
  }
  return (
    <>
      <div className='home__container'>
        <div className='banner__container fadeShow'>
          <Banner />
        </div>
        <div className='title__container'>
          <h2>Offers of the week</h2>
        </div>
        <div className='offers__container' id='allProducts'>
          {offers.map((prod) => (
            <Cards data={prod} key={prod._id}/>
          ))}
        </div>
        <div className='title2__container'>
          <h2>All Products</h2>
        </div>
        <div className='products__container'>
          {allProducts.map((prod) => (
            <Cards data={prod} key={prod._id} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .home__container {
          display: grid;
          grid-template: 300px 75px 0.5fr 75px 1fr 50px / 1fr minmax(200px, 1100px) 1fr;
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
          display: grid;
          grid-template: 1fr / repeat(auto-fit, minmax(250px, 1fr));
          grid-gap: 5px;
          width: 100%;
          height:min-content;
        }
        .products__container {
          grid-area: products;
          display: grid;
          grid-template: 1fr / repeat(auto-fit, minmax(250px, 1fr));
          /* grid-template: 1fr / repeat(4, 1fr); */
          grid-gap: 10px;
          width: 100%;
          height:100%;
        }

        @media (max-width: 320px) {
          .home__container {
            grid-template: 300px 50px 0.5fr 75px 1fr 50px / 1fr;
            grid-template-areas:
              'banner'
              'title'
              'offers'
              'title2'
              'products'
              '.';
          }
          .offers__container {
          grid-area: offers;
          display: grid;
          grid-template: 1fr / repeat(auto-fit, minmax(250px, 1fr));
          grid-gap: 5px;
        }
        .products__container {

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
      `}</style>
    </>
  );
}

const mapStateToProps = ({ productsReducer }) => productsReducer;

const mapDispatchToProps = {
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);