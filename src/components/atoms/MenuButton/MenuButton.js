import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const MenuButton = props => {
  const { className, value, onClick, icon } = props;
  const propClasses = classNames('menu__button', className);

  return (
    <button type="button" className={propClasses} onClick={onClick}>
      <i className={icon} />
      <span>{value}</span>
    </button>
  );
};
MenuButton.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string,
};
MenuButton.defaultProps = {
  className: '',
  value: 'Przycisk',
  onClick: null,
  icon: null,
};
export default MenuButton;
