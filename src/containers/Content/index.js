import React, { Component } from "react";
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";
import { getTasks } from '../../actions';

import "./style.css";
import Filter from '../../components/filter';
//
// const Filters = {
// 	['all']: () => true,
//   ['active']: task => !task.isChecked,
// 	['completed']: task => task.isChecked,
// };

class Content extends Component {
	addNote() {
		if (this.noteInput.value !== "") {
			console.log(this.props.actions)
			this.props.actions.addTodo(this.noteInput.value);
			this.noteInput.value = "";
		};
	}

		deleteNote(id) {
			this.props.actions.deleteTodo(id)
	}

		handleOnСheckbox(id) {
			this.props.actions.toggleTodo(id);
		}

	render() {
		return (
			<div>
				<div>
					<input
						type="text"
						ref={input => {
							this.noteInput = input;
						}}
					/>
					<button onClick={() => this.addNote()}>add Note</button>
				</div>

				<ul>
					{this.props.tasks.map((task, id) =>
							<li  key={id}>
								<input id={task.id} ref="checkbox" checked={task.isChecked} type="checkbox" onChange={ () => this.handleOnСheckbox(task.id)}  />
								<label className={task.isChecked ? 'lined-through' : ''} onClick={() => this.deleteNote(task.id)}>{task.text} </label>
						</li>
					)}

				</ul>

			</div>
		);
	}
}

function mapStateToProps(state) {
  return { tasks: state }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
