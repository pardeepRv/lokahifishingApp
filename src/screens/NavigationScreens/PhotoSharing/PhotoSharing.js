import React, { useState } from 'react';
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
import { fonts, icons } from '../../../../assets';
import { Header } from '../../../components/common/Header';
import { colors } from '../../../utilities/constants';
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
    const [timeline, setTimeline] = useState(timeLineArr);

    //View of flatlist
    const _renderView = ({ item, index }) => (
        <TouchableOpacity style={styles.listView} activeOpacity={0.8}>
            <View style={styles.viewStyle}>
                <Image
                    source={{
                        uri: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80'
                    }}
                    style={{
                        height: 50,
                        width: 50,
                        borderRadius: 25
                    }}
                />
                <View
                    style={{
                        flex:1,
                        justifyContent: 'center',
                    }}>
                    <Text style={[styles.nameStyle, { fontSize: 14, fontFamily: fonts.bold }]}>{item.name}</Text>
                    <TouchableOpacity
                        onPress={() => console.log('Share')}
                    >
                        <Image source={icons.sharearrow}
                            style={{
                                alignSelf: 'flex-end',
                                height: 20,
                                width: 20,
                                bottom: moderateScale(20)
                            }}
                        />
                    </TouchableOpacity>

                    <Text style={styles.nameStyle}>{item.description}</Text>
                    <Text style={styles.dateStyle}>{item.date}</Text>
                    <Image source={icons.MorrisLuresBanner}
                        style={{
                            height: moderateScale(150),
                            width: '95%',
                            resizeMode: 'contain'
                        }}
                    />

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
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
                    </View>

                </View>

            </View>

        </TouchableOpacity>
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
                                uri: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80'
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
                            onPress={() => alert('photos')}
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
                            onPress={() => alert('Videos')}

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
        </ImageBackground>
    );
};

export default PhotoSharing;
