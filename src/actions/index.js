import axios from 'axios';
import history from 'config/history';
import Constants from 'config/Constants';

axios.defaults.baseURL = 'https://megafiszkachentulooo.herokuapp.com';
axios.defaults.headers.common = {
  Authorization: `bearer ${localStorage.getItem('flashCardsToken')}`,
};
axios.interceptors.response.use(null, error => {
  if (error.response.status === 401) {
    localStorage.removeItem('token');
    history.push(Constants.PATHS.login);
  }
  return Promise.reject(error);
});

// export everything from authActions and cardsActions
export * from './authActions';
export * from './cardsActions';

// ACTIONS FOR ANY PAGE
export const ERROR_STATEMENT_SET = 'ERROR_STATEMENT_SET';

export const setErrorStatement = errorType => ({
  type: ERROR_STATEMENT_SET,
  payload: { errorType },
});
