import { CHANGE_ACTIVE } from 'actions';

const initialState = { active: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ACTIVE:
      return Object.assign({}, state, {
        active: action.payload.type,
      });
    default:
      return state;
  }
};
