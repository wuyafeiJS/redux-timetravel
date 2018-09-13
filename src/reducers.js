/* eslint-disable */
import { combineReducers } from 'redux';
import stateHistory from './stateHistory';

const defaultData = {
  STATUS: '应用正在启动',
  TOPIC: 'javascript',
  DISPLAY_MODE: 'THUMBNAIL',
  STATE: []
};
const fetchReducer = (state = defaultData.STATE, action) => {
  switch (action.type) {
    case 'FETCH_STATE':
      return [];
    case 'FETCH_FAIL':
      alert('failed!');
      return [];
    case 'FETCH_SUCCESS':
      return action.data.items;
    default:
      return state;
  }
};
const bookDisplayReducer = (state = defaultData.DISPLAY_MODE, action) => {
  switch (action.type) {
    case 'SET_DISPLAY_MODE':
      return action.displayMode;

    default:
      return state;
  }
};
const statusReducer = (state = defaultData.STATUS, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return 'Fetching...';

    case 'FETCH_SUCCESS':
      return 'Fetch complete';

    case 'FETCH_FAIL':
      return 'Fetch failed ' + (action.error ? action.error : '');

    case 'SET_TOPIC':
      return 'Set topic to ' + action.topic;

    case 'SET_DISPLAY_MODE':
      return 'Set display mode to ' + action.displayMode;

    default:
      return state;
  }
};
const topicReducer = (state = defaultData.TOPIC, action) => {
  switch (action.type) {
    case 'SET_TOPIC':
      return action.topic;
    default:
      return state;
  }
};
const history = reducer => (state = stateHistory.present, action) => {
  switch (action.type) {
    case 'UNDO':
      stateHistory.undo();
      break;
    case 'REDO':
      stateHistory.redo();
      break;
    case 'GOTO':
      stateHistory.gotoState(action.stateIndex);
      break;

    default:
      const newState = reducer(state, action); // 精髓的地方，函数式编程
      stateHistory.push(newState);
  }
  return stateHistory.present;
};
/* eslint-enable */
// 用history包裹reducer，增强它，使得每次dispatch action都要经过history函数，从而将state记录下来
export default history(
  combineReducers({
    books: fetchReducer,
    displayMode: bookDisplayReducer,
    currentStatus: statusReducer,
    topic: topicReducer
  })
);
