import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { fonts } from '../../../assets';

const HeaderWith3Buttons = ({
    containerStyle,

    title,

    firstIconSource,
    onFirstPress,

    secondIconSource,
    onSecondPress,

    thirdIconSource,
    onThirdPress,

    renderThirdIcon,
    hideThirdButton
}) => {
    let titleView = null;
    let firstButton = <View style={styles.headerButton} />;
    let secondButton = <View style={styles.headerButton} />;
    let thirdButton = <View style={styles.headerButton} />;

    if (firstIconSource) {
        firstButton = (
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.headerButton}
                onPress={onFirstPress}
            >
                <Image source={firstIconSource} />
            </TouchableOpacity>
        );
    }

    if (title) {
        titleView = (
            <Text style={styles.title}>
                {title}
            </Text>
        );
    }

    if (secondIconSource) {
        secondButton = (
            <TouchableOpacity
                activeOpacity={0.6}
                style={{
                    ...styles.headerButton,
                    alignItems: hideThirdButton ? 'center' : 'flex-end'
                }}
                onPress={onSecondPress}
            >
                <Image source={secondIconSource} />
            </TouchableOpacity>
        );
    }

    if (hideThirdButton) {
        thirdButton = null;
    } else if (renderThirdIcon) {
        thirdButton = renderThirdIcon();
    } else if (thirdIconSource) {
        thirdButton = (
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.headerButton}
                onPress={onThirdPress}
            >
                <Image source={thirdIconSource} />
            </TouchableOpacity>
        );
    }

    return (
        <View style={[styles.container, containerStyle]}>
            <View style={styles.titleAndFirstButtonContainer}>
                {firstButton}
                {titleView}
            </View>

            <View style={styles.rightButtonsContainer}>
                {secondButton}

                {thirdButton}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: moderateScale(56),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerButton: {
        height: moderateScale(56),
        width: moderateScale(56),
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightButtonsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: moderateScale(18),
        fontFamily: fonts.semiBold,
        // flex: 1,
    },
    titleAndFirstButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export { HeaderWith3Buttons };
