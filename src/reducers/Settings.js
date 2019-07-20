import {
  REQUEST,
  ERROR_STATEMENT_SET,
  ERROR_STATEMENT_RESET,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  EDIT_TYPE_SUCCESS,
  EDIT_TYPE_FAILURE,
  DELETE_TYPE_SUCCESS,
  DELETE_TYPE_FAILURE,
  ADD_TYPE_SUCCESS,
  ADD_TYPE_FAILURE,
  FETCH_TYPES_SUCCESS,
  FETCH_TYPES_FAILURE,
  CHANGE_ACTIVE_SUCCESS,
  CHANGE_ACTIVE_FAILURE,
} from 'actions';

const initialState = { active: false, errorType: false, loading: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ERROR_STATEMENT_SET:
      return {
        ...state,
        errorType: action.payload.errorType,
      };
    case ERROR_STATEMENT_RESET:
      return {
        ...state,
        errorType: false,
      };

    case CHANGE_ACTIVE_SUCCESS:
      return Object.assign({}, state, {
        active: action.payload.idType,
        loading: false,
      });

    case EDIT_TYPE_SUCCESS:
    case DELETE_TYPE_SUCCESS:
    case ADD_TYPE_SUCCESS:
    case FETCH_TYPES_SUCCESS:
    case LOGIN_SUCCESS:
    case AUTHENTICATE_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case CHANGE_ACTIVE_FAILURE:
    case EDIT_TYPE_FAILURE:
    case DELETE_TYPE_FAILURE:
    case ADD_TYPE_FAILURE:
    case FETCH_TYPES_FAILURE:
    case LOGIN_FAILURE:
    case AUTHENTICATE_FAILURE:
      return {
        ...state,
        loading: false,
        errorType: action.payload.errorType,
      };

    default:
      return state;
  }
};
