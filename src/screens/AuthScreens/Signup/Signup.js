//import liraries
import React, {useRef, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {RFValue} from 'react-native-responsive-fontsize';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch} from 'react-redux';
import {fonts, icons} from '../../../../assets';
import {Button} from '../../../components/common/Button';
import TextInputComp from '../../../components/common/TextInputComp';
import {strings} from '../../../localization';


import {  signUpWithEmail } from '../../../store/actions';
//internal libraries
import {colors, screenNames} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';
import styles from './styles';

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
  const [productPhoto, setProductPhoto] = useState('');

  const [cmlHolder, setCmlHolder] = useState([
    {value: 'Yes', isSelected: false},
    {value: 'No', isSelected: false},
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
    productPhoto: '',
    cmlHolder:'',
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
    let err = {} ;
   
    //email error
    name_and_values.forEach(data => {
      let name = data.name;
      // let check =
      // productPhoto != '';
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
   return setErrors(err);
    if (Object.keys(err).length == 0 ) {
      var formData = new FormData();
      formData.append('image', productPhoto);
      formData.append('user_name', username);
      formData.append('full_name', fullname);
      formData.append('email', email);
      formData.append('city', city);
      formData.append('island', island);
      formData.append('cml', cmlHolder);
      formData.append('password', password);
      formData.append('password_confirmation', confirmpassword);

      let obj = {};
      obj.email = email;
      obj.password = password;
      obj.full_name = fullname;
      obj.email = email;
      obj.island = island;
      obj.cml = cmlHolder;
      obj.password_confirmation = confirmpassword;
      obj.city = city;
      obj.user_name = username;
      obj.image=productPhoto;
      dispatch(signUpWithEmail(obj));
      // dispatch(signUpWithEmail(obj));
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

  function _doOpenOption(value) {
    Alert.alert(
      '',
      'Please Select',
      [
        {text: 'Camera', onPress: () => _doOpenCamera(value)},
        {text: 'Gallery', onPress: () => _doOpenGallery(value)},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: true},
    );
  }
  function _doOpenCamera(value) {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
      compressImageQuality: 0.2,
    }).then(response => {
      let data = `data:${response.mime};base64,${response.data}`;
      if (value == 'productPhoto') {
        setProductPhoto(data);
      }
    });
  }
  function _doOpenGallery(value) {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
      compressImageQuality: 0.2,
    }).then(image => {
      console.log(`images`, image);
        let data = `data:${image.mime};base64,${image.data}`;
        if (value == 'productPhoto') {
          setProductPhoto(data);
        }
    });
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white1}}>
      <View
        style={{
          flex: 1,
        }}>
        <ImageBackground source={icons.ic_signup_bg} style={styles.image}>
          <ScrollView style={{flex: 1}}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
              style={styles.subContainer}
              contentContainerStyle={styles.subContentContainer}
              keyboardShouldPersistTaps={'always'}
              showsVerticalScrollIndicator={false}>
              <View style={styles.uploadContainer}>
                <Image
                  source={
                    productPhoto != ''
                      ? {uri: productPhoto}
                      : icons.signin_bg_ic
                  }
                  resizeMode="cover"
                  style={{
                    borderRadius: moderateScale(100),
                    height: productPhoto != '' ? '100%' : '115%',
                    width: productPhoto != '' ? '100%' : '155%',
                  }}
                />
                <View style={styles.uploadContent}>
                  <TouchableOpacity
                    style={[styles.uploadStoreBtn]}
                    onPress={() => _doOpenOption('productPhoto')}>
                    <Image
                      style={styles.logo2}
                      source={icons.ic_cateagory}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  marginTop: layout.size.width / 10,
                }}></View>

              <View
                style={{
                  marginTop: moderateScale(30),
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
