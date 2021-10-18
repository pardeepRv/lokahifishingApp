import React, {useEffect, useState, useContext, useRef} from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  Alert,
  Keyboard,
} from 'react-native';
//external liraries
import {moderateScale} from 'react-native-size-matters';
import ImagePicker from 'react-native-image-crop-picker';
// internal libraries
import {fonts, icons} from '../../../../../assets';
import {Header} from '../../../../components/common/Header';
import TextInputComp from '../../../../components/common/TextInputComp';
import {strings} from '../../../../localization';
import {colors} from '../../../../utilities/constants';
import { Button } from '../../../../components/common/Button';
import { layout } from '../../../../utilities/layout';

const FishDetails = ({navigation}) => {
  const [fishDetail, setFishDetail] = useState('');
  const [fishphoto, setFishphoto] = useState('');

  const [errors, setErrors] = useState({
    fishDetail: '',
    fishphoto: '',
  });

  const name_and_values = 
  [{name: 'fishDetail', value: fishDetail}];
  [{name: 'fishphoto', value: fishphoto}];


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
      if (value == 'fishphoto') {
        setFishphoto(data);
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
      if (value == 'fishphoto') {
        setFishphoto(data);
      }
      else if ('fishphoto' === name && value != '') {
        err[name] = 'Confirm password should match';
      }
    });
  }

  function Submit() {
    Keyboard.dismiss();
    let err = {};
    //email error
    name_and_values.forEach(data => {
      let name = data.name;
      let value = data.value;
      if (!value) {
        err[name] = 'Should not be empty';
      } 
    });
    setErrors(err);
    if (Object.keys(err).length == 0) {
      var formData = new FormData();
      formData.append('fishDetail', fishDetail);
      formData.append('images[]', fishphoto);
    

      let obj = {};
      obj.fishDetail = fishDetail;
      
      // dispatch(signUpWithEmail(obj));
      // dispatch({type:REGISTER,payloads:formData});
    }
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white1}}>
      <View
        style={{
          flex: 1,
        }}>
        <ImageBackground source={icons.ic_signup_bg} style={styles.bgImg}>
          <Header
            containerStyle={{
              backgroundColor: 'transparent',
              height: moderateScale(60),
            }}
            title={'Fish Details'}
            titleStyle={{fontFamily: fonts.bold}}
            leftIconSource={icons.ic_back_white}
            leftButtonStyle={{
              tintColor: colors.white1,
            }}
            onLeftPress={() => {
              navigation.goBack();
            }}
          />

          <ScrollView style={{flex: 1}}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.subContainer}
              contentContainerStyle={styles.subContentContainer}
              keyboardShouldPersistTaps={'always'}
              showsVerticalScrollIndicator={false}>
              <View
                style={{
                  marginTop: moderateScale(30),
                }}>
                <View>
                  <TextInputComp
                    label={strings.fishWeight}
                    value={fishDetail}
                    placeholder={strings.enterfishweight}
                    labelTextStyle={styles.labelTextStyle}
                    onChangeText={fishDetail => setFishDetail(fishDetail)}
                    onFocus={() =>
                      setErrors({
                        ...errors,
                        fishDetail: '',
                      })
                    }
                  />
                  {errors.fishDetail ? (
                    <Text
                      transparent
                      style={{color: colors.primary, bottom: 14}}>
                      {errors.fishDetail}
                    </Text>
                  ) : null}
                </View>
                <View style={styles.Container}>
                  <Text style={styles.Lable}>Uplaod image</Text>

                  <TouchableOpacity
                    style={styles.uploadContainer}
                    onPress={() => _doOpenOption('fishphoto')}>
                    <Image
                      source={
                        fishphoto != '' ? {uri: fishphoto} : icons.uploadImage1
                      }
                      resizeMode="cover"
                      style={{
                        top: 20,
                        borderRadius: moderateScale(100),
                        height: fishphoto != '' ? '100%' : '115%',
                        width: fishphoto != '' ? '100%' : '155%',
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <View
                style={{
                  marginTop: layout.size.height/8,

                }}>
                <Button
                  style={{
                    backgroundColor: colors.primary,
                    borderRadius: 20,
                    width: layout.size.width - 100,
                    alignSelf: 'center',
                   
                  }}
                  labelStyle={{fontSize:20, fontFamily:fonts.bold}}
                  label={strings.submit}
                  onPress={() => Submit()}
                />
              </View>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default FishDetails;

const styles = StyleSheet.create({
  bgImg: {
    flex: 1,
  },
  subContainer: {
    paddingHorizontal: moderateScale(15),

  },
  subContentContainer: {
    paddingBottom: moderateScale(40),
  },
  labelTextStyle: {
    fontFamily: fonts.semiBold,
    fontSize: moderateScale(18),
    color: colors.white1,
    bottom:moderateScale(10)
  },
  Container: {
    alignSelf: 'center',
  },

  uploadContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(200),
    width: moderateScale(200),
    alignSelf: 'center',
    marginTop: moderateScale(65),
    borderRadius: moderateScale(100),
    borderColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    borderWidth: 0.5,
  },
  Lable: {
    fontSize: moderateScale(20),
    fontFamily: fonts.semiBold,
    color: colors.white1,
    alignSelf: 'center',
    top: moderateScale(45),
  },
});
