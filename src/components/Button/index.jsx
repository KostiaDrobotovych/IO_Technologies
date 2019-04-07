import React from 'react';

import s from './Button.module.css';

const Button = ({ onClickBtn, children, title }) => (
  <button className={s.btn} type="button" onClick={onClickBtn} title={title}>
    {children}
  </button>
);

export default Button;
