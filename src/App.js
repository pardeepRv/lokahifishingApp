import React, {PureComponent} from 'react';
import {SafeAreaView, Text, View, TextInput} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import MainNavigator from './navigation/navigator';
import AuthLoading from './screens/AuthScreens/AuthLoading';
import store from './store';

import {requestUserPermission} from './service/FcmService';
import {createNotificationListener} from './service/notificationListener';
import checkPermission from './service/notificationServices';

class App extends PureComponent {
  constructor(props) {
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;

    TextInput.defaultProps = {
      ...(TextInput.defaultProps || {}),
      allowFontScaling: false,
    };

    super(props);
  }

  componentDidMount() {
    checkPermission();
    requestUserPermission();
    createNotificationListener();
  }

  render() {
    if (!__DEV__) {
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
