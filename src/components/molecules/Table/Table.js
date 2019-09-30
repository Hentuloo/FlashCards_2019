import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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
    const { className, data } = this.props;
    const propClasses = classNames('table', className);
    const { leftHide, rightHide } = this.state;
    if (data.length) {
      const TableItems = data.map(card => {
        const { _id: id, word, description } = card;
        return (
          <tr key={id} className="table__bodyItem">
            <td
              className={`table__bodyCall ${
                leftHide ? 'table__bodyCall--hidden' : ''
              }`}
            >
              {word}
            </td>
            <td
              className={`table__bodyCall ${
                rightHide ? 'table__bodyCall--hidden' : ''
              }`}
            >
              {description}
            </td>
            <td className="table__bodyCall table__bodyCall--options">
              <MainButton
                className="table__OptionButton"
                icon="icon-trash"
                value="Usuń"
                onClick={() => this.handleClickDelete(id)}
              />
            </td>
          </tr>
        );
      });
      return (
        <table className={propClasses}>
          <thead className="table__head">
            <tr className="table__headRow">
              <th className="table__heading" scope="col">
                Słowo
              </th>
              <th className="table__heading" scope="col">
                Deskrypcja
              </th>
              <th className="table__heading" scope="col">
                Operacje
              </th>
            </tr>
          </thead>
          <tbody className="table__body">{TableItems}</tbody>
          <tfoot className="table__foot">
            <tr className="table__footRow">
              <td className="table__footCall">
                <MainButton
                  icon={leftHide ? 'icon-eye' : 'icon-eye-off'}
                  value="schowaj"
                  className="table__EyeButton"
                  name="left"
                  onClick={() => this.handleHidePartOfTable('leftHide')}
                />
              </td>
              <td className="table__footCall">
                <MainButton
                  icon={rightHide ? 'icon-eye' : 'icon-eye-off'}
                  value="schowaj"
                  className="table__EyeButton"
                  name="right"
                  onClick={() => this.handleHidePartOfTable('rightHide')}
                />
              </td>
            </tr>
          </tfoot>
        </table>
      );
    }
    return <div className="MP__learn_tableWrapper">Dodaj Pierwszą fiszkę!</div>;
  }
}

LearnTable.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
  deleteWordAction: PropTypes.func.isRequired,
  idType: PropTypes.string,
  setError: PropTypes.func.isRequired,
};
LearnTable.defaultProps = {
  className: '',
  data: null,
  idType: null,
};

const mapDispatchToProps = { deleteWordAction: deleteWord };

export default connect(
  null,
  mapDispatchToProps,
)(LearnTable);
