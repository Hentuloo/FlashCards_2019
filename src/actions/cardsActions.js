import axios from 'axios';

import { REQUEST } from 'actions';

export const ADD_WORDS_SUCCESS = 'ADD_WORDS_SUCCESS';
export const ADD_WORDS_FAILURE = 'ADD_WORDS_FAILURE';
export const DELETE_WORDS_SUCCESS = 'DELETE_WORDS_SUCCESS';
export const DELETE_WORDS_FAILURE = 'DELETE_WORDS_FAILURE';

export const addWords = (idType, cards) => dispatch => {
  dispatch({
    type: REQUEST,
  });

  return axios
    .post('/cards/new', { idType, cards })
    .then(res =>
      dispatch({
        type: ADD_WORDS_SUCCESS,
        payload: { idType, newCards: [...res.data] },
      }),
    )
    .catch(err =>
      dispatch({
        type: ADD_WORDS_FAILURE,
        payload: err.response,
      }),
    );
};
export const deleteWord = (idType, idWord) => dispatch => {
  dispatch({
    type: REQUEST,
  });

  return axios
    .delete('/cards/one', { data: { idType, idWord } })
    .then(() =>
      dispatch({
        type: DELETE_WORDS_SUCCESS,
        payload: { idType, idWord },
      }),
    )
    .catch(err =>
      dispatch({
        type: DELETE_WORDS_FAILURE,
        payload: err.response,
      }),
    );
};
