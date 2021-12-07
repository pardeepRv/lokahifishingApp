import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useEffect, useState } from 'react';

import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
// import Pdf from 'react-native-pdf';
import DropDownPicker from 'react-native-dropdown-picker';
import { moderateScale } from 'react-native-size-matters';
import { fonts } from '../../../../../assets';

import { colors } from '../../../../utilities/constants';
import { layout } from '../../../../utilities/layout';



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
    const [open, setOpen] = useState(false);


    const [harbor, setHarbor] = useState('');
    const [methodlist, setmethodlist] = useState(Methodlist);



    const _renderView = ({ item, index }) => (
        <View style={{ flex: 1, }}>
            <DropDownPicker
                style={{ backgroundColor: '#fafafa' }}
                theme="LIGHT"
                containerStyle={{ width: '100%', marginVertical: moderateScale(8), padding: moderateScale(10) }}
                labelStyle={{
                    fontWeight: fonts.bold,
                    fontSize: 16,
                }}
                textStyle={{
                    fontSize: 16,
                }}
                dropDownContainerStyle={{
                    backgroundColor: '#fafafa',
                    left: moderateScale(10)
                }}
                zIndex={10}
                open={open}
                value={harbor}
                items={item.value}
                setOpen={setOpen}
                setValue={setHarbor}
                setItems={item.value}
                placeholder={item.name}
                dropDownDirection="AUTO"
            />
        </View>
    );

    return (
        <View style={{ flex: 1 }}>

            <FlatList
                extraData={methodlist}
                data={methodlist}
                renderItem={_renderView}
                keyExtractor={(item, index) => 'key' + index}
                ListHeaderComponent={() =>
                    !methodlist.length ? (
                        <Text style={styles.nomatch}>No Match found</Text>
                    ) : null
                }
            />

        </View>

    );
};

const Lure = () => {
    const [open, setOpen] = useState(false);


    const [harbor, setHarbor] = useState('');
    const [Lurelist, setLurelist] = useState(lurelist);
    const _renderView = ({ item, index }) => (
        <View style={{ flex: 1, }}>
            <DropDownPicker
                style={{ backgroundColor: '#fafafa' }}
                theme="LIGHT"
                containerStyle={{ width: '100%', marginVertical: moderateScale(8), padding: moderateScale(10) }}
                labelStyle={{
                    fontWeight: fonts.bold,
                    fontSize: 16,
                }}
                textStyle={{
                    fontSize: 16,
                }}
                dropDownContainerStyle={{
                    backgroundColor: '#fafafa',
                    left: moderateScale(10)
                }}
                zIndex={10}
                open={open}
                value={harbor}
                items={item.value}
                setOpen={setOpen}
                setValue={setHarbor}
                setItems={item.value}
                placeholder={item.name}
                dropDownDirection="AUTO"
            />
        </View>
    );
    return (
        <View style={{ flex: 1 }}>

            <FlatList
                extraData={Lurelist}
                data={Lurelist}
                renderItem={_renderView}
                keyExtractor={(item, index) => 'key' + index}
                ListHeaderComponent={() =>
                    !Lurelist.length ? (
                        <Text style={styles.nomatch}>No Match found</Text>
                    ) : null
                }
            />
        </View>

    );
};

const Other = () => {
    return (
        // <Pdf
        //   source={require('./Rules_&_Regulations_Bottomfish_2020.docx.pdf')}
        //   style={styles.pdf}
        //   loading="Loading PDF..."
        // />
        <Text>hjghjggjghj</Text>
    );
};

const Method = ({ navigation }) => {



    return (
        <SafeAreaView style={styles.content}>
            <Tab.Navigator
                tabBarOptions={{
                    style: {
                        backgroundColor: colors.secondry,
                    },
                    allowFontScaling: false,
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
                <Tab.Screen name="Other" component={Other} />
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
});

export default Method;
