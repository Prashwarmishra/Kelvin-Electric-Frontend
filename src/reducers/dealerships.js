import {
  LOCATE_DEALERSHIP_FAILURE,
  LOCATE_DEALERSHIP_SUCCESS,
} from '../actions/actionTypes';

const initialDealershipState = {
  dealerships: {},
  error: null,
};

export default function dealerships(state = initialDealershipState, action) {
  switch (action.type) {
    case LOCATE_DEALERSHIP_SUCCESS:
      return {
        ...state,
        dealerships: action.dealerships,
        error: null,
      };
    case LOCATE_DEALERSHIP_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
