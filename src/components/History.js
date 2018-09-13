import React from 'react';
import PropTypes from 'prop-types';

const History = ({ past, futrue, present, redo, undo, gotoState }) => {
  const styles = {
    container: {
      marginLeft: '20px',
      cursor: 'pointer'
    },

    link: { textDecoration: 'none' },
    input: { cursor: 'pointer' }
  };
  const RightArrow = () => (
    <a href="#" style={styles.link} onClick={() => redo()}>
      &#8594;
    </a>
  );

  const LeftArrow = () => (
    <a href="#" style={styles.link} onClick={() => undo()}>
      &#8592;
    </a>
  );
  const max = () =>
    (past ? past.length : 0) +
    (present ? 1 : 0) +
    (futrue ? futrue.length : 0) -
    1;
  const value = () => (past ? past.length : 0);
  return (
    <span>
      <input
        type="range"
        min={0}
        max={max()}
        value={value()}
        onChange={e => {
          gotoState(e.target.value);
        }}
        style={styles.input}
      />
      {past && past.length > 0 ? <LeftArrow /> : null}
      {futrue && futrue.length > 0 ? <RightArrow /> : null}
    </span>
  );
};

History.propTypes = {
  past: PropTypes.array.isRequired,
  futrue: PropTypes.array.isRequired,
  present: PropTypes.object.isRequired,
  redo: PropTypes.func,
  undo: PropTypes.func,
  gotoState: PropTypes.func
};

export default History;
