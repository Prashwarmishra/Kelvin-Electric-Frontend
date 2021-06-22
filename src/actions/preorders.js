import { APIUrls } from '../helpers/urls';
import { getAuthHeaderWithToken } from '../helpers/utils';
import { FETCH_PREORDER_FAILURE, FETCH_PREORDER_SUCCESS } from './actionTypes';

export function fetchPreorderSuccess(preorders) {
  return {
    type: FETCH_PREORDER_SUCCESS,
    preorders,
  };
}

export function fetchPreorderFailure(error) {
  return {
    type: FETCH_PREORDER_FAILURE,
    error,
  };
}

export function fetchPreorders(userId) {
  return (dispatch) => {
    const url = APIUrls.fetchPreorders(userId);
    console.log('jhgsfkjbsvfkjgfsv', url);
    fetch(url, {
      headers: getAuthHeaderWithToken(),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('PREORDERS: ', data);
        if (data.success) {
          return dispatch(fetchPreorderSuccess(data.data.preorders));
        }
        return dispatch(fetchPreorderFailure(data.message));
      });
  };
}
