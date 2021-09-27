import React from 'react';
import {
    View,
    StatusBar,
    StyleSheet,
} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import SafeAreaView from 'react-native-safe-area-view';

import { commonColors, colors, } from '../../utilities/constants';
import { layout } from '../../utilities/layout';

const Wrapper = ({
    children,
    containerStyle,
    barStyle,
    wrapperStyle,
    wrapperBackgroundColor
}) => (
    <SafeAreaView
        style={[
            styles.wrapper,
            {
                // backgroundColor: wrapperBackgroundColor || commonColors().themeColor
                backgroundColor: wrapperBackgroundColor || colors.white1
            },
            wrapperStyle,
        ]}
    >
        <View style={[styles.containerStyle, containerStyle]}>
            {(!layout.isIOS && !layout.isOldOsVesion) ?
                <StatusBar
                    translucent
                    backgroundColor='transparent'
                    barStyle={barStyle || 'dark-content'}
                />
                :
                <StatusBar
                    translucent={false}
                    barStyle={barStyle || 'dark-content'}
                />
            }
            {children}
        </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: commonColors().themeColor
    },
    containerStyle: {
        flex: 1,
        paddingTop: layout.paddingTop
    }
});
export { Wrapper };
