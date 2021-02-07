import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Messanger from '../screens/Messanger';
const Stack = createStackNavigator();
function RootNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login}  options={{headerShown:false}}
/>
          <Stack.Screen name="Messanger" component={Messanger} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default RootNavigation;