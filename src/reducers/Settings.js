import {
  CHANGE_ACTIVE,
  AUTHENTICATE_REQUEST,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from 'actions';

const initialState = { active: false, errorType: false, loading: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ACTIVE:
      return Object.assign({}, state, {
        active: action.payload.type,
      });

    case LOGIN_REQUEST:
      return { ...state, loading: true };

    case LOGIN_SUCCESS:
      return { ...state, loading: false };

    case LOGIN_FAILURE:
      return { ...state, errorType: action.payload.errorType, loading: false };

    case AUTHENTICATE_REQUEST:
      return { ...state, loading: true };

    case AUTHENTICATE_SUCCESS:
      return { ...state, loading: false };

    case AUTHENTICATE_FAILURE:
      return { ...state, errorType: action.payload.errorType, loading: false };

    default:
      return state;
  }
};
