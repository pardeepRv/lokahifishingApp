import React, { Component } from 'react';
import { FlatList, LayoutAnimation, Platform, StyleSheet, Text, TouchableOpacity, UIManager, View } from "react-native";
// import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from '../../../../utilities/constants';

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
            ],
            expanded: false,
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    render() {

        return (
            <View>

                <View style={styles.parentHr} />
                <View style={{}}>
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item, index }) =>
                            <View>
                                <TouchableOpacity style={[styles.childRow, styles.button, item.value ? styles.btnActive : styles.btnInActive]} onPress={() => this.onClick(index)}>
                                    <Text style={[styles.font, styles.itemInActive]} >{item.title}</Text>
                                    {item.value ? (
                                        <FlatList
                                            data={item.data}
                                            renderItem={({ item, index }) =>
                                                <View>
                                                    <TouchableOpacity style={[styles.childRow, styles.button, item.value ? styles.btnActive : styles.btnInActive]} onPress={() => this.onClickInner(index)}>

                                                        <Text style={[styles.font, styles.itemInActive]} >{item.key}</Text>
                                                        {/* <Icon name={'check-circle'} size={24} color={item.value ? colors.red1 : colors.black1} /> */}
                                                    </TouchableOpacity>
                                                    <View style={styles.childHr} />
                                                </View>
                                            } />) : null}
                                </TouchableOpacity>
                                <View style={styles.childHr} />
                            </View>
                        } />
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
        return console.log(index,'seeci');
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
    button: {
        width: '100%',
        alignItems: 'center',
        paddingLeft: 35,
        paddingRight: 35,
        fontSize: 12,
        padding: 10
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
        fontSize: 12,
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
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        backgroundColor: colors.grey1,
    },
    parentHr: {
        height: 1,
        color: colors.white1,
        width: '100%'
    },
    childHr: {
        height: 1,
        backgroundColor: colors.grey4,
        width: '100%',
    },
    colorActive: {
        borderColor: colors.green2,
    },
    colorInActive: {
        borderColor: colors.grey1,
    }

});