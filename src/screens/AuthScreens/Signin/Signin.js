//import liraries
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Keyboard,
  BackHandler,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import styles from './styles';

//3rd party packages
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {moderateScale} from 'react-native-size-matters';

//intrnal libraries
import {colors, screenNames} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';
import {fonts, icons} from '../../../../assets';
import {Button} from '../../../components/common/Button';
import TextInputComp from '../../../components/common/TextInputComp';
import {strings} from '../../../localization';
import {useDispatch} from 'react-redux';

const Signin = ({navigation}) => {
  let passwordTextInput = useRef(null);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    isLoading: false,
  });
  const name_and_values = [
    {name: 'email', value: email},
    {name: 'password', value: password},
  ];

  useEffect(() => {
    function handleKeyUp() {
      BackHandler.exitApp();
      return false;
    }

    BackHandler.addEventListener('keyup', handleKeyUp);
    return () => BackHandler.removeEventListener('keyup', handleKeyUp);
  }, []);

  function Done() {
    navigation.navigate('HomeStack');
    Keyboard.dismiss();
    let err = {};
    //email error
    name_and_values.forEach(data => {
      let name = data.name;
      let value = data.value;
      if (!value) {
        err[name] = 'Should not be empty';
      } else if (
        'email' === name &&
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
      ) {
        err[name] = 'Email should be valid';
      } else if ('password' === name && value.length < 8) {
        err[name] = 'Too short';
      }
    });
    setErrors(err);
    if (Object.keys(err).length == 0) {
      var formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      // dispatch({type:REGISTER,payloads:formData});
    }
  }

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
              <View>
                <TextInputComp
                  label={strings.email}
                  value={email}
                  placeholder={strings.enterEmail}
                  labelTextStyle={styles.labelTextStyle}
                  onFocus={() =>
                    setErrors({
                      ...errors,
                      email: '',
                    })
                  }
                  onChangeText={email => setEmail(email)}
                />
                {errors.email ? (
                  <Text
                    transparent
                    style={{color: colors.primary, bottom: 13, left: 4}}>
                    {errors.email}
                  </Text>
                ) : null}
              </View>
              <View>
                <TextInputComp
                  label={strings.Password}
                  value={password}
                  placeholder={strings.enterPassword}
                  labelTextStyle={styles.labelTextStyle}
                  onChangeText={password => setPassword(password)}
                  onFocus={() =>
                    setErrors({
                      ...errors,
                      password: '',
                    })
                  }
                />
                {errors.password ? (
                  <Text
                    transparent
                    style={{color: colors.primary, bottom: 13, left: 4}}>
                    {errors.password}
                  </Text>
                ) : null}
              </View>
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
                onPress={() => Done()}
              />
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate(screenNames.Signup)}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontFamily: fonts.semiBold,
                  marginTop: moderateScale(5),
                  color: colors.white1,
                }}>
                {strings.createAccount}
                <Text
                  style={{
                    alignSelf: 'center',
                    fontFamily: fonts.extraBold,
                    marginTop: moderateScale(5),
                    color: colors.primary,
                  }}>
                  {strings.signup}
                </Text>
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default Signin;
