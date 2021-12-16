import React, { useState } from 'react';
import {
  Alert, Image, ImageBackground,
  Keyboard,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { moderateScale } from 'react-native-size-matters';
import Video from 'react-native-video';
import { useDispatch, useSelector } from 'react-redux';
import { fonts, icons } from '../../../../../assets';
import { Header } from '../../../../components/common';
import { savevideo } from '../../../../store/actions';
import { colors } from '../../../../utilities/constants';
import { layout } from '../../../../utilities/layout';
import styles from './styles';

const Videoscreen = ({ navigation }) => {
  let auth = useSelector(state => state.auth);
  let app = useSelector(state => state.app);

  console.log(auth, 'auth>>>>>>>>>>>>', app, 'app>>>>>>>>>>>>>>>>');
  const dispatch = useDispatch();
  const [additionalTittle, setadditionalTittle] = useState('');
  const [VideoPost, setVideoPost] = useState('');
  const [status, setStatus] = React.useState({});
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);
  function _doOpenOption() {
    Alert.alert(
      '',
      'Please Select',
      [
        { text: 'Gallery', onPress: () => _doOpenGallery() },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      { cancelable: true },
    );
  }
  function _doOpenGallery() {
    ImagePicker.openPicker({
      mediaType: 'video',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 4000, //Video max duration in seconds
      saveToPhotos: true,
    }).then(video => {
      console.log(`ress`, video);
      if (Platform.OS == 'ios') {
        setVideoPost(video.path);
      } else {
        setVideoPost(video.path);
      }
    });
  }
  const videoBuffer = isBuffer => {
    console.log(isBuffer);
    //here you could set the isBuffer value to the state and then do something with it
    //such as show a loading icon
  };

  const Save = () => {
    Keyboard.dismiss();

    //email error
    let token = auth && auth.userDetails.access_token;


    let formData = new FormData();

    if (VideoPost && VideoPost != '') {
      formData.append('video', {
        uri: VideoPost,
        type: 'video/mp4',
        name: 'video1',
      });
    }

    formData.append('title_vid', additionalTittle);
    console.log(formData, 'sending to aApi');
    dispatch(savevideo(formData, token));
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
          title={'Upload video'}
          titleStyle={{ fontFamily: fonts.bold }}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.white1,
          }}
          onLeftPress={() => {
            navigation.goBack();
          }}
        />

        <ScrollView style={styles.viewStyle}>
          <View
            style={{
              margin: moderateScale(10),
              height: layout.size.height / 2.8,
              backgroundColor: colors.white1,
              top: 20,
            }}>
            <View style={styles.uploadContainer} activeOpacity={0.5}>
              {VideoPost != '' ? (
                <Video
                  source={{ uri: VideoPost }}
                  paused={false}
                  repeat={true}
                  controls={true}
                  style={{ width: '100%', height: '100%' }}
                />
              ) : (
                <TouchableOpacity
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  onPress={() => _doOpenOption()}>
                  <Image
                    source={icons.uploadImage1}
                    style={{
                      width: '80%',
                      height: '80%',
                      resizeMode: 'contain',
                      alignSelf: 'center',
                    }}
                  />
                </TouchableOpacity>
              )}

              <TouchableOpacity onPress={() => _doOpenOption()}>
                <Text style={styles.tittleView}>UPLOAD VIDEO</Text>
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
              value={additionalTittle}
              onChangeText={additionalTittle =>
                setadditionalTittle(additionalTittle)
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
              onPress={() => Save()}
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
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Videoscreen;
