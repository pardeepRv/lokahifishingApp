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
  KeyboardAvoidingView,
  Platform,
  FlatList,
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
import {useDispatch} from 'react-redux';
import {RFValue} from 'react-native-responsive-fontsize';

const Signup = ({navigation}) => {
  let passwordTextInput = useRef(null);
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const [island, setIsland] = useState('');

  const [cmlHolder, setCmlHolder] = useState([
    {value: 'Yes', isSelected: false},
    {value: 'No', isSelected: true},
  ]);

  const [errors, setErrors] = useState({
    username: '',
    fullname: '',
    email: '',
    password: '',
    confirmpassword: '',
    city: '',
    island: '',
    isLoading: false,
  });

  const name_and_values = [
    {name: 'username', value: username},
    {name: 'fullname', value: fullname},
    {name: 'email', value: email},
    {name: 'city', value: city},
    {name: 'island', value: island},
    {name: 'password', value: password},
    {name: 'confirmpassword', value: confirmpassword},
  ];

  useEffect(() => {
    function handleKeyUp() {
      BackHandler.exitApp();
      return false;
    }

    BackHandler.addEventListener('keyup', handleKeyUp);
    return () => BackHandler.removeEventListener('keyup', handleKeyUp);
  }, []);

  // const _onChangeText = key => val => {
  //   setState({...state, [key]: val});
  // };

  ///toggeling
  const toggleCml = index => {
    const array = cmlHolder.map(v => {
      const newItem = Object.assign({}, v);
      newItem.isSelected = false;
      return newItem;
    });
    array[index].isSelected = !array[index].isSelected;
    setCmlHolder(array);
  };

  function Submit() {
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
      } else if ('confirmpassword' === name && value.length < 8) {
        err[name] = 'Too short';
      } else if ('confirmpassword' === name && value !== password) {
        err[name] = 'Confirm password should match';
      }
    });
    setErrors(err);
    if (Object.keys(err).length == 0) {
      var formData = new FormData();
      formData.append('first_name', firstname);
      formData.append('last_name', lastname);
      formData.append('email', email);
      formData.append('phone_number', phonenumber);
      formData.append('password', password);
      formData.append('password_confirmation', confirmpassword);
      // dispatch({type:REGISTER,payloads:formData});
    }
  }

  const _renderView = ({item, index}) => (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
      onPress={() => toggleCml(index)}
      activeOpacity={0.8}>
      {item.isSelected ? (
        <Image
          source={icons.ic_radio_btn_on}
          style={{
            tintColor: colors.white1,
          }}
        />
      ) : (
        <Image
          source={icons.ic_radio_btn_off}
          style={{
            tintColor: colors.white1,
          }}
        />
      )}

      <Text style={styles.textStyle}>{item.value}</Text>
    </TouchableOpacity>
  );

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
                <View>
                  <TextInputComp
                    label={strings.username}
                    value={username}
                    placeholder={strings.enterusername}
                    labelTextStyle={styles.labelTextStyle}
                    onChangeText={username => setUsername(username)}
                    onFocus={() =>
                      setErrors({
                        ...errors,
                        username: '',
                      })
                    }
                  />
                  {errors.username ? (
                    <Text
                      transparent
                      style={{color: colors.primary, bottom: 14}}>
                      {errors.username}
                    </Text>
                  ) : null}
                </View>

                <View>
                  <TextInputComp
                    label={strings.fullname}
                    value={fullname}
                    placeholder={strings.enterfullname}
                    labelTextStyle={styles.labelTextStyle}
                    onChangeText={fullname => setFullname(fullname)}
                    onFocus={() =>
                      setErrors({
                        ...errors,
                        fullname: '',
                      })
                    }
                  />
                  {errors.fullname ? (
                    <Text
                      transparent
                      style={{color: colors.primary, bottom: 13, left: 4}}>
                      {errors.fullname}
                    </Text>
                  ) : null}
                </View>
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
                <View>
                  <TextInputComp
                    label={strings.confirmpassword}
                    value={confirmpassword}
                    secureTextEntry
                    placeholder={strings.enterconfirmpassword}
                    labelTextStyle={styles.labelTextStyle}
                    onChangeText={confirmpassword =>
                      setconfirmpassword(confirmpassword)
                    }
                    onFocus={() =>
                      setErrors({
                        ...errors,
                        confirmpassword: '',
                      })
                    }
                  />
                  {errors.confirmpassword ? (
                    <Text
                      transparent
                      style={{color: colors.primary, bottom: 13, left: 4}}>
                      {errors.confirmpassword}
                    </Text>
                  ) : null}
                </View>
                <View>
                  <TextInputComp
                    label={strings.city}
                    value={city}
                    placeholder={strings.entercity}
                    labelTextStyle={styles.labelTextStyle}
                    onChangeText={city => setCity(city)}
                    onFocus={() =>
                      setErrors({
                        ...errors,
                        city: '',
                      })
                    }
                  />
                  {errors.city ? (
                    <Text
                      transparent
                      style={{color: colors.primary, bottom: 13, left: 4}}>
                      {errors.city}
                    </Text>
                  ) : null}
                </View>
                <View>
                  <TextInputComp
                    label={strings.island}
                    value={island}
                    placeholder={strings.enterisland}
                    labelTextStyle={styles.labelTextStyle}
                    onChangeText={island => setIsland(island)}
                    onFocus={() =>
                      setErrors({
                        ...errors,
                        island: '',
                      })
                    }
                  />
                  {errors.island ? (
                    <Text
                      transparent
                      style={{color: colors.primary, bottom: 13, left: 4}}>
                      {errors.island}
                    </Text>
                  ) : null}
                </View>
              </View>

              <View>
                <Text
                  style={{
                    fontFamily: fonts.semiBold,
                    color: colors.white1,
                    fontSize: RFValue(14),
                    paddingHorizontal: 10,
                  }}>
                  CML holder
                </Text>
              </View>
              <FlatList
                extraData={cmlHolder}
                data={cmlHolder}
                style={{
                  marginTop: moderateScale(5),
                  paddingHorizontal: 10,
                }}
                renderItem={_renderView}
                keyExtractor={(item, index) => 'key' + index}
                horizontal
              />

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
                  onPress={() => Submit()}
                />
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate(screenNames.Signin)}
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
                    marginBottom: moderateScale(15),
                    color: colors.white1,
                  }}>
                  {strings.alreadyaccount}
                  <Text
                    style={{
                      alignSelf: 'center',
                      fontFamily: fonts.extraBold,
                      marginTop: moderateScale(10),
                      marginBottom: moderateScale(15),
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
