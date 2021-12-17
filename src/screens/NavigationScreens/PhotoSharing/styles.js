import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { fonts } from '../../../../assets';
import { colors } from '../../../utilities/constants';


export default StyleSheet.create({
    listView: {
        backgroundColor: colors.white1,
        margin: 10,
        flexDirection: 'row',
        padding: 10,
        paddingVertical: moderateScale(15),
    },
    viewStyle: {
        // flexDirection: 'row',
        flex: 1,
    },
    nameStyle: {
        fontFamily: fonts.regular,
        fontSize: moderateScale(16),
        color: colors.black1,
        paddingHorizontal: moderateScale(5),
    },
    dateStyle: {
        fontFamily: fonts.regular,
        fontSize: moderateScale(16),
        color: colors.black1,
        paddingHorizontal: moderateScale(5),
    },
    rightArrow: {
        height: 30,
        width: 30,
        alignSelf: 'center',
        tintColor: colors.black1,
    },
    nomatch: {
        alignSelf: 'center',
        marginTop: 20,
        fontFamily: fonts.semiBold,
    },
});
