import React, { PureComponent } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native';

import {
    moderateScale,
    verticalScale
} from 'react-native-size-matters';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { colors, screenNames } from '../../utilities/constants';
import { fonts, icons } from '../../../assets';
import { layout } from '../../utilities/layout';
import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';

class AboutMe extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            intiallySelected: null
        };
    }
    componentDidMount() {

    }

    render() {
        const { navigation } = this.props;
        const { intiallySelected } = this.state;
        return (
            <SafeAreaView
                style={styles.container}
            >
                <View style={{
                    flex: 1
                }}>
                    <Text
                        style={{
                            alignSelf: 'center',
                            fontFamily: fonts.bold,
                            fontSize: RFValue(18),
                            marginTop: moderateScale(30)
                        }}
                    >
                        Tell us about yourself!
                    </Text>

                    <View style={{
                        marginTop: layout.size.height / 5,
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                    }}>
                        <TouchableOpacity style={{
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,

                            elevation: 5,
                        }}
                            onPress={() => this.setState({
                                intiallySelected: 1
                            })}
                        >
                            <Image source={icons.ic_male} style={{
                                borderColor: intiallySelected == 1 ? colors.primary : colors.grey1,
                                borderWidth: 1,
                                borderRadius: 20
                            }} />
                            <Text
                                style={{
                                    alignSelf: 'center',
                                    fontFamily: fonts.bold,
                                    fontSize: RFValue(18),
                                    color: intiallySelected == 1 ? colors.primary : 'black'

                                }}
                            >
                                Male
                            </Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={{
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,

                            elevation: 5,

                        }}
                            onPress={() => this.setState({
                                intiallySelected: 2
                            })}
                        >
                            <Image source={icons.ic_female} style={{
                                borderColor: intiallySelected == 2 ? colors.primary : colors.grey1,
                                borderWidth: 1,
                                borderRadius: 20
                            }} />
                            <Text
                                style={{
                                    alignSelf: 'center',
                                    fontFamily: fonts.bold,
                                    fontSize: RFValue(18),
                                    color: intiallySelected == 2 ? colors.primary : 'black'

                                }}
                            >
                                Female
                            </Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{
                        marginTop: moderateScale(50)
                    }}>

                        <TouchableOpacity
                            onPress={() => navigation.navigate(screenNames.AskWeight)}
                            style={styles.nextDoneBtn}>
                            <Text
                                style={{
                                    fontFamily: fonts.semiBold,
                                    color: colors.white1
                                }}
                            >
                                Next
                            </Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white1,
    },
    nextDoneBtn: {
        height: 44,
        width: layout.size.width - 50,
        backgroundColor: colors.primary,
        borderRadius: moderateScale(5),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: moderateScale(40)
    },


});
export default AboutMe;