import React from 'react';
import MedalsSvg from './MedalsSvg/index';
import s from './AuthorList.module.css';

const COLORS = [
  '#67c9de',
  '#ba6fcb',
  '#e39473',
  '#5aa9e6',
  '#ac5061',
  '#345feb',
  '#67c9de',
  '#ba6fcb',
  '#e39473',
  '#5aa9e6',
  '#ac5061',
  '#345feb',
];

const rand = () => Math.floor(Math.random() * COLORS.length);

const style = num => ({ backgroundColor: COLORS[num] });

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
            <div className={s.firstWord} style={style(rand())}>
              <span>{author.name.split('')[0]}</span>
            </div>

            <div>
              <p className={s.name}>{author.name}</p>
              <p className={s.countPub}>{author.count_pub} публ.</p>
            </div>
          </div>
        </div>

        {!boolForSvg && <MedalsSvg idx={idx} />}

        <p className={s.pageviews}>{author.pageviews}</p>
      </li>
    ))}
  </ul>
);

export default AuthorList;
