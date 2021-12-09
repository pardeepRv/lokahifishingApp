import React, { Component } from 'react';
import { FlatList, Image, LayoutAnimation, Platform, StyleSheet, Text, TouchableOpacity, UIManager, View } from "react-native";
import { moderateScale } from 'react-native-size-matters';
import { fonts, icons } from '../../../../../assets';
import { colors } from '../../../../utilities/constants';
import { layout } from '../../../../utilities/layout';

export default class Accordian extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    title: 'Non Veg Biryanis',
                    data: [
                        {
                            key: 'a', value: false
                        },
                        { key: 'b', value: false }
                    ]
                },
                {
                    title: 'Pizzas',
                    data: [
                        {
                            key: 'c', value: false
                        },
                        { key: 'd', value: false }
                    ]
                },
                {
                    title: 'Drinks',
                    data: [
                        {
                            key: 'e', value: false
                        },
                        { key: 'f', value: false }
                    ]
                },
                {
                    title: 'Deserts',
                    data: [
                        {
                            key: 'g', value: false
                        },
                        { key: 'fh', value: false }
                    ]
                },
                {
                    title: 'Deserts',
                    data: [
                        {
                            key: 'g', value: false
                        },
                        { key: 'fh', value: false }
                    ]
                },
            ],
            expanded: false,
            isLoading: false,
            // data: [],

        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
    _renderItem = ({ item, index }) => {
        return (

            <View style={{ flex: 1, backgroundColor: colors.white1 }}>
                <TouchableOpacity style={[styles.childRow]} onPress={() => this.onClick(index)}>
                    <View style={{ width: layout.size.height / 2, height: moderateScale(35), flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={[styles.itemInActive]} >{item.name}</Text>
                        <Image source={icons.ic_rightArrow} style={styles.rightArrow} />
                    </View>
                    {item.value ? (
                        <FlatList
                            data={item.data}
                            contentInset={{ bottom: 40 }}
                            renderItem={({ item, index }) =>
                                <View style={{}}>
                                    <TouchableOpacity style={styles.childRow1} onPress={() => this.onClickInner(index)}>

                                        <Text style={[styles.font, styles.itemInActive]} >{item.key}</Text>
                                        {/* <Icon name={'check-circle'} size={24} color={item.value ? colors.red1 : colors.black1} /> */}
                                    </TouchableOpacity>

                                </View>
                            } />) : null}
                </TouchableOpacity>

            </View>
        );
    };
    render() {
        const { data, isLoading } = this.state;
        return (
            <View>

                <View style={styles.parentHr} />
                <View style={{}}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={this.state.data}
                        contentInset={{ bottom: 40 }}
                        renderItem={this._renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>

            </View>
        )
    }

    onClick = (index) => {
        const temp = this.state.data.slice()
        console.log(temp, 'temp before');
        temp[index].value = !temp[index].value
        this.setState({ data: temp })
        console.log(temp, 'temp after');

    }

    onClickInner = (index) => {
        return console.log(index, 'seeci');
        const temp = this.state.data.slice()
        console.log(temp, 'temp before');
        temp[index].value = !temp[index].value
        this.setState({ data: temp })
        console.log(temp, 'temp after');

    }

    toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ expanded: !this.state.expanded })
    }

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.black1,
    },
    itemActive: {
        fontSize: 12,
        color: colors.red1,
    },
    itemInActive: {
        fontSize: 20,
        fontFamily: fonts.semiBold,
        color: colors.black1,
    },
    btnActive: {
        borderColor: colors.green2,
    },
    btnInActive: {
        borderColor: colors.grey15,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 56,
        paddingLeft: 25,
        paddingRight: 18,
        alignItems: 'center',
        backgroundColor: colors.grey1,
    },
    childRow: {
        flex: 1,
        padding: 8,
        paddingVertical: moderateScale(10),
        paddingHorizontal: moderateScale(20),

        alignSelf: 'center',
    },
    childRow1: {
        flex: 1,
        padding: 15,
        paddingVertical: moderateScale(10),
        backgroundColor: colors.grey1
    },
    parentHr: {
        height: 1,
        color: colors.white1,
        width: '100%'
    },
    childHr: {
        flex: 1
    },
    colorActive: {
        borderColor: colors.green2,
    },
    colorInActive: {
        borderColor: colors.grey1,
    },
    rightArrow: {
        height: 30,
        width: 30,
        alignSelf: 'center',
        tintColor: colors.black1
    },
});