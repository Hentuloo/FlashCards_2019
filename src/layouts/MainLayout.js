import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'components/organisms';

const MainLayout = ({ children }) => {
  return (
    <>
      <Menu />
      <div>{children}</div>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
