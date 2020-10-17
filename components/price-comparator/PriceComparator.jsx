import marca from '../../src/assets/icons/Brands/ebay-ar21.svg';

export default function PriceComparator({data}) {
  const {  _id, imageURL, name, Price, link, stars } = data;
  return (
    <div className='container' data-id={_id}>
      <p className='container__description'>
        {name}
      </p>
      <p className='container__price'>${Price}</p>
      {/* <p className='container__delivery'>Delivery time: 7-8 working days</p> */}
      <div>
        <img className='container__img' src={marca} alt='logo-plataforma' />
        <span className='container__opinions'></span>
      </div>
      <div className='container__btn'>
          <button className='container__btn' type='button'>
            <a className="" href={link} target="blanck">SEE PRODUCT</a>
          </button>
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          align-items: center;
        }
        .container__description {
          font-size: 16px;
          color: #035582;
          font-weight: 500;
          text-align: center;
        }
        .container__price {
          font-size: 24px;
          color: #035582;
          font-weight: 700;
          text-align: center;
        }
        .container__delivery {
          font-size: 16px;
          color: #035582;
          font-weight: 400;
          text-align: center;
        }
        .container div {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .container__img {
          object-fit: contain;
        }
        .container__btn button {
          text-align: center;
          width: 150px;
          height: 31px;
          background-color: #4fb50d;
          color: #fff;
          border-radius: 10px;
          padding: 10px 20px;
          border: none;
          cursor: pointer;
          background: linear-gradient(
            to bottom,
            rgba(62, 147, 193, 1) 0%,
            rgba(3, 85, 130, 1) 100%
          );
          outline:none;
          margin
        }
        .container__btn a{
          color: white;
          text-decoration:none;
        }
        .container__btn button:hover {
          background-color: #00452a;
        }
        @media only screen and (max-width: 768px) {
          .container__price {
            font-size: 20px;
          }
          .container__btn button {
            width: 120px;
          }
        }
        @media only screen and (max-width: 600px) {
          .container {
            display: block;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
