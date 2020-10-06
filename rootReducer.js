import {combineReducers} from 'redux';
import {todosReducer} from './src/reducers';

export const rootReducer = combineReducers({
  todosReducer,
});
