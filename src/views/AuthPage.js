import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import validator from 'config/validator';
import { connect } from 'react-redux';
import { authenticate, loginUser, setErrorStatement } from 'actions';

import Constants from 'config/Constants';
import Error from 'config/ErrorStatements';

import { Helmet } from 'components/organisms';
import { Statement } from 'components/atoms';

import AuthLayout from '../layouts/AuthLayout';

class AuthPage extends Component {
  state = {
    pageType: '/rejestracja',
    email: '',
    password: '',
  };

  componentDidMount() {
    this.setState({ pageType: window.location.pathname });
  }

  handleInputValue = e => {
    const targetName = e.target.name;
    const targetValue = e.target.value;
    const { [targetName]: stateValue } = this.state;
    if (targetValue !== stateValue) {
      this.setState({ [targetName]: targetValue });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { pageType, email, password } = this.state;
    const { authenticateAction, loginAction, setErrorAction } = this.props;

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

  render() {
    const { errorType } = this.props;
    const { pageType, email, password } = this.state;
    const { signup, login } = Constants.PATHS;
    return (
      <>
        <Helmet
          description="Nauka poprzez zabawę: zaloguj się"
          keywords="fiszki online nauka angielskiego zgadywanie słów"
          title="Zaloguj się"
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
              <h1 className="AuthBox__header">
                {pageType === signup && 'Załóż konto!'}
                {pageType === login && 'Zaloguj się!'}
              </h1>
              <form
                method="post"
                className="AuthBox__form BasicForm"
                onSubmit={this.handleSubmit}
              >
                <div className="BasicForm__inputWrapper">
                  <input
                    type="email"
                    name="email"
                    className="BasicForm__input"
                    placeholder="e-mail"
                    value={email}
                    onChange={this.handleInputValue}
                  />
                  <input
                    type="password"
                    name="password"
                    className="BasicForm__input"
                    placeholder="password"
                    value={password}
                    onChange={this.handleInputValue}
                  />
                </div>
                <button type="submit" className="BasicForm__submit">
                  {pageType === login && 'Do fiszek!'}
                  {pageType === signup && 'Nowe konto!'}
                </button>
                {pageType === signup && (
                  <Link to={Constants.PATHS.login} className="BasicForm__link">
                    Chcę się zalogować
                  </Link>
                )}
                {pageType === login && (
                  <Link to={Constants.PATHS.signup} className="BasicForm__link">
                    Chcę utworzyć konto
                  </Link>
                )}
              </form>
            </div>
          </div>
        </AuthLayout>
      </>
    );
  }
}

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
