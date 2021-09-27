import React, { PureComponent } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import {
    moderateScale,
    verticalScale
} from 'react-native-size-matters';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { colors } from '../../utilities/constants';
import { fonts } from '../../../assets';
import { layout } from '../../utilities/layout';

class Signup extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {

    }


    render() {
        return (
            <View style={{
                flex: 1
            }}>

                <KeyboardAwareScrollView
                    style={styles.subContainer}
                    contentContainerStyle={styles.subContentContainer}
                    // bounces={false}
                    // contentInset={{ bottom: moderateScale(200) }}
                    keyboardShouldPersistTaps={'always'}
                    showsVerticalScrollIndicator={false}
                >

                    <Text onPress={() => this.props.navigation.goBack()} style={{
                        marginTop: 40
                    }}>
                        Signup comoponnet
                </Text>
                </KeyboardAwareScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white1,
    },
    subContainer: {
        paddingHorizontal: moderateScale(15),
        marginLeft: 15
    },
    subContentContainer: {
        paddingBottom: moderateScale(40),
    },
    firstnameContainer: {
        marginTop: moderateScale(20),
        width: moderateScale(140)
    },
    loginText: {
        fontSize: moderateScale(24),
        fontFamily: fonts.regular,
        color: colors.black2
    },
    underlined: {
        backgroundColor: colors.primary,
        height: moderateScale(4),
        width: moderateScale(27),
        marginTop: moderateScale(5)
    },
    borderBottomStyle: {
        borderBottomColor: colors.black2,
        borderBottomWidth: 1
    },
    textStyle: {
        color: colors.black1,
        fontFamily: fonts.regular
    },
    buttonStyle: {
        backgroundColor: colors.black2,
        width: moderateScale(120),
        borderRadius: 15,
        height: moderateScale(50)
    },
    dateView: {
        paddingRight: moderateScale(4),
        width: layout.size.width - 60,
        height: moderateScale(16),
        alignSelf: 'center',
        marginTop: -10
    },
    dateText: {
        fontSize: moderateScale(16),
        lineHeight: moderateScale(19),
        color: colors.black,
        opacity: 0.80,
        fontFamily: fonts.regularFont,
    },
    dateIcon: {
        position: 'absolute',
        right: 0,
        marginLeft: 0,
    },
    dateInput: {
        borderWidth: 0,
        alignItems: 'flex-start',
        marginTop: moderateScale(6),
        justifyContent: 'center'
    },
    pickerStyle: {
        borderBottomColor: 'transparent',
        borderWidth: 0,
        width: 200
    },


});
export default Signup;