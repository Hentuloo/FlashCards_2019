import axios from 'axios';

export const ADD_WORD = 'ADD_WORD';
export const CHANGE_ACTIVE = 'CHANGE_ACTIVE';

export const REQUEST = 'FETCH_TYPES_REQUEST';

export const EDIT_TYPE_SUCCESS = 'EDIT_TYPE_SUCCESS';
export const EDIT_TYPE_FAILURE = 'EDIT_TYPE_FAILURE';

export const DELETE_TYPE_SUCCESS = 'DELETE_TYPE_SUCCESS';
export const DELETE_TYPE_FAILURE = 'DELETE_TYPE_FAILURE';

export const ADD_TYPE_SUCCESS = 'ADD_TYPE_SUCCESS';
export const ADD_TYPE_FAILURE = 'ADD_TYPE_FAILURE';

export const FETCH_TYPES_SUCCESS = 'FETCH_TYPES_SUCCESS';
export const FETCH_TYPES_FAILURE = 'FETCH_TYPES_FAILURE';

export const editType = (id, title, icon) => dispatch => {
  dispatch({
    type: REQUEST,
  });
  return axios
    .post('/cards/api/updateType', { id, title, icon })
    .then(() =>
      dispatch({
        type: EDIT_TYPE_SUCCESS,
        payload: { id, title, icon },
      }),
    )
    .catch(err =>
      dispatch({
        type: EDIT_TYPE_FAILURE,
        payload: err.response,
      }),
    );
};
export const deleteType = id => dispatch => {
  dispatch({
    type: REQUEST,
  });
  return axios
    .delete('/cards/api/deleteType', { data: { id } })
    .then(() =>
      dispatch({
        type: DELETE_TYPE_SUCCESS,
        payload: { id },
      }),
    )
    .catch(err => {
      dispatch({
        type: DELETE_TYPE_FAILURE,
        payload: err.response,
      });
    });
};
export const addType = (title, icon) => dispatch => {
  dispatch({
    type: REQUEST,
  });
  return axios
    .post('/cards/api/newType', { title, icon })
    .then(res =>
      dispatch({
        type: ADD_TYPE_SUCCESS,
        payload: res.data,
      }),
    )
    .catch(err =>
      dispatch({
        type: ADD_TYPE_FAILURE,
        payload: { errorType: err.response.data.errorType },
      }),
    );
};

export const fetchTypes = () => dispatch => {
  dispatch({
    type: REQUEST,
  });
  return axios
    .get('/cards/api/types')
    .then(res => {
      dispatch({
        type: FETCH_TYPES_SUCCESS,
        payload: res.data,
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
