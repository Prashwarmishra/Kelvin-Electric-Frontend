import { combineReducers } from 'redux';
import auth from './auth';
import dealerships from './dealerships';
import testride from './testride';

export default combineReducers({
  auth,
  dealerships,
  testride,
});
