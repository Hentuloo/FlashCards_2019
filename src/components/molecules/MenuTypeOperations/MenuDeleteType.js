import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import PageTypeButton from 'components/atoms/PageTypeButton/PageTypeButton';

class MenuAddType extends Component {
  state = {
    type: '',
  };

  handleChangeType = type => this.setState({ type });

  render() {
    const { className } = this.props;
    const propClasses = classNames(className);
    const { type } = this.state;
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
        <PageTypeButton value="Usuń!" className="menu__addButton" />
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
