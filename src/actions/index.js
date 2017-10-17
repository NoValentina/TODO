export function addTodo(text) {
	return {
		type: 'ADD_TODO',
		text,
	}
}

export function deleteTodo(id) {
	return {
		type: 'DELETE_TODO',
		id
	}
}

export function toggleTodo(id) {
	return {
		type: 'TOGGLE_TODO',
		id
	}
}

export function filterTodo(value) {
	return {
		type: 'FILTER_TODO',
		by: value,
	}
}
