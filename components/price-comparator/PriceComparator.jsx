import marca from '../../src/assets/icons/Brands/ebay-ar21.svg';
import Link from 'next/link';

export default function PriceComparator({ data }) {
  const { _id, imageURL, name, Price, link, stars } = data;
  return (
    <div className='container' data-id={_id}>
      <p className='container__description'>{name}</p>
      <p className='container__price'>${Price}</p>
      <div>
        <img className='container__img' src={marca} alt='logo-plataforma' />
        <span className='container__opinions'></span>
      </div>
      <div className='container__btn'>
        <button className='container__btn' type='button'>
          <Link className='' href={link}>
            <a target='_blank'>SEE PRODUCT</a>
          </Link>
        </button>
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          place-self: center;
        }
        .container__description {
          font-size: 1em;
          color: #035582;
          text-align: center;
        }
        .container__price {
          font-size: 1.5em;
          color: #035582;
          font-weight: 700;
          text-align: center;
        }
        .container div {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .container__btn button {
          color: #fff;
          border-radius: 20px;
          padding: 10px 20px;
          border: none;
          cursor: pointer;
          background: linear-gradient(
            to bottom,
            rgba(62, 147, 193, 1) 0%,
            rgba(3, 85, 130, 1) 100%
          );
          outline: none;
        }
        .container__btn a {
          color: white;
          text-decoration: none;
        }
        @media only screen and (max-width: 600px) {
          .container {
            display: block;
            width: 100%;
          }
          .container__price {
            margin: 0;
          }
        }
      `}</style>
    </div>
  );
}
