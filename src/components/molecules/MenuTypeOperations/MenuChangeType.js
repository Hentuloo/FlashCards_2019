import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ChoseIcon from 'components/molecules/ChoseIcon/ChoseIcon';
import PageTypeButton from 'components/atoms/PageTypeButton/PageTypeButton';

class MenuAddType extends Component {
  state = {
    IconActive: 'params',
    title: '',
    type: '',
  };

  handleClickIcon = IconActive => this.setState({ IconActive });

  handleChangeTitle = title => this.setState({ title });

  handleChangeType = type => this.setState({ type });

  render() {
    const { className } = this.props;
    const propClasses = classNames(className);
    const { IconActive, title, type } = this.state;
    return (
      <div className={propClasses}>
        <div>
          Wybierz sfoją fiszkę:
          <select
            value={type}
            onChange={select => this.handleChangeType(select.target.value)}
          >
            <option value="malpa">malpa</option>
            <option value="Czøowiek">Chøowiek</option>
          </select>
        </div>
        <label htmlFor="type__title">
          Nazwa:{' '}
          <input
            id="type__title"
            type="text"
            name="add"
            placeholder="np. sport"
            value={title}
            onChange={() => this.handleChangeTitle('title')}
          />
        </label>

        <div className="menu__selectIcon">
          <ChoseIcon active={IconActive} onClick={this.handleClickIcon} />
        </div>
        <PageTypeButton value="Zmodyfikuj!" className="menu__addButton" />
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
