export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO_COMPLETED = 'UPDATE_TODO_COMPLETED';

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: {todo},
  };
}

export function updateTodoCompleted(id) {
  return {
    type: UPDATE_TODO_COMPLETED,
    payload: {id},
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: {id},
  };
}
