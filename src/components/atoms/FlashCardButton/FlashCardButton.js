import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const FlashCardButton = props => {
  const { className, value, onClick } = props;
  const propClasses = classNames('flashCard___Button', className);

  return (
    <div className={propClasses}>
      <button type="button" onClick={onClick}>
        <span>{value}</span>
      </button>
    </div>
  );
};
FlashCardButton.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  value: PropTypes.string,
  onClick: PropTypes.func,
};
FlashCardButton.defaultProps = {
  className: '',
  value: 'Przycisk',
  onClick: null,
};
export default FlashCardButton;
