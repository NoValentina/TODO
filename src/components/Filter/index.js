import React, { Component } from 'react';

import './style.css';

class Filter extends Component {
  filterTasks(value) {
    this.props.actions.filterTodo(value);
  }

  render() {
    const {filterBy} = this.props.tasks;
    console.log(filterBy, 'gfdgd')
    return (
      <div className="filter-list">
        <span
          className={'filter' + (filterBy === 'all' ? 'filterSelected' : '')}
          onClick={() => this.filterTasks('all')}
        >
          ALL
        </span>

        <span
          className={filterBy === 'active' ? 'filterSelected' : 'filter'}
          onClick={() => this.filterTasks('active')}
        >
          Active
        </span>
        <span
          className={filterBy === 'completed' ? 'filterSelected' : 'filter'}
          onClick={() => this.filterTasks('completed')}
        >
          Completed
        </span>
      </div>
    )
  }
}

export default Filter;
