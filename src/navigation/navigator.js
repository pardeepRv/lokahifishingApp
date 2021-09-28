import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/************ Screens *************** */
//authScreen
import Signup from '../screens/AuthScreens/Signup/Signup';
import Signin from '../screens/AuthScreens/Signin/Signin'

//navigation screens
import ForgotPassword from '../screens/AuthScreens/ForgotPassword/ForgotPassword';
import {navigationRef} from '../store/NavigationService';

const Stack = createNativeStackNavigator();


const HomeScreenOptions = ({navigation, route}) => ({
  headerTitle: 'Home',
  headerTitleAlign: 'center',
  headerTitleStyle: {
    color: '#000000',
  },
  headerLeft: () => null,
});
const commonScreensOptions = {
  headerStyle: {
    elevation: 1,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
  },
};

//Tab Bar Stacks
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={commonScreensOptions}>
      <HomeStack.Screen
        name="Home"
        component={Progress}
        options={HomeScreenOptions}
      />
    </HomeStack.Navigator>
  );
}

const MainNavigator = props => {
  return (
    // <NavigationContainer ref={navigationRef}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        >
        <Stack.Screen name="authStack" component={authStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const authStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Signin'}
    >
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
