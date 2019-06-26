export const ADD_WORD = 'ADD_WORD';

export const addWord = (firstW, secondW) => ({
  type: ADD_WORD,
  payload: { firstW, secondW },
});
