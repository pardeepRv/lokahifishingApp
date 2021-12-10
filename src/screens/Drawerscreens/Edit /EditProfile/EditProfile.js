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
//ecternal libaraies
import ImagePicker from 'react-native-image-crop-picker';
import {RFValue} from 'react-native-responsive-fontsize';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';

//internal libraries

import {fonts, icons} from '../../../../../assets';
import {Button} from '../../../../components/common/Button';
import {Loader} from '../../../../components/common/Loader';
import TextInputComp from '../../../../components/common/TextInputComp';
import {strings} from '../../../../localization';
import {getLoginUserProfile, updateProfile} from '../../../../store/actions';
import {colors, screenNames} from '../../../../utilities/constants';
import {layout} from '../../../../utilities/layout';
import styles from './styles';

const EditProfile = ({navigation}) => {
  let passwordTextInput = useRef(null);
  let auth = useSelector(state => state.auth);
  console.log(auth, 'auth in editprofile  page>>>>>>>>>>');

  const dispatch = useDispatch();
  const [username, setUsername] = useState(auth?.userDetails?.user_name);
  const [fullname, setFullname] = useState(auth?.userDetails?.full_name);
  const [email, setEmail] = useState(auth?.userDetails?.email);
  const [city, setCity] = useState(auth?.userDetails?.city);
  const [contactNumber, setContactnumber] = useState(
    auth?.userDetails?.phone_number ? auth?.userDetails?.phone_number : '',
  );
  const [island, setIsland] = useState(auth?.userDetails?.island);
  const [profilePhoto, setprofilePhoto] = useState(
    auth?.userDetails?.profile_picture,
  );
  const [sendingProfile, setSendingProfile] = useState(false);

  const [cmlHolder, setCmlHolder] = useState(
    auth?.userDetails?.CML == '0'
      ? [
          {value: 'Yes', isSelected: false},
          {value: 'No', isSelected: true},
        ]
      : [
          {value: 'Yes', isSelected: true},
          {value: 'No', isSelected: false},
        ],
  );

  const [errors, setErrors] = useState({
    username: '',
    fullname: '',
    email: '',
    contactNumber: '',
    city: '',
    island: '',
    isLoading: false,
    profilePhoto: '',
  });

  const name_and_values = [
    {name: 'username', value: username},
    {name: 'fullname', value: fullname},
    {name: 'email', value: email},
    {name: 'city', value: city},
    {name: 'island', value: island},
    {name: 'contactNumber', value: contactNumber},
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

  function Save() {
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
      } else if (
        'contactNumber' === name &&
        value !== '' &&
        value.length < 10
      ) {
        err[name] = 'Should be valid Phone number';
      }
    });
    setErrors(err);
    if (Object.keys(err).length == 0) {
      let formData = new FormData();

      if (sendingProfile) {
        formData.append('image', {
          uri: profilePhoto,
          type: 'image/jpeg', // or photo.type
          name: 'profilePic',
        });
      }
      formData.append('username', username);
      formData.append('full_name', fullname);
      formData.append('email', email);
      formData.append('city', city);
      formData.append('island', island);
      formData.append('cml_holder', 1);
      formData.append('phone_number', contactNumber);

      console.log(formData, 'sending to aApi');
      dispatch(updateProfile(formData));

      setSendingProfile(false);
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

  function _doOpenOption() {
    setSendingProfile(true);
    Alert.alert(
      '',
      'Please Select',
      [
        {text: 'Camera', onPress: () => _doOpenCamera()},
        {text: 'Gallery', onPress: () => _doOpenGallery()},
        {
          text: 'Cancel',
          onPress: () => console.log('err'), //setSendingProfile(false),
          style: 'cancel',
        },
      ],
      {cancelable: true},
    );
  }
  function _doOpenCamera() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      compressImageQuality: 0.2,
    })
      .then(res => {
        console.log(`ress`, res);
        // res && res.assets && res.assets.length > 0 && res.assets[0].uri,
        if (Platform.OS == 'ios') {
          setprofilePhoto(res.path);
        } else {
          setprofilePhoto(res.path);
        }
      })
      .catch(err => {
        setSendingProfile(false);
      });
  }

  function _doOpenGallery() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      compressImageQuality: 0.2,
    })
      .then(res => {
        console.log(`ress`, res);
        // res && res.assets && res.assets.length > 0 && res.assets[0].uri,
        if (Platform.OS == 'ios') {
          setprofilePhoto(res.sourceURL);
        } else {
          setprofilePhoto(res.path);
        }
      })
      .catch(err => {
        setSendingProfile(false);
        console.log(err, 'err in image picker');
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
                    profilePhoto != ''
                      ? {uri: profilePhoto}
                      : icons.signin_bg_ic
                  }
                  resizeMode={profilePhoto != '' ? 'cover' : 'contain'}
                  style={{
                    borderRadius: moderateScale(100),
                    height: profilePhoto != '' ? '80%' : '100%',
                    width: profilePhoto != '' ? '80%' : '100%',
                  }}
                />
                <View style={styles.uploadContent}>
                  <TouchableOpacity
                    style={[styles.uploadStoreBtn]}
                    onPress={() => _doOpenOption()}>
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
                  marginTop: moderateScale(0),
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
                    editable={false}
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
                    label={strings.contactnumber}
                    value={contactNumber}
                    placeholder={strings.entercontact}
                    labelTextStyle={styles.labelTextStyle}
                    onFocus={() =>
                      setErrors({
                        ...errors,
                        contactNumber: '',
                      })
                    }
                    onChangeText={contactNumber =>
                      setContactnumber(contactNumber)
                    }
                  />
                  {errors.contactNumber ? (
                    <Text
                      transparent
                      style={{color: colors.primary, bottom: 13, left: 4}}>
                      {errors.contactNumber}
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
                  label={strings.save}
                  onPress={() => Save()}
                />
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
          <Loader isLoading={auth.loading} isAbsolute />
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};
export default EditProfile;
