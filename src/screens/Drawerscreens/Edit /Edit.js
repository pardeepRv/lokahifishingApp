import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  View,
  Text
} from 'react-native';
import Pdf from 'react-native-pdf';
import { moderateScale } from 'react-native-size-matters';
import { fonts, icons } from '../../../../assets';
import { Header } from '../../../components/common/Header';
import { strings } from '../../../localization';
import { colors } from '../../../utilities/constants';

import BInfo from './BInfo/BInfo';
import EditContacts from './EditemergencyContacts/Editemergencycontacts';
import EditProfile from './EditProfile/EditProfile';
import styles from './styles';

const Tab = createMaterialTopTabNavigator();


const EContacts = () => {
  return (
    <ImageBackground source={icons.ic_signin_bg} style={styles.image}>
    </ImageBackground>
  );
};

const Edit = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.content}>
      <Header
        containerStyle={{
          backgroundColor: colors.transparent,
          height: moderateScale(60),
        }}
        title={strings.edit}
        titleStyle={{ fontFamily: fonts.bold }}
        leftIconSource={icons.ic_back_white}
        leftButtonStyle={{
          tintColor: colors.white1,
        }}
        onLeftPress={() => {
          navigation.goBack();
        }}
      />
      <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: colors.secondry,
          },
          allowFontScaling: false,
          labelStyle: {
            color: colors.white1,
            fontWeight: '700',
            shadowColor: colors.black1,
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 1,
            shadowRadius: 0,
            textTransform: 'none',
            fontSize: 14,
          },
          indicatorStyle: {
            backgroundColor: colors.white1,
          },
        }}>
        <Tab.Screen name="profile" component={EditProfile} />
        <Tab.Screen name="Boat info" component={BInfo} />
        <Tab.Screen name="EmergencyContacts" component={EditContacts} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};



export default Edit;
