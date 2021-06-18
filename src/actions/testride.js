import { APIUrls } from '../helpers/urls';
import { getAuthHeaderWithToken, getFormBody } from '../helpers/utils';
import {
  CLEAR_TESTRIDE_BOOKING_MESSAGE,
  TESTRIDE_BOOKING_FAILURE,
  TESTRIDE_BOOKING_START,
  TESTRIDE_BOOKING_SUCCESS,
} from './actionTypes';

export function testrideBookingStart() {
  return {
    type: TESTRIDE_BOOKING_START,
  };
}

export function testrideBookingSuccess(success) {
  return {
    type: TESTRIDE_BOOKING_SUCCESS,
    success,
  };
}

export function testrideBookingFailure(error) {
  return {
    type: TESTRIDE_BOOKING_FAILURE,
    error,
  };
}

export function bookTestride(dealershipName, date, time) {
  return (dispatch) => {
    dispatch(testrideBookingStart);
    const url = APIUrls.bookTestride();

    fetch(url, {
      method: 'POST',
      headers: getAuthHeaderWithToken(),
      body: getFormBody({ dealershipName, date, time }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('TEST RIDE BOOKING DETAILS: ', data);
        if (data.success) {
          return dispatch(testrideBookingSuccess(data.message));
        }
        return dispatch(testrideBookingFailure(data.message));
      });
  };
}

//CLEAR TESTRIDE BOOKING MESSAGES
export function clearTestRideBookingMessage() {
  return {
    type: CLEAR_TESTRIDE_BOOKING_MESSAGE,
  };
}
