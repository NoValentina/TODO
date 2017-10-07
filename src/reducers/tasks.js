const initialState = [];

export default function showTasks(state = initialState, action) {
	if (action.type == "ADD_TASK") {
		return [...state, action.payload];
	} else if (action.type == "DELETE_TASK") {
		return state;
	}
	return state;
}
