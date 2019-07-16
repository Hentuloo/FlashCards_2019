import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Constants from 'config/Constants';

export default function withAuth(ComponentToProtect) {
  return class extends Component {
    state = {
      loading: true,
      redirect: false,
    };

    componentDidMount() {
      if (localStorage.getItem('flashCardsToken')) {
        this.setState({ loading: false, redirect: false });
      } else {
        this.setState({ loading: false, redirect: true });
      }
    }

    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        return <Redirect to={Constants.PATHS.login} />;
      }
      return (
        <>
          <ComponentToProtect {...this.props} />
        </>
      );
    }
  };
}
