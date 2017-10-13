export function addTodo(text) {
  return {
    type: 'ADD_TASK',
    text,
  }
}

export function deleteTodo(id) {
  return {
    type: 'DELETE_TASK',
    id
  }
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TASK',
    id
  }
}
