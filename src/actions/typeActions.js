import axios from 'axios';
import history from 'config/history';
import Constants from 'config/Constants';

import { REQUEST } from 'actions';

export const CHANGE_ACTIVE_SUCCESS = 'CHANGE_ACTIVE_SUCCESS';
export const CHANGE_ACTIVE_FAILURE = 'CHANGE_ACTIVE_FAILURE';

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
    .catch(err => {
      const { errorType, name } = err.response.data;
      const error = errorType || name;
      dispatch({
        type: EDIT_TYPE_FAILURE,
        payload: { errorType: error },
      });
    });
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
        payload: { ...res.data },
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
    .catch(() => {
      dispatch({
        type: FETCH_TYPES_FAILURE,
        payload: { errorType: 'sthWrong' },
      });
      localStorage.removeItem('flashCardsToken');
      history.push(Constants.PATHS.login);
    });
};

export const changeActive = id => dispatch => {
  dispatch({
    type: REQUEST,
  });
  return axios
    .get('/cards/api/oneType', {
      params: {
        id,
      },
    })
    .then(res =>
      dispatch({
        type: CHANGE_ACTIVE_SUCCESS,
        payload: { idType: id, cards: res.data.cards },
      }),
    )
    .catch(err =>
      dispatch({
        type: CHANGE_ACTIVE_FAILURE,
        payload: { errorType: err.response.data.errorType },
      }),
    );
};
