import {combineReducers} from 'redux';
import {todosReducer, authReducer} from './';

export const rootReducer = combineReducers({
  todosReducer,
  authReducer,
});
