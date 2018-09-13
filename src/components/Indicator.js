import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Indicator.css';

class Indicator extends Component {
  static propTypes = {
    size: PropTypes.number,
    mode: PropTypes.string,
    frontColor: PropTypes.string,
    backColor: PropTypes.string,
    isShow: PropTypes.bool
  };
  static defaultProps = {
    size: 16,
    mode: 'inline',
    frontColor: '#0076FF',
    backColor: '#ccc',
    isShow: true
  };
  counter = 0;
  constructor(props) {
    super(props);
    this.state = {
      isShow: props.isShow
    };
  }
  activateTimer() {
    clearTimeout(this.timer);
    // 10s后无论如何都关闭loading
    this.timer = setTimeout(() => {
      this.hide(true);
    }, 10000);
  }
  show() {
    this.counter += 1;
    this.setState({ isShow: !!this.counter });
    this.activateTimer();
  }
  hide(force) {
    if (force) {
      this.counter = 0;
    } else {
      this.counter -= 1;
    }
    if (this.counter < 0) this.counter = 0;

    /**
     * 关闭时加一个延时
     * 1. 防止loading快速出现又消失
     * 2. 确保连续请求时loading不会断续消失再显示
     */
    setTimeout(() => {
      this.setState({ isShow: !!this.counter });
    }, 500);
  }
  render() {
    if (!this.state.isShow) return null;
    const { size, backColor, frontColor, mode } = this.props;
    const sizeStyle = {
      width: `${size}px`,
      height: `${size}px`,
      borderColor: backColor,
      borderLeftColor: frontColor
    };

    return (
      <div className={styles[mode]}>
        <div styleName="loader" style={sizeStyle} />
      </div>
    );
  }
}

Indicator.shadow = {
  show() {},
  hide() {}
};

export default Indicator;
