import { combineReducers } from 'redux';
import auth from './auth';
import dealerships from './dealerships';
import testride from './testride';
import preorders from './preorders';

export default combineReducers({
  auth,
  dealerships,
  testride,
  preorders,
});
