import React, { useState } from 'react';
import {
    FlatList,
    Image,
    ImageBackground,
    SafeAreaView, ScrollView, Text,
    TouchableOpacity,
    View,
    TextInput,
    Alert
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { fonts, icons } from '../../../../../assets';
import { Header } from '../../../../components/common';
import TextInputComp from '../../../../components/common/TextInputComp';
import { colors } from '../../../../utilities/constants';
import { layout } from '../../../../utilities/layout';
import styles from './styles';
import ImagePicker from 'react-native-image-crop-picker';


let timeLineArr = [1, 2, 3, 4, 5, 6];

const PhotosScreen = ({ navigation }) => {
    const [timeline, setTimeline] = useState(timeLineArr);
    const [additionalNotes, setAdditionalNotes] = useState('');
    const [Photopost, setPhotopost] = useState('');

    function _doOpenOption() {
        Alert.alert(
          '',
          'Please Select',
          [
            {text: 'Camera', onPress: () => _doOpenCamera()},
            {text: 'Gallery', onPress: () => _doOpenGallery()},
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
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
          multiple: true,
          // includeBase64: true,
          compressImageQuality: 0.2,
        }).then(res => {
          console.log(`ress`, res);
          console.log(` res && res.assets && res.assets.length > 0 && res.assets[0].uri`,  res.path)
          res && res.assets && res.assets.length > 0 && res.assets[0].uri
          if (Platform.OS == 'ios') {
            setPhotopost(res.path);
          } else {
            setPhotopost(res.path);
          }0
        });
      }
      function _doOpenGallery() {
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true,
          // includeBase64: true,
          compressImageQuality: 0.2,
        }).then(res => {
          console.log(`ress`, res);
          // res && res.assets && res.assets.length > 0 && res.assets[0].uri,
          if (Platform.OS == 'ios') {
            setPhotopost(res.sourceURL);
          } else {
            setPhotopost(res.path);
          }
        });
      }

    const _renderView = ({ item, index }) => (
        <View style={{ margin: 10 }}>
            <TouchableOpacity
                onPress={() => _doOpenOption()}
                style={styles.uploadContainer}
            >
                <Image
                    source={
                        Photopost != '' ? {uri: Photopost} : icons.no_image
                      }
                    resizeMode='cover'
                    style={{
                        borderRadius: moderateScale(100),
                        height: Photopost != '' ? '100%' : '100%',
                        width: Photopost != '' ? '100%' : '100%',
                    }}
                />
            </TouchableOpacity>


        </View>

        // <View style={styles.listView} activeOpacity={0.8}>
        //     <View style={styles.viewStyle}>
        //         <View style={styles.viewStylerow}>
        //             <TouchableOpacity style={styles.uploadContainer}
        //                 // onPress={() => _doOpenOption()}
        //                 onPress={() => alert('hello')}
        //             >
        //                 <Image
        //                     source={{
        //                         uri: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80'
        //                     }}
        //                     // resizeMode={profilePhoto != '' ? 'cover' : 'contain'}
        //                     // style={{
        //                     //     borderRadius: moderateScale(100),
        //                     //     height: profilePhoto != '' ? '80%' : '100%',
        //                     //     width: profilePhoto != '' ? '80%' : '100%',
        //                     // }}
        //                     resizeMode='contain'
        //                     style={{
        //                         borderRadius: moderateScale(100),
        //                         height: '100%',
        //                         width: '100%'
        //                     }}
        //                 />

        //             </TouchableOpacity>
        //         </View>
        //     </View>
        // </View>
    );



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
                    title={'Upload Photoshring Post'}
                    titleStyle={{ fontFamily: fonts.bold }}
                    leftIconSource={icons.ic_back_white}
                    leftButtonStyle={{
                        tintColor: colors.white1,
                    }}
                    onLeftPress={() => {
                        navigation.goBack();
                    }}
                />

                <View
                    style={styles.viewStyle}
                >

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
                    <View style={{

                        margin: 10, alignItems: 'center'
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
                                borderWidth: 2
                            }}
                            returnKeyType="done"
                            multiline={true}
                            blurOnSubmit={true}
                            onSubmitEditing={() => {
                                Keyboard.dismiss();
                            }}
                            value={additionalNotes}
                            onChangeText={additionalNotes => setAdditionalNotes(additionalNotes)}
                        />
                    </View>
                    <View style={{
                        height: layout.size.height / 4,
                        alignItems: 'center'
                    }}>

                        <TouchableOpacity style={styles.postView}>

                            <Text style={{ fontSize: 18, fontFamily: fonts.semiBold, textAlign: 'center' }}>post</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </SafeAreaView>
        </ImageBackground>
    );
};

export default PhotosScreen;
