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

//extrenal libraries
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RFValue} from 'react-native-responsive-fontsize';

//internal libraries
import {colors, screenNames} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';
import {fonts, icons} from '../../../../assets';
import {Button} from '../../../components/common/Button';
import TextInputComp from '../../../components/common/TextInputComp';
import {strings} from '../../../localization';
import styles from './styles';

const ForgotPassword = ({navigation}) => {
  const [state, setState] = useState({
    email: '',

    isLoading: false,
  });

  const {email, isLoading} = state;

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
                marginTop: layout.size.width / 1.7,
              }}></View>
            <Text style={styles.forgotpassword}>{strings.forgot}</Text>
            <View
              style={{
                marginTop: moderateScale(25),
              }}>
              <TextInputComp
                label={strings.email}
                value={email}
                placeholder={strings.enterEmail}
                labelTextStyle={styles.labelTextStyle}
                onChangeText={_onChangeText('email')}
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
                label={strings.send}
                onPress={() => alert('jviu')}
              />
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
