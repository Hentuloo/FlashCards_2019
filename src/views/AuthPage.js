import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authenticate, loginUser, setErrorStatement } from 'actions';
import cx from 'classnames';

import Constants from 'config/Constants';
import validator from 'config/validator';
import Error from 'config/ErrorStatements';

import { Helmet } from 'components/organisms';
import { Statement } from 'components/atoms';
import AuthLayout from 'layouts/AuthLayout';

import { SignIn, SignUp, BackgroundBlocks } from 'components/AuthPage';

const AuthPage = props => {
  const [pageType, setPageType] = useState(window.location.pathname);

  const handleSubmit = (e, values) => {
    e.preventDefault();

    const { email, password } = values;
    const { authenticateAction, loginAction, setErrorAction } = props;

    const notValid = validator({ email, password });
    if (notValid) {
      setErrorAction(notValid.errorType);
    } else {
      const { signup, login } = Constants.PATHS;

      if (pageType === signup) {
        authenticateAction(email, password);
      }
      if (pageType === login) {
        loginAction(email, password);
      }
    }
  };

  const handleTogglePage = () => {
    const { signup, login } = Constants.PATHS;

    if (signup === pageType) return setPageType(login);
    return setPageType(signup);
  };

  const { errorType } = props;
  const { signup, login } = Constants.PATHS;

  const SignInClasses = cx('login AuthBox__item', {
    'AuthBox__item--active': login === pageType,
  });
  const SignUpClasses = cx('singup AuthBox__item', {
    'AuthBox__item--active': signup === pageType,
  });

  return (
    <>
      <Helmet
        description="Nauka poprzez zabawę: zaloguj się"
        keywords="fiszki online nauka angielskiego zgadywanie słów"
        title={pageType === signup ? 'Rejestracja' : 'Zaloguj się'}
      />
      <AuthLayout>
        <div className="AuthBox">
          {errorType && (
            <Statement
              className="Statement_failure"
              title={Error.TYPES[errorType]}
            />
          )}
          <div className="AuthBox__wrapper">
            <SignIn
              active={login === pageType}
              className={SignInClasses}
              handleSubmit={handleSubmit}
              tooglePage={handleTogglePage}
            />
            <SignUp
              active={signup === pageType}
              className={SignUpClasses}
              handleSubmit={handleSubmit}
              tooglePage={handleTogglePage}
            />
            <BackgroundBlocks />
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

const mapStateToProps = state => ({
  errorType: state.Settings.errorType,
});
const mapDispatchToProps = {
  authenticateAction: authenticate,
  loginAction: loginUser,
  setErrorAction: setErrorStatement,
};

AuthPage.propTypes = {
  authenticateAction: PropTypes.func.isRequired,
  loginAction: PropTypes.func.isRequired,
  setErrorAction: PropTypes.func.isRequired,
  errorType: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};
AuthPage.defaultProps = {
  errorType: false,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthPage);
