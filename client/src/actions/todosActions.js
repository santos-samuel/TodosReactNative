export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const SET_TODOS = 'SET_TODOS';

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: {todo},
  };
}

export function setTodos(todos) {
  return {
    type: SET_TODOS,
    payload: {todos},
  };
}

export function updateTodo(todo) {
  return {
    type: UPDATE_TODO,
    payload: {todo},
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: {id},
  };
}
