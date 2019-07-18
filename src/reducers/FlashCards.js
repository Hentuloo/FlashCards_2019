import { ADD_WORD } from 'actions';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_WORD:
      return state;
    default:
      return state;
  }
};
