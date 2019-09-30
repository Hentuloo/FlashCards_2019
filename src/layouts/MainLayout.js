import React from 'react';
import { LoadingBar } from 'components/atoms';
import { Menu } from 'components/organisms';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const MainLayout = ({ children, loading }) => {
  return (
    <>
      {loading && <LoadingBar />}
      <Menu />
      {children}
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
const mapStateToProps = ({ Settings }) => ({
  loading: Settings.loading,
});

export default connect(mapStateToProps)(MainLayout);
