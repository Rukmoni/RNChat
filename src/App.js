import React, {Component} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigation from './navigator/RootNavigation';
import Login from './screens/Login';
class App extends Component{

    render() {
        return (
      
            <SafeAreaProvider>
             
                <RootNavigation/>
               
              
            </SafeAreaProvider>
          
        );
      }
}
export default App;