import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { fonts } from '../../../assets';

const EmptyListComponent = ({ containerStyle, emptyTextStyle, message }) => (
    <View style={[styles.container, containerStyle]}>
        <Text style={[styles.emptyText, emptyTextStyle]}>
            {message}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    emptyText: {
        fontFamily: fonts.regular,
        fontSize: moderateScale(16)
    }
});

export { EmptyListComponent };
