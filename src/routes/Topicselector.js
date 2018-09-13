import { connect } from 'react-redux';
import Topicselector from 'components/Topicselector';
import { fetchTopic, setTopic } from '../actions';

const mapStateToProps = state => ({
  topic: state.topic
});

const mapDispatchToProps = dispatch => ({
  fetchTopic(topic) {
    dispatch(fetchTopic(topic));
  },
  setTopic(topic) {
    dispatch(setTopic(topic));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Topicselector);
