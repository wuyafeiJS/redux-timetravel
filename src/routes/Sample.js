import React, { Component } from 'react';
import Tesla from 'lib/tesla';
import ControlsContainer from './Controls';
import BookCotainer from './Book';
import StateViewerContainer from './StateViewer';

import './Sample.css';

export default class Sample extends Component {
  state = {};

  showGlobalIndicator = () => {
    Tesla.emit(Tesla.GlobalIndicator);
    setTimeout(() => {
      Tesla.emit(Tesla.GlobalIndicator, false);
    }, 2000);
  };
  render() {
    return (
      <div styleName="container">
        <ControlsContainer />
        <BookCotainer />
        <StateViewerContainer />
      </div>
    );
  }
}
