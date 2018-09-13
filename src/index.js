import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// 需要上报sentry打开以下注释
// import './lib/sentry';
// eslint-disable-next-line no-undef
if (typeof window !== 'undefined') {
  console.log(typeof window);
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}

registerServiceWorker();
