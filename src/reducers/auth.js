import {
  SIGNUP_FAILURE,
  SIGNUP_START,
  SIGNUP_SUCCESS,
} from '../actions/actionTypes';

const initialAuthState = {
  user: {},
  success: null,
  error: null,
  isLoggedin: false,
  inProgress: false,
};

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case SIGNUP_START:
      return {
        ...state,
        inProgress: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        inProgress: false,
        success: action.success,
        error: null,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        inProgress: false,
        error: action.error,
        success: null,
      };
    default:
      return state;
  }
}
