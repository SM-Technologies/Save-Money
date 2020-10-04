import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../redux/reducers/rootReducer';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

export default store;