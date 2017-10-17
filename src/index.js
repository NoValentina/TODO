import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import persistState from 'redux-localstorage';

import "./index.css";
import App from "./containers/App";
import reducer from "./reducers";

const store = compose(
	persistState(),
)(createStore)(reducer);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Route exact path="/" component={App} />
		</Router>
	</Provider>,
	document.getElementById("root")
);
