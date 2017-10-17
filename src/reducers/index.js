const initialState = {
	items: [],
	filterBy: 'all',
};

export default function todos(state = initialState, action) {
	switch (action.type) {
		case 'ADD_TODO':
			const newItems = [...state.items, {
				id: Math.random(),
				text: action.text,
				isChecked: false
			}];

			return {
				...state,
				items: newItems,
			}
			break;

		case 'DELETE_TODO':
			const items = state.items.filter(task => task.id !== action.id);

			return {
				...state,
				items
			}
			break;

		case 'TOGGLE_TODO':
			const toggledTasks = state.items.map(todo =>
				todo.id === action.id ? { ...todo, isChecked: !todo.isChecked } : todo)

			return {
				...state,
				items: toggledTasks,
			};
			break;

		case 'FILTER_TODO':
			return {
				...state,
				filterBy: action.by,
			}
			break;


		default:
			return state;
			break;
	}
}
