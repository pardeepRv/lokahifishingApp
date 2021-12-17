import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Image,
    ImageBackground,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import TimeAgo from 'react-native-timeago';
import Video from 'react-native-video';
import { useDispatch, useSelector } from 'react-redux';
import { fonts, icons } from '../../../../assets';
import { Loader } from '../../../components/common';
import { Header } from '../../../components/common/Header';
import { savetimelinelist } from '../../../store/actions';
import { colors } from '../../../utilities/constants';
import { layout } from '../../../utilities/layout';
import styles from './styles';


let timeLineArr = [
    {
        img: icons.ic_LokahiLogo,
        name: 'Edwin watamura',
        date: 'Oct. 4, 2021 1:34 PM',
        description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
    },
    {
        img: icons.ic_LokahiLogo,
        name: 'Jim hori',
        date: 'Oct. 5, 2021 1:34 PM',
        description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'

    },
    {
        img: icons.ic_LokahiLogo,
        name: 'Edwin watamura',
        date: 'Oct. 4, 2021 1:34 PM',
        description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'

    },
    {
        img: icons.ic_LokahiLogo,
        name: 'Edwin watamura',
        date: 'Oct. 4, 2021 1:34 PM',
        description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'

    },
];

const PhotoSharing = ({ navigation }) => {
    const [timeline, settimeline] = useState([]);
    let auth = useSelector(state => state.auth);
    let app = useSelector(state => state.app);

    console.log(app, 'appp in timelinelist   page>>>>>>>>>>');
    console.log(auth, 'auth in timelinelist page >>>>>>>>>>');
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('coming in this on timelinelist page');
        const unsubscribe = navigation.addListener('focus', () => {
            gettimelinefunc();
        });
        return unsubscribe;
    }, [navigation]);

    function gettimelinefunc() {
        let token = auth && auth?.userDetails?.access_token;
        dispatch(
            savetimelinelist(token, cb => {
                if (cb) {
                    console.log(cb, 'callback list arr>>>>>>>>>>');
                    if (cb?.data?.data) {
                        let photosharingList = cb?.data?.data?.photosharing;
                        photosharingList.reverse();
                        settimeline(photosharingList)
                    }
                }
            }),
        );
    }

    const listViewForPhoto = (arr) => {
        return (
            <FlatList
                extraData={arr}
                data={arr}
                horizontal
                pagingEnabled
                renderItem={_renderPhotoView}
                keyExtractor={(item, index) => 'key' + index}
                ListHeaderComponent={() =>
                    !arr.length ? (
                        <Text style={styles.nomatch}>No Match found</Text>
                    ) : null
                }
            />
        )
    }
    const _renderPhotoView = ({ item, index }) => (
        <View
            style={{
                flex: 1,
            }}>
            {
                item && item.media_type == 'img' ?
                    <Image source={{
                        uri: `https://server3.rvtechnologies.in/LokahiFishing_Admin/public/photosharing/${item.media_name}`
                    }}
                        style={{
                            height: 150,
                            width: layout.size.width - 2,
                            resizeMode: 'cover',
                        }}
                    />
                    :
                    <Video
                        source={{ uri: `https://server3.rvtechnologies.in/LokahiFishing_Admin/public/photosharing/video/${item.media_name}` }}
                        paused={false}
                        repeat={true}
                        controls={true}
                        style={{ width: layout.size.width - 2, height: 200 }}
                    />
            }

        </View>

    )
    //View of flatlist
    const _renderView = ({ item, index }) => (
        <View style={styles.listView} >
            <View style={styles.viewStyle}>

                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                    }}>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Image
                            source={{
                                uri: item.user_image
                            }}
                            style={{
                                height: 50,
                                width: 50,
                                borderRadius: 25
                            }}
                        />
                        <Text style={[styles.nameStyle, { fontSize: 14, fontFamily: fonts.bold }]}>{item.user_name}</Text>
                        <TouchableOpacity
                            onPress={() => console.log('Share')}
                        >
                            <Image source={icons.sharearrow}
                                style={{
                                    alignSelf: 'flex-end',
                                    height: 20,
                                    width: 20,
                                }}
                            />
                        </TouchableOpacity>

                    </View>


                    <TimeAgo time={item.created_at} />

                    <View style={{
                        margin: 10,
                    }}>
                        {listViewForPhoto(item && item.photosharingmedia)}

                    </View>

                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                    onPress={()=>alert('coming soon')}
                    >
                        <View
                            style={{
                            }}
                        >
                            <Image source={icons.like} />
                            <Text style={[styles.dateStyle, {
                                fontSize: moderateScale(12),
                                width: moderateScale(150)
                            }]}>Liked by Pardeep and 6 others</Text>

                        </View>
                        <View>
                            <Image source={icons.photoComment} />
                            <Text style={[styles.dateStyle, {
                                fontSize: moderateScale(12),
                            }]}>2 comments</Text>
                        </View>
                    </TouchableOpacity>

                </View>

            </View>

        </View>
    );

    return (
        <ImageBackground
            source={icons.ic_signup_bg}
            style={{ flex: 1, }}>
            <SafeAreaView
                style={{
                    flex: 1,
                }}>
                <Header
                    containerStyle={{
                        backgroundColor: 'transparent',
                        height: moderateScale(60),
                    }}
                    title={'Lokahi Timeline'}
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
                    style={{
                        backgroundColor: colors.white1,
                        height: moderateScale(100),
                        margin: 10,
                        borderRadius: 10
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            paddingHorizontal: 10,
                            paddingVertical: 10
                        }}
                    >
                        <Image
                            source={{
                                uri: auth && auth.userDetails && auth.userDetails.profile_picture
                            }}
                            style={{
                                height: 50,
                                width: 50,
                                borderRadius: 25
                            }}
                        />
                        <Text style={{
                            fontFamily: fonts.bold,
                            fontSize: moderateScale(16),
                            paddingHorizontal: 10
                        }}>
                            Share your catch memory

                        </Text>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around'

                        }}
                    >
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                            onPress={() => navigation.navigate('PhotosScreen')}

                        >
                            <Image source={icons.photoUploadPhoto}
                                style={{
                                    height: 30,
                                    width: 30
                                }}
                            />
                            <Text style={{
                                fontFamily: fonts.regular,
                                paddingHorizontal: 10
                            }}>
                                Photos
                            </Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                            onPress={() => navigation.navigate('Videoscreen')}


                        >
                            <Image source={icons.photoVideo}
                                style={{
                                    height: 30,
                                    width: 30
                                }}
                            />
                            <Text style={{
                                fontFamily: fonts.regular,
                                paddingHorizontal: 10
                            }}>
                                Videos
                            </Text>

                        </TouchableOpacity>
                    </View>

                </View>

                <FlatList
                    extraData={timeline}
                    data={timeline}
                    renderItem={_renderView}
                    keyExtractor={(item, index) => 'key' + index}
                    ListHeaderComponent={() =>
                        !timeline.length ? (
                            <Text style={styles.nomatch}>No Match found</Text>
                        ) : null
                    }
                />
            </SafeAreaView>
            <Loader isLoading={app.loading} isAbsolute />

        </ImageBackground>
    );
};

export default PhotoSharing;
