import { connect } from 'react-redux';
import History from 'components/History';
import { redo, undo, gotoState } from '../actions';
import stateHistory from '../stateHistory';

const mapStateToProps = () => ({
  past: stateHistory.past,
  futrue: stateHistory.futrue,
  present: stateHistory.present
});

const mapDispatchToProps = dispatch => ({
  undo: () => {
    dispatch(undo());
  },
  redo: () => {
    dispatch(redo());
  },
  gotoState: index => {
    dispatch(gotoState(index));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(History);
