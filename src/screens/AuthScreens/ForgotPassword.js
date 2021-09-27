import React, { PureComponent } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
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

class ForgotPassword extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        };
    }
    componentDidMount() {

    }

    setText = (v) => {
        this.setState({
            email: v
        })
    }


    render() {
        const { email,
        } = this.state;

        const { navigation } = this.props;
        return (
            <SafeAreaView
                style={{ flex: 1, backgroundColor: colors.white1 }}>
                <View style={{
                    flex: 1
                }}>

                    {/* <KeyboardAwareScrollView
                        style={styles.subContainer}
                        contentContainerStyle={styles.subContentContainer}
                        // contentInset={{ bottom: moderateScale(200) }}
                        keyboardShouldPersistTaps={'always'}
                        showsVerticalScrollIndicator={false}
                    > */}
                        <View style={{
                            marginTop: layout.size.width / 4,
                        }}>

                            <Text style={{
                                alignSelf: 'center',
                                fontFamily: fonts.bold,
                                fontSize: RFValue(18)
                            }}>
                                Forgot Password?
                            </Text>

                        </View>

                        <View style={{
                            marginTop: moderateScale(40)
                        }}>
                            <View style={{

                            }}>
                                <Image source={icons.ic_email} style={{ position: 'absolute', top: 12, left: 5 }} />

                                <TextInput
                                    style={styles.textInputStyles}
                                    placeholder="Please enter email"
                                    onChangeText={text => this.setState({ email: text })}
                                    value={email}
                                    underlineColorAndroid={'transparent'}
                                />
                            </View>
                        </View>
                        <View style={{
                            marginTop: moderateScale(50)
                        }}>

                            <TouchableOpacity
                                // onPress={() => navigation.navigate(screenNames.AboutMe)}
                                style={styles.nextDoneBtn}>
                                <Text
                                    style={{
                                        fontFamily: fonts.semiBold,
                                        color: colors.white1
                                    }}
                                >
                                    Done
                                </Text>
                            </TouchableOpacity>
                        </View>

                    {/* </KeyboardAwareScrollView> */}
                </View>
            </SafeAreaView>

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
    textInputStyles: {
        height: 50,
        borderRadius: 20,
        paddingHorizontal: moderateScale(30),
        borderWidth: 0.5,
        borderColor: 'lightgrey'
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
export default ForgotPassword;