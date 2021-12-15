import React, { useState } from 'react';
import {
    FlatList,
    Image,
    ImageBackground,
    SafeAreaView, ScrollView, Text,
    TouchableOpacity,
    View,
    TextInput,
    Alert,
    Keyboard
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { fonts, icons } from '../../../../../assets';
import { Header } from '../../../../components/common';
import TextInputComp from '../../../../components/common/TextInputComp';
import { colors } from '../../../../utilities/constants';
import { layout } from '../../../../utilities/layout';
import styles from './styles';
import ImagePicker from 'react-native-image-crop-picker';
import Video from 'react-native-video';

const Videoscreen = ({ navigation }) => {

    const [additionalNotes, setAdditionalNotes] = useState('');
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

            mediaType: "video",

            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
            videoQuality: 'low',
            durationLimit: 4000, //Video max duration in seconds
            saveToPhotos: true,

        }).then(video => {
            console.log(`ress`, video);
            // res && res.assets && res.assets.length > 0 && res.assets[0].uri,
            if (Platform.OS == 'ios') {
                setVideoPost(video.sourceURL);
            } else {
                setVideoPost(video.path);
            }
        });
    }


    const videoBuffer = (isBuffer) => {
        console.log(isBuffer)
        //here you could set the isBuffer value to the state and then do something with it
        //such as show a loading icon
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
                    title={'Upload Videoshring Post'}
                    titleStyle={{ fontFamily: fonts.bold }}
                    leftIconSource={icons.ic_back_white}
                    leftButtonStyle={{
                        tintColor: colors.white1,
                    }}
                    onLeftPress={() => {
                        navigation.goBack();
                    }}
                />

                <ScrollView
                    style={styles.viewStyle}
                >
                    <View style={{ margin: moderateScale(10), height: layout.size.height / 2.8, backgroundColor: colors.white1, top: 20 }}>
                        <TouchableOpacity style={styles.uploadContainer}
                            onPress={() => _doOpenOption()}
                            activeOpacity={0.5}
                        >
                            <Video
                                source={
                                    VideoPost != '' ? { uri: VideoPost } : {uri:
                                     'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4',
                                }}
            //                     source={{
            //                         uri:
            // 'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4',
            //                     }}
                                // style={{

                                //     height: VideoPost != '' ? '100%' : '100%',
                                //     width: VideoPost != '' ? '100%' : '100%',

                                // }}
                                // style={{
                                //     width: '100%',
                                //     height: '100%',
                                // }}
                                // useNativeControls
                                // resizeMode="contain"
                                // isLooping
                                // controls={true}
                                // onBuffer={videoBuffer}
                                // ref={(ref) => {
                                //     player = ref
                                // }}
                                paused={false}    
                                repeat={true}    
                                // paused={!isPlaying}  
                                // controls={true}  
                                style={{width: '100%',
                                     height: '100%',}}  
                                // muted={isMuted}  
                            />
                            <View>
                                <Text style={styles.tittleView}>UPLOAD VIDEO</Text></View></TouchableOpacity></View>
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

                        <TouchableOpacity style={styles.postView}
                       
                        onPress={() => {
                            navigation.goBack();
                        }}>

                            <Text style={{ fontSize: 18, fontFamily: fonts.semiBold, textAlign: 'center' }}>post</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </SafeAreaView>
        </ImageBackground>
    );
};

export default Videoscreen;
