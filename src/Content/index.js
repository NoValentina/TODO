import React, { Component } from "react";
import { connect } from "react-redux";

import "./style.css";

class Content extends Component {
	addNote() {
		console.log(this.noteInput);
		console.log("ADD_TASK", this.noteInput.value);

		if (this.noteInput.value !== "") {
			this.props.onAddNote(this.noteInput.value);
			this.noteInput.value = "";
		}
	}

	findTask() {
		console.log(this.searchInput.value);
		//
		this.props.onFindNote(this.searchInput.value);
		this.searchInput.value = "";
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
				<div>
					<input
						type="text"
						ref={input => {
							this.searchInput = input;
						}}
					/>
					<button onClick={() => this.findTask()}>Find Note</button>
				</div>
				<div>
					<button onClick={() =>this.props.onGetTasks}>Get tasks</button>
				</div>
				<ul>
					{this.props.tasks.map((task, index) =>
							<li key={index}>
							{task.name}
						</li>
					)}
				</ul>
			</div>
		);
	}
}

export default connect(
	state => ({
		tasks: state.tasks.filter(task => task.name.includes(state.filterTasks))
	}),
	dispatch => ({
		onAddNote: name => {
			const payload = {
				id: Date.now().toString(),
				name
			};
			dispatch({ type: "ADD_TASK", payload });
		},
		onFindNote: name => {
			console.log("name", name);
			dispatch({ type: "FIND_TASK", payload: name });
		}
	})
)(Content);
