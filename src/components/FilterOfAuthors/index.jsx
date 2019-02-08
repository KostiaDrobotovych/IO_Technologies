import React from 'react';
import src from '../assets/search.png';
import s from './FilterOfAuthors.module.css';

const FilterOfAuthors = ({ filter, handleFilterChange }) => (
  <form className={s.form}>
    <label htmlFor="search">
      <img src={src} alt="Search" className={s.imgSearch} />
    </label>

    <input
      type="text"
      name="search"
      className={s.search}
      value={filter}
      onChange={handleFilterChange}
      placeholder="Поиск авторов по имени"
    />
  </form>
);

export default FilterOfAuthors;
