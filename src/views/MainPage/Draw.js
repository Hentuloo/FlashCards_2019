import React from 'react';
import MainButton from 'components/atoms/MainButton/MainButton';

const Draw = () => {
  return (
    <>
      <div className="MP__draw_Window">
        <span>Moje okno 1 Moje okno 1 Moje okno 1 Moje okno 1</span>
      </div>
      <div className="MP__draw_Window">Moje okno 2</div>
      <MainButton
        icon="icon-arrows-ccw"
        value="Wylosuj fiszke"
        onClick={null}
      />
    </>
  );
};

export default Draw;
