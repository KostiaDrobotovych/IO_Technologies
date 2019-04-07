import React, { Component } from 'react';
import data from './config/data.json';
import s from './App.module.css';

import FilterOfAuthors from './FilterOfAuthors/index';
import AuthorsList from './AuthorsList/index';
import Button from './Button/index';

class App extends Component {
  state = {
    authorsList: [],
    filter: '',
    page: 1,
    lengthOfList: 10,
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

  sortByPagination = list => {
    const { page, lengthOfList } = this.state;

    return list.filter(
      (item, idx) =>
        idx <= page * lengthOfList && idx > lengthOfList * page - lengthOfList,
    );
  };

  incrementPage = () => this.setState(state => ({ page: state.page + 1 }));

  decrementPage = () => {
    if (this.state.page === 1) return;
    this.setState(state => ({ page: state.page - 1 }));
  };

  render() {
    const { filter } = this.state;
    const filteredList = this.filterList(filter);
    const sortedByPagination = this.sortByPagination(filteredList);

    return (
      <div className={s.wrapper}>
        <div className={s.content}>
          <FilterOfAuthors
            filter={filter}
            handleFilterChange={this.handleChangeFilter}
          />
          <AuthorsList list={sortedByPagination} boolForSvg={!!filter} />
        </div>
        <div className={s.buttons}>
          <Button onClickBtn={this.decrementPage}>Left</Button>
          <Button onClickBtn={this.incrementPage}>Right</Button>
        </div>
      </div>
    );
  }
}

export default App;
