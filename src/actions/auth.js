import { APIUrls } from '../helpers/urls';
import {
  getAuthHeader,
  getFormBody,
  setAuthTokenInLocalStorage,
} from '../helpers/utils';

import {
  SIGNUP_FAILURE,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CLEAR_AUTH_MESSAGES,
  AUTHENTICATE_USER,
} from './actionTypes';

/*SIGNUP*/
export function signupStart() {
  return {
    type: SIGNUP_START,
  };
}

export function signupSuccess(success) {
  return {
    type: SIGNUP_SUCCESS,
    success,
  };
}

export function signupFailure(error) {
  return {
    type: SIGNUP_FAILURE,
    error,
  };
}

export function signup(name, email, phone, password, confirmPassword) {
  return (dispatch) => {
    dispatch(signupStart());
    const url = APIUrls.userSignup();

    fetch(url, {
      method: 'POST',
      headers: getAuthHeader(),
      body: getFormBody({
        name,
        email,
        phone,
        password,
        confirm_password: confirmPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('SIGNUP DATA', data);
        if (data.success) {
          return dispatch(signupSuccess(data.message));
        }
        return dispatch(signupFailure(data.message));
      });
  };
}

/*LOGIN*/

export function loginStart() {
  return {
    type: LOGIN_START,
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error,
  };
}

export function login(email, password) {
  return (dispatch) => {
    dispatch(loginStart());
    const url = APIUrls.userLogin();

    fetch(url, {
      method: 'POST',
      headers: getAuthHeader(),
      body: getFormBody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('LOGIN DATA:', data);
        if (data.success) {
          setAuthTokenInLocalStorage(data.data.token);
          return dispatch(loginSuccess(data.data.user));
        }
        return dispatch(loginFailure(data.message));
      });
  };
}

/*CLEAR AUTH*/
export function clearAuthMessages() {
  return {
    type: CLEAR_AUTH_MESSAGES,
  };
}

//PERSIST LOGGED IN USERS
export function authenticateUser(user) {
  return {
    type: AUTHENTICATE_USER,
    user,
  };
}