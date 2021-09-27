import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import AuthLoading from '../screens/AuthScreens/AuthLoading';
import AuthNavigator from './AuthNavigator';

const Stack = createNativeStackNavigator();
 
const AppNavigator = (props) => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="AuthNavigator"
          component={AuthNavigator}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="AuthLoading"
          component={AuthLoading}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;


