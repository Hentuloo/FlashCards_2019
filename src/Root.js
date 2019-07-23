import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import withAuth from 'hoc/withAuth';
import history from 'config/history';

import MainPage from 'views/MainPage';
import AuthPage from 'views/AuthPage';
import SettingsPage from 'views/SettingsPage';

import Constants from 'config/Constants';

// SCSS - VARIABLES
import 'stylesheet/index.scss';

function Root() {
  return (
    <Router history={history}>
      <div className="Root">
        <Route
          path={Constants.PATHS.root}
          exact
          component={withAuth(MainPage)}
        />
        <Route
          path={Constants.PATHS.signup}
          pathname={Constants.PATHS.signup}
          component={AuthPage}
        />
        <Route
          path={Constants.PATHS.login}
          pathname={Constants.PATHS.login}
          component={AuthPage}
        />
        <Route
          path={Constants.PATHS.settings}
          pathname={Constants.PATHS.settings}
          component={withAuth(SettingsPage)}
        />
      </div>
    </Router>
  );
}

export default Root;
