import React from 'react';
import { View, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const ListItemSeparator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
    separator: {
        height: moderateScale(15)
    },
});

export { ListItemSeparator };
