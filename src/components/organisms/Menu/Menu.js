import React, { Component } from 'react';
import Hamburger from 'components/atoms/Hamburger/Hamburger';
import Button from 'components/atoms/Buttons/Buttons';

class Menu extends Component {
  state = {
    activeHamburger: false,
  };

  handleClick = () => {
    console.log('sd');
    this.setState(prevState => {
      return { activeHamburger: !prevState.activeHamburger };
    });
  };

  render() {
    const { activeHamburger } = this.state;
    return (
      <div className="menu">
        <nav
          className={
            activeHamburger ? 'menu__list menu__list--active' : 'menu__list'
          }
        >
          <li>Strona 1</li>
          <li>Strona 2</li>
          <li>Strondda 3</li>
          <li>Strona 4</li>
        </nav>
        <div>
          <Button value="&#43;" />
        </div>
        <Hamburger
          onClick={this.handleClick}
          className={activeHamburger ? 'menu__hamburger--active' : ''}
        />
      </div>
    );
  }
}

export default Menu;
