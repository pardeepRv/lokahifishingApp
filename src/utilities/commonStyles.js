import { StyleSheet, Platform } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { colors } from './constants';
import { fonts } from '../../assets';
import { layout } from './layout';

const commonStyles = StyleSheet.create({
    shadow: {
        shadowOffset: { width: 2, height: 2, },
        shadowColor: colors.black2,
        shadowOpacity: 0.28,
        shadowRadius: 5,
        elevation: 3
    },
    guestUserView: {
        flex: 1,
        justifyContent: 'center'
    },
    guestUserMessage: {
        textAlign: 'center',
        fontFamily: fonts.regular
    },
    loginButton: {
        marginHorizontal: 30,
        marginTop: 20
    },
    header: {
        shadowOffset: { width: 2, height: 2, },
        shadowColor: colors.black2,
        shadowOpacity: 0.28,
        shadowRadius: moderateScale(2),
        elevation: 0,
        backgroundColor: colors.white1,
        marginBottom: moderateScale(5)
    },
    headerButton: {
        height: moderateScale(56),
        width: moderateScale(56),
        alignItems: 'center',
        justifyContent: 'center'
    },
    emptyListText: {
        fontSize: moderateScale(22),
        fontFamily: fonts.semiBold
    },
    emptyListContainer: {
        height: layout.size.height * (2 / 3),
        width: layout.size.width
    },
    switch: {
        transform: Platform.select({
            ios: [{ scaleX: 0.8 }, { scaleY: 0.8 }]
        })
    },
    maxFileSizeLimit: {
        fontSize: moderateScale(12),
        fontFamily: fonts.regular,
        color: colors.grey4,
        marginTop: moderateScale(5)
    },
    blackText16: {
        fontFamily: fonts.regular,
        fontSize: 16,
        color: colors.white1
      },
});

export default commonStyles;
