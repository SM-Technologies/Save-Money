import React, {useState} from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { getProductByName } from '../../redux/actions/productsActions';

import Search from '../../src/assets/icons/buscar.svg';

const InputHeader = (props)  =>{
  const [value, setValues] = useState("");
  const handleInput = (event) => {
    setValues({
      ...value,
      [event.target.name]: event.target.value,
    });
  };
  const handleClick = (event) => {
    event.preventDefault();
    if(!value.search){
      alert('Ingresa un producto a buscar');
    }
    if(value){
      props.getProductByName(value.search);
    }
  };

  return (
    <>
      <div className='input__container'>
        <input
          className='input__input'
          type='text'
          placeholder='What do you want to buy?'
          id='search'
          name='search'
          aria-label='searchProduct'
          onChange={(e) => handleInput(e)}
        />
        <span className='input__icon'>
          {/* <button onClick={handleClick}> */}
          <Link href="#allProducts">
            <img src={Search} alt='Icon search' onClick={handleClick}></img>
          </Link>
          {/* </button> */}
        </span>
      </div>

      <style jsx>{`
        .input__container {
          place-self: center;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 40px;
          margin: 0;
          padding: 0;
          border-radius: 25px;
          background-color: var(--input-bg);
        }
        .input__container:hover {
          border: 1px solid gray;
        }
        .input__input {
          /* display: flex; */
          justify-content: center;
          align-items: center;
          width: 90%;
          height: inherit;
          background: none;
          border: none;
          padding: 5px 5%;
          outline: none;
          font-size: 1em;
          font-weight: 500;
          color: rgba(62, 147, 193, 1);
        }
        .input__input::placeholder {
          font-weight: 500;
          font-size: 1.15em;
          color: rgba(62, 147, 193, 1);
        }
        .input__icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 10%;
          height: inherit;
          cursor: pointer;
        }
        img {
          fill: rgba(62, 147, 193, 1);
          height: 50%;
        }

        @media (max-width: 768px) {
          .input__container {
            grid-area: input;
            margin: 0 5%;
          }
          .input__input {
            width: 90%;
            height: inherit;
            background: none;
            border: none;
            outline: none;
            font-size: 0.75em;
            font-weight: 500;
            color: rgba(62, 147, 193, 1);
          }
          .input__input::placeholder {
            font-size: 0.75em;
          }
          .input__icon {
            width: 30%;
          }
        }
      `}</style>
    </>
  );
}

const mapStateToProps = ({ productsReducer }) => productsReducer;

const mapDispatchToProps = {
  getProductByName,
};

export default connect(mapStateToProps, mapDispatchToProps)(InputHeader);