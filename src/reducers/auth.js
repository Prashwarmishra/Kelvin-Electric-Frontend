import {
  AUTHENTICATE_USER,
  CLEAR_AUTH_MESSAGES,
  FORGET_PASSWORD_FAILURE,
  FORGET_PASSWORD_START,
  FORGET_PASSWORD_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
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
    case LOGIN_START:
    case FORGET_PASSWORD_START:
      return {
        ...state,
        inProgress: true,
      };
    case SIGNUP_SUCCESS:
    case FORGET_PASSWORD_SUCCESS:
      return {
        ...state,
        inProgress: false,
        success: action.success,
        error: null,
      };
    case SIGNUP_FAILURE:
    case LOGIN_FAILURE:
    case FORGET_PASSWORD_FAILURE:
      return {
        ...state,
        inProgress: false,
        error: action.error,
        success: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        error: null,
        isLoggedin: true,
        inProgress: false,
      };
    case CLEAR_AUTH_MESSAGES:
      return {
        ...state,
        error: null,
        success: null,
      };
    case AUTHENTICATE_USER:
      return {
        ...state,
        user: action.user,
        isLoggedin: true,
      };
    default:
      return state;
  }
}
