import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { fonts } from '../../../../assets';
import { colors } from '../../../utilities/constants';
import { layout } from '../../../utilities/layout';

//external libraries
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({
    listView: {
        // backgroundColor: colors.white1,
        margin: 10,
        // flexDirection: 'row',
        padding: 10,
        paddingVertical: moderateScale(30),
    },
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    nomatch: {
        alignSelf: 'center',
        marginTop: 20,
        fontFamily: fonts.semiBold,
    },
});
