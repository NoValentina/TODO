import React, { Component } from 'react';

class Filter extends Component {
  filterTasks(value) {
    this.props.actions.filterTodo(value);
  }

  render() {
    return (
      <div>
        <span onClick={() => this.filterTasks('all')}>ALL</span>
        <span onClick={() => this.filterTasks('active')}>Active</span>
        <span onClick={() => this.filterTasks('completed')}>Completed</span>
      </div>
    )
  }
}

export default Filter;
