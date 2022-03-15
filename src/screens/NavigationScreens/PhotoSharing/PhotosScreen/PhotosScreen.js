import React, {useState, useEffect} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {fonts, icons} from '../../../../../assets';
import {Header, Loader} from '../../../../components/common';
import {savephoto} from '../../../../store/actions';
import {colors, screenNames} from '../../../../utilities/constants';
import {layout} from '../../../../utilities/layout';
import styles from './styles';
import RNFetchBlob from 'rn-fetch-blob';
const fs = RNFetchBlob.fs;

let photosArr = [];
const PhotosScreen = ({navigation, route}) => {
  console.log('route in phiotos screen ', route);
  let auth = useSelector(state => state.auth);
  let app = useSelector(state => state.app);

  console.log(auth, 'auth>>>>>>>>>>>>', app, 'app>>>>>>>>>>>>>>>>');
  const dispatch = useDispatch();
  const [image, setImage] = useState(
    route?.params?.data?.data?.LiveCatchReport?.image,
  );
  const [additionalimage, setadditionalimage] = useState('');
  const [Photopost1, setPhotopost1] = useState('');
  const [Photopost2, setPhotopost2] = useState('');
  const [Photopost3, setPhotopost3] = useState('');
  const [Photopost4, setPhotopost4] = useState('');
  const [Photopost5, setPhotopost5] = useState('');
  
  // console.log(`http://admin.lokahifishing.com/LCR_images/user_fishes/${image}`,'dfhekqvv');

  useEffect(() => {
    // if (route?.params?.data?.data?.LiveCatchReport?.is_private == "true")
    // {setPhotopost1(`http://admin.lokahifishing.com/LCR_images/user_fishes/${image}`)}
    // else {setPhotopost1()}
    
    let imagePath = null;
    RNFetchBlob.config({
      fileCache: true,
    })
      .fetch(
        'GET',
        `http://admin.lokahifishing.com/LCR_images/user_fishes/${image}`
        ,
      )
      // the image is now dowloaded to device's storage
      .then(resp => {
        console.log('resp', resp)
        // the image path you can use it directly with Image component
        imagePath = resp.path();
        return resp.readFile('base64');
      })
      .then(base64Data => {
        // here's base64 encoded image
        console.log(base64Data);
        console.log(`data:image/jpeg;base64,${base64Data}`,'`data:image/jpeg;base64,${base64Data}`');
       setPhotopost1(`data:image/jpeg;base64,${base64Data}`)
      //  if (!base64Data) {
      //   setPhotopost1(`data:image/jpeg;base64,${base64Data}`)
      // }else{setPhotopost1('')}
        // remove the file from storage
        return fs.unlink(imagePath);
      });


  }, []);

  function _doOpenOption(indx) {
    Alert.alert(
      '',
      'Please Select',
      [
        {text: 'Camera', onPress: () => _doOpenCamera(indx)},
        {text: 'Gallery', onPress: () => _doOpenGallery(indx)},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: true},
    );
  }
  function _doOpenCamera(indx) {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
      multiple: true,
      // compressImageQuality: 0.8,
      includeBase64: true,
    }).then(res => {
       console.log(`ress`, res);
        if (indx == 1) {
          setPhotopost1(`data:${res.mime};base64,${res.data}`);
        } else if (indx == 2) {
          setPhotopost2(`data:${res.mime};base64,${res.data}`);
        } else if (indx == 3) {
          setPhotopost3(`data:${res.mime};base64,${res.data}`);
        } else if (indx == 4) {
          setPhotopost4(`data:${res.mime};base64,${res.data}`);
        } else {
          setPhotopost5(`data:${res.mime};base64,${res.data}`);
        }
      
    });
  }
  function _doOpenGallery(index) {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      // compressImageQuality: 0.8,
      includeBase64: true,
    }).then(res => {
      console.log(`ress`, res);
      
        if (index == 1) {
          console.log(`data:${res.mime};base64,${res.data}`,'`data:${res.mime};base64,${res.data}`');

          setPhotopost1(`data:${res.mime};base64,${res.data}`);
        } else if (index == 2) {
          setPhotopost2(`data:${res.mime};base64,${res.data}`);
        } else if (index == 3) {
          setPhotopost3(`data:${res.mime};base64,${res.data}`);
        } else if (index == 4) {
          setPhotopost4(`data:${res.mime};base64,${res.data}`);
        } else {
          setPhotopost5(`data:${res.mime};base64,${res.data}`);
        }
      
    });
  }

  //Hit api here>>>>>>>>>>>
  const postApi = () => {
    Keyboard.dismiss();
    let token = auth && auth.userDetails.access_token;
    let formData = new FormData();

    if (Photopost1 != '') {
      formData.append(`image[0]`, Photopost1);
    }
    if (Photopost2 != '') {
      formData.append(`image[1]`, Photopost2);
    }
    if (Photopost3 != '') {
      formData.append(`image[2]`, Photopost3);
    }
    if (Photopost4 != '') {
      formData.append(`image[3]`, Photopost4);
    }
    if (Photopost5 != '') {
      formData.append(`image[4]`, Photopost5);
    } else {
      console.log('do nothing');
    }
    formData.append('title_img', additionalimage);
     console.log(formData, 'sending to aApi');
    dispatch(savephoto(formData, token));
  };
  return (
    <ImageBackground source={icons.ic_signup_bg} style={{flex: 1}}>
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
          titleStyle={{fontFamily: fonts.bold}}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.white1
          }}
          
          onLeftPress={() => {
            if (route?.params?.data?.data?.LiveCatchReport?.is_private == "true"){navigation.navigate(screenNames.HomeStack)} else { navigation.goBack();}
           
          }}
          
        />
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          style={{flex: 1}}
          contentContainerStyle={{paddingBottom: moderateScale(2)}}
          keyboardShouldPersistTaps={'always'}
          showsVerticalScrollIndicator={false}>
          <View style={styles.viewStyle}>
            <View style={{margin: 10, flexDirection: 'column'}}>
              <View
                style={{
                  margin: 5,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  onPress={() => _doOpenOption(1)}
                  style={styles.uploadContainer}>
                  <Image
                    source={
                      Photopost1 != '' ? {uri: Photopost1} : icons.no_image
                    }
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
                    source={
                      Photopost2 != '' ? {uri: Photopost2} : icons.no_image
                    }
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
                    source={
                      Photopost3 != '' ? {uri: Photopost3} : icons.no_image
                    }
                    resizeMode="cover"
                    style={{
                      borderRadius: moderateScale(100),
                      height: Photopost3 != '' ? '100%' : '100%',
                      width: Photopost3 != '' ? '100%' : '100%',
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  margin: 5,
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}>
                <TouchableOpacity
                  onPress={() => _doOpenOption(4)}
                  style={styles.uploadContainer}>
                  <Image
                    source={
                      Photopost4 != '' ? {uri: Photopost4} : icons.no_image
                    }
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
                    source={
                      Photopost5 != '' ? {uri: Photopost5} : icons.no_image
                    }
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
                onPress={() => postApi()}>
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
        </KeyboardAwareScrollView>
        <Loader isAbsolute isLoading={app.loading} />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default PhotosScreen;
