import { request } from 'graphql-request';
import gql from 'graphql-tag';
const endpoint = 'https://lootvoid.xyz/api';

export const getProducts = () => async (dispatch) => {
  const query = gql`
    {
      getProducts {
        _id
        imageURL
        name
        Price
        link
        Time
      }
    }
  `;
  try {
    const response = await request(endpoint, query);
    dispatch({
      type: 'DATA_PRODUCTS',
      payload: response.getProducts,
    });
  } catch (error) {
    console.error('get All products -> err', error);
  }
};

export const getProductById = (id) => async (dispatch) => {
  const query = gql`
    query generalSearch($keyword: String!) {
      searchItems(keyword: $keyword) {
        __typename
        ... on Product {
          _id
          urlImage
          name
          salePrice
          description
        }
      }
    }
  `;
  try {
    const response = await request(endpoint, query, id);
    dispatch({
      type: 'PRODUCT_BY_ID',
      payload: response.getProducts,
    });
  } catch (error) {
    console.error('get products by Id-> err', error);
  }
};

export const getProductByName = (name) => async (dispatch) => {
  const query = gql`
    query generalSearch($keyword: String!) {
      searchItems(keyword: $keyword) {
        __typename
        ... on Product {
          _id
          imageURL
          name
          Price
          link
          stars
        }
      }
    }
  `;
  const nameProduct = { keyword: name };
  try {
    const response = await request(endpoint, query, nameProduct);
    dispatch({
      type: 'PRODUCT_BY_NAME',
      payload: response.searchItems,
    });
  } catch (error) {
    console.error('get products by Id-> err', error);
  }
};
