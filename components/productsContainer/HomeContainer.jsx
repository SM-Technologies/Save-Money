import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Cards from '../card/CardProduct';
import mac from '../../src/assets/images/Mac.png';
import loaderGif from '../../src/assets/images/loader.gif'
import { getProducts } from '../../redux/actions/productsActions';

const HomeContainer = (props) => {
  
  const { dataProducts } = props;
  
  const  offers = dataProducts.slice(1782, 1786);
  let  AllProducts = dataProducts.slice(1786, 1806);

  const getProds = async () => {
    await props.getProducts();
  };

  useEffect(() => {
      getProds();
  }, [dataProducts.lenght]);
  if (!dataProducts ) {
    AllProducts=[{
      "_id": "",
      "imageURL": `${loaderGif}`,
      "name": "",
      "Price": "",
      "link": "",
      "stars": "" 
    }];
  }
  console.log(offers);
  return (
    <>
      <div className='home__container'>
        <div className='banner__container'>
          <img src={mac} alt='' />
        </div>
        <div className='title__container'>
          <h2>Offers of the week</h2>
        </div>
        <div className='offers__container'>
          {AllProducts.map((prod) => (
            <Cards data={prod} key={prod._id}/>
          ))}
        </div>
        <div className='title2__container'>
          <h2>All Products</h2>
        </div>
        <div className='products__container'>
          {AllProducts.map((prod) => (
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
      `}</style>
    </>
  );
}

const mapStateToProps = ({ productsReducer }) => productsReducer;

const mapDispatchToProps = {
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);