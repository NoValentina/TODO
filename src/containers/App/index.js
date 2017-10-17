import React, { Component } from "react";
import { connect } from "react-redux";

import "./index.css";
import Header from "../../components/Header";
import Content from "../Content";

class App extends Component {
	render() {
		return (
			<div className="addTodo">
				<Header />
				<Content />
			</div>
		)
	}
}

export default App;
