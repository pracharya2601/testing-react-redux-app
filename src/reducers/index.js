import { combineReducers } from 'redux';
import commentReducer from 'reducers/comment';

export default combineReducers({
  comments: commentReducer,
});
