import React from 'react';
import PropTypes from 'prop-types';

const StateViewer = ({ books, currentStatus, displayMode, topic }) => {
  const styles = {
    container: {
      margin: '20px',
      width: '400px',
      fontFamily: 'tahoma',
      paddingBottom: '100px'
    },

    title: {
      fontSize: '24px',
      marginTop: '25px'
    },

    state: {
      marginTop: '10px'
    },

    hr: {
      marginTop: '50px'
    }
  };
  return (
    <div style={styles.container}>
      <hr style={styles.hr} />

      <div style={styles.title}>状态</div>

      <div style={styles.state}>
        Topic: {topic}
        <br />
        Display mode: {displayMode}
        <br />
        Current status: {currentStatus}
        <br />
        Books displayed: {books.length}
        <br />
      </div>
    </div>
  );
};

StateViewer.propTypes = {
  books: PropTypes.array.isRequired,
  currentStatus: PropTypes.string.isRequired,
  displayMode: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired
};

export default StateViewer;
