import React, { Component } from "react";
import { connect } from "react-redux";

import "./index.css";
import Header from "../../components/Header";
import Content from "../Content";

class App extends Component {
	render() {
		return (
			<div className="todo">
				<div className="layer">
					<Header />
					<Content />
				</div>
			</div>
		)
	}
}

export default App;
