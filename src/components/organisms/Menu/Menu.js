import React, { Component } from 'react';
import { Hamburger, MainButton, MenuPagesList } from 'components/atoms';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { resetErrorType } from 'actions';

import {
  MenuAddType,
  MenuChangeType,
  MenuDeleteType,
} from 'components/molecules';

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

  handleClickForClose = () => {
    const { resetErrorTypeAction } = this.props;
    this.setState({
      ButtonDelete: false,
      ButtonAdd: false,
      ButtonChange: false,
    });
    resetErrorTypeAction();
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
        <MenuPagesList
          className={
            HamburgerActive ? 'menuPages menuPages--mobileActive' : 'menuPages'
          }
        />
        <div className="menuButtons">
          <MainButton
            className="menuButtons__element"
            icon="icon-plus"
            value="dodaj typ fiszek"
            onClick={this.handleClickButtonAdd}
          />
          <MainButton
            className="menuButtons__element"
            icon="icon-minus"
            value="usuń typ fiszek"
            onClick={this.handleClickButtonDelete}
          />
          <MainButton
            className="menuButtons__element"
            icon="icon-cog"
            value="zmodyfikuj typ fiszek"
            onClick={this.handleClickButtonChange}
          />
        </div>
        <div className="menuPanel">
          {ButtonAdd && (
            <MenuAddType
              closeWindow={this.handleClickForClose}
              className="menuPanel__operation"
            />
          )}
          {ButtonDelete && (
            <MenuDeleteType
              closeWindow={this.handleClickForClose}
              className="menuPanel__operation"
            />
          )}
          {ButtonChange && (
            <MenuChangeType
              closeWindow={this.handleClickForClose}
              className="menuPanel__operation"
            />
          )}
        </div>
        <Hamburger
          onClick={this.handleClickHamburger}
          className={HamburgerActive ? 'menu__hamburger--active' : ''}
        />
      </div>
    );
  }
}

Menu.propTypes = {
  resetErrorTypeAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = { resetErrorTypeAction: resetErrorType };

export default connect(
  null,
  mapDispatchToProps,
)(Menu);
