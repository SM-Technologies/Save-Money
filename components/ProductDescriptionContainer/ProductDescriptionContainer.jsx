// const { default: PriceComparator} = require('../price-comparator/PriceComparator');
import PriceComparator from "../price-comparator/PriceComparator";
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { getProductByName } from '../../redux/actions/productsActions';

const ProductDescriptionContainer = (props) => {
  let router = useRouter();
  const path = router.query.idProduct;
  const id = path
  const { dataProducts, productByName } = props;
  const itemProduct = dataProducts.find((element) => element._id === id);
  const getProds = async () => {
    await props.getProductByName(itemProduct.name);
  };

  useEffect(() => {
    getProds();
  }, []);

  let listComparator = productByName.slice(0, 10);
  if (!listComparator) {
    listComparator = [
      {
        _id: '',
        imageURL: '',
        name: '',
        Price: '',
        link: '',
        stars: '',
      },
    ];
  }

  return (
    <>
      <div className='container'>
        <section>
          <div>
            <img src={itemProduct.imageURL} alt='Descripcion del producto' />
          </div>
        </section>
        <section>
          <div>
            <h1 className='container__title'>{itemProduct.name}</h1>
            <h2 className='container__price'>${itemProduct.Price}</h2>
            <p className='container__price-description'>
              Prices and shipping USD ${itemProduct.Price} delivery available
              availability in stock
            </p>
          </div>
          <div>
            <p className='container__title-description'>Description</p>
            <p className='container__description'>{itemProduct.name}</p>
          </div>
          <button className='container__btn' type='button'>
            <a className='' href={itemProduct.link} target='blanck'>
              SEE PRODUCT
            </a>
            {/* SEE PRODUCT */}
          </button>
        </section>
      </div>
      <section className='wrapper__comparator'>
        <h3>Price comparator</h3>
        <div className='comparator'>
          {/* <PriceComparator /> */}
          {listComparator.map((prod) => (
            <PriceComparator data={prod} key={prod._id} />
          ))}
        </div>
      </section>
      <style jsx>{`
        .container {
          padding: 0px 50px;
          display: grid;
          grid-template-columns: 40% 60%;
          max-width: 1100px;
          margin: 0 auto;
        }
        .container__img {
        }
        .container__img img {
          width: 70px;
          height: 70px;
          margin: 0px 5px;
          padding: 5px;
          border: solid 0.5px #ccc;
          border-radius: 5px;
          cursor: pointer;
        }
        .container__pricehistory {
          margin: 60px 0px;
        }
        .container__pricehistory span {
          text-align: center;
        }
        .container__title {
          font-size: 24px;
          font-weight: 700;
          color: #035582;
        }
        .container__price {
          font-size: 28px;
          font-weight: 700;
          color: #035582;
        }
        .container__price-description {
          font-weight: 700;
          color: #035582;
        }
        .container__title-description {
          color: #035582;
          font-size: 16px;
        }
        .container__description {
          color: #3e93c1;
          font-size: 16px;
        }
        .container__btn {
          background-color: #4fb50d;
          color: #fff;
          border-radius: 20px;
          padding: 10px 20px;
          border: none;
          cursor: pointer;
          background: linear-gradient(
            to bottom,
            rgba(80, 181, 13, 1) 0%,
            rgba(0, 69, 43, 1) 100%
          );
        }
        .container__btn a {
          color: white;
          text-decoration: none;
        }
        .container__btn:hover {
          background-color: #00452a;
        }
        .wrapper__comparator {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0px 50px 2.5%;
        }
        .comparator {
          border: 1px solid #ccc;
          border-radius: 10px;
          padding: 20px;
        }
        .wrapper__comparator h3 {
          color: #f7b733;
        }
      `}</style>
    </>
  );
};

const mapStateToProps = ({ productsReducer }) => productsReducer;

const mapDispatchToProps = {
  getProductByName,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDescriptionContainer);
