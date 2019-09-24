import { combineReducers } from 'redux';
import pins from './pinReducers';
import followers from './userReducers';

export default combineReducers({
  pins,
  followers
});
