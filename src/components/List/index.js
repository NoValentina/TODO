import React, { Component } from 'react';

import Filter from '../Filter';
import './style.css';

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
		console.log(this.props, 'list')

		const filteredTodo = this.props.tasks.items.filter(Filters[this.props.tasks.filterBy]);

		if (this.props.tasks.items.length > 0) {
			return (
				<div className="listTasks">
					<ul>
						{
							filteredTodo.map((task) => {
								return (
									<li key={Math.random()}>
										<input id={task.id} ref="checkbox" checked={task.isChecked} type="checkbox" onChange={ () => this.handleOnСheckbox(task.id)}  />
										<label className={task.isChecked ? 'lined-through' : 'label_name'} onClick={() => this.deleteNote(task.id)}>{task.text} </label>
									</li>
								)
							})
						}
					</ul>

				<Filter filteredTodo={filteredTodo} actions={this.props.actions} tasks={this.props}/>

			</div>
		)
	}

	return null;

	}
}


export default ToDoList;
