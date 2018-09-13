import { connect } from 'react-redux';
import Book from 'components/Book';

const mapStateToProps = state => ({
  books: state.books,
  topic: state.topic,
  currentStatus: state.currentStatus,
  displayMode: state.displayMode
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
