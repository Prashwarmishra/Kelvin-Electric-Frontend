import { APIUrls } from '../helpers/urls';
import {
  getAuthHeader,
  getFormBody,
  setAuthTokenInLocalStorage,
} from '../helpers/utils';
import { SIGNUP_FAILURE, SIGNUP_START, SIGNUP_SUCCESS } from './actionTypes';

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
        console.log(data);
        if (data.success) {
          return dispatch(signupSuccess(data.message));
        }
        return dispatch(signupFailure(data.message));
      });
  };
}
