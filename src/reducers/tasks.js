const initialState = [];

export default function showTasks(state = initialState, action) {
	if (action.type === "ADD_TASK") {
		return [...state, action.payload];
	} else if (action.type === "FETCH_TASKS_SUCCESS") {  //до этого было delete
		return action.payload;
	}
	return state;
}
