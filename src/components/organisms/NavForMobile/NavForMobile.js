import React from 'react';
import SquareButton from 'components/atoms/SquareButton/SquareButton';

const ViewsMenuMobile = ({ activeSection, action }) => {
  return (
    <>
      <SquareButton
        as="a"
        className={`main__navForMobileElement ${activeSection === 'types' &&
          'SquareButton--active'}`}
        value="Gatunki"
        onClick={() => {
          action('types');
        }}
      />
      <SquareButton
        className={`main__navForMobileElement ${activeSection === 'draw' &&
          'SquareButton--active'}`}
        value="Zgadywanie"
        onClick={() => {
          action('draw');
        }}
      />
      <SquareButton
        className={`main__navForMobileElement ${activeSection === 'learn' &&
          'SquareButton--active'}`}
        value="Nauka"
        onClick={() => {
          action('learn');
        }}
      />
    </>
  );
};

export default ViewsMenuMobile;
