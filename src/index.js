import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import registerServiceWorker from "./registerServiceWorker";
import { composeWithDevTools } from 'redux-devtools-extension';
import  thunk  from 'redux-thunk';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';



import "./index.css";
import App from "./App";
import reducer from "./reducers";
import Active from './Active';

const store = createStore(
	reducer,composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
	<Provider store={store}>
		<Router>
	    <Switch>
	      <Route exact path="/" component={App} />
	      <Route path="/active" component={Active} />
	    </Switch>
    </Router>
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();

// import { createStore } from "redux";
//
// function playList(state = [], action) {
// 	if (action.type == "ADD_NOTE") {
// 		return [...state, action.payload]; //оператор расширения(spread)
// 	}
//
// 	return state;
// }
//
// const store = createStore(playList);
//
// const addNoteBtn = document.querySelectorAll(".addRec")[0];
// const noteInput = document.querySelectorAll(".TextInput")[0];
// const list = document.querySelectorAll(".list")[0];
//
// store.subscribe(() => {
// 	noteInput.value = "";
// 	list.innerHTML = "";
// 	store.getState().forEach(note => {
// 		const li = document.createElement("li");
//
// 		li.textContent = note;
// 		list.appendChild(li);
// 	}); //выводим изменения
// });
//
// addNoteBtn.addEventListener("click", () => {
// 	const noteName = noteInput.value;
//
// 	store.dispatch({ type: "ADD_NOTE", payload: noteName });
// });
