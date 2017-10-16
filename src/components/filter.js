import React, { Component } from 'react';

class Filter extends Component {
  filterTasks(value) {
    this.props.actions.filterTodo(value);
  }

  render() {
    return (
      <div>
        <span className="filter" onClick={() => this.filterTasks('all')}>ALL</span>
        <span className="filter" onClick={() => this.filterTasks('active')}>Active</span>
        <span className="filter" onClick={() => this.filterTasks('completed')}>Completed</span>
      </div>
    )
  }
}

export default Filter;
