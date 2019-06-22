import React, { Component } from 'react';
import Hamburger from 'components/atoms/Hamburger/Hamburger';
import MenuButton from 'components/atoms/MenuButton/MenuButton';
import MenuAddType from 'components/molecules/MenuAddType/MenuAddType';

class Menu extends Component {
  state = {
    HamburgerActive: false,
    ButtonDelete: false,
    ButtonAdd: false,
    ButtonChange: false,
  };

  handleClickHamburger = () => {
    this.setState(prevState => {
      return {
        HamburgerActive: !prevState.HamburgerActive,
        ButtonDelete: false,
        ButtonAdd: false,
        ButtonChange: false,
      };
    });
  };

  handleClickButtonDelete = () => {
    this.setState(prevState => {
      return {
        ButtonDelete: !prevState.ButtonDelete,
        HamburgerActive: false,
        ButtonAdd: false,
        ButtonChange: false,
      };
    });
  };

  handleClickButtonAdd = () => {
    this.setState(prevState => {
      return {
        ButtonAdd: !prevState.ButtonAdd,
        HamburgerActive: false,
        ButtonDelete: false,
        ButtonChange: false,
      };
    });
  };

  handleClickButtonChange = () => {
    this.setState(prevState => {
      return {
        ButtonChange: !prevState.ButtonChange,
        ButtonAdd: false,
        HamburgerActive: false,
        ButtonDelete: false,
      };
    });
  };

  render() {
    const {
      HamburgerActive,
      ButtonDelete,
      ButtonAdd,
      ButtonChange,
    } = this.state;
    return (
      <div className="menu">
        <div className="menu__panel">
          <nav
            className={
              HamburgerActive ? 'menu__list menu__list--active' : 'menu__list'
            }
          >
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
          {ButtonAdd && <MenuAddType />}
          {ButtonDelete && (
            <div className="menu__statment">
              Kliknij typ aby go wybrać do usunięcia
            </div>
          )}
          {ButtonChange && (
            <div className="menu__statment">
              Kliknij typ aby go wybrać do modyfikacji
            </div>
          )}
        </div>
        <div className="menu__buttons">
          <MenuButton
            icon="icon-plus"
            value="dodaj typ fiszek"
            onClick={this.handleClickButtonAdd}
          />
          <MenuButton
            icon="icon-minus"
            value="usuń typ fiszek"
            onClick={this.handleClickButtonDelete}
          />
          <MenuButton
            icon="icon-cog"
            value="zmodyfikuj typ fiszek"
            onClick={this.handleClickButtonChange}
          />
        </div>
        <Hamburger
          onClick={this.handleClickHamburger}
          className={HamburgerActive ? 'menu__hamburger--active' : ''}
        />
      </div>
    );
  }
}

export default Menu;
