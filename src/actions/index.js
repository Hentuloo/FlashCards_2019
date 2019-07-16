import axios from 'axios';
import history from 'config/history';
import Constants from 'config/Constants';

axios.defaults.baseURL = 'https://megafiszkachentulooo.herokuapp.com';

const ADD_WORD = 'ADD_WORD';
const CHANGE_ACTIVE = 'CHANGE_ACTIVE';

const AUTHENTICATE_REQUEST = 'AUTHENTICATE_REQUEST';
const AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS';
const AUTHENTICATE_FAILURE = 'AUTHENTICATE_FAILURE';
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';

export {
  ADD_WORD,
  CHANGE_ACTIVE,
  AUTHENTICATE_REQUEST,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
};

export const addWord = (firstW, secondW) => ({
  type: ADD_WORD,
  payload: { firstW, secondW },
});
export const changeActive = type => ({
  type: CHANGE_ACTIVE,
  payload: { type },
});

export const loginUser = (email, password) => dispatch => {
  dispatch({
    type: LOGIN_REQUEST,
  });
  return axios
    .post('/user/api/login', {
      email,
      password,
    })
    .then(token => {
      dispatch({
        type: LOGIN_SUCCESS,
      });
      localStorage.setItem('flashCardsToken', token);
      history.push(Constants.PATHS.root);
    })
    .catch(err => {
      const respnse = err.response.data;
      let errorType = err.response.data;
      if (respnse === 'Bad Request') errorType = 'dataWrong';
      if (respnse === 'Unauthorized') errorType = 'loginFailure';
      dispatch({
        type: LOGIN_FAILURE,
        payload: { errorType },
      });
    });
};

export const authenticate = (email, password) => dispatch => {
  dispatch({
    type: AUTHENTICATE_REQUEST,
  });
  return axios
    .post('/user/api/new', {
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
    .catch(err =>
      dispatch({
        type: AUTHENTICATE_FAILURE,
        payload: err.response.data,
      }),
    );
};
