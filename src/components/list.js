import React, { Component } from 'react';

import Filter from './filter';

const Filters = {
	['all']: () => true,
  ['active']: task => !task.isChecked,
	['completed']: task => task.isChecked,
};

class ToDoList extends Component {
	deleteNote(id) {
			this.props.actions.deleteTodo(id)
	}

	handleOnСheckbox(id) {
		this.props.actions.toggleTodo(id);
	}

  render() {

		console.log(this.props, 'kkk')
		const filteredTodo = this.props.tasks.items.filter(Filters[this.props.tasks.filterBy]);

		if (this.props.tasks.items.length > 0) {
	    return (
				<div>
					 <ul>
						 {
							 filteredTodo.map((task) => {
								 return (
									 <li key={task.id}>
										 <input id={task.id} ref="checkbox" checked={task.isChecked} type="checkbox" onChange={ () => this.handleOnСheckbox(task.id)}  />
										 <label className={task.isChecked ? 'lined-through' : ''} onClick={() => this.deleteNote(task.id)}>{task.text} </label>
									</li>
								 )
							 })
						 }

					 </ul>

				 <Filter filteredTodo={filteredTodo} actions={this.props.actions}/>

			 </div>
		 )
			 }
		return null;
	}
}


export default ToDoList;


	// getTodos() {
	// 	const { tasks } = this.props;
	// 	console.log(tasks.length)
	//
	// 	if (tasks.length > 0) {
	// 		// console.log('here', tasks.filterBy)
	// 		return tasks.filter(Filters[tasks]);
	// 	}
	//
	// 	return tasks;
	// }
