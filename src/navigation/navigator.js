import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
//navigation screens
import ForgotPassword from '../screens/AuthScreens/ForgotPassword/ForgotPassword';
import Signin from '../screens/AuthScreens/Signin/Signin';
/************ Screens *************** */
//authScreen
import Signup from '../screens/AuthScreens/Signup/Signup';
import About from '../screens/Drawerscreens/About/About';
import ChangePassword from '../screens/Drawerscreens/ChangePassword/ChangePassword';
import Members from '../screens/Drawerscreens/Members/Members';
import PdfViewer from '../screens/Drawerscreens/PDFViewer/PdfViewer';
import PrivacyPolicy from '../screens/Drawerscreens/PrivacyPolicy/PrivacyPolicy';
import Settings from '../screens/Drawerscreens/Settings/Settings';
import Survey from '../screens/Drawerscreens/Survey/Survey';
import TermsandCondition from '../screens/Drawerscreens/TermsandCondition/TermsandCondition';
import TournamentRules from '../screens/Drawerscreens/TournamentRules/TournamentRules';
import DrawerComp from '../screens/NavigationScreens/Home/DrawerComp';
import Home from '../screens/NavigationScreens/Home/Home';
import TournamentHome from '../screens/NavigationScreens/TournamentHome/TournamentHome';

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
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={Home} options={{}} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="TermsandCondition" component={TermsandCondition} />
      <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Drawer.Screen name="PdfViewer" component={PdfViewer} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="TournamentRules" component={TournamentRules} />
      <Drawer.Screen name="Survey" component={Survey} />
      <Drawer.Screen name="Members" component={Members} />
      <Drawer.Screen name="Tournament" component={TournamentHome} />
      <Drawer.Screen name="ChangePassword" component={ChangePassword} />
      
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
