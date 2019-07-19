import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import validator from 'config/validator';
import ErrorStatements from 'config/ErrorStatements';

import { addType, setErrorStatement } from 'actions';

import { ChoseIcon } from 'components/molecules';
import { SquareButton, MainButton } from 'components/atoms';

class MenuAddType extends Component {
  state = {
    IconActive: 'params',
    title: '',
  };

  handleClickIcon = name => this.setState({ IconActive: name });

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async () => {
    const { title, IconActive } = this.state;
    const { setErrorAction, addTypeAction } = this.props;
    const notValid = validator({ icon: IconActive, title });
    if (notValid) {
      setErrorAction(notValid.errorType);
    } else {
      addTypeAction(title, IconActive);
    }
  };

  render() {
    const { className, errorType, closeWindow } = this.props;
    const propClasses = classNames(className);
    const { IconActive, title } = this.state;
    return (
      <div className={propClasses}>
        <label htmlFor="add__type_title">
          Nazwa:{' '}
          <input
            id="add__type_title"
            type="text"
            name="title"
            placeholder="np. sport"
            value={title}
            onChange={this.handleChange}
          />
        </label>

        <div className="menu__selectIcon">
          <ChoseIcon active={IconActive} onClick={this.handleClickIcon} />
        </div>
        <SquareButton
          value="Dodaj nową fiszkę!"
          className="menu__addButton"
          onClick={this.handleSubmit}
        />
        {errorType && (
          <span className="menu__Operation__wrong">
            {ErrorStatements.TYPES[errorType]}
          </span>
        )}
        <MainButton
          className="menu__closeButton"
          icon="icon-cancel-circled"
          onClick={closeWindow}
        />
      </div>
    );
  }
}

MenuAddType.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  errorType: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  closeWindow: PropTypes.func.isRequired,
};
MenuAddType.defaultProps = {
  className: '',
  errorType: false,
};

const mapStateToProps = state => ({
  types: state.FlahCards,
  errorType: state.Settings.errorType,
});
const mapDispatchToProps = {
  addTypeAction: addType,
  setErrorAction: setErrorStatement,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuAddType);
