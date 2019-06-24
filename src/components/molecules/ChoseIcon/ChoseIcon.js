import React from 'react';
import IconsConfig from 'asset/fontello/config.json';

const Icons = ({ active, onClick }) =>
  IconsConfig.glyphs.map(e => {
    return (
      <label
        htmlFor="icon-radio"
        key={e.uid}
        className={active === e.css ? 'icons icons--active' : 'icons'}
        onClick={() => onClick(e.css)}
      >
        <input
          type="radio"
          name="select-icon"
          value={e.css}
          checked={active === e.css}
          onChange={() => onClick(e.css)}
        />
        <i className={`${IconsConfig.css_prefix_text}${e.css}`} />
      </label>
    );
  });

const ChoseIcon = ({ active, onClick }) => {
  return <>{<Icons active={active} onClick={onClick} />}</>;
};

export default ChoseIcon;
