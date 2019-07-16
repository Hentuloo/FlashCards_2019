import React from 'react';

import PropTypes from 'prop-types';

const AuthLayout = ({ children }) => {
  return <div className="AuthPage__Layout">{children}</div>;
};

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthLayout;
