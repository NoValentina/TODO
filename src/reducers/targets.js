const initialState = ["Устроиться на работу", "Сьехать"];

export default function playList(state = initialState, action) {
	if (action.type == "ADD_TARGET") {
		return state;
	} else if (action.type == "DELETE_TARGET") {
		return state;
	}
	return state;
}
