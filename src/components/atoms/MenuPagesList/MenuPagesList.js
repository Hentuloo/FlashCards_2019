import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
        <li className="menuPages__listElement">
          <Link className="menuPages__link" to={Constants.PATHS.settings}>
            Ustawienia
          </Link>
        </li>
        <li className="menuPages__listElement">
          <a
            className="menuPages__link"
            href="#logout"
            onClick={this.handleLogOut}
          >
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
