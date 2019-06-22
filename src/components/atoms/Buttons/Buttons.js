import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Buttons = props => {
  const { className, value } = props;
  const propClasses = classNames('menu__button', className);

  return (
    <button type="button" className={propClasses}>
      {value}
    </button>
  );
};
Buttons.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
};
Buttons.defaultProps = {
  className: '',
  value: 'Przycisk',
};
export default Buttons;
