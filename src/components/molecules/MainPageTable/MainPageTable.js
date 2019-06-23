import React from 'react';
import MenuButton from 'components/atoms/MenuButton/MenuButton';

const MainPageTable = () => {
  return (
    <div className="table">
      <div className="table__item">
        <span>słowo na raz</span>
        <span>słowo na dwa na dwa na dwa</span>
        <MenuButton icon="icon-trash" value="Usuń" onClick={null} />
      </div>
    </div>
  );
};

export default MainPageTable;
