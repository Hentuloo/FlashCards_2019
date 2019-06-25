import React from 'react';
import SquareButton from 'components/atoms/SquareButton/SquareButton';

const TypesMenuMobile = ({ activeSection, action }) => {
  return (
    <>
      <SquareButton
        className={activeSection === 'types' && 'SquareButton--active'}
        value="Gatunki"
        onClick={() => {
          action('types');
        }}
      />
      <SquareButton
        className={activeSection === 'draw' && 'SquareButton--active'}
        value="Zgadywanie"
        onClick={() => {
          action('draw');
        }}
      />
      <SquareButton
        className={activeSection === 'learn' && 'SquareButton--active'}
        value="Nauka"
        onClick={() => {
          action('learn');
        }}
      />
    </>
  );
};

export default TypesMenuMobile;
