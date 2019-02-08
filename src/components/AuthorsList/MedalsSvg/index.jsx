import React from 'react';

import sprite from '../../assets/sprite.svg';
import svg from '../../config/svg.json';
import s from './MedalsSvg.module.css';

const MedalsSvg = ({ idx }) => (
  <div>
    <svg className={s.medalIcon}>
      {svg.map(
        item =>
          idx === item.count && (
            <use key={item.id} xlinkHref={`${sprite}#${item.id}`} />
          ),
      )}
    </svg>
  </div>
);

export default MedalsSvg;
