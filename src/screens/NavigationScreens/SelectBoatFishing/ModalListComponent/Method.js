import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useState } from 'react';
import { Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { fonts } from '../../../../../assets';
import TextInputComp from '../../../../components/common/TextInputComp';
import { strings } from '../../../../localization';
import { colors } from '../../../../utilities/constants';
import { layout } from '../../../../utilities/layout';
import Accordian from './Accordian';





const Tab = createMaterialTopTabNavigator();
let Methodlist = [
    {
        name: 'Live',
        value: [
            { label: 'Hawaii Kai', value: 'Hawaii Kai' },
            { label: 'Keehi', value: 'Keehi' },
            { label: 'Kaneohe', value: 'Kaneohe' },
            { label: 'Haleiwa', value: 'Haleiwa' },
            { label: 'Waianae', value: 'Waianae' },
        ],
    },
    {
        name: 'dead',
        value: [
            { label: 'Hawaii Kai', value: 'Hawaii Kai' },
            { label: 'Keehi', value: 'Keehi' },
            { label: 'Kaneohe', value: 'Kaneohe' },
            { label: 'Haleiwa', value: 'Haleiwa' },
            { label: 'Waianae', value: 'Waianae' },
        ],

    },

];
let lurelist = [
    {
        name: 'color',
        value: [
            { label: 'Hawaii Kai', value: 'Hawaii Kai' },
            { label: 'Keehi', value: 'Keehi' },
            { label: 'Kaneohe', value: 'Kaneohe' },
            { label: 'Haleiwa', value: 'Haleiwa' },
            { label: 'Waianae', value: 'Waianae' },
        ],
    },
    {
        name: 'type',
        value: [
            { label: 'Hawaii Kai', value: 'Hawaii Kai' },
            { label: 'Keehi', value: 'Keehi' },
            { label: 'Kaneohe', value: 'Kaneohe' },
            { label: 'Haleiwa', value: 'Haleiwa' },
            { label: 'Waianae', value: 'Waianae' },
        ],

    },
    {
        name: 'Lure Maker',
        value: [
            { label: 'Hawaii Kai', value: 'Hawaii Kai' },
            { label: 'Keehi', value: 'Keehi' },
            { label: 'Kaneohe', value: 'Kaneohe' },
            { label: 'Haleiwa', value: 'Haleiwa' },
            { label: 'Waianae', value: 'Waianae' },
        ],

    },
    {
        name: 'size',
        value: [
            { label: 'Hawaii Kai', value: 'Hawaii Kai' },
            { label: 'Keehi', value: 'Keehi' },
            { label: 'Kaneohe', value: 'Kaneohe' },
            { label: 'Haleiwa', value: 'Haleiwa' },
            { label: 'Waianae', value: 'Waianae' },
        ],

    },

];
const Bait = ({ navigation }) => {


    return (
        <View style={{ flex: 1 }}>

            <Accordian />

        </View>

    );
};

const Lure = () => {
    return (
        <View style={{ flex: 1 }}>


            <Accordian />
        </View>

    );
};

const Other = (props) => {
    console.log(props, 'props in meee>>>>>>>>>>>');

    const [modalVisible1, setModalVisible1] = useState(props.modalVisible);
    const [state, setState] = useState({
        text: '',
    });
    const { text } = state;
    const _onChangeText = key => val => {
        setState({ ...state, [key]: val });
    };
    const [errors, setErrors] = useState({
        text: '',
        isLoading: false,
    });
    const name_and_values = [{ name: 'text', value: text }];

    return (

        <Modal
            animationType={'none'}
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => { }}>
            <SafeAreaView>
                <View style={styles.modalcontent}>
                    <View style={styles.modalcontainer}>
                        <Text numberOfLines={2}
                            ellipsizeMode="tail" style={styles.modaltextlogo}>Enter Other Method</Text>
                        <View
                            style={{
                                marginTop: moderateScale(15),
                                backgroundColor: colors.black1,
                                width:layout.size.width/2
                            }}>
                            <TextInputComp
                                //   label={strings.email}
                                value={text}
                                placeholder={strings.enterother}
                                labelTextStyle={styles.labelTextStyle}
                                onFocus={() =>
                                    setErrors({
                                        ...errors,
                                        text: '',
                                    })
                                }
                                onChangeText={_onChangeText('text')}
                            />
                            {errors.text ? (
                                <Text
                                    transparent
                                    style={{ color: colors.primary, bottom: 13, left: 4 }}>
                                    {errors.text}
                                </Text>
                            ) : null}
                        </View>
                        <View style={styles.modalbuttonviewstyle}>
                            <TouchableOpacity
                                style={styles.modalbuttonstyle}
                                underlayColor={colors.white1}
                                // onPress={() => onButtonPressed(true)}
                                onPress={() => {
                                    props.setMethod(false);
                                    // props.navigation.navigate('FishData');
                                }}>
                                <Text style={styles.modalbuttontextstyle}>cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.modalbuttonstyle}
                                underlayColor={colors.white1}
                                // onPress={() => onButtonPressed(false)}
                                onPress={() => {
                                    props.setMethod(false)
                                }}>
                                <Text style={styles.modalbuttontextstyle}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </Modal>
    );
};

