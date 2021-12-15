import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Image,
    ImageBackground,
    LayoutAnimation,
    Platform,
    SafeAreaView,
    Text,
    TouchableOpacity,
    UIManager,
    View,
    StyleSheet,
    TextInput
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import { fonts, icons } from '../../../../../assets';



import { Header } from '../../../../components/common/Header';
import { Loader } from '../../../../components/common/Loader';


import { colors } from '../../../../utilities/constants';
import { layout } from '../../../../utilities/layout';

let data = [
    { id: 1, image: "https://bootdey.com/img/Content/avatar/avatar1.png", name: "Frank Odalthh", comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." },
    { id: 2, image: "https://bootdey.com/img/Content/avatar/avatar6.png", name: "John DoeLink", comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." },
    { id: 3, image: "https://bootdey.com/img/Content/avatar/avatar7.png", name: "March SoulLaComa", comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." },
    { id: 4, image: "https://bootdey.com/img/Content/avatar/avatar2.png", name: "Finn DoRemiFaso", comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." },
    { id: 5, image: "https://bootdey.com/img/Content/avatar/avatar3.png", name: "Maria More More", comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." },
    { id: 6, image: "https://bootdey.com/img/Content/avatar/avatar4.png", name: "Clark June Boom!", comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." },
    { id: 7, image: "https://bootdey.com/img/Content/avatar/avatar5.png", name: "The googler", comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." },
];

const Like = ({ navigation }) => {
    let auth = useSelector(state => state.auth);
    let app = useSelector(state => state.app);

    console.log(auth, 'auth>>>>>>>>>>>>', app, 'app>>>>>>>>>>>>>>>>');


    const dispatch = useDispatch();





    const _renderView = ({ item, index }) => (
        <View style={styles.container}>
            <View style={styles.contentHeader}>
                <Image style={styles.image} source={{ uri: item.image }} />
                <Text style={styles.name}>{item.name}</Text>
            </View>
            <Image style={styles.image} source={icons.like_u} />
        </View>
    );




    return (
        <ImageBackground
            source={icons.ic_signup_bg}
            style={{ flex: 1, height: '100%' }}>
            <SafeAreaView style={{
                display: 'flex',
                flex: 1,
                backgroundColor: colors.white1,
            }}>
                <Header
                    containerStyle={{
                        backgroundColor: colors.secondry,
                        height: moderateScale(60),
                    }}
                    title={name}
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
                        style={styles.root}
                        data={data}
                        extraData={data}
                        ItemSeparatorComponent={() => {
                            return (
                                <View style={styles.separator} />
                            )
                        }}
                        renderItem={_renderView}
                        // keyExtractor={(item, index) => 'key' + index}
                        keyExtractor={(item, index) => {
                            return item.id;
                        }}
                    />
               
                <View style={styles.likeView}>
                    <Text style={styles.likename}
                    >22 Likes</Text>
                </View>
            </SafeAreaView>
            <Loader isLoading={app.loading} isAbsolute />
        </ImageBackground>
    );
};

export default Like;

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#ffffff",
        marginTop: 10,
    },
    container: {
        paddingRight: 12,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    content: {
        marginLeft: 16,
        flex: 1,
    },
    contentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
        alignItems: 'center'
    },
    separator: {
        height: 1,
        backgroundColor: "#CCCCCC"
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 20,
        marginLeft: 20
    },
    time: {
        fontSize: 11,
        color: "#808080",
    },
    name: {
        fontSize: 18,
        fontFamily: fonts.bold,
        width: layout.size.width / 2,
        marginLeft: 20,

    },
    likename: {
        fontSize: 25,
        fontFamily: fonts.bold,
        width: layout.size.width / 2,
     top:moderateScale(5),
textAlign:'center',
color:colors.white1
// backgroundColor:colors.black1
    },
    likeView: {
        position: 'absolute',
        bottom: 0,
        width: layout.size.width,
        height: moderateScale(40),
        alignItems: 'center',
        alignSelf:'center',
        backgroundColor: colors.secondry
// backgroundColor:colors.black1
    },
}); 