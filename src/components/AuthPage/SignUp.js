import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import cx from 'classnames';

import Constants from 'config/Constants';

const SignUp = props => {
  const [inputsState, setInputsState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: '',
      name: '',
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

  const { email, password, name } = inputsState;
  const { handleSubmit, className, tooglePage, active } = props;
  return (
    <>
      <div className={className}>
        <h1 className="AuthBox__header">Załóż konto!</h1>
        <form
          method="post"
          className="AuthBox__form BasicForm"
          onSubmit={e => handleSubmit(e, inputsState)}
        >
          <div className="BasicForm__inputWrapper">
            <input
              type="name"
              name="name"
              className="BasicForm__input"
              placeholder="Imie:"
              value={name}
              onChange={changeInputValue}
            />
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
            Nowe konto!
          </button>

          <Link
            onClick={tooglePage}
            to={Constants.PATHS.signup}
            className="BasicForm__link AuthBox__link"
          >
            Chcę się zalogować
          </Link>
        </form>
      </div>
      <div
        className={cx('AuthBox__bar AuthBox__bar--blue', {
          'AuthBox__bar--active': active,
        })}
      >
        <h1 className="AuthBox__header AuthBox__header--white">
          Masz już konto?
        </h1>
        <button
          disabled={!active}
          onClick={tooglePage}
          type="submit"
          className="AuthBox__button BasicForm__submit BasicForm__submit--white BasicForm__submit--fontSmall"
        >
          <span className="AuthBox__button-text">Zaloguj się!</span>
        </button>
      </div>
    </>
  );
};

SignUp.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  tooglePage: PropTypes.func.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

SignUp.defaultProps = {
  className: '',
};
export default SignUp;
