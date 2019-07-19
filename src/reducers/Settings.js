import {
  CHANGE_ACTIVE,
  ERROR_STATEMENT_SET,
  ERROR_STATEMENT_RESET,
  REQUEST,
  EDIT_TYPE_SUCCESS,
  EDIT_TYPE_FAILURE,
  DELETE_TYPE_SUCCESS,
  DELETE_TYPE_FAILURE,
  ADD_TYPE_SUCCESS,
  ADD_TYPE_FAILURE,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_TYPES_SUCCESS,
  FETCH_TYPES_FAILURE,
} from 'actions';

const initialState = { active: false, errorType: false, loading: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ACTIVE:
      return Object.assign({}, state, {
        active: action.payload.type,
      });
    case ERROR_STATEMENT_SET:
      return { ...state, errorType: action.payload.errorType };

    case ERROR_STATEMENT_RESET:
      return { ...state, errorType: false };

    case REQUEST:
      return { ...state, loading: true };

    case EDIT_TYPE_SUCCESS:
    case EDIT_TYPE_FAILURE:
      return { ...state, loading: false };

    case DELETE_TYPE_SUCCESS:
    case DELETE_TYPE_FAILURE:
      return { ...state, loading: false };

    case ADD_TYPE_SUCCESS:
      return { ...state, loading: false };
    case ADD_TYPE_FAILURE:
      return { ...state, loading: false, errorType: action.payload.errorType };

    case FETCH_TYPES_SUCCESS:
    case FETCH_TYPES_FAILURE:
      return { ...state, loading: false };

    case LOGIN_SUCCESS:
      return { ...state, loading: false };

    case LOGIN_FAILURE:
      return { ...state, errorType: action.payload.errorType, loading: false };

    case AUTHENTICATE_SUCCESS:
      return { ...state, loading: false };

    case AUTHENTICATE_FAILURE:
      return { ...state, errorType: action.payload.errorType, loading: false };

    default:
      return state;
  }
};
