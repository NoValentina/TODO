import React, { Component } from "react";
import { connect } from "react-redux";

import "./style.css";

class Content extends Component {
	addNote() {
		console.log(this.noteInput);
		console.log("addNote", this.noteInput.value);

		if (this.noteInput.value != "") {
			this.props.onAddNote(this.noteInput.value);
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
				<button onClick={() => this.addNote()}>addNote</button>
				<ul>
					{this.props.tasks.map((nodeName, index) =>
						<li key={index}>
							{nodeName}
						</li>
					)}
				</ul>
			</div>
		);
	}
}

export default connect(
	state => ({
		tasks: state.tasks
	}),
	dispatch => ({
		onAddNote: nodeName => {
			dispatch({ type: "ADD_NOTE", payload: nodeName });
		}
	})
)(Content);
