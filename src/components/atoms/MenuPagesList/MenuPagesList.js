import React, { Component } from 'react';
import PropTypes from 'prop-types';

import history from 'config/history';
import Constants from 'config/Constants';

class MenuPagesList extends Component {
  state = {};

  handleLogOut = e => {
    e.preventDefault();
    localStorage.removeItem('flashCardsToken');
    history.push(Constants.PATHS.root);
  };

  render() {
    const { className } = this.props;
    return (
      <nav className={className}>
        <li />
        <li>
          <a href={Constants.PATHS.settings}>Ustawienia</a>
        </li>
        <li>
          <a href="#logout" onClick={this.handleLogOut}>
            Wyloguj
          </a>
        </li>
      </nav>
    );
  }
}

MenuPagesList.propTypes = {
  className: PropTypes.string,
};

MenuPagesList.defaultProps = {
  className: '',
};

export default MenuPagesList;
