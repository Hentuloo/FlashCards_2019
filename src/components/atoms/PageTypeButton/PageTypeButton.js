import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const PageTypeButton = props => {
  const { className, value, onClick } = props;
  const propClasses = classNames('mainPage__button', className);

  return (
    <button type="button" className={propClasses} onClick={onClick}>
      {value}
    </button>
  );
};
PageTypeButton.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  value: PropTypes.string,
  onClick: PropTypes.func,
};
PageTypeButton.defaultProps = {
  className: '',
  value: 'Przycisk',
  onClick: null,
};
export default PageTypeButton;
