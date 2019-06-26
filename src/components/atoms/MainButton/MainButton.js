import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const MainButton = props => {
  const { className, value, onClick, icon } = props;
  const propClasses = classNames('mainButton', className);

  return (
    <button type="button" className={propClasses} onClick={onClick}>
      <i className={icon} />
      <span>{value}</span>
    </button>
  );
};
MainButton.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string,
};
MainButton.defaultProps = {
  className: '',
  value: 'Przycisk',
  onClick: null,
  icon: 'icon-soccer-ball',
};
export default MainButton;