import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { fonts } from '../../../assets';
import { colors } from '../../utilities/constants';

const HeaderWithLeftTitle = ({
    leftTitle,
    rightImage,
    containerStyle,
    onRightPress
}) => {
    let rightButton = null;

    if (rightImage) {
        rightButton = (
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.rightButton}
                onPress={onRightPress}
            >
                <Image source={rightImage} />
            </TouchableOpacity>
        );
    }

    return (
        <View style={[styles.headerContainer, containerStyle]}>
            <Text style={styles.headerLeftTitle}>
                {leftTitle}
            </Text>

            {rightButton}
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        height: moderateScale(56),
        paddingLeft: moderateScale(15),
        backgroundColor: colors.white1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    headerLeftTitle: {
        fontSize: moderateScale(26),
        fontFamily: fonts.semiBold
    },
    rightButton: {
        height: moderateScale(56),
        width: moderateScale(56),
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export { HeaderWithLeftTitle };
