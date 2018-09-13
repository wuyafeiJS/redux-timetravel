import React, { Component } from 'react';

import './Toast.css';

class Toast extends Component {
  state = {
    visible: false,
    msg: ''
  };
  msgQueue = [];
  componetDidMount() {
    const shadowQueue = Toast.shadow.msgQueue;
    if (shadowQueue.length) {
      this.msgQueue.append.apply(shadowQueue);
      Toast.shadow.msgQueue = [];
    }
    this.activate();
  }
  show = (msg, duration = 3000) => {
    if (!msg) return;
    this.msgQueue.push({ msg, duration });
    this.activate();
  };
  activate = () => {
    if (!this.msgQueue.length) {
      this.setState({ visible: false });
      return;
    }
    const msgObj = this.msgQueue.shift();
    this.setState({ msg: msgObj.msg, visible: true });
    setTimeout(this.activate, msgObj.duration);
  };
  render() {
    if (!this.state.visible) return null;
    return (
      <span styleName="toast-father">
        <span styleName="toast">{this.state.msg}</span>
      </span>
    );
  }
}

Toast.shadow = {
  msgQueue: [],
  show(msg, duration = 3000) {
    this.msgQueue.push({ msg, duration });
  }
};

export default Toast;
