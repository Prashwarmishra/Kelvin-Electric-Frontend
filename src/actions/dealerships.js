import { APIUrls } from '../helpers/urls';
import {
  LOCATE_DEALERSHIP_FAILURE,
  LOCATE_DEALERSHIP_SUCCESS,
} from './actionTypes';

import { getAuthHeader } from '../helpers/utils';

export function locateDealershipSuccess(dealerships) {
  return {
    type: LOCATE_DEALERSHIP_SUCCESS,
    dealerships,
  };
}

export function locateDealershipFailure(error) {
  return {
    type: LOCATE_DEALERSHIP_FAILURE,
    error,
  };
}

export function locateDealership() {
  return (dispatch) => {
    const url = APIUrls.locateDealerships();

    fetch(url, {
      method: 'GET',
      headers: getAuthHeader(),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('DEALERSHIP DATA: ', data);
        if (data.success) {
          return dispatch(locateDealershipSuccess(data.data.dealerships));
        }
        return dispatch(locateDealershipFailure(data.message));
      });
  };
}
