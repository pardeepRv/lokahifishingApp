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
//eternal libraries
import {moderateScale} from 'react-native-size-matters';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch} from 'react-redux';

//internal lbarries
import {fonts, icons} from '../../../../assets';
import {Header} from '../../../components/common/Header';
import {strings} from '../../../localization';
import {colors} from '../../../utilities/constants';
import styles from './styles';
import TextInputComp from '../../../components/common/TextInputComp';
import { Button } from '../../../components/common/Button';
import { layout } from '../../../utilities/layout';

const PhotoSharingPost = ({navigation}) => {
  let passwordTextInput = useRef(null);
  const dispatch = useDispatch();
  const [postsphoto, setPostsphoto] = useState('');
  const [postsphoto1, setPostsphoto1] = useState('');
  const [postsphoto2, setPostsphoto2] = useState('');
  const [postsphoto3, setPostsphoto3] = useState('');
  const [postsphoto4, setPostsphoto4] = useState('');
  const [title, setTitle] = useState('');

  const [errors, setErrors] = useState({
    isLoading: false,
    postsphoto: '',
    postsphoto1: '',
    postsphoto2: '',
    postsphoto3: '',
    postsphoto4: '',
    title: '',
  });

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
      if (value == 'postsphoto') {
        setPostsphoto(data);
      }else if (value == 'postsphoto1') {
        setPostsphoto1(data);
      }
      else if (value == 'postsphoto2') {
        setPostsphoto2(data);
      }
      else if (value == 'postsphoto3') {
        setPostsphoto3(data);
      }
      else if (value == 'postsphoto4') {
        setPostsphoto4(data);
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
      if (value == 'postsphoto') {
        setPostsphoto(data);
      }else if (value == 'postsphoto1') {
        setPostsphoto1(data);
      }
      else if (value == 'postsphoto2') {
        setPostsphoto2(data);
      }
      else if (value == 'postsphoto3') {
        setPostsphoto3(data);
      }
      else if (value == 'postsphoto4') {
        setPostsphoto4(data);
      }
    });
  }
  return (
    <ImageBackground source={icons.LeaderBoard} style={styles.image}>
      <SafeAreaView style={styles.content}>
        <Header
          containerStyle={{
            backgroundColor: colors.transparent,
            height: moderateScale(60),
          }}
          title={strings.uploadphotosharingpost}
          blackTitle
          titleStyle={{fontFamily: fonts.bold}}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.black1,
          }}
          onLeftPress={() => {
            navigation.goBack();
          }}
        />
          <ScrollView style={{flex: 1}}>

        <View style={{flex: 1, flexDirection: 'column'}}>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              justifyContent: 'space-between',
            }}>
            <View style={styles.uploadContainer}>
              <Image
                source={
                  postsphoto != '' ? {uri: postsphoto} : icons. user_placeholder_man_0
                }
                resizeMode={postsphoto != '' ? 'cover' : 'contain'}
                style={{
                  borderRadius: moderateScale(100),
                  height: postsphoto != '' ? '100%' : '100%',
                  width: postsphoto != '' ? '100%' : '100%',
                }}
              />

              <View style={styles.uploadContent}>
                <TouchableOpacity
                  style={[styles.uploadStoreBtn]}
                  onPress={() => _doOpenOption('postsphoto')}>

                  <Image
                    style={styles.logo2}
                    source={icons.ic_cateagory}
                    resizeMode="contain"
                  />
                      
                </TouchableOpacity>
              </View>

            </View>
            <View style={styles.uploadContainer}>
              <Image
                source={
                  postsphoto1 != '' ? {uri: postsphoto1} : icons.image_category
                }
                resizeMode={postsphoto1 != '' ? 'cover' : 'contain'}
                style={{
                  borderRadius: moderateScale(100),
                  height: postsphoto1 != '' ? '100%' : '100%',
                  width: postsphoto1 != '' ? '100%' : '100%',
                }}
              />


              <View style={styles.uploadContent}>

                <TouchableOpacity
                  style={[styles.uploadStoreBtn]}
                  onPress={() => _doOpenOption('postsphoto1')}>

                  <Image
                    style={styles.logo2}
                    source={icons.ic_cateagory}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>


            </View>
            <View style={styles.uploadContainer}>
              <Image
                source={
                  postsphoto2 != '' ? {uri: postsphoto2} : icons.image_category
                }
                resizeMode={postsphoto2 != '' ? 'cover' : 'contain'}
                style={{
                  borderRadius: moderateScale(100),
                  height: postsphoto2 != '' ? '100%' : '100%',
                  width: postsphoto2 != '' ? '100%' : '100%',
                }}
              />
              <View style={styles.uploadContent}>
                <TouchableOpacity
                  style={[styles.uploadStoreBtn]}
                  onPress={() => _doOpenOption('postsphoto2')}>
                  <Image
                    style={styles.logo2}
                    source={icons.ic_cateagory}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: moderateScale(58),
            }}>
            <View style={styles.uploadContainer}>
              <Image
                source={
                  postsphoto3 != '' ? {uri: postsphoto3} : icons.image_category
                }
                resizeMode={postsphoto3 != '' ? 'cover' : 'contain'}
                style={{
                  borderRadius: moderateScale(100),
                  height: postsphoto3 != '' ? '100%' : '100%',
                  width: postsphoto3 != '' ? '100%' : '100%',
                }}
              />
              <View style={styles.uploadContent}>
                <TouchableOpacity
                  style={[styles.uploadStoreBtn]}
                  onPress={() => _doOpenOption('postsphoto3')}>
                  <Image
                    style={styles.logo2}
                    source={icons.ic_cateagory}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.uploadContainer}>
              <Image
                source={
                  postsphoto4 != '' ? {uri: postsphoto4} : icons.image_category
                }
                resizeMode={postsphoto4 != '' ? 'cover' : 'contain'}
                style={{
                  borderRadius: moderateScale(100),
                  height: postsphoto4 != '' ? '100%' : '100%',
                  width: postsphoto4 != '' ? '100%' : '100%',
                }}
              />
              <View style={styles.uploadContent}>
                <TouchableOpacity
                  style={[styles.uploadStoreBtn]}
                  onPress={() => _doOpenOption('postsphoto4')}>
                  <Image
                    style={styles.logo2}
                    source={icons.ic_cateagory}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: colors.black1,
              height: moderateScale(1.5),
              marginTop: moderateScale(40),
              margin: 20,
            }}></View>
          <Text
            style={{
              fontFamily: fonts.bold,
              fontSize: moderateScale(15),
              color: colors.black1,
              alignSelf: 'center',
            }}>
            {strings.add}
          </Text>
          <View
            style={[
              styles.listView,
              {
                backgroundColor: colors.transparent,
              },
            ]}
            activeOpacity={0.8}>
            <View>
              <TextInputComp
                style={styles.input}
                multiline
                numberOfLines={6}
                value={title}
                placeholder={strings.titlehere}
                labelTextStyle={styles.labelTextStyle}
                onChangeText={title => setTitle(title)}
              />
            </View>
          </View>
          <View
                style={{
                  marginTop: moderateScale(1),
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
              {strings.post}
            </Text>
                  </TouchableOpacity>
              </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default PhotoSharingPost;
