import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editType, setErrorStatement } from 'actions';
import validator from 'config/validator';
import ErrorStatements from 'config/ErrorStatements';

import { ChoseIcon } from 'components/molecules';
import { SquareButton, MainButton } from 'components/atoms';

class MenuChangeType extends Component {
  state = {
    activeType: '',
    iconActive: 'params',
    title: '',
  };

  componentDidMount() {
    const { types } = this.props;
    const { activeType } = this.state;

    if (activeType === '' && types.length) {
      this.setState({ activeType: types[0].id });
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async () => {
    const { activeType, title, iconActive } = this.state;
    const { setErrorAction, editTypeAction } = this.props;
    const notValid = validator({ id: activeType, icon: iconActive, title });
    if (notValid) {
      setErrorAction(notValid.errorType);
    } else {
      editTypeAction(activeType, title, iconActive);
    }
  };

  handleClickIcon = iconActive => this.setState({ iconActive });

  handleChangeTitle = title => this.setState({ title });

  handleChangeType = submit => {
    const activeType = submit.target.value;
    this.setState({ activeType });
  };

  render() {
    const { className, closeWindow, types, errorType } = this.props;
    const propClasses = classNames(className);
    const { iconActive, title, type } = this.state;

    const typesOptions = types.map(singleType => (
      <option key={singleType.id} value={singleType.id}>
        {singleType.title}
      </option>
    ));

    return (
      <div className={propClasses}>
        <div className="menuPanel__selectWrapper">
          Wybierz swoją fiszkę:
          <select
            className="menuPanel__select"
            value={type}
            defaultChecked
            onChange={this.handleChangeType}
          >
            {typesOptions}
          </select>
        </div>
        <label htmlFor="type__title" className="menuPanel__label">
          Nazwa:{' '}
          <input
            id="type_title"
            className="menuPanel__input"
            type="text"
            name="title"
            placeholder="np. sport"
            value={title}
            onChange={this.handleChange}
            autoComplete="off"
          />
        </label>

        <div className="menuPanel__iconsWrapper">
          <ChoseIcon active={iconActive} onClick={this.handleClickIcon} />
        </div>
        <SquareButton
          className="menuPanel__submit"
          value="Zmodyfikuj!"
          onClick={this.handleSubmit}
        />
        {errorType && (
          <span className="menuPanel__wrongStatement">
            {ErrorStatements.TYPES[errorType]}
          </span>
        )}
        <MainButton
          className="menuPanel__closeButton"
          icon="icon-cancel-circled"
          onClick={closeWindow}
        />
      </div>
    );
  }
}

MenuChangeType.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  types: PropTypes.arrayOf(Object),
  errorType: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  closeWindow: PropTypes.func.isRequired,
};
MenuChangeType.defaultProps = {
  className: '',
  errorType: false,
  types: null,
};
const mapDispatchToProps = {
  editTypeAction: editType,
  setErrorAction: setErrorStatement,
};

const mapStateToProps = state => ({
  types: state.FlashCards,
  errorType: state.Settings.errorType,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuChangeType);
