import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AddTodo, Home, Login} from './src/views';
import {NavigationContainer} from '@react-navigation/native';
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {reducersStore, persistor} from './src/store/persistedStore';

const Stack = createStackNavigator();

const AppWrapper = () => {
  return (
    <Provider store={reducersStore}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

const App = () => {
  const loggedIn = useSelector((state) => state.authReducer.loggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {loggedIn ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AddTodo" component={AddTodo} />
          </>
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppWrapper;
