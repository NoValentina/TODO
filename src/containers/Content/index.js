import React, { Component } from "react";
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";
import { getTasks } from '../../actions';

import ToDoList from '../../components/List';

import "./style.css";

class Content extends Component {
	addNote() {
		if (this.noteInput.value !== "") {
			this.props.actions.addTodo(this.noteInput.value);
			this.noteInput.value = "";
		}
	}


	render() {
		return (
			<div>
				<input
					type="text"
					ref={input => {
						this.noteInput = input;
					}}
				/>
				<button onClick={() => this.addNote()}>add Note</button>
				<ToDoList tasks={this.props.tasks} actions={this.props.actions}/>
			</div>
			)
	 }
};

function mapStateToProps(state) {
	return { tasks: state }
}

function mapDispatchToProps(dispatch) {
	return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
