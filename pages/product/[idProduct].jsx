import { Provider } from 'react-redux';
import ProductDescriptionContainer from '../../components/ProductDescriptionContainer/ProductDescriptionContainer';
import Layout from '../../components/layout/Layout';
import store from '../../redux/store';

const ProductDescription = () => {
  return (
    <>
      <Layout>
        <Provider store={store}>
          <ProductDescriptionContainer />
        </Provider>
      </Layout>
    </>
  );
};
export default ProductDescription;
