import thunk from 'redux-thunk';
import { callApi } from 'lib/middleware.js';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

/* eslint-disable */
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, callApi)
);
/* eslint-enable */
export default store;
