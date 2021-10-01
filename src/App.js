import React, {PureComponent} from 'react';
import {StatusBar, SafeAreaView, View} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import MainNavigator from './navigation/navigator';
import FlashMessage from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Provider} from 'react-redux';
import store from './store';
import AuthLoading from './screens/AuthScreens/AuthLoading';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    if(!__DEV__){
    	console.log = () => {};
    }
    return (
      <Provider store={store}>
        <View
          style={{
            flex: 1,
          }}>
          <SafeAreaView
            style={{
              flex: 1,
            }}>
            {/* <AppNavigator /> */}
            <AuthLoading />
            <MainNavigator />
            <FlashMessage position={'top'} />
          </SafeAreaView>
        </View>
      </Provider>
    );
  }
}

export default App;
