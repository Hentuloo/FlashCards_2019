import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteWord } from 'actions';

import validator from 'config/validator';

import MainButton from 'components/atoms/MainButton/MainButton';

class LearnTable extends Component {
  state = {};

  handleClickDelete = id => {
    const { deleteWordAction, idType, setError } = this.props;

    const notValid = validator({ id, idType });
    if (notValid) return setError(notValid);

    return deleteWordAction(idType, id);
  };

  render() {
    const { data } = this.props;
    if (data.length) {
      const TableItems = data.map(card => {
        const { _id: id, word, description } = card;
        return (
          <div key={id} className="MP__learn_tableItem">
            <span>{word}</span>
            <span>{description}</span>
            <MainButton
              icon="icon-trash"
              value="Usuń"
              onClick={() => this.handleClickDelete(id)}
            />
          </div>
        );
      });
      return <div className="MP__learn_tableWrapper">{TableItems}</div>;
    }
    return <div className="MP__learn_tableWrapper">Dodaj Pierwszą fiszkę!</div>;
  }
}

LearnTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  deleteWordAction: PropTypes.func.isRequired,
  idType: PropTypes.string,
  setError: PropTypes.string,
};
LearnTable.defaultProps = {
  data: null,
  idType: null,
  setError: null,
};

const mapDispatchToProps = { deleteWordAction: deleteWord };

export default connect(
  null,
  mapDispatchToProps,
)(LearnTable);
