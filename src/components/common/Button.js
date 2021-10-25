import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { colors, commonColors } from '../../utilities/constants';
import { fonts } from '../../../assets';

const Button = (props) => {
    const {
        label,
        style,
        labelStyle,
        whiteButton,
        marginTop,
        marginHorizontal,
        marginBottom,
        borderRadius
    } = props;

    const outerContainerStyle = [{
        ...styles.container,
        marginTop: marginTop ? moderateScale(marginTop) : 0,
        marginHorizontal: marginHorizontal ? moderateScale(marginHorizontal) : 0,
        marginBottom: marginBottom ? moderateScale(marginBottom) : 0,
        borderRadius: borderRadius ? moderateScale(borderRadius) : moderateScale(5)
    }];

    const buttonLabelStyle = [styles.label];

    if (whiteButton) {
        outerContainerStyle.push({
            borderWidth: moderateScale(2),
            borderColor:'grey',
            backgroundColor: colors.white1
        });

        buttonLabelStyle.push({
            color:'grey'
        });
    }

    outerContainerStyle.push(style);

    buttonLabelStyle.push(labelStyle);

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            {...props}
            style={outerContainerStyle}
        >
            <Text style={buttonLabelStyle}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: moderateScale(44),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'grey'
    },
    label: {
        fontFamily: fonts.bold,
        color: colors.white1,
        fontSize: moderateScale(18)
    }
});

export { Button };
