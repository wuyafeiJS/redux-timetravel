import { connect } from 'react-redux';
import StateViewer from 'components/StateViewer';

const mapStateToProps = state => ({
  books: state.books,
  topic: state.topic,
  currentStatus: state.currentStatus,
  displayMode: state.displayMode
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(StateViewer);
