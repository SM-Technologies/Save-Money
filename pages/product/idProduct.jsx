import React from 'react';
import { useRouter } from 'next/router';

const ProductDescription = () => {
  return (
    <>
      <div className='container'>
        <section>
          <div>
            <img
              src='/descriptionPage/imgDescription.svg'
              alt='Descripcion del producto'
            />
            <div className='container__img'>
              <img
                src='/descriptionPage/image1.svg'
                alt='Producto relacionado'
              />
              <img
                src='/descriptionPage/image2.svg'
                alt='Producto relacionado'
              />
              <img
                src='/descriptionPage/image3.svg'
                alt='Producto relacionado'
              />
              <img
                src='/descriptionPage/image4.svg'
                alt='Producto relacionado'
              />
            </div>
            <div className='container__pricehistory'>
              <span>Aqui iría el historial de precios</span>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h1 className='container__title'>
              Laptop Apple Macbook Air 256gb - 13{' '}
            </h1>
            <h2 className='container__price'>$1.485.oo</h2>
            <p className='container__price-description'>
              Prices and shipping USD $1.485.oo delivery available availability
              in stock
            </p>
          </div>
          <div>
            <p className='container__title-description'>Description</p>
            <p className='container__description'>
              The MacBook Air battery lasts up to 12 hours on a single charge,
              so you can work from morning until you get back from the office
              without charging. And if you want to relax, you have up to 12
              hours of charge to watch movies on iTunes. Plus, since you can put
              it on standby for up to 30 days, you can go weeks without using it
              and then pick up from where you left off. SSD storage. Fast per
              system. MacBook Air SSD storage is up to 17 times faster than a
              5,400 rpm hard drive. Thanks to this system and the fifth
              generation Intel Core processors, the MacBook Air is activated
              instantly and responds to any task in the blink of an eye.
            </p>
          </div>
          <button className='container__btn' type='button'>
            SEE PRODUCT
          </button>
        </section>
      </div>

      <style jsx>{`
        .container {
          padding: 0px 50px;
          display: grid;
          grid-template-columns: 40% 60%;
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
        }
        .container__btn:hover {
          background-color: #00452a;
        }
      `}</style>
    </>
  );
};

export default ProductDescription;
