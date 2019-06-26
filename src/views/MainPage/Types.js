import React from 'react';
import PropTypes from 'prop-types';
import MainButton from 'components/atoms/MainButton/MainButton';
import { connect } from 'react-redux';

const TypesTemplate = ({ types }) =>
  types.map(type => (
    <div>
      <MainButton
        className="mainButton--withText mainButton--active"
        value={type.title}
      />
    </div>
  ));

const Types = ({ types }) => {
  return <TypesTemplate types={types} />;
};
const mapStateToProps = state => ({
  types: state.FlashCards,
});

Types.propTypes = {
  types: PropTypes.arrayOf(Object),
};
Types.defaultProps = {
  types: null,
};

export default connect(mapStateToProps)(Types);
