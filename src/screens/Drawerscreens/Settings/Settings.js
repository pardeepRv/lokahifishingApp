import React, {useState} from 'react';
  
  import { View, StyleSheet, Text, Image, Pressable,SafeAreaView,ScrollView , Dimensions, ImageBackground, TouchableOpacity ,} from "react-native"
import { useNavigation } from '@react-navigation/native';

// internal lijbraries

import {moderateScale} from 'react-native-size-matters';
import {strings} from '../../../localization';
import { Header } from '../../../components/common/Header';
import { fonts, icons } from '../../../../assets';
import { colors } from '../../../utilities/constants';


const Settings = () => {
  const [modalVisible, setModalVisible] = useState(false);
  
	const [notificationState, setNotificationState] = useState(false);
	const toggleSwitch = () => setNotificationState(previousState => !previousState);
	const navigation = useNavigation();




	return (
    <ImageBackground source={icons.ic_signin_bg} style={styles.image}>
			<SafeAreaView style={styles.content}>
      <Header
            containerStyle={{
              backgroundColor: 'transparent',
              height: moderateScale(60),
            }}
            title={'Settings'}
            titleStyle={{fontFamily: fonts.bold}}
            leftIconSource={icons.ic_back_white}
			leftButtonStyle={{
				tintColor:colors.white1
			}}
            onLeftPress={() => {
              navigation.goBack();
            }}
          />
      </SafeAreaView>
		</ImageBackground>

		
	);
};

export default Settings;



const styles = StyleSheet.create({
	image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: '100%',
	},
  content: {
    position: 'relative',
 
    display: 'flex',
    flex: 1,

  },
});
