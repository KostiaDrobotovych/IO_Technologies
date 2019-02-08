import React from 'react';

import s from './AuthorList.module.css';
import sprite from '../assets/sprite.svg';

const mapForTop = {
  FIRST: 0,
  SECOND: 1,
  THIRD: 2,
};

const AuthorList = ({ list, boolForSvg }) => (
  <ul className={s.list}>
    {list.map((author, idx) => (
      <li
        key={author.name}
        className={(idx + 1) % 2 === 0 ? s.listItemColor : s.listItem}
      >
        <div className={s.leftContent}>
          <span className={s.ids}>{idx + 1}</span>

          <div className={s.nameBlock}>
            <div className={s.firstWord}>
              <span>{author.name.split('')[0]}</span>
            </div>

            <div>
              <p className={s.name}>{author.name}</p>
              <p className={s.countPub}>{author.count_pub} публ.</p>
            </div>
          </div>
        </div>

        {!boolForSvg && (
          <div className={s.svgMedals}>
            <svg className={s.medalIcon}>
              {idx === mapForTop.FIRST && <use xlinkHref={`${sprite}#st`} />}
              {idx === mapForTop.SECOND && <use xlinkHref={`${sprite}#nd`} />}
              {idx === mapForTop.THIRD && <use xlinkHref={`${sprite}#rd`} />}
            </svg>
          </div>
        )}

        <p className={s.pageviews}>{author.pageviews}</p>
      </li>
    ))}
  </ul>
);

export default AuthorList;
