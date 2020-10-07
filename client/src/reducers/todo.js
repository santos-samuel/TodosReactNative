import {
  addTodo,
  deleteTodo,
  ADD_TODO,
  DELETE_TODO,
  SET_TODOS,
  setTodos,
  UPDATE_TODO, updateTodo,
} from '../actions/todosActions';

const initialState = {
  todos: [],
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.payload.todo],
      };
    }
    case UPDATE_TODO: {
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.todo.id ? action.payload.todo : item,
        ),
      };
    }
    case DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((item) => {
          return item.id !== action.payload.id;
        }),
      };
    }
    case SET_TODOS: {
      return {
        ...state,
        todos: action.payload.todos,
      };
    }
    default:
      return state;
  }
};

export const addTodoServer = (todo) => async (dispatch, getState) => {
  try {
    const response = await fetch('http://192.168.1.68:3000/todos', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(todo),
    });
    const newTodoFromServer = await response.json();
    console.log('Success Sync');
    dispatch(addTodo(newTodoFromServer));
  } catch (e) {
    console.log(e);
  }
};

export const loadTodosServer = () => {
  // return (dispatch, getState) => {
  //   fetch('http://192.168.1.68:3000/todos')
  //     .then((response) => response.json())
  //     .then((todosJson) => dispatch(setTodos(todosJson)))
  //     .catch((error) => error);
  // };
  return async (dispatch, getState) => {
    try {
      const response = await fetch('http://192.168.1.68:3000/todos');
      const todos = await response.json();
      dispatch(setTodos(todos));
      return true;
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
};

export const deleteTodoServer = (id) => async (dispatch, getState) => {
  try {
    const response = await fetch(`http://192.168.1.68:3000/todos/${id}`, {
      method: 'DELETE',
    });
    console.log('Success DELETE');
    dispatch(deleteTodo(id));
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const updateTodoServer = (todo, options) => async (
  dispatch,
  getState,
) => {
  try {
    let newTodo = JSON.parse(JSON.stringify(todo));
    delete newTodo.id;
    for (const property in options) {
      newTodo[property] = options[property];
    }
    const response = await fetch(`http://192.168.1.68:3000/todos/${todo.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({todo: newTodo}),
    });

    let updatedTodoFromServer = await response.json();
    console.log('Success PUT');
    dispatch(updateTodo(updatedTodoFromServer));
  } catch (e) {
    console.log(e);
    throw e;
  }
};
