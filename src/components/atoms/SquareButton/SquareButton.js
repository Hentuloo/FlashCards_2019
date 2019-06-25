import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const SquareButton = props => {
  const { className, value, onClick } = props;
  const propClasses = classNames('SquareButton', className);

  return (
    <button type="button" className={propClasses} onClick={onClick}>
      {value}
    </button>
  );
};
SquareButton.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  value: PropTypes.string,
  onClick: PropTypes.func,
};
SquareButton.defaultProps = {
  className: '',
  value: 'Przycisk',
  onClick: null,
};
export default SquareButton;
