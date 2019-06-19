import React, { Component } from 'react';
import './_Hamburger.scss';

class Hamburger extends Component {
  state = {
    active: false,
  };

  handleClick = () => {
    this.setState(prevState => {
      return { active: !prevState.active };
    });
  };

  render() {
    const { active } = this.state;
    return (
      <div
        className={active ? 'hamburger active' : 'hamburger'}
        onClick={this.handleClick}
        onKeyDown={this.handleClick}
        tabIndex="0"
        role="button"
      />
    );
  }
}

export default Hamburger;
