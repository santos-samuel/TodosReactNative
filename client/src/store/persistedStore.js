import AsyncStorage from '@react-native-community/async-storage';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import {rootReducer} from '../reducers/rootReducer';
import thunk from 'redux-thunk';

const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ['todosReducer', 'authReducer'],
  // Blacklist (Don't Save Specific Reducers)
  // blacklist: ['authReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const reducersStore = createStore(
  persistedReducer,
  applyMiddleware(createLogger(), thunk),
);
let persistor = persistStore(reducersStore);
export {reducersStore, persistor};
