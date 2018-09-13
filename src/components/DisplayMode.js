import React from 'react';
import PropTypes from 'prop-types';

const DisplayMode = ({ displayMode, setListing, setThumbnail }) => {
  console.log(displayMode);
  const styles = {
    radio: {
      marginLeft: '10px',
      cursor: 'pointer'
    },

    radiospan: {
      marginLeft: '20px',
      fontFamily: 'tahoma',
      fontSize: '16px'
    }
  };
  const switchToListing = () => {
    setListing();
  };

  const switchToThumbnail = () => {
    setThumbnail();
  };

  return (
    <span>
      <span style={styles.radiospan}>Thumbnail</span>

      <input
        type="radio"
        name="display"
        style={styles.radio}
        onChange={switchToThumbnail}
        checked={displayMode === 'THUMBNAIL'}
        value="thumbnail"
      />

      <span style={styles.radiospan}>List</span>

      <input
        type="radio"
        name="display"
        style={styles.radio}
        onChange={switchToListing}
        checked={displayMode !== 'THUMBNAIL'}
        value="list"
      />
    </span>
  );
};

DisplayMode.propTypes = {
  displayMode: PropTypes.string.isRequired
};

export default DisplayMode;
