import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {moderateScale} from 'react-native-size-matters';
import {fonts, icons} from '../../../../../assets';
import {Header} from '../../../../components/common';
import {colors} from '../../../../utilities/constants';
import {layout} from '../../../../utilities/layout';
import styles from './styles';

const PhotosScreen = ({navigation}) => {
  const [timeline, setTimeline] = useState([
    // {img: '', key: 0},
    // {img: '', key: 1},
    // {img: '', key: 2},
    // {img: '', key: 3},
    // {img: '', key: 4},
    // {img: '', key: 5},
    1,2,3,4,5,6
  ]);
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [Photopost, setPhotopost] = useState('');

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
      width: 200,
      height: 200,
      cropping: true,
      multiple: true,
      compressImageQuality: 0.2,
    }).then(res => {
      console.log(`ress`, res);
      if (Platform.OS == 'ios') {
        setPhotopost(res.path);
      } else {
        setPhotopost(res.path);
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
        setPhotopost(res.sourceURL);
        // console.log(timeline, 'time array');
        // timeline[index].img = res.sourceURL;
        // setTimeline(timeline);
      } else {
        setPhotopost(res.path);
      }
    });
  }

  const _renderView = ({item, index}) => (
    <View style={{margin: 10}}>
      <TouchableOpacity
        onPress={() => _doOpenOption(index)}
        style={styles.uploadContainer}>
        <Image
          source={Photopost != '' ? {uri: Photopost} : icons.no_image}
          resizeMode="cover"
          style={{
            borderRadius: moderateScale(100),
            height: Photopost != '' ? '100%' : '100%',
            width: Photopost != '' ? '100%' : '100%',
          }}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <ImageBackground
      source={icons.ic_signup_bg}
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
          title={'Upload Photoshring Post'}
          titleStyle={{fontFamily: fonts.bold}}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.white1,
          }}
          onLeftPress={() => {
            navigation.goBack();
          }}
        />

        <View style={styles.viewStyle}>
          <FlatList
            extraData={timeline}
            data={timeline}
            numColumns={3}
            renderItem={_renderView}
            keyExtractor={(item, index) => 'key' + index}
            ListHeaderComponent={() =>
              !timeline.length ? (
                <Text style={styles.nomatch}>No Match found</Text>
              ) : null
            }
          />
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
              value={additionalNotes}
              onChangeText={additionalNotes =>
                setAdditionalNotes(additionalNotes)
              }
            />
          </View>
          <View
            style={{
              height: layout.size.height / 4,
              alignItems: 'center',
            }}>
            <TouchableOpacity style={styles.postView}>
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
