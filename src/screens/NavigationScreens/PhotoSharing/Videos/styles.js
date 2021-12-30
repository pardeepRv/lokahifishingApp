import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { fonts } from '../../../../../assets';

import { colors } from '../../../../utilities/constants';
import { layout } from '../../../../utilities/layout';



export default StyleSheet.create({
    tittleView: {
        top: 10,
        height: moderateScale(30),
        width: layout.size.width / 1.1,
        alignSelf: 'center', fontSize: 15, fontFamily: fonts.bold, textAlign: 'center'

    },

    viewStyle: {
        flex: 1,
        top: moderateScale(10),
        backgroundColor: colors.white1,
    },
    postView: {
        borderColor: colors.grey1,
        borderWidth: 1, top: 20,
        alignItems: 'center',
        width: layout.size.width / 3.5,
        height: moderateScale(30),
        backgroundColor: colors.transparent
    },

    uploadContainer: {

        alignItems: 'center',
        justifyContent: 'center',
        height: moderateScale(200),
        width: moderateScale(300),
        alignSelf: 'center',

        borderColor: 'transparent',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.5,
        borderWidth: 0.5,


    },
    lineView: {
        height: 2, width: layout.size.width / 1.2,
        margin: 8, backgroundColor: colors.black5, alignSelf: 'center'

    },
    subContainer: {
        height: layout.size.height /1,

      },
      subContentContainer: {
        paddingBottom: moderateScale(20),
      },
});
