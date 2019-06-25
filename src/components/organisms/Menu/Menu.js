import React, { Component } from 'react';
import Hamburger from 'components/atoms/Hamburger/Hamburger';
import MainButton from 'components/atoms/MainButton/MainButton';
import MenuAddType from 'components/molecules/MenuOperations/MenuAddType';
import MenuChangeType from 'components/molecules/MenuOperations/MenuChangeType';
import MenuDeleteType from 'components/molecules/MenuOperations/MenuDeleteType';
import MenuPagesList from 'components/atoms/MenuPagesList/MenuPagesList';

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
        <div className="menu__panelWrapper">
          <MenuPagesList
            className={
              HamburgerActive
                ? 'menu__Pageslist menu__Pageslist--active'
                : 'menu__Pageslist'
            }
          />
          {ButtonAdd && <MenuAddType className="menu__Operation" />}
          {ButtonDelete && <MenuDeleteType className="menu__Operation" />}
          {ButtonChange && <MenuChangeType className="menu__Operation" />}
        </div>
        <div className="menu__Operation_buttons">
          <MainButton
            icon="icon-plus"
            value="dodaj typ fiszek"
            onClick={this.handleClickButtonAdd}
          />
          <MainButton
            icon="icon-minus"
            value="usuń typ fiszek"
            onClick={this.handleClickButtonDelete}
          />
          <MainButton
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
