import React from 'react';
import PropTypes from 'prop-types';
import Menu from 'components/organisms/Menu/Menu';

const MainLayout = ({ children }) => {
  return (
    <>
      <Menu />
      <div>Content{children}</div>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
