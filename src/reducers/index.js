import { combineReducers } from 'redux';
import auth from './auth';
import dealerships from './dealerships';

export default combineReducers({
  auth,
  dealerships,
});
