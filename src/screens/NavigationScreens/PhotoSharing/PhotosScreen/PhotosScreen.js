import React, { useState } from 'react';
import {
  Alert, Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { moderateScale } from 'react-native-size-matters';
import { fonts, icons } from '../../../../../assets';
import { Header } from '../../../../components/common';
import { savephoto } from '../../../../store/actions';
import { colors } from '../../../../utilities/constants';
import { layout } from '../../../../utilities/layout';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';

const PhotosScreen = ({ navigation }) => {
  let auth = useSelector(state => state.auth);
  let app = useSelector(state => state.app);

  console.log(auth, 'auth>>>>>>>>>>>>', app, 'app>>>>>>>>>>>>>>>>');
  const dispatch = useDispatch();
  const [additionalimage, setadditionalimage] = useState('');
  const [Photopost1, setPhotopost1] = useState('');
  const [Photopost2, setPhotopost2] = useState('');
  const [Photopost3, setPhotopost3] = useState('');
  const [Photopost4, setPhotopost4] = useState('');
  const [Photopost5, setPhotopost5] = useState('');


  function _doOpenOption(indx) {
    Alert.alert(
      '',
      'Please Select',
      [
        { text: 'Camera', onPress: () => _doOpenCamera(indx) },
        { text: 'Gallery', onPress: () => _doOpenGallery(indx) },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      { cancelable: true },
    );
  }
  function _doOpenCamera(indx) {
    ImagePicker.openCamera({
      width: 200,
      height: 200,
      cropping: true,
      multiple: true,
      compressImageQuality: 0.2,
    }).then(res => {
      console.log(`ress`, res);
      if (Platform.OS == 'ios') {
        if (indx == 1) {
          setPhotopost1(res.path);
        } else if (indx == 2) {
          setPhotopost2(res.path)
        } else if (indx == 3) {
          setPhotopost3(res.path)
        } else if (indx == 4) {
          setPhotopost4(res.path)
        } else {
          setPhotopost5(res.path)
        }
      } else {
        setPhotopost1(res.path);
      }
      0;
    });
  }
  function _doOpenGallery(index) {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
      compressImageQuality: 0.2,
    }).then(res => {
      console.log(`ress`, res);
      if (Platform.OS == 'ios') {

        if (index == 1) {
          setPhotopost1(res.sourceURL);
        } else if (index == 2) {
          setPhotopost2(res.sourceURL)
        } else if (index == 3) {
          setPhotopost3(res.sourceURL)
        } else if (index == 4) {
          setPhotopost4(res.sourceURL)
        } else {
          setPhotopost5(res.sourceURL)
        }
      }

      else {
        setPhotopost1(res.path);
      }
    });
  }

  //Hit api here>>>>>>>>>>>



  const postApi = () => {
    Keyboard.dismiss();
    let token = auth && auth.userDetails.access_token;
    let formData = new FormData();

    if (Photopost1 && Photopost1 != '') {
      formData.append('image[0]', {
        uri: Photopost1,
        type: 'image/jpeg', // or photo.type
        name: 'photo1',
      });
    }

    formData.append('title_img', additionalimage);
    console.log(formData, 'sending to aApi');
    dispatch(savephoto(formData, token));
  }
  return (
    <ImageBackground
      source={icons.ic_signup_bg}
      style={{ flex: 1, height: '100%' }}>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <Header
          containerStyle={{
            backgroundColor: 'transparent',
            height: moderateScale(60),
          }}
          title={'Upload Photo'}
          titleStyle={{ fontFamily: fonts.bold }}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.white1,
          }}
          onLeftPress={() => {
            navigation.goBack();
          }}
        />
        <View style={styles.viewStyle}>
          <View style={{ margin: 10, flexDirection: 'column' }}>
            <View style={{ margin: 5, flexDirection: 'row', justifyContent: 'space-between' }}>

              <TouchableOpacity
                onPress={() => _doOpenOption(1)}
                style={styles.uploadContainer}>
                <Image
                  source={Photopost1 != '' ? { uri: Photopost1 } : icons.no_image}
                  resizeMode="cover"
                  style={{
                    borderRadius: moderateScale(100),
                    height: Photopost1 != '' ? '100%' : '100%',
                    width: Photopost1 != '' ? '100%' : '100%',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => _doOpenOption(2)}
                style={styles.uploadContainer}>
                <Image
                  source={Photopost2 != '' ? { uri: Photopost2 } : icons.no_image}
                  resizeMode="cover"
                  style={{
                    borderRadius: moderateScale(100),
                    height: Photopost2 != '' ? '100%' : '100%',
                    width: Photopost2 != '' ? '100%' : '100%',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => _doOpenOption(3)}
                style={styles.uploadContainer}>
                <Image
                  source={Photopost3 != '' ? { uri: Photopost3 } : icons.no_image}
                  resizeMode="cover"
                  style={{
                    borderRadius: moderateScale(100),
                    height: Photopost3 != '' ? '100%' : '100%',
                    width: Photopost3 != '' ? '100%' : '100%',
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ margin: 5, flexDirection: 'row', justifyContent: 'space-evenly' }}>
              <TouchableOpacity
                onPress={() => _doOpenOption(4)}
                style={styles.uploadContainer}>
                <Image
                  source={Photopost4 != '' ? { uri: Photopost4 } : icons.no_image}
                  resizeMode="cover"
                  style={{
                    borderRadius: moderateScale(100),
                    height: Photopost4 != '' ? '100%' : '100%',
                    width: Photopost4 != '' ? '100%' : '100%',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => _doOpenOption(5)}
                style={styles.uploadContainer}>
                <Image
                  source={Photopost5 != '' ? { uri: Photopost5 } : icons.no_image}
                  resizeMode="cover"
                  style={{
                    borderRadius: moderateScale(100),
                    height: Photopost5 != '' ? '100%' : '100%',
                    width: Photopost5 != '' ? '100%' : '100%',
                  }}
                />
              </TouchableOpacity>

            </View>
          </View>
          <View style={styles.lineView} activeOpacity={0.8} />
          <Text style={styles.tittleView}>ADD TITTLE</Text>
          <View
            style={{
              margin: 10,
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="Enter your tittle here ...."
              autoCapitalize="sentences"
              numberOfLines={4}
              style={{
                fontSize: 16,
                paddingHorizontal: 10,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: colors.grey1,
                paddingTop: 15,
                paddingBottom: 15,
                height: moderateScale(110),
                width: layout.size.width / 1.5,
                borderWidth: 2,
              }}
              returnKeyType="done"
              multiline={true}
              blurOnSubmit={true}
              onSubmitEditing={() => {
                Keyboard.dismiss();
              }}
              value={additionalimage}
              onChangeText={additionalimage =>
                setadditionalimage(additionalimage)
              }
            />
          </View>
          <View
            style={{
              height: layout.size.height / 4,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={styles.postView}
              onPress={() => postApi()}

            >
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: fonts.semiBold,
                  textAlign: 'center',
                }}>
                post
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default PhotosScreen;
