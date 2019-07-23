import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import validator from 'config/validator';
import { connect } from 'react-redux';
import { deleteUser, setErrorStatement } from 'actions';

import Constants from 'config/Constants';
import Error from 'config/ErrorStatements';

import { Statement } from 'components/atoms';
import AuthLayout from '../layouts/AuthLayout';

class AuthPage extends Component {
  state = {
    hideEmailField: true,
    email: '',
  };

  handleInputValue = e => {
    const targetName = e.target.name;
    const targetValue = e.target.value;
    const { [targetName]: stateValue } = this.state;
    if (targetValue !== stateValue) {
      this.setState({ [targetName]: targetValue });
    }
  };

  handleClickDelete = () => {
    const { setErrorAction, deleteUserAction } = this.props;
    const { email, hideEmailField } = this.state;

    if (hideEmailField) {
      return this.setState(prevState => {
        return { hideEmailField: !prevState.hideEmailField };
      });
    }

    const notValid = validator({ email });
    if (notValid) return setErrorAction(notValid.errorType);

    return deleteUserAction(email);
  };

  handleClickBuy = () => {
    const { setErrorAction } = this.props;
    setErrorAction('notAvaliableAction');
  };

  render() {
    const { errorType } = this.props;
    const { email, hideEmailField } = this.state;
    return (
      <AuthLayout>
        <div className="AuthPage">
          {errorType && (
            <Statement
              className="Statement_failure"
              title={Error.TYPES[errorType]}
            />
          )}
          <div className="AuthPage__wrapper">
            <h1 className="AuthPage__header">Ustawienia:</h1>
            {!hideEmailField && (
              <input
                type="email"
                name="email"
                className="AuthPage__input"
                placeholder="Potwierdź email"
                value={email}
                onChange={this.handleInputValue}
              />
            )}
            <button
              type="submit"
              className="AuthPage__submit"
              onClick={this.handleClickDelete}
            >
              Chcę usunąć konto
            </button>
            <button
              type="submit"
              className="AuthPage__submit"
              onClick={this.handleClickBuy}
            >
              Chcę kupić premium
            </button>
            <Link to={Constants.PATHS.root} className="AuthPage__link">
              POWRÓT
            </Link>
          </div>
        </div>
      </AuthLayout>
    );
  }
}

const mapStateToProps = state => ({
  errorType: state.Settings.errorType,
});
const mapDispatchToProps = {
  deleteUserAction: deleteUser,
  setErrorAction: setErrorStatement,
};

AuthPage.propTypes = {
  deleteUserAction: PropTypes.func.isRequired,
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
