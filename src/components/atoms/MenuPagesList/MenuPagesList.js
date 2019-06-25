import React from 'react';
import PropTypes from 'prop-types';

const MenuPagesList = ({ className }) => {
  return (
    <nav className={className}>
      <li>
        <a href="#prem">Kup premke</a>
      </li>
      <li>
        <a href="#sett">Ustawienia</a>
      </li>
      <li>
        <a href="#logout">Wyloguj</a>
      </li>
    </nav>
  );
};
MenuPagesList.propTypes = {
  className: PropTypes.string,
};

MenuPagesList.defaultProps = {
  className: '',
};

export default MenuPagesList;
