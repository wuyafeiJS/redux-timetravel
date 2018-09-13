import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Topicselector extends Component {
  static propTypes = {
    topic: PropTypes.string,
    fetchTopic: PropTypes.func,
    setTopic: PropTypes.func
  };
  handleChange = event => {
    const { setTopic } = this.props;
    setTopic(event.target.value);
  };
  handleKeyPress = event => {
    const { fetchTopic } = this.props;
    if (event.key === 'Enter') {
      fetchTopic(event.target.value);
    }
  };
  componentDidMount() {}
  render() {
    const styles = {
      topic: {
        marginRight: '10px',
        fontFamily: 'tahoma',
        fontSize: '18px'
      },

      input: {
        fontFamily: 'tahoma',
        fontSize: '16px',
        marginRight: '10px'
      }
    };

    const { topic } = this.props;
    return (
      <span>
        <span style={styles.topic}>Topic</span>

        <input
          type="text"
          ref={instance => (this.input = instance)}
          style={styles.input}
          value={topic}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </span>
    );
  }
}
