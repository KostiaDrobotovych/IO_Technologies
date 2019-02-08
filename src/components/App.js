import React, { Component } from 'react';
import data from './config/data.json';
import s from './App.module.css';

import FilterOfAuthors from './FilterOfAuthors/index';
import AuthorsList from './AuthorsList/index';

class App extends Component {
  state = {
    authorsList: [],
    filter: '',
  };

  componentDidMount() {
    this.setState({ authorsList: data });
  }

  handleChangeFilter = ({ target: { value } }) => {
    this.setState({
      filter: value,
    });
  };

  sortList = () =>
    this.state.authorsList.sort(
      (personA, personB) => personB.pageviews - personA.pageviews,
    );

  filterList = filter =>
    this.sortList().filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    );

  render() {
    const { filter } = this.state;

    const filteredList = this.filterList(filter);

    return (
      <div className={s.wrapper}>
        <div className={s.content}>
          <FilterOfAuthors
            filter={filter}
            handleFilterChange={this.handleChangeFilter}
          />
          <AuthorsList list={filteredList} boolForSvg={!!filter} />
        </div>
      </div>
    );
  }
}

export default App;
