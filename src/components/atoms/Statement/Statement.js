import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Statement extends Component {
  state = { active: true };

  componentWillReceiveProps(nextProps) {
    const { title } = this.props;
    if (nextProps.title !== title) {
      this.setState({ active: true });
    }
  }

  handleClick = () => {
    this.setState(prevState => {
      return { active: !prevState.active };
    });
  };

  render() {
    const { active } = this.state;
    const { className, title } = this.props;
    const propClasses = classNames('Statement', className);
    if (active) {
      return (
        <span
          className={propClasses}
          onKeyDown={this.handleClick}
          onClick={this.handleClick}
          role="textbox"
          tabIndex="0"
        >
          {title}
          <button className="Statement__button" type="button">
            X
          </button>
        </span>
      );
    }
    return null;
  }
}
Statement.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};
Statement.defaultProps = {
  className: '',
  title: '',
};
export default Statement;
