import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from '../screens/AuthScreens/Login';

const AuthStack = createNativeStackNavigator();

 
const authScreenOptions = {
    cardStyle: {backgroundColor:'#CBB26A'},
  };

  export default function AuthStackScreen() {
    return (
      <AuthStack.Navigator screenOptions={authScreenOptions}>
        <AuthStack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
      </AuthStack.Navigator>
    );
  }
  