import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Signin from '../screens/AuthScreens/Signin/Signin';

const AuthStack = createNativeStackNavigator();

 
const authScreenOptions = {
    cardStyle: {backgroundColor:'#CBB26A'},
  };

  export default function AuthStackScreen() {
    return (
      <AuthStack.Navigator screenOptions={authScreenOptions}>
        <AuthStack.Screen
          name="Signin"
          component={Signin}
          options={{headerShown: false}}
        />
      </AuthStack.Navigator>
    );
  }
  