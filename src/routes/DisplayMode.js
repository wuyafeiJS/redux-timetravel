import { connect } from 'react-redux';
import DisplayMode from 'components/DisplayMode';
import { setDisplayMode } from '../actions';

const mapStateToProps = state => ({
  displayMode: state.displayMode
});

const mapDispatchToProps = dispatch => ({
  setListing: () => {
    dispatch(setDisplayMode('LISTING'));
  },

  setThumbnail: () => {
    dispatch(setDisplayMode('THUMBNAIL'));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayMode);
