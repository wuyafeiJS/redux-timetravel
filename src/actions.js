const FETCH_START = 'FETCH_START';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILED = 'FETCH_FAILED';

const apiPrefix = 'https://www.googleapis.com/books/v1/volumes?q=';
export const fetchTopic = topic => ({
  CALL_API: {
    url: apiPrefix + topic,
    types: [FETCH_START, FETCH_SUCCESS, FETCH_FAILED],
    data: {}
  }
});
export const setTopic = topic => ({
  type: 'SET_TOPIC',
  topic
});
export const setDisplayMode = displayMode => ({
  type: 'SET_DISPLAY_MODE',
  displayMode
});
export const redo = () => ({
  type: 'REDO'
});

export const undo = () => ({
  type: 'UNDO'
});

export const gotoState = stateIndex => ({
  type: 'GOTO',
  stateIndex
});
