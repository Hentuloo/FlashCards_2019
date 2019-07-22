import React from 'react';
import { LoadingBar } from 'components/atoms';
import { Helmet } from 'components/organisms';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const AuthLayout = ({ children, loading }) => {
  return (
    <>
      <Helmet
        description="Nauka poprzez zabawę: zaloguj się"
        keywords="fiszki online nauka angielskiego zgadywanie słów"
        title="Zaloguj się"
      />
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
