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
import About from '../screens/Drawerscreens/About/About';
import TermsandCondition from '../screens/Drawerscreens/TermsandCondition/TermsandCondition';
import PrivacyPolicy from '../screens/Drawerscreens/PrivacyPolicy/PrivacyPolicy';
import PdfViewer from '../screens/Drawerscreens/PDFViewer/PdfViewer';


const Stack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();
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
      // screenOptions={{
      //   headerShown: false,
      // }}
    >
      <Drawer.Screen name="Home" component={Home} options={{}} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="TermsandCondition" component={TermsandCondition} />
      <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Drawer.Screen name="PdfViewer" component={PdfViewer} />
    </Drawer.Navigator>
  );
};

const MainNavigator = props => {
  return (
    // <NavigationContainer ref={navigationRef}>
    <NavigationContainer initialRouteName={'authStack'}>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <MainStack.Screen name="authStack" component={authStack} />
        <MainStack.Screen name="HomeStack" component={HomeStackScreen} />
      </MainStack.Navigator>
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
