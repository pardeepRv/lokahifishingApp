import React, {useRef, useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { fonts, icons } from '../../../../../assets';
import { Header } from '../../../../components/common/Header';
import { colors } from '../../../../utilities/constants';
import {useDispatch} from 'react-redux';

//external libraries
import ImagePicker from 'react-native-image-crop-picker';
import { layout } from '../../../../utilities/layout';
import { Button } from '../../../../components/common/Button';
import { strings } from '../../../../localization';




const UploadImage = ({navigation}) => {
  let passwordTextInput = useRef(null);
  const dispatch = useDispatch();
  const [uploadImage, setUploadImage] = useState('');

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
      if (value == 'uploadImage') {
        setUploadImage(data);
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
        if (value == 'uploadImage') {
          setUploadImage(data);
        }
    });
  }
  
  return (
    <ImageBackground
    source={icons.LeaderBoard}
    style={{flex: 1, height: '100%'}}>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
          <Header
          containerStyle={{
            backgroundColor: 'transparent',
            height: moderateScale(60),
          }}
          blackTitle
          title={'Upload Image'}
          titleStyle={{fontFamily: fonts.bold}}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.black1,
          }}
          onLeftPress={() => {
            navigation.goBack();
          }}
          // onRightPress={() => {
          //   navigation.navigate('EditLCRDetails');
          // }}
          // rightIconSource={icons.ic_edit}
          // rightIconStyle={{
          //   height: 20,
          //   width: 20,
          //   tintColor: colors.black1,
          // }}
        />
        <ScrollView style={{flex: 1}}>

        <TouchableOpacity style={styles.uploadContainer}
        onPress={() => _doOpenOption('uploadImage')}>
                <Image
                  source={
                    uploadImage != ''
                      ? {uri: uploadImage}
                      : icons.uploadImage1
                  }
                  resizeMode="cover"
                  style={{
                    borderRadius: moderateScale(120),
                    height: uploadImage != '' ? '120%' : '100%',
                    width: uploadImage != '' ? '120%' : '100%',
                  }}
                />
              </TouchableOpacity>
              <View
                style={{
                  marginTop:layout.size.height/4,
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: colors.primary,
                    borderRadius: 20,
                    height:40,
                    width: layout.size.width /3,
                    alignSelf: 'center',
                  }}

                  onPress={() => navigation.goBack()}>
                    <Text style={styles.sharingtext}>
              {strings.next}
            </Text>
                  </TouchableOpacity>
              </View>

</ScrollView>
        </SafeAreaView>
      </ImageBackground>
  );
};
const styles = StyleSheet.create({
  uploadContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: layout.size.height/3.7,
    width: layout.size.height/3.7,
    alignSelf: 'center',
    marginTop: layout.size.height/8,
    borderRadius: moderateScale(120),
    borderColor: colors.black1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.9,

// borderStyle:"dashed"
  },
  uploadContent: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 10,
  },
  uploadStoreBtn: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'transparent',
    top: 20,
    // alignItems: 'center',
  },
  logo2: {
    tintColor: colors.secondry,
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: 20,
  },
  sharingtext: {
    fontFamily: fonts.semiBold,
    fontSize: moderateScale(20),
    color: colors.white1,
    paddingHorizontal: moderateScale(10),
    top:5,
    alignSelf:'center'
  },
  
});

export default UploadImage;
