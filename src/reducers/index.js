const initialState = [];

export default function todos(state = initialState, action) {
	switch (action.type) {
		case 'ADD_TASK':
			return [
				...state,
				{
					text: action.text,
					id: state.length,
				}
			];
			break;

		case 'DELETE_TASK':
			const items = state.filter(task => task.id !== action.id);

			return items
			break;

		case 'TOGGLE_TASK':
			const toggledTasks = state.map(todo =>
				todo.id === action.id ? { ...todo, isChecked: !todo.isChecked } : todo)

			return toggledTasks;
			break;


		default:
			return state;
			break;
	}
}
