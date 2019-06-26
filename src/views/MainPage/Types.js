import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeActive } from 'actions';

import MainButton from 'components/atoms/MainButton/MainButton';

const TypesTemplate = ({ types, action, active }) =>
  types.map(type => (
    <div key={type.id}>
      <MainButton
        className={`mainButton--withText 
        ${active === type.id ? 'mainButton--active' : ''}`}
        value={type.title}
        onClick={() => action(type.id)}
      />
    </div>
  ));

class Types extends Component {
  state = {};

  handleClick = id => {
    const { ChangeActive } = this.props;
    ChangeActive(id);
  };

  render() {
    const { types, active } = this.props;
    return (
      <TypesTemplate types={types} action={this.handleClick} active={active} />
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
