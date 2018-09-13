/* eslint-disable react/prop-types */
import React from 'react';
import {
  BrowserRouter as Router,
  // HashRouter as Router, // 如果在arms打包需要使用HashRouter
  Route
} from 'react-router-dom';

import Home from 'routes/Home';
import Sample from 'routes/Sample';

export default ({ styleName }) => (
  <Router>
    <div className={styleName}>
      <Route exact path="/" component={Home} />
      <Route path="/sample" component={Sample} />
    </div>
  </Router>
);
