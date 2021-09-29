import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

/************ Screens *************** */
//authScreen
import Signup from '../screens/AuthScreens/Signup/Signup';
import Signin from '../screens/AuthScreens/Signin/Signin';

//navigation screens
import ForgotPassword from '../screens/AuthScreens/ForgotPassword/ForgotPassword';
import {navigationRef} from '../store/NavigationService';
import Home from '../screens/NavigationScreens/Home/Home';
import DrawerComp from '../screens/NavigationScreens/Home/DrawerComp';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const commonScreensOptions = {
  headerStyle: {
    elevation: 1,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
  },
};

const HomeStackScreen = props => {
  return (
    <Drawer.Navigator
      initialRouteName="Drawer"
      drawerContent={props => DrawerComp({...props})}
      >
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

const MainNavigator = props => {
  return (
    // <NavigationContainer ref={navigationRef}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="authStack" component={authStack} />
        <Stack.Screen name="HomeStack" component={HomeStackScreen} />
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
      initialRouteName={'Signin'}>
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
