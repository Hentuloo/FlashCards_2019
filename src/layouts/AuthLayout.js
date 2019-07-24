import React from 'react';
import { LoadingBar } from 'components/atoms';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const AuthLayout = ({ children, loading }) => {
  return (
    <>
      {loading && <LoadingBar />}
      <div className="AuthPage__Layout">{children}</div>
    </>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
const mapStateToProps = ({ Settings }) => ({
  loading: Settings.loading,
});

export default connect(mapStateToProps)(AuthLayout);
