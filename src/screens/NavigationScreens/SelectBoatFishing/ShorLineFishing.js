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
import { layout } from '../../../utilities/layout';
import styles from './styles';

let fishingArr = [
    {
        img: icons.whipping,
        name: 'Annual Leaderboard',
        date: 'Winners 2020',
    },
    {
        img: icons.baitcasting,
        name: 'WBC Labour',
        date: 'Day tournament',
    },
    {
        img: icons.slide,
        name: 'WBC Labour',
        date: 'Day tournament',
    },
    {
        img: icons.TagAndRelease,
        name: 'WBC Labour',
        date: 'Day tournament',
    }
];

const ShorLineFishing = ({ navigation }) => {
    const [fishingList, setfishingList] = useState(fishingArr);

    //View of flatlist
    const _renderView = ({ item, index }) => (
        <TouchableOpacity
            style={styles.listView}
            activeOpacity={0.8}>
            <View style={styles.viewStyle}
            >
                <Image
                    source={item.img}
                    style={{
                        height: layout.size.height / 3,
                        width: layout.size.width / 2,
                    }}
                />

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
                    title={'Select Shotline fishing type'}
                    titleStyle={{ fontFamily: fonts.bold }}
                    leftIconSource={icons.ic_back_white}
                    leftButtonStyle={{
                        tintColor: colors.white1,
                    }}
                    onLeftPress={() => {
                        navigation.goBack();
                    }}
                />

                <FlatList
                    extraData={fishingList}
                    data={fishingList}
                    renderItem={_renderView}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    ListHeaderComponent={() =>
                        !fishingList.length ? (
                            <Text style={styles.nomatch}>No Match found</Text>
                        ) : null
                    }
                />
            </SafeAreaView>
        </ImageBackground>
    );
};

export default ShorLineFishing;
