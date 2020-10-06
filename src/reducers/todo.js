import {ADD_TODO, DELETE_TODO, UPDATE_TODO_COMPLETED} from '../actions';

const initialState = {
  todos: [],
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {...state, todos: [...state.todos, action.payload]};
    }
    case UPDATE_TODO_COMPLETED: {
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.todo.id === action.payload.id
            ? {
                ...item,
                todo: {
                  ...item.todo,
                  completed: !item.todo.completed,
                },
              }
            : item,
        ),
      };
    }
    case DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((item) => {
          return item.todo.id !== action.payload.id;
        }),
      };
    }
    default:
      return state;
  }
};
