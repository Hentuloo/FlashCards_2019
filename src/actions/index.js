export const ADD_WORD = 'ADD_WORD';
export const CHANGE_ACTIVE = 'CHANGE_ACTIVE';

export const addWord = (firstW, secondW) => ({
  type: ADD_WORD,
  payload: { firstW, secondW },
});
export const changeActive = type => ({
  type: CHANGE_ACTIVE,
  payload: { type },
});
