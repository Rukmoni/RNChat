import React, {Component} from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigation from './navigator/RootNavigation';
import { Provider } from "react-redux";
import store from "./modules/store";

class App extends Component{

    render() {
        return (
      
          
              <Provider store={store}>
                <RootNavigation/>
               
                </Provider>
          
          
        );
      }
}
export default App;