import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeActive } from 'actions';

import { MainButton } from 'components/atoms';

const TypesTemplate = ({ types, action, active }) =>
  types.map(type => {
    const { id, icon, title } = type;
    return (
      <div key={id} className="main__singleType">
        <MainButton
          className={`mainButton--withText mainButton--withBorder main__typeButton
        ${active === id ? 'mainButton--active' : ''}`}
          icon={`icon-${icon}`}
          value={title}
          onClick={() => action(id)}
        />
      </div>
    );
  });

class Types extends Component {
  state = {};

  handleClick = id => {
    const { ChangeActive } = this.props;
    ChangeActive(id);
  };

  render() {
    const { types, active } = this.props;
    if (types.length) {
      return (
        <TypesTemplate
          types={types}
          action={this.handleClick}
          active={active}
        />
      );
    }
    return (
      <h3 className="main__typesHeader">
        Dodaj pierwsze swoje fiszki korzystając z plusa
      </h3>
    );
  }
}

const mapStateToProps = state => ({
  types: state.FlashCards,
  active: state.Settings.active,
});
const mapDispatchToProps = { ChangeActive: changeActive };

Types.propTypes = {
  types: PropTypes.arrayOf(Object),
  active: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  ChangeActive: PropTypes.func.isRequired,
};
Types.defaultProps = {
  types: null,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Types);
