import axios from 'axios';

export const ADD_WORD = 'ADD_WORD';
export const CHANGE_ACTIVE = 'CHANGE_ACTIVE';

export const FETCH_TYPES_REQUEST = 'FETCH_TYPES_REQUEST';
export const FETCH_TYPES_SUCCESS = 'FETCH_TYPES_SUCCESS';
export const FETCH_TYPES_FAILURE = 'FETCH_TYPES_FAILURE';

export const fetchTypes = () => dispatch => {
  dispatch({
    type: FETCH_TYPES_REQUEST,
  });
  return axios
    .get('/cards/api/types')
    .then(res => {
      dispatch({
        type: FETCH_TYPES_SUCCESS,
        payload: { types: res.data },
      });
    })
    .catch(err =>
      dispatch({
        type: FETCH_TYPES_FAILURE,
        payload: err.response.errorType,
      }),
    );
};

export const addWord = (firstW, secondW) => ({
  type: ADD_WORD,
  payload: { firstW, secondW },
});
export const changeActive = type => ({
  type: CHANGE_ACTIVE,
  payload: { type },
});
