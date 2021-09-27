import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

import { colors, commonColors } from '../../utilities/constants';

const Loader = ({
    isLoading,
    isAbsolute,
    containerStyle,
    loaderColor
}) => {
    if (!isLoading) {
        return null;
    }

    if (isAbsolute) {
        return (
            <View
                style={[
                    StyleSheet.absoluteFill,
                    styles.flexCenterStyle,
                    {
                        backgroundColor: colors.white3,
                    },
                    containerStyle
                ]}
            >
                <ActivityIndicator color={loaderColor || colors.black1} size={'large'} />
            </View>
        );
    }

    return (
        <View
            style={[
                styles.flexCenterStyle,
                { flex: 1, },
                containerStyle
            ]}
        >
            <ActivityIndicator
                color={loaderColor || commonColors().themeColor}
                size={'large'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    flexCenterStyle: {
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export { Loader };
