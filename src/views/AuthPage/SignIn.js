import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import cx from 'classnames';

import Constants from 'config/Constants';

const SignIn = props => {
  const [inputsState, setInputsState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: '',
      password: '',
    },
  );

  const changeInputValue = e => {
    const { name, value } = e.target;
    setInputsState({
      ...inputsState,
      [name]: value,
    });
  };

  const { email, password } = inputsState;
  const { handleSubmit, className, tooglePage, active } = props;

  return (
    <>
      <div className={className}>
        <h1 className="AuthBox__header">Zaloguj się!</h1>
        <form
          method="post"
          className="AuthBox__form BasicForm"
          onSubmit={e => handleSubmit(e, inputsState)}
        >
          <div className="BasicForm__inputWrapper">
            <input
              type="email"
              name="email"
              className="BasicForm__input"
              placeholder="e-mail"
              value={email}
              onChange={changeInputValue}
            />
            <input
              type="password"
              name="password"
              className="BasicForm__input"
              placeholder="password"
              value={password}
              onChange={changeInputValue}
            />
          </div>
          <button type="submit" className="BasicForm__submit">
            Do fiszek!
          </button>

          <Link
            onClick={tooglePage}
            to={Constants.PATHS.signup}
            className="BasicForm__link  AuthBox__link"
          >
            Chcę utworzyć konto
          </Link>
        </form>
      </div>
      <div className={cx('AuthBox__bar', { 'AuthBox__bar--active': active })}>
        <h1 className="AuthBox__header AuthBox__header--white">
          Nie masz jeszcze konta?
        </h1>
        <button
          disabled={!active}
          onClick={tooglePage}
          type="submit"
          className="AuthBox__button BasicForm__submit BasicForm__submit--white BasicForm__submit--fontSmall"
        >
          <span className="AuthBox__button-text">Dołącz teraz</span>
        </button>
      </div>
    </>
  );
};

SignIn.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  tooglePage: PropTypes.func.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

SignIn.defaultProps = {
  className: '',
};
export default SignIn;
