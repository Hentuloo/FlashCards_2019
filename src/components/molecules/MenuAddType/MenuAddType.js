import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const MenuAddType = props => {
  const { className } = props;
  const propClasses = classNames(className);

  return (
    <div className={propClasses}>
      Siema tu dodajesz typ:
      <input type="text" name="add" />
    </div>
  );
};

MenuAddType.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
MenuAddType.defaultProps = {
  className: '',
};
export default MenuAddType;
