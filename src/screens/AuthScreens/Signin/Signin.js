//import liraries
import messaging from '@react-native-firebase/messaging';
import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {icons} from '../../../../assets';
import {Button} from '../../../components/common/Button';
import {Loader} from '../../../components/common/Loader';
import TextInputComp from '../../../components/common/TextInputComp';
import {strings} from '../../../localization';
import {loginWithEmail} from '../../../store/actions';
//intrnal libraries
import {colors, screenNames} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';
import styles from './styles';

const Signin = ({navigation}) => {
  let auth = useSelector(state => state.auth);
  console.log(auth, 'auth in signin page>>>>>>>>>>');
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: '',
    password: '',
    // email: 'myname@yopmail.com',
    // password: 'qwerty123',
  });
  const {email, password} = state;
  const _onChangeText = key => val => {
    setState({...state, [key]: val});
  };

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    isLoading: false,
  });
  const name_and_values = [
    {name: 'email', value: email},
    {name: 'password', value: password},
  ];

  async function Done() {
    const fcmToken = await messaging().getToken();

    Keyboard.dismiss();
    //  navigation.navigate('HomeStack');

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
      let formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      formData.append('device_token', fcmToken);

      let obj = {};
      obj.email = email;
      obj.password = password;
      obj.device_token = fcmToken;

      dispatch(loginWithEmail(obj));
    }
    // navigation.navigate('HomeStack');
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white1}}>
      <View
        style={{
          flex: 1,
        }}>
        <ImageBackground source={icons.ic_signup_bg} style={styles.image}>
          <ScrollView style={{paddingHorizontal: moderateScale(25), flex: 1}}>
            <View style={styles.uploadContainer}>
              <Image
                source={icons.loginLogo}
                resizeMode="contain"
                style={{
                  borderRadius: moderateScale(100),
                  height: layout.size.height / 4,
                  width: layout.size.height / 4,
                }}
              />
            </View>
            <View
              style={{
                marginTop: layout.size.width / 15,
              }}></View>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
              style={styles.subContainer}
              contentContainerStyle={styles.subContentContainer}
              keyboardShouldPersistTaps={'always'}
              showsVerticalScrollIndicator={false}>
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
                    onChangeText={_onChangeText('email')}
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
                    secureTextEntry
                    placeholder={strings.enterPassword}
                    labelTextStyle={styles.labelTextStyle}
                    onChangeText={_onChangeText('password')}
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
                <Text style={styles.forgotStyle}>{strings.forgotpassword}</Text>
              </TouchableOpacity>

              <View
                style={{
                  marginTop: moderateScale(50),
                }}>
                <Button
                  style={styles.btnStyles}
                  label={strings.login}
                  onPress={() => Done()}
                />

                <TouchableOpacity
                  style={{
                    marginBottom: moderateScale(100),
                  }}
                  onPress={() => navigation.navigate(screenNames.Signup)}>
                  <Text style={styles.createAccount}>
                    {strings.createAccount}
                    <Text style={styles.signuptext}>{strings.signup}</Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
          <Loader
            isLoading={auth.loading}
            // isLoading={false}
            isAbsolute
          />
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default Signin;
