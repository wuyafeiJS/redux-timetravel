import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LOGO from 'assets/images/logo.svg';
import './Home.css';

export default class Home extends Component {
  state = {};
  render() {
    return (
      <div styleName="container">
        <img styleName="logo" src={LOGO} alt="logo" />
        <p>This is Home Page!</p>
        <Link to="/sample">See sample</Link>
      </div>
    );
  }
}
