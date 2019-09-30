import axios from 'axios';
import history from 'config/history';
import Constants from 'config/Constants';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.headers.common = {
  Authorization: `bearer ${localStorage.getItem('flashCardsToken')}`,
};
axios.interceptors.response.use(null, error => {
  const { status, config } = error.response;
  if (status === 401) {
    if (config) {
      // if is request from login or reqister page
      const reqData = JSON.parse(config.data);
      const { email, password } = reqData;
      if (email && password) return Promise.reject(error);
    }
    localStorage.removeItem('token');
    history.push(Constants.PATHS.login);
  }
  return Promise.reject(error);
});

// export everything from authActions and cardsActions
export * from './authActions';
export * from './typeActions';
export * from './cardsActions';

export const REQUEST = 'FETCH_TYPES_REQUEST';

// ACTIONS FOR ANY PAGE
export const ERROR_STATEMENT_SET = 'ERROR_STATEMENT_SET';
export const ERROR_STATEMENT_RESET = 'ERROR_STATEMENT_RESET';

export const setErrorStatement = errorType => ({
  type: ERROR_STATEMENT_SET,
  payload: { errorType },
});
export const resetErrorType = () => ({
  type: ERROR_STATEMENT_RESET,
});
