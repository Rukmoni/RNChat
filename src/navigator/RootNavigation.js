import * as React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Messanger from '../screens/Messanger';
const Stack = createStackNavigator();
export function AuthStack(){
  return(
  <Stack.Navigator initialRouteName="Login">
  <Stack.Screen name="Login" component={Login}  options={{headerShown:false}}
/>
  <Stack.Screen name="signup" component={Signup} />
</Stack.Navigator>)

}
export function MessangerStack(){
  return(
  <Stack.Navigator initialRouteName="Messanger">
  <Stack.Screen name="Messanger" component={Messanger} />
   </Stack.Navigator>
  )

}
function RootNavigation() {
  const { isLoggedin, setLoggedin } = useSelector((state) => state.authReducer);
  console.log("RootNavigation",isLoggedin)
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
        {isLoggedin?
          (  <Stack.Screen name="Messanger" component={Messanger} />)
          :
          <Stack.Screen name="auth" component={AuthStack}  options={{headerShown:false}}
/>
        }
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default RootNavigation;