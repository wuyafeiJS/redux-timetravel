/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import Indicator from 'components/Indicator';
import Toast from 'components/Toast';
import Tesla from 'lib/tesla';
import Router from './Router';

import './App.css';

class App extends Component {
  toastRef = Toast.shadow;
  globalIndicatorRef = Indicator.shadow;

  constructor() {
    super();
    Tesla.on(Tesla.GlobalIndicator, isShow => {
      if (isShow === false) {
        this.globalIndicatorRef.hide();
      } else {
        this.globalIndicatorRef.show();
      }
    });
    Tesla.on(Tesla.Toast, (...args) => {
      this.toastRef.show(...args);
    });
  }

  setGlobalIndicatorRef = ref => {
    this.globalIndicatorRef = ref;
  };
  setToastRef = ref => {
    this.toastRef = ref;
  };
  render() {
    return (
      <div styleName="container">
        <header styleName="header">redux时间旅行</header>
        <Router styleName="main" />
        <footer styleName="footer">底部</footer>
        <Indicator
          ref={this.setGlobalIndicatorRef}
          mode="fixed"
          isShow={false}
        />
        <Toast ref={this.setToastRef} />
      </div>
    );
  }
}

let Outer = App; // eslint-disable-line import/no-mutable-exports
if (process.env.NODE_ENV === 'development') {
  const { hot } = require('react-hot-loader');
  Outer = hot(module)(App);
}

export default Outer;
