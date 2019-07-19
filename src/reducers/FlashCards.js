import {
  ADD_WORD,
  EDIT_TYPE_SUCCESS,
  // EDIT_TYPE_FAILURE,
  DELETE_TYPE_SUCCESS,
  // DELETE_TYPE_FAILURE
  ADD_TYPE_SUCCESS,
  // ADD_TYPE_FAILURE,
  FETCH_TYPES_SUCCESS,
  // FETCH_TYPES_FAILURE,
} from 'actions';

export default (state = [], action) => {
  switch (action.type) {
    case EDIT_TYPE_SUCCESS: {
      const { id, title, icon } = action.payload;
      return [
        ...state.map(type => {
          if (type.id === id) {
            return {
              id,
              title,
              icon,
            };
          }
          return type;
        }),
      ];
    }
    case DELETE_TYPE_SUCCESS:
      return [...state.filter(type => type.id !== action.payload.id)];
    case ADD_TYPE_SUCCESS:
      return [...state, action.payload];
    case FETCH_TYPES_SUCCESS:
      return [...state, ...action.payload];
    case ADD_WORD:
      return state;
    default:
      return state;
  }
};
