import messaging from '@react-native-firebase/messaging';
import {useNavigation} from '@react-navigation/native';
import * as NavigationService from '../store/NavigationService';

export const createNotificationListener = async () => {
  const {navigation} = useNavigation;
  // console.log('coming in noification');

  // messaging().onNotificationOpenedApp(async (remoteMessage) => {
  //     console.log('Notification caused app to open from background state bla bla:', remoteMessage);
  //     alert(remoteMessage)
  //     // navigation.navigate('Haulage')
  // });

  messaging().onNotificationOpenedApp(async remoteMessage => {
    // setTimeout(() => {
    //   console.log(
    //     NavigationService,
    //     'hte +++++++++++++++++++++++++++++++++++++++++++',
    //   );
    //   remoteMessage.data?.type == 'chat_message'
    //     ? NavigationService.navigate('MYprofile')
    //     : remoteMessage.data?.type == 'haulage_type'
    //     ? NavigationService.navigate('MYprofile')
    //     : NavigationService.navigate('MYprofile');
    // }, 3000);
  });

  messaging().onMessage(async remoteMessage => {
    console.log('recived in foreground', remoteMessage);
  });

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log('remote message', remoteMessage);
      }
    });

  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
};

// messaging().onTokenRefresh(fcmToken => {
//     console.log("New token refresh: ", fcmToken)

// })
