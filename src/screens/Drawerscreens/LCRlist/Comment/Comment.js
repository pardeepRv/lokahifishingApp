import React, { useState } from 'react';
import {
    FlatList,
    Image, SafeAreaView, StyleSheet, Text,
    TextInput,
    TouchableOpacity, View
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import { fonts, icons } from '../../../../../assets';
import { Header } from '../../../../components/common/Header';
import { Loader } from '../../../../components/common/Loader';
import { addComment } from '../../../../store/actions';
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

const Comment = ({ navigation, route }) => {

    console.log(route, 'receive in route>>>>');

    const { lcr_id } = route && route.params;

    let auth = useSelector(state => state.auth);
    let app = useSelector(state => state.app);
    const [comments, setcomments] = useState('');

    console.log(auth, 'auth>>>>>>>>>>>>', app, 'app>>>>>>>>>>>>>>>>');
    const dispatch = useDispatch();

    //hit api here
    const add_comment = () => {
        let token = auth && auth.userDetails.access_token;

        if (comments == '' || comments.length == 0) {
            return alert('Please enter something!')
        }
        let formData = new FormData();

        formData.append('lcr_id', lcr_id);
        formData.append('comment', comments);

        console.log(formData, 'sending to aApi');

        dispatch(addComment(formData, token));
    }

    const _renderView = ({ item, index }) => (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { }}>
                <Image style={styles.image} source={{ uri: item.image }} />
            </TouchableOpacity>
            <View style={styles.content}>
                <View style={styles.contentHeader}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.time}>
                        9:58 am
                    </Text>
                </View>
                <Text rkType='primary3 mediumLine'>{item.comment}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={{
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
                contentInset={{ bottom: 60 }}
                showsVerticalScrollIndicator={false}
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
            <View style={{
                position: 'absolute',
                bottom: 0,
                width: layout.size.width,
                margin: 0,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                backgroundColor: colors.secondry
            }}>
                <TextInput
                    style={{
                        height: moderateScale(50),
                        borderWidth: 1,
                        padding: 10,
                        backgroundColor: colors.white1,
                        width: layout.size.width - 50
                    }}
                    onChangeText={comments => setcomments(comments)}
                    value={comments}
                    placeholder="Enter your comment here ...."
                    keyboardType='default'
                    multiline={true}
                />
                <TouchableOpacity
                    onPress={add_comment}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Image source={icons.plane} style={{
                        alignSelf: 'center',
                        tintColor: colors.white1,
                        height: 30,
                        width: 30
                    }} />
                </TouchableOpacity>
            </View>
            <Loader isLoading={app.loading} isAbsolute />
        </SafeAreaView>
    );
};

export default Comment;

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#ffffff",
        marginTop: 10,
    },
    container: {
        paddingLeft: 19,
        paddingRight: 16,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    content: {
        marginLeft: 16,
        flex: 1,
    },
    contentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6
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
        fontSize: 16,
        fontWeight: "bold",
    },
}); 