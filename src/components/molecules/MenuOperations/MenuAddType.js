import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ChoseIcon from 'components/molecules/ChoseIcon/ChoseIcon';
import SquareButton from 'components/atoms/SquareButton/SquareButton';

class MenuAddType extends Component {
  state = { IconActive: 'params', title: '' };

  handleClickIcon = name => this.setState({ IconActive: name });

  handleChange = title => this.setState({ title });

  render() {
    const { className } = this.props;
    const propClasses = classNames(className);
    const { IconActive, title } = this.state;
    return (
      <div className={propClasses}>
        <label htmlFor="add__type_title">
          Nazwa:{' '}
          <input
            id="add__type_title"
            type="text"
            name="add"
            placeholder="np. sport"
            value={title}
            onChange={() => this.handleChange('title')}
          />
        </label>

        <div className="menu__selectIcon">
          <ChoseIcon active={IconActive} onClick={this.handleClickIcon} />
        </div>
        <SquareButton value="Dodaj nową fiszkę!" className="menu__addButton" />
      </div>
    );
  }
}

MenuAddType.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
MenuAddType.defaultProps = {
  className: '',
};
export default MenuAddType;
