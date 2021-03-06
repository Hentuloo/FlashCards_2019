import axios from 'axios';
import history from 'config/history';
import Constants from 'config/Constants';
import { REQUEST } from 'actions';

export const AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS';
export const AUTHENTICATE_FAILURE = 'AUTHENTICATE_FAILURE';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const USER_DELETE_FAILURE = 'USER_DELETE_FAILURE';

export const loginUser = (email, password) => dispatch => {
  dispatch({
    type: REQUEST,
  });
  return axios
    .post('/auth/login', {
      email,
      password,
    })
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
      });
      const token = res.data;
      localStorage.setItem('flashCardsToken', token);
      history.push(Constants.PATHS.root);
    })
    .catch(err => {
      const respnse = err.response.data;
      let errorType = err.response.data;

      if (respnse === 'Bad Request') errorType = 'dataWrong';
      if (respnse === 'Unauthorized') errorType = 'loginFailure';
      return dispatch({
        type: LOGIN_FAILURE,
        payload: { errorType },
      });
    });
};

export const authenticate = (email, password) => dispatch => {
  dispatch({
    type: REQUEST,
  });
  return axios
    .post('/auth/new', {
      email,
      password,
    })
    .then(payload => {
      dispatch({
        type: AUTHENTICATE_SUCCESS,
        payload,
      });

      history.push(Constants.PATHS.login);
    })
    .catch(err => {
      const { errorType, name } = err.response.data;
      const error = errorType || name;
      dispatch({
        type: AUTHENTICATE_FAILURE,
        payload: { errorType: error },
      });
    });
};

export const deleteUser = email => dispatch => {
  dispatch({
    type: REQUEST,
  });
  return axios
    .delete('/auth/delete', { data: { email } })
    .then(() => {
      localStorage.removeItem('flashCardsToken');
      history.push(Constants.PATHS.signup);
    })
    .catch(err => {
      const respnse = err.response.data;
      let { errorType } = err.response.data;
      if (respnse === 'Bad Request') errorType = 'dataWrong';
      if (respnse === 'Unauthorized') errorType = 'loginFailure';
      return dispatch({
        type: USER_DELETE_FAILURE,
        payload: { errorType },
      });
    });
};
