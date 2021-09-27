import React, { PureComponent } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
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

class AskWeight extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            weight: null
        };
    }
    componentDidMount() {

    }

    render() {
        const { navigation } = this.props;
        const { weight } = this.state;
        return (
            <SafeAreaView
                style={styles.container}
            >
                <View style={{
                    flex: 1
                }}>

                    <View style={{
                        marginTop: moderateScale(50)
                    }}>

                        <Text
                            style={{
                                alignSelf: 'center',
                                fontFamily: fonts.bold,
                                fontSize: RFValue(24),
                                marginTop: moderateScale(30),
                                width: 300,
                                textAlign: 'center'
                            }}
                        >
                            What's your current weight!
                        </Text>

                        <View style={{
                            marginTop: moderateScale(50),
                            justifyContent: 'center', alignItems: 'center'
                        }}>

                            <View>

                            </View>
                            <TextInput
                                style={styles.textInputStyles}
                                placeholder="IN KG"
                                onChangeText={text => this.setState({ weight: text })}
                                value={weight}
                                keyboardType={'numeric'}
                                maxLength={3}
                                underlineColorAndroid={'transparent'}
                            />
                        </View>

                        <View style={{
                            marginTop: moderateScale(50)
                        }}>

                            <TouchableOpacity
                                onPress={() => navigation.navigate(screenNames.GoalWeight)}
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
    textInputStyles: {
        height: 50,
        width: 150,
        borderRadius: 20,
        paddingHorizontal: moderateScale(30),
        borderWidth: 0.5,
        borderColor: 'lightgrey',
        fontSize: RFValue(20)
    },


});
export default AskWeight;