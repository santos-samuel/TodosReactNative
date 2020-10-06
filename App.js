import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AddTodo, Home, Login} from './src/views';
import AuthContext from './src/store/authContext';
import useGlobalState from './src/store/store';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const AppWrapper = () => {
  const store = useGlobalState();
  return (
    <AuthContext.Provider value={store}>
      <App />
    </AuthContext.Provider>
  );
};

const App = () => {
  const {loggedIn} = useContext(AuthContext);

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
