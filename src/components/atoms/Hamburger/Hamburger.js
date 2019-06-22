import React from 'react';
import classNames from 'classnames';
import './_Hamburger.scss';
import PropTypes from 'prop-types';

const Hamburger = props => {
  const { className, onClick } = props;
  const textClasses = classNames('menu__hamburger', className);
  return (
    <div
      onClick={onClick}
      onKeyDown={onClick}
      tabIndex="0"
      role="button"
      className={textClasses}
    />
  );
};

Hamburger.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
Hamburger.defaultProps = {
  className: '',
  onClick: null,
};

export default Hamburger;
