import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteWord } from 'actions';

import validator from 'config/validator';

import MainButton from 'components/atoms/MainButton/MainButton';

class LearnTable extends Component {
  state = {
    leftHide: false,
    rightHide: false,
  };

  handleClickDelete = id => {
    const { deleteWordAction, idType, setError } = this.props;

    const notValid = validator({ id, idType });
    if (notValid) return setError(notValid);

    return deleteWordAction(idType, id);
  };

  handleHidePartOfTable = part => {
    this.setState(prevState => {
      return { [part]: !prevState[part] };
    });
  };

  render() {
    const { data } = this.props;
    const { leftHide, rightHide } = this.state;
    if (data.length) {
      const TableItems = data.map(card => {
        const { _id: id, word, description } = card;
        return (
          <div key={id} className="MP__learn_tableItem">
            <span className={leftHide ? 'hidden' : ''}>{word}</span>
            <span className={rightHide ? 'hidden' : ''}>{description}</span>
            <MainButton
              icon="icon-trash"
              value="Usuń"
              onClick={() => this.handleClickDelete(id)}
            />
          </div>
        );
      });
      return (
        <div className="MP__learn_tableWrapper">
          {TableItems}{' '}
          <MainButton
            icon={leftHide ? 'icon-eye' : 'icon-eye-off'}
            value="schowaj"
            className="MP__learn_hideHalfBTN"
            name="left"
            onClick={() => this.handleHidePartOfTable('leftHide')}
          />
          <MainButton
            icon={rightHide ? 'icon-eye' : 'icon-eye-off'}
            value="schowaj"
            className="MP__learn_hideHalfBTN"
            name="right"
            onClick={() => this.handleHidePartOfTable('rightHide')}
          />
        </div>
      );
    }
    return <div className="MP__learn_tableWrapper">Dodaj Pierwszą fiszkę!</div>;
  }
}

LearnTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  deleteWordAction: PropTypes.func.isRequired,
  idType: PropTypes.string,
  setError: PropTypes.func.isRequired,
};
LearnTable.defaultProps = {
  data: null,
  idType: null,
};

const mapDispatchToProps = { deleteWordAction: deleteWord };

export default connect(
  null,
  mapDispatchToProps,
)(LearnTable);
