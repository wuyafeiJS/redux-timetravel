import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

const Book = ({ books, currentStatus, displayMode }) => {
  const styles = {
    links: {
      marginTop: '20px'
    },

    link: {
      padding: '25px'
    },

    image: {
      boxShadow: '3px 3px 3px #686868',
      marginBottom: '15px'
    }
  };

  if (currentStatus === 'Fetching...') return '加载中。。。';
  const renderBook = item => {
    const link = item.volumeInfo.canonicalVolumeLink;
    if (displayMode === 'THUMBNAIL') {
      return (
        <a href={link} style={styles.link}>
          <img
            src={item.volumeInfo.imageLinks.thumbnail}
            style={styles.image}
            alt="presentation"
          />
        </a>
      );
    }
    return (
      <div style={styles.links}>
        <a href={link} style={styles.link}>
          {item.volumeInfo.title}
        </a>
      </div>
    );
  };
  return (
    <div styleName="books">
      {books.map((v, k) => {
        console.log(v);
        return (
          <div key={k.toString()} className="book">
            {renderBook(v)}
          </div>
        );
      })}
    </div>
  );
};

Book.propTypes = {
  books: PropTypes.array.isRequired,
  currentStatus: PropTypes.string.isRequired,
  displayMode: PropTypes.string.isRequired
};

export default Book;
