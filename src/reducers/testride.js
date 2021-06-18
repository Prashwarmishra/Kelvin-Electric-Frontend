import {
  CLEAR_TESTRIDE_BOOKING_MESSAGE,
  TESTRIDE_BOOKING_FAILURE,
  TESTRIDE_BOOKING_START,
  TESTRIDE_BOOKING_SUCCESS,
} from '../actions/actionTypes';

const initialTestrideState = {
  success: null,
  error: null,
  inProgress: false,
};

export default function testride(state = initialTestrideState, action) {
  switch (action.type) {
    case TESTRIDE_BOOKING_START:
      return {
        ...state,
        inProgress: true,
      };
    case TESTRIDE_BOOKING_SUCCESS:
      return {
        ...state,
        inProgress: false,
        success: action.success,
      };
    case TESTRIDE_BOOKING_FAILURE:
      return {
        ...state,
        inProgress: false,
        error: action.error,
      };
    case CLEAR_TESTRIDE_BOOKING_MESSAGE:
      return {
        ...state,
        success: null,
        error: null,
      };
    default:
      return state;
  }
}
