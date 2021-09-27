import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import {BottomTabBar, createBottomTabNavigator} from '@react-navigation/bottom-tabs';

/************ Screens *************** */
//authScreen
import Login from '../screens/AuthScreens/Login';
import Signin from '../screens/AuthScreens/Signin';
import Signup from '../screens/AuthScreens/Signup';

//navigation screens
import HearFrom from '../screens/NavigationsScreens/HearFrom';
import AboutMe from '../screens/NavigationsScreens/AboutMe';
import AskWeight from '../screens/NavigationsScreens/AskWeight';
import GoalWeight from '../screens/NavigationsScreens/GoalWeight';
import ForgotPassword from '../screens/AuthScreens/ForgotPassword';
import Progress from '../screens/NavigationsScreens/Progress';
import {navigationRef} from '../store/NavigationService';

const Stack = createNativeStackNavigator();
//Tab Bar
// const Tab = createBottomTabNavigator();
// function BottomTab() {
//   return (
//     <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
//       <Tab.Screen name="Progress" component={HomeStackScreen} />
//       <Tab.Screen name="Meal plans" component={HomeStackScreen} />
//       <Tab.Screen name="Explore" component={HomeStackScreen} />
//       <Tab.Screen name="Activities" component={HomeStackScreen} />
//       <Tab.Screen name="Testamonial" component={HomeStackScreen} />
//     </Tab.Navigator>
//   );
// }

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
      {/* <HomeStack.Screen
        name="Get Started"
        component={GetStarted}
        options={HomeStackOptions}
      /> */}
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
        {/* <Stack.Screen name="Home" component={BottomTab} /> */}
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
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HearFrom" component={HearFrom} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="AboutMe" component={AboutMe} />
      <Stack.Screen name="AskWeight" component={AskWeight} />
      <Stack.Screen name="GoalWeight" component={GoalWeight} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
