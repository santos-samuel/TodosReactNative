export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO_COMPLETED = 'UPDATE_TODO_COMPLETED';

let previousId = 0;

export function addTodo(todo) {
  const id = previousId + 1;
  todo.id = id;
  const action = {
    type: ADD_TODO,
    payload: {todo},
  };
  previousId = id;
  return action;
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
