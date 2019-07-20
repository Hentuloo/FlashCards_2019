import React from 'react';
import PropTypes from 'prop-types';
import MainButton from 'components/atoms/MainButton/MainButton';

const LearnTable = ({ data }) => {
  console.log(data);
  if (data.length) {
    const TableItems = data.map(card => (
      <div key={card.id} className="MP__learn_tableItem">
        <span>{card.first}</span>
        <span>{card.second}</span>
        <MainButton icon="icon-trash" value="Usuń" onClick={null} />
      </div>
    ));
    return <div className="MP__learn_tableWrapper">{TableItems}</div>;
  }
  return <div className="MP__learn_tableWrapper">Dodaj Pierwszą fiszkę!</div>;
};
LearnTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
LearnTable.defaultProps = {
  data: null,
};
export default LearnTable;
