import React from 'react';
import { LoadingBar } from 'components/atoms';
import { Menu, Helmet } from 'components/organisms';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const MainLayout = ({ children, loading }) => {
  return (
    <>
      <Helmet
        description="Przyjemna nauka dowolnego języka"
        keywords="fiszki online nauka angielskiego zgadywanie słów"
        title="Fiszki online"
      />
      {loading && <LoadingBar />}
      <Menu />
      <div className="AuthPage__Layout">{children}</div>
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
