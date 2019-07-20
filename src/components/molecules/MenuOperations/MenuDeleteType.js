import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import validator from 'config/validator';
import { deleteType, setErrorStatement } from 'actions';

import ErrorStatements from 'config/ErrorStatements';

import { SquareButton, MainButton } from 'components/atoms';

class MenuDeleteType extends Component {
  state = {
    activeType: '',
  };

  componentDidMount() {
    const { types } = this.props;
    const { activeType } = this.state;
    if (activeType === '' && types.length) {
      this.setState({ activeType: types[0].id });
    }
  }

  handleChangeType = submit => {
    const activeType = submit.target.value;
    this.setState({ activeType });
  };

  handleSubmit = () => {
    const { deleteTypeAction } = this.props;
    let { activeType } = this.state;
    const { types } = this.props;

    if (!types.length) return setErrorStatement({ errorType: 'chooseType' });

    if (activeType === '') activeType = types[0].id;

    const notValid = validator({ id: activeType });
    if (notValid) return setErrorStatement(notValid);

    deleteTypeAction(activeType);

    if (!types.length - 1) return this.setState({ activeType: '' });
    return this.setState({ activeType: types[1].id });
  };

  render() {
    const { className, types, errorType, closeWindow } = this.props;
    const propClasses = classNames(className);
    const { activeType } = this.state;

    const typesOptions = types.map(type => (
      <option key={type.id} value={type.id}>
        {type.title}
      </option>
    ));
    return (
      <div className={propClasses}>
        <div>
          Wybierz swoją fiszkę:
          <select
            value={activeType}
            defaultChecked
            onChange={this.handleChangeType}
          >
            {typesOptions}
          </select>
        </div>
        <SquareButton
          value="Usuń!"
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

MenuDeleteType.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  deleteTypeAction: PropTypes.func.isRequired,
  errorType: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  types: PropTypes.arrayOf(Object),
  closeWindow: PropTypes.func.isRequired,
};
MenuDeleteType.defaultProps = {
  className: '',
  errorType: false,
  types: null,
};

const mapDispatchToProps = {
  deleteTypeAction: deleteType,
  setErrorAction: setErrorStatement,
};

const mapStateToProps = state => ({
  types: state.FlashCards,
  errorType: state.Settings.errorType,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuDeleteType);
