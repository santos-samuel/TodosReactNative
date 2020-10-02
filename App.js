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
  const {isLoggedIn} = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn() === false ? (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: 'Log In',
              headerShown: false,
            }}
          />
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="AddTodo"
              component={AddTodo}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppWrapper;
