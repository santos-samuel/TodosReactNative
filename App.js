import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationContainer from '@react-navigation/native/src/NavigationContainer';
import {Home, Login} from './src/views';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
