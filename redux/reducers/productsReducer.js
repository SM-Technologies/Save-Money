const INITIAL_STATE = {
  error: null,
  status: false,
  dataProducts: [],
  productById: [],
  productByName: [],
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DATA_PRODUCTS':
      return {
        ...state,
        dataProducts: action.payload,
        status: true,
        error: null,
      };
    case 'PRODUCT_BY_ID':
      return {
        ...state,
        productById: action.payload,
        loading: false, // loading there is not in INITIAL_STATE
        error: null,
      };
    case 'PRODUCT_BY_NAME':
      return {
        ...state,
        productByName: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default productsReducer;
