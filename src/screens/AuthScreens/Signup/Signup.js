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
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from './styles';

//3rd party packages
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {moderateScale} from 'react-native-size-matters';

//internal libraries
import {colors, screenNames} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';
import {fonts, icons} from '../../../../assets';
import {Button} from '../../../components/common/Button';
import TextInputComp from '../../../components/common/TextInputComp';
import {strings} from '../../../localization';

const Signup = ({navigation,data, key}) => {
  const [state, setState] = useState({
    username: '',
    fullname: '',
    email: '',
    password: '',
    confirmpasssword: '',
    city: '',
    island: '',
    isLoading: false,
  });

  const {
    username,
    fullname,
    email,
    password,
    confirmpasssword,
    city,
    island,
    isLoading,
  } = state;

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
          <ScrollView style={{flex: 1}}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.subContainer}
              contentContainerStyle={styles.subContentContainer}
              keyboardShouldPersistTaps={'always'}
              showsVerticalScrollIndicator={false}>
              <View
                style={{
                  marginTop: layout.size.width / 1.7,
                }}></View>

              <View
                style={{
                  marginTop: moderateScale(40),
                }}>
                <TextInputComp
                  label={strings.username}
                  value={username}
                  placeholder={strings.enterusername}
                  labelTextStyle={styles.labelTextStyle}
                  onChangeText={_onChangeText('username')}
                />
                <TextInputComp
                  label={strings.fullname}
                  value={fullname}
                  placeholder={strings.enterfullname}
                  labelTextStyle={styles.labelTextStyle}
                  onChangeText={_onChangeText('fullname')}
                />
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
                  placeholder={strings.enterPassword}
                  labelTextStyle={styles.labelTextStyle}
                  onChangeText={_onChangeText('password')}
                />

                <TextInputComp
                  label={strings.confirmpassword}
                  value={confirmpasssword}
                  secureTextEntry
                  placeholder={strings.enterconfirmpassword}
                  labelTextStyle={styles.labelTextStyle}
                  onChangeText={_onChangeText('confirmpasssword')}
                />
                <TextInputComp
                  label={strings.city}
                  value={city}
                  placeholder={strings.entercity}
                  labelTextStyle={styles.labelTextStyle}
                  onChangeText={_onChangeText('city')}
                />
                <TextInputComp
                  label={strings.island}
                  value={island}
                  placeholder={strings.enterisland}
                  labelTextStyle={styles.labelTextStyle}
                  onChangeText={_onChangeText('island')}
                />
                
              </View>
              
              <View
                style={{
                  marginTop: moderateScale(50),
                }}>
                <Button
                  style={{
                    backgroundColor: colors.primary,
                    borderRadius: 20,
                    width: layout.size.width - 80,
                    alignSelf: 'center',
                  }}
                  label={strings.signup}
                  onPress={() => alert('jviu')}
                />
              </View>
              
              <TouchableOpacity
                onPress={() => navigation.navigate(screenNames.Signup)}
                // style={{
                //   flexDirection:'row',
                //   justifyContent:'center'
                // }}
              >
                <Text
                  style={{
                    alignSelf: 'center',
                    fontFamily: fonts.semiBold,
                    marginTop: moderateScale(10),
                    color: colors.white1,
                  }}>
                  {strings.alreadyaccount}
                  <Text
                    style={{
                      alignSelf: 'center',
                      fontFamily: fonts.extraBold,
                      marginTop: moderateScale(10),
                      marginBottom: moderateScale(10),
                      color: colors.primary,
                    }}>
                    {strings.signin}
                  </Text>
                </Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </ScrollView>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
