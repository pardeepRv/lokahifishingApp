//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import styles from "./styles";

//3rd party packages
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {moderateScale} from 'react-native-size-matters';
import {colors, screenNames} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';
import {fonts, icons} from '../../../../assets';
import {Button} from '../../../components/common/Button';
import TextInputComp from '../../../components/common/TextInputComp';
import { strings } from '../../../localization';

const Signin = ({navigation}) => {
  const [state, setState] = useState({
    email: 'test@yopmail.com',
    password: '',
    isLoading: false,
  });

  const {email, password, isLoading} = state;

  const _onChangeText = key => val => {
    setState({...state, [key]: val});
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white1}}>
      <View
        style={{
          flex: 1,
        }}>
        <ImageBackground source={icons.ic_signin_bg} style={styles.image}>
          <ScrollView
            style={styles.subContainer}
            contentContainerStyle={styles.subContentContainer}
            keyboardShouldPersistTaps={'always'}
            showsVerticalScrollIndicator={false}>
            <View
              style={{
                marginTop: layout.size.width / 2,
              }}></View>

            <View
              style={{
                marginTop: moderateScale(40),
              }}>
              <TextInputComp
                label={strings.email}
                value={email}
                placeholder={strings.enterEmail}
                labelTextStyle={styles.labelTextStyle}
                onChangeText={_onChangeText('email')}
              />

              <TextInputComp
                label={strings.Password}
                value={password}
                secureTextEntry
                placeholder={strings.enterPassword}
                labelTextStyle={styles.labelTextStyle}
                onChangeText={_onChangeText('password')}
              />
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate(screenNames.ForgotPassword)}>
              <Text
                style={{
                  alignSelf: 'flex-end',
                  fontFamily: fonts.semiBold,
                  marginTop: moderateScale(5),
                  color: colors.white1,
                }}>
                {strings.forgotpassword}
              </Text>
            </TouchableOpacity>

            <View
              style={{
                marginTop: moderateScale(50),
              }}>
              <Button
                style={{
                  backgroundColor: colors.primary,
                  borderRadius: 20,
                  width: layout.size.width - 50,
                  alignSelf: 'center',
                }}
                label={strings.login}
                onPress={() => alert('jviu')}
              />
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate(screenNames.Signup)}
              >
              <Text
                style={{
                  alignSelf: 'center',
                  fontFamily: fonts.semiBold,
                  marginTop: moderateScale(5),
                  color: colors.white1,
                }}>
                {strings.createAccount}
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};


export default Signin;
