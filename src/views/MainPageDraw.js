import React from 'react';
import MenuButton from 'components/atoms/MenuButton/MenuButton';

const MainPageDraw = () => {
  return (
    <>
      <div className="mainPage__draw_Window">
        <span>Moje okno 1 Moje okno 1 Moje okno 1 Moje okno 1</span>
      </div>
      <div className="mainPage__draw_Window">Moje okno 2</div>
      <MenuButton
        icon="icon-arrows-ccw"
        value="Wylosuj fiszke"
        onClick={null}
      />
    </>
  );
};

export default MainPageDraw;
