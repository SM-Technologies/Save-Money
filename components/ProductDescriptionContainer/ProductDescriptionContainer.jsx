// const { default: PriceComparator} = require('../price-comparator/PriceComparator');
import PriceComparator from '../price-comparator/PriceComparator';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { getProductByName } from '../../redux/actions/productsActions';
import Link from 'next/link';

const ProductDescriptionContainer = (props) => {
  let router = useRouter();
  const path = router.query.idProduct;
  const id = path;
  const { dataProducts, productByName } = props;
  let itemProduct = dataProducts.find((element) => element._id === id);
  if (!itemProduct) {
    itemProduct = {
      _id: '',
      imageURL: '',
      name: '',
      Price: '',
      link: '',
      stars: '',
    };
  }
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
        <div className='container__img'>
          <img src={itemProduct.imageURL} alt='Descripcion del producto' />
        </div>
        <div className='container__description'>
          <h1 className='container__title'>{itemProduct.name}</h1>
          <h2 className='container__price'>${itemProduct.Price}</h2>
          <p className='container__price-description'>
            Prices and shipping USD ${itemProduct.Price} delivery
            <strong> availability </strong> in stock
          </p>

          <p className='container__title-description'>Description:</p>
          <p className='container__description'>{itemProduct.name}</p>
          <button className='container__btn' type='button'>
            <Link className='' href={itemProduct.link} target='_blank'>
              <a target='_blank'>SEE PRODUCT</a>
            </Link>
            {/* SEE PRODUCT */}
          </button>
        </div>
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
          display: grid;
          grid-template: 1fr/ 45% 55%;
          grid-template-areas: 'imagen contenido';

          max-width: 1100px;
          place-self: center;
          margin: 0 auto;
          font-family: 'Oxygen', sans-serif;
          gap: 5px;
        }
        .container__img {
          grid-area: imagen;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .container__img > img {
          width: inherit;
          height: calc(100% - 10px);
          object-fit: contain;
        }
        .container__description {
          box-sizing: border-box;
          grid-area: contenido;
          color: #3e93c1;
          font-size: 1em;
        }
        .container__title {
          font-size: 1.5em;
          font-weight: 700;
          color: #035582;
        }
        .container__price {
          font-size: 2em;
          font-weight: 700;
          color: #035582;
        }
        .container__price-description {
          font-weight: 700;
          color: #4fb50d;
        }
        .container__price-description > strong {
          color: #2a5400c8;
        }
        .container__title-description {
          margin-top: 5%;
          font-size: 1em;
          color: #035582;
        }

        .container__btn {
          border-radius: 20px;
          padding: 10px 20px;
          border: none;
          cursor: pointer;
          background: linear-gradient(
            to bottom,
            rgba(62, 147, 193, 1) 0%,
            rgba(3, 85, 130, 1) 100%
          );
        }
        .container__btn a {
          color: white;
          font-weight: 600;
          text-decoration: none;
          font-size: 0.9em;
        }

        .wrapper__comparator {
          max-width: 1100px;
          margin: 0 auto;
          font-family: 'Open Sans', sans-serif;
        }
        .wrapper__comparator > h3 {
          color: #f7b733;
          grid-area: title;
        }
        .comparator {
          grid-area: comparator;
          margin-bottom: 20px;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 10px;
        }

        @media (max-width: 504px) {
          .container {
            grid-template: auto 1fr/0.05fr 1fr 0.05fr;
            grid-template-areas:
              '. imagen .'
              '. contenido .';
          }
          .container__description {
            place-self: center;
            box-sizing: border-box;
            color: #3e93c1;
            font-size: 1em;
            text-align: center;
          }
          .wrapper__comparator {
            display: grid;
            grid-template: auto 1fr/0.05fr 1fr 0.05fr;
            grid-template-areas:
              '. title .'
              '. comparator .';
          }
          .comparator {
            grid-area: comparator;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 10px;
          }
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
