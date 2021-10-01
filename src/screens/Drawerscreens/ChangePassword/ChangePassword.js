import React, {useRef, useState} from 'react';
import {
  ImageBackground,
  Keyboard,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
//extrenal libraries
import {moderateScale} from 'react-native-size-matters';
import {useDispatch} from 'react-redux';
import {fonts, icons} from '../../../../assets';
import {Button} from '../../../components/common/Button';
import {Header} from '../../../components/common/Header';
import TextInputComp from '../../../components/common/TextInputComp';
import {strings} from '../../../localization';
//internal libraries
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';
import styles from './styles';

const ChangePassword = ({navigation}) => {
  let passwordTextInput = useRef(null);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    oldpassword: '',
    newpassword: '',
    confirmpassword: '',
  });
  const {oldpassword, newpassword, confirmpassword} = state;
  const _onChangeText = key => val => {
    setState({...state, [key]: val});
  };
  const [errors, setErrors] = useState({
    oldpassword: '',
    newpassword: '',
    confirmpassword: '',
    isLoading: false,
  });
  const name_and_values = [
    {name: 'oldpassword', value: oldpassword},
    {name: 'newpassword', value: newpassword},
    {name: 'confirmpassword', value: confirmpassword},
  ];

  function Cpassword() {
    Keyboard.dismiss();
    let err = {};
    //email error
    name_and_values.forEach(data => {
      let name = data.name;
      let value = data.value;
      if (!value) {
        err[name] = 'Should not be empty';
      } else if ('oldpassword' === name && value.length < 8) {
        err[name] = 'Too short';
      } else if ('newpassword' === name && value.length < 8) {
        err[name] = 'Too short';
      } else if ('confirmpassword' === name && value.length < 8) {
        err[name] = 'Too short';
      } else if ('confirmpassword' === name && value !== newpassword) {
        err[name] = 'Confirm password should match';
      }
    });
    setErrors(err);
    if (Object.keys(err).length == 0) {
      var formData = new FormData();
      formData.append('oldpassword', oldpassword);
      formData.append('newpassword', newpassword);
      formData.append('confirmpassword', confirmpassword);

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
          <Header
            containerStyle={{
              backgroundColor: colors.transparent,
              height: moderateScale(60),
            }}
            title={'Lokahi'}
            titleStyle={{fontFamily: fonts.bold}}
            leftIconSource={icons.ic_back_white}
            leftButtonStyle={{
              tintColor: colors.white1,
            }}
            onLeftPress={() => {
              navigation.goBack();
            }}
          />

          <ScrollView
            style={styles.subContainer}
            contentContainerStyle={styles.subContentContainer}
            keyboardShouldPersistTaps={'always'}
            showsVerticalScrollIndicator={false}>
            <View
              style={{
                marginTop: layout.size.width / 2.5,
              }}></View>
            <Text style={styles.forgotpassword}>{strings.changepassword}</Text>
            <View
              style={{
                marginTop: moderateScale(25),
              }}>
              <TextInputComp
                value={oldpassword}
                placeholder={strings.oldpassword}
                labelTextStyle={styles.labelTextStyle}
                onFocus={() =>
                  setErrors({
                    ...errors,
                    oldpassword: '',
                  })
                }
                onChangeText={_onChangeText('oldpassword')}
              />
              {errors.oldpassword ? (
                <Text
                  transparent
                  style={{color: colors.primary, bottom: 13, left: 4}}>
                  {errors.oldpassword}
                </Text>
              ) : null}
            </View>
            <View
              style={{
                marginTop: moderateScale(5),
              }}>
              <TextInputComp
                value={newpassword}
                placeholder={strings.newpassword}
                labelTextStyle={styles.labelTextStyle}
                onFocus={() =>
                  setErrors({
                    ...errors,
                    newpassword: '',
                  })
                }
                onChangeText={_onChangeText('newpassword')}
              />
              {errors.newpassword ? (
                <Text
                  transparent
                  style={{color: colors.primary, bottom: 13, left: 4}}>
                  {errors.newpassword}
                </Text>
              ) : null}
            </View>
            <View
              style={{
                marginTop: moderateScale(5),
              }}>
              <TextInputComp
                value={confirmpassword}
                placeholder={strings.reneter}
                labelTextStyle={styles.labelTextStyle}
                onFocus={() =>
                  setErrors({
                    ...errors,
                    confirmpassword: '',
                  })
                }
                onChangeText={_onChangeText('confirmpassword')}
              />
              {errors.confirmpassword ? (
                <Text
                  transparent
                  style={{color: colors.primary, bottom: 13, left: 4}}>
                  {errors.confirmpassword}
                </Text>
              ) : null}
            </View>
            <View
              style={{
                marginTop: moderateScale(20),
              }}>
              <Button
                style={{
                  backgroundColor: colors.primary,
                  borderRadius: 20,
                  width: layout.size.width - 80,
                  alignSelf: 'center',
                }}
                label={strings.submit}
                onPress={() => Cpassword()}
              />
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default ChangePassword;
