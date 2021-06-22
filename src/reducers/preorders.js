import {
  FETCH_PREORDER_FAILURE,
  FETCH_PREORDER_SUCCESS,
} from '../actions/actionTypes';

const initialPreorderState = {
  preorderList: [],
  error: null,
};

export default function preorders(state = initialPreorderState, action) {
  switch (action.type) {
    case FETCH_PREORDER_SUCCESS:
      return {
        ...state,
        preorderList: action.preorders,
        error: null,
      };
    case FETCH_PREORDER_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
