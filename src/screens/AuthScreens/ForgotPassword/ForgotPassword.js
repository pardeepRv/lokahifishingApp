import React, {useState , useRef,useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Keyboard,
  BackHandler,
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
import {useDispatch} from 'react-redux';

const ForgotPassword = ({navigation}) => {
  let passwordTextInput = useRef(null);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  

  const [errors, setErrors] = useState({
    email: '',
    isLoading: false,
  });
  const name_and_values = [
    {name: 'email', value: email},
  ];  

  useEffect(() => {
 
    function handleKeyUp() {
      BackHandler.exitApp();
      return false
    }
    
    BackHandler.addEventListener("keyup", handleKeyUp);
    return () => BackHandler.removeEventListener("keyup", handleKeyUp);
  }, []);

  const _onChangeText = key => val => {
    setState({...state, [key]: val});
  };

  function Forpassword(){
    Keyboard.dismiss();
    let err = {};
    //email error
    name_and_values.forEach(data => {
      let name = data.name;
      let value = data.value;
      if (!value) {
        err[name] = 'Should not be empty';
      } else if ('email' === name && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ) {
        err[name] = 'Email should be valid';
      } 
    });
    setErrors(err);
    if (Object.keys(err).length == 0) {
      var formData = new FormData();
      formData.append("email", email);
      // dispatch({type:REGISTER,payloads:formData});
    }
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
                  onFocus={() =>
                    setErrors({
                      ...errors,
                      email: '',
                    })
                  }
                  onChangeText={email => setEmail(email)}
                />
                {errors.email? (
                <Text transparent style={{color: colors.primary , bottom:13, left:4}}>
                  {errors.email}
                </Text>
              ) : null}
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
                onPress={() => Forpassword()}
              />
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
