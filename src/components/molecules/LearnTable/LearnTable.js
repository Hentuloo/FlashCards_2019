import React from 'react';
import MainButton from 'components/atoms/MainButton/MainButton';

const LearnTable = () => {
  return (
    <div className="MP__learn_tableWrapper">
      <div className="MP__learn_tableItem">
        <span>słowo na raz</span>
        <span>słowo na dwa na dwa na dwa</span>
        <MainButton icon="icon-trash" value="Usuń" onClick={null} />
      </div>
    </div>
  );
};

export default LearnTable;