const Method = ({ props, navigation }) => {
    console.log(props, 'props in methoddd');
    const [modalVisible, setModalVisible] = useState(false);

    const setMethod = (state) => {
        console.log('press>>>>>>>>>>>>q', state);
        setModalVisible(state)
    }
    return (
        <SafeAreaView style={styles.content}>
            <Tab.Navigator
                screenListeners={({ navigation }) => ({
                    state: (e) => {
                        console.log('state changed', e.data);
                        if (e && e.data && e.data.state && e.data.state.index == 2) {
                            setModalVisible(true)
                        }
                        else {
                            setModalVisible(false)
                        }
                    },
                })}

                swipeEnabled={false}
                tabBarOptions={{
                    style: {
                        backgroundColor: colors.secondry,
                    },
                    allowFontScaling: false,
                    swipeEnabled: false,
                    labelStyle: {
                        color: colors.white1,
                        fontWeight: '800',
                        shadowColor: colors.black1,
                        shadowOffset: { width: 1, height: 1 },
                        shadowOpacity: 1,
                        shadowRadius: 0,
                        textTransform: 'none',
                        fontSize: 20,
                    },
                    indicatorStyle: {
                        backgroundColor: colors.white1,
                    },
                }}>
                <Tab.Screen name="Bait" component={Bait} />
                <Tab.Screen name="Lure" component={Lure} />
                <Tab.Screen
                    name="Other"
                    children={() => <Other modalVisible={modalVisible}
                        setMethod={setMethod}
                        listeners={({ navigation, route }) => ({
                            tabPress: e => {
                                alert('tygi')
                                e.preventDefault();
                            },
                        })}
                    />}
                />
            </Tab.Navigator>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    content: {
        height: '100%',
        width: '100%',
        flex: 1,
        backgroundColor: colors.secondry,
    },
    pdf: {
        flex: 1,
        width: '100%',
    },
    modalcontent: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.black4,
    },
    modalcontainer: {
        height: layout.size.height / 4.2,
        width: layout.size.width / 1.5,
        // top: 60,
        backgroundColor: colors.lightTransparent,
        alignItems: 'center',
        // justifyContent: 'center',
        borderWidth: 2,
        borderRadius: moderateScale(20),
        borderColor: '#D3D3D3',
    },
    modaltextlogo: {
        height: moderateScale(25),
        fontFamily: fonts.bold,
        fontSize: moderateScale(20),
        color: colors.white1,
        top: 10,
    },
    modaltextstyle: {
        height: moderateScale(45),
        top: moderateScale(10),

        textAlign: 'center',
        fontFamily: fonts.bold,
        fontSize: moderateScale(15),
        color: colors.white1,
    },
    modalbuttonviewstyle: {
        padding: moderateScale(5),
        height: moderateScale(55),
        width: layout.size.width / 1.6,
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    modalbuttonstyle: {
        backgroundColor: colors.lightTransparent,
        // borderColor: colors.black15,
        borderRadius: moderateScale(6),
        width: moderateScale(100),
        height: moderateScale(40),
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.4,
        elevation: 3,
    },
    modalbuttontextstyle: {
        color: colors.white1,
        fontFamily: fonts.bold,
        fontSize: moderateScale(16),
        alignSelf: 'center',
        fontWeight: 'bold',
        margin: moderateScale(10),
    },
    labelTextStyle: {
        fontFamily: fonts.semiBold,
        fontSize: moderateScale(16),
        color: colors.white1,
      },
});

export default Method;
