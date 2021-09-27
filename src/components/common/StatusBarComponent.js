import React from 'react';
import { View, StatusBar, Platform } from 'react-native';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const StatusBarComponent = (props) => {
    const {
        backgroundColor
    } = props;

    return (
            <View style={[STATUSBAR_HEIGHT, { backgroundColor }]}>
        <StatusBar backgroundColor={backgroundColor} {...props} />
    </View>
    );
};

export { StatusBarComponent };
